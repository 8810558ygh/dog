import { motion } from 'framer-motion';
import { Heart, Dog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavoriteDogs } from '@hooks';
import { DogCard } from '@components/DogCard';
import { Button } from '@components/ui/Button';

export function FavoritesPage() {
  const favorites = useFavoriteDogs();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          <h1 className="text-3xl font-black text-gray-900">我的收藏</h1>
        </div>
        <p className="text-gray-500 mb-8">
          共收藏了 <span className="font-bold text-gray-900">{favorites.length}</span> 只狗狗
        </p>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((dog, index) => (
              <DogCard key={dog.id} dog={dog} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Dog className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">还没有收藏任何狗狗</h3>
            <p className="text-gray-500 mb-6">去首页发现你喜欢的狗狗吧！</p>
            <Link to="/">
              <Button variant="primary" size="lg">
                去首页逛逛
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
