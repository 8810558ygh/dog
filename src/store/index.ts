// ============================================
// Zustand 全局状态管理
// ============================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, ViewMode, SearchFilters } from '@types';

interface AppState {
  // 主题
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;

  // 视图模式
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;

  // 搜索过滤
  filters: SearchFilters;
  setFilters: (filters: Partial<SearchFilters>) => void;
  resetFilters: () => void;

  // 收藏列表
  favorites: string[];
  toggleFavorite: (dogId: string) => void;
  isFavorite: (dogId: string) => boolean;

  // 浏览历史
  recentlyViewed: string[];
  addToRecentlyViewed: (dogId: string) => void;
}

const defaultFilters: SearchFilters = {
  query: '',
  size: 'all',
  sortBy: 'popularity',
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

      viewMode: 'grid',
      setViewMode: (mode) => set({ viewMode: mode }),
      toggleViewMode: () => set((state) => ({ viewMode: state.viewMode === 'grid' ? 'list' : 'grid' })),

      filters: { ...defaultFilters },
      setFilters: (newFilters) =>
        set((state) => ({ filters: { ...state.filters, ...newFilters } })),
      resetFilters: () => set({ filters: { ...defaultFilters } }),

      favorites: [],
      toggleFavorite: (dogId) =>
        set((state) => ({
          favorites: state.favorites.includes(dogId)
            ? state.favorites.filter((id) => id !== dogId)
            : [...state.favorites, dogId],
        })),
      isFavorite: (dogId) => get().favorites.includes(dogId),

      recentlyViewed: [],
      addToRecentlyViewed: (dogId) =>
        set((state) => ({
          recentlyViewed: [
            dogId,
            ...state.recentlyViewed.filter((id) => id !== dogId),
          ].slice(0, 10),
        })),
    }),
    {
      name: 'dog-encyclopedia-storage',
      partialize: (state) => ({
        theme: state.theme,
        favorites: state.favorites,
        recentlyViewed: state.recentlyViewed,
      }),
    }
  )
);
