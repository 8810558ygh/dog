# 🐕 狗狗百科 - Dog Encyclopedia

一个使用 **React 19 + TypeScript + Tailwind CSS** 构建的现代化狗狗百科网站。

## ✨ 功能特性

- 🔍 **智能搜索** - 支持按名称、标签搜索狗狗
- 🏷️ **多维筛选** - 按体型分类筛选
- 📊 **排序功能** - 按热度、名称、体型排序
- ❤️ **收藏系统** - 收藏喜欢的狗狗，数据本地持久化
- 📱 **响应式设计** - 完美适配手机、平板、电脑
- 🎨 **精美动画** - 使用 Framer Motion 实现流畅过渡动画
- 🌙 **深色模式** - 支持深色/浅色主题切换
- 📐 **双视图模式** - 网格视图和列表视图自由切换
- 🔗 **路由导航** - 单页应用，无刷新跳转

## 🛠 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19.x | UI 框架 |
| TypeScript | 5.6 | 类型安全 |
| Vite | 6.x | 构建工具 |
| Tailwind CSS | 3.4 | 样式框架 |
| Framer Motion | 12.x | 动画库 |
| React Router | 7.x | 路由管理 |
| Zustand | 5.x | 状态管理 |
| Lucide React | 0.46 | 图标库 |

## 📁 项目结构

```
dog-encyclopedia-react/
├── src/
│   ├── components/          # 组件
│   │   ├── ui/             # 基础 UI 组件
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Select.tsx
│   │   ├── layout/         # 布局组件
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── DogCard.tsx     # 狗狗卡片（网格）
│   │   ├── DogListItem.tsx # 狗狗列表项
│   │   ├── SearchBar.tsx   # 搜索过滤栏
│   │   └── StatsBar.tsx    # 统计栏
│   ├── pages/              # 页面
│   │   ├── HomePage.tsx
│   │   ├── DogDetailPage.tsx
│   │   ├── FavoritesPage.tsx
│   │   └── AboutPage.tsx
│   ├── hooks/              # 自定义 Hooks
│   ├── store/              # Zustand 状态管理
│   ├── data/               # 数据
│   ├── types/              # TypeScript 类型
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 路由配置
│   ├── main.tsx            # 入口文件
│   └── index.css           # 全局样式
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── index.html
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 📦 部署到 GitHub Pages

### 1. 安装 gh-pages

```bash
npm install -D gh-pages
```

### 2. 修改 package.json

```json
{
  "scripts": {
    " predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. 修改 vite.config.ts

```ts
export default defineConfig({
  base: '/dog/',
  // ...其他配置
});
```

### 4. 部署

```bash
npm run deploy
```

## 📝 添加新狗狗

在 `src/data/dogs.ts` 中按照以下格式添加：

```typescript
{
  id: 'unique-id',
  name: '狗狗中文名',
  englishName: 'English Name',
  emoji: '🐕',
  size: '中型犬',
  tags: ['标签1', '标签2'],
  nickname: '昵称',
  description: '描述...',
  imageUrl: 'https://...',
  origin: '原产地',
  lifespan: '10-12年',
  weight: '15-25kg',
  height: '45-55cm',
  coat: '被毛描述',
  temperament: ['性格1', '性格2'],
  funFacts: ['趣味知识1', '趣味知识2'],
  popularity: 8,
}
```

## 👤 作者

**杨百玄** - 东南大学

---

Made with ❤️ and 🐕
