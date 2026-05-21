import { motion } from 'framer-motion';
import { Github, Heart, Code, BookOpen } from 'lucide-react';

export function AboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: '丰富的狗狗资料',
      description: '收录了 12+ 种热门狗狗品种，包含详细的性格、体型、饲养知识等信息',
    },
    {
      icon: Code,
      title: '现代技术栈',
      description: '使用 React 19 + TypeScript + Tailwind CSS + Framer Motion 构建',
    },
    {
      icon: Heart,
      title: '收藏功能',
      description: '可以收藏你喜欢的狗狗，方便随时查看，数据保存在本地',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl shadow-lg">
            🐕
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-2">狗狗百科</h1>
          <p className="text-gray-500 mb-4">探索可爱的狗狗世界</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Github className="w-4 h-4" />
              React + TypeScript
            </span>
            <span>•</span>
            <span>v1.0.0</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Creator */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">关于作者</h2>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
              杨
            </div>
            <h3 className="text-xl font-bold text-gray-900">杨百玄</h3>
            <p className="text-gray-500 mb-2">东南大学</p>
            <p className="text-sm text-gray-400 max-w-md">
              热爱编程和游戏开发，喜欢探索新技术。这个项目是为了练习 React + TypeScript 技术栈而创建的。
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">技术栈</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'React 19',
              'TypeScript',
              'Vite',
              'Tailwind CSS',
              'Framer Motion',
              'React Router',
              'Zustand',
              'Lucide React',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
