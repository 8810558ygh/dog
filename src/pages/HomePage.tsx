import { motion } from 'framer-motion';
import { Dog, Sparkles } from 'lucide-react';
import { SearchBar } from '@components/SearchBar';
import { StatsBar } from '@components/StatsBar';
import { DogCard } from '@components/DogCard';
import { DogListItem } from '@components/DogListItem';
import { useFilteredDogs } from '@hooks';
import { useAppStore } from '@store';

export function HomePage() {
  const dogs = useFilteredDogs();
  const { viewMode } = useAppStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          探索 12+ 种可爱狗狗
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
          🐕 狗狗百科
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          探索可爱的狗狗世界，了解各种狗狗的性格特点、饲养知识，找到属于你的完美伙伴
        </p>
      </motion.div>

      {/* Stats */}
      <StatsBar />

      {/* Search & Filter */}
      <SearchBar />

      {/* Results */}
      {dogs.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-500">
              共找到 <span className="font-bold text-gray-900">{dogs.length}</span> 只狗狗
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dogs.map((dog, index) => (
                <DogCard key={dog.id} dog={dog} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {dogs.map((dog, index) => (
                <DogListItem key={dog.id} dog={dog} index={index} />
              ))}
            </div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <Dog className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">没有找到匹配的狗狗</h3>
          <p className="text-gray-500">试试调整搜索条件或筛选器</p>
        </motion.div>
      )}
    </div>
  );
}
