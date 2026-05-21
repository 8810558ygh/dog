import { useAppStore } from '@store';
import { Sun, Moon, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const { theme, toggleTheme } = useAppStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl group-hover:animate-bounce-slow">🐕</span>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">狗狗百科</span>
              <span className="text-xs text-gray-500">探索可爱的狗狗世界</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              首页
            </Link>
            <Link
              to="/favorites"
              className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              <Heart className="w-4 h-4" />
              收藏
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              关于
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              首页
            </Link>
            <Link
              to="/favorites"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              <Heart className="w-4 h-4" />
              收藏
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              关于
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
