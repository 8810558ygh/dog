// ============================================
// 狗狗百科 - 类型定义
// ============================================

/** 狗狗体型分类 */
export type DogSize = '小型犬' | '中型犬' | '大型犬' | '超大型犬';

/** 狗狗数据模型 */
export interface Dog {
  readonly id: string;
  readonly name: string;
  readonly englishName: string;
  readonly emoji: string;
  readonly size: DogSize;
  readonly tags: readonly string[];
  readonly nickname: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly origin: string;
  readonly lifespan: string;
  readonly weight: string;
  readonly height: string;
  readonly coat: string;
  readonly temperament: readonly string[];
  readonly funFacts: readonly string[];
  readonly popularity: number;
}

/** 搜索过滤条件 */
export interface SearchFilters {
  query: string;
  size: DogSize | 'all';
  sortBy: 'name' | 'popularity' | 'size';
}

/** 应用主题 */
export type Theme = 'light' | 'dark';

/** 视图模式 */
export type ViewMode = 'grid' | 'list';
