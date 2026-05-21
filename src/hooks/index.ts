// ============================================
// 自定义 Hooks
// ============================================

import { useMemo } from 'react';
import { dogsData, sizeOrder } from '@data/dogs';
import { useAppStore } from '@store';
import type { Dog, DogSize } from '@types';

/** 获取过滤和排序后的狗狗列表 */
export function useFilteredDogs(): Dog[] {
  const { filters } = useAppStore();

  return useMemo(() => {
    let result = [...dogsData];

    // 搜索过滤
    if (filters.query.trim()) {
      const query = filters.query.toLowerCase();
      result = result.filter(
        (dog) =>
          dog.name.toLowerCase().includes(query) ||
          dog.englishName.toLowerCase().includes(query) ||
          dog.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          dog.nickname.toLowerCase().includes(query)
      );
    }

    // 体型过滤
    if (filters.size !== 'all') {
      result = result.filter((dog) => dog.size === filters.size);
    }

    // 排序
    switch (filters.sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
        break;
      case 'popularity':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'size':
        result.sort(
          (a, b) => (sizeOrder[a.size] || 0) - (sizeOrder[b.size] || 0)
        );
        break;
    }

    return result;
  }, [filters]);
}

/** 获取统计数据 */
export function useDogStats() {
  return useMemo(() => {
    const total = dogsData.length;
    const bySize = dogsData.reduce<Record<DogSize, number>>((acc, dog) => {
      acc[dog.size] = (acc[dog.size] || 0) + 1;
      return acc;
    }, {} as Record<DogSize, number>);

    const mostPopular = [...dogsData].sort((a, b) => b.popularity - a.popularity)[0];

    return { total, bySize, mostPopular };
  }, []);
}

/** 获取收藏的狗狗 */
export function useFavoriteDogs(): Dog[] {
  const { favorites } = useAppStore();
  return useMemo(
    () => dogsData.filter((dog) => favorites.includes(dog.id)),
    [favorites]
  );
}

/** 获取最近浏览的狗狗 */
export function useRecentlyViewedDogs(): Dog[] {
  const { recentlyViewed } = useAppStore();
  return useMemo(
    () =>
      recentlyViewed
        .map((id) => dogsData.find((dog) => dog.id === id))
        .filter((dog): dog is Dog => dog !== undefined),
    [recentlyViewed]
  );
}
