import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@store';
import { Badge } from '@components/ui/Badge';
import type { Dog } from '@types';

interface DogCardProps {
  dog: Dog;
  index: number;
}

export function DogCard({ dog, index }: DogCardProps) {
  const { toggleFavorite, isFavorite } = useAppStore();
  const favorite = isFavorite(dog.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={dog.imageUrl}
            alt={dog.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(dog.id);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md transition-all duration-200 hover:scale-110"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                favorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
              }`}
            />
          </button>

          {/* Size badge */}
          <div className="absolute bottom-3 left-3">
            <Badge variant="primary">{dog.size}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-xl">{dog.emoji}</span>
                {dog.name}
              </h3>
              <p className="text-sm text-gray-500">{dog.englishName}</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <span className="text-lg">⭐</span>
              <span className="text-sm font-bold">{dog.popularity}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{dog.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {dog.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Nickname */}
          <div className="mb-4">
            <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full font-medium">
              💬 {dog.nickname}
            </span>
          </div>

          {/* Action */}
          <Link
            to={`/dog/${dog.id}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary-50 text-primary-700 font-medium text-sm hover:bg-primary-100 transition-colors group/link"
          >
            查看详情
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
