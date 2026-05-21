import { useCallback } from 'react';
import { Search, SlidersHorizontal, X, Grid3X3, List } from 'lucide-react';
import { useAppStore } from '@store';
import { debounce } from '@utils';
import { Input } from '@components/ui/Input';
import { Select } from '@components/ui/Select';

export function SearchBar() {
  const { filters, setFilters, viewMode, toggleViewMode } = useAppStore();

  const debouncedSetQuery = useCallback(
    debounce((value: string) => {
      setFilters({ query: value });
    }, 300),
    [setFilters]
  );

  const sizeOptions = [
    { value: 'all', label: '全部体型' },
    { value: '小型犬', label: '🐕 小型犬' },
    { value: '中型犬', label: '🐕‍🦺 中型犬' },
    { value: '大型犬', label: '🦮 大型犬' },
    { value: '超大型犬', label: '🐺 超大型犬' },
  ];

  const sortOptions = [
    { value: 'popularity', label: '🔥 按热度' },
    { value: 'name', label: '📝 按名称' },
    { value: 'size', label: '📏 按体型' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索狗狗名称、标签..."
              defaultValue={filters.query}
              onChange={(e) => debouncedSetQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all duration-200"
            />
            {filters.query && (
              <button
                onClick={() => {
                  setFilters({ query: '' });
                  const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                  if (input) input.value = '';
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-gray-500">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">筛选</span>
          </div>

          <Select
            options={sizeOptions}
            value={filters.size}
            onChange={(e) => setFilters({ size: e.target.value })}
            className="w-32 sm:w-40"
          />

          <Select
            options={sortOptions}
            value={filters.sortBy}
            onChange={(e) =>
              setFilters({ sortBy: e.target.value as 'name' | 'popularity' | 'size' })
            }
            className="w-32 sm:w-40"
          />

          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setFilters({ query: '' })}
              className={`p-2 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              title="网格视图"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={toggleViewMode}
              className={`p-2 rounded-md transition-all ${
                viewMode === 'list'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              title="列表视图"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(filters.query || filters.size !== 'all') && (
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">当前筛选:</span>
          {filters.query && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">
              搜索: {filters.query}
              <button
                onClick={() => {
                  setFilters({ query: '' });
                  const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                  if (input) input.value = '';
                }}
                className="hover:text-primary-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.size !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">
              体型: {filters.size}
              <button
                onClick={() => setFilters({ size: 'all' })}
                className="hover:text-primary-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
