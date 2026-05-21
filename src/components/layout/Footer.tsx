import { Github, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐕</span>
            <span className="text-gray-600 font-medium">狗狗百科</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary-600 transition-colors">首页</Link>
            <Link to="/favorites" className="hover:text-primary-600 transition-colors">收藏</Link>
            <Link to="/about" className="hover:text-primary-600 transition-colors">关于</Link>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by</span>
            <Link
              to="/about"
              className="font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              东南大学 杨百玄
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          © 2026 狗狗百科. All rights reserved. Built with React + TypeScript + Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
