import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@store';
import { Badge } from '@components/ui/Badge';
import type { Dog } from '@types';

interface DogListItemProps {
  dog: Dog;
  index: number;
}

export function DogListItem({ dog, index }: DogListItemProps) {
  const { toggleFavorite, isFavorite } = useAppStore();
  const favorite = isFavorite(dog.id);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link
        to={`/dog/${dog.id}`}
        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
      >
        {/* Image */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden">
          <img
            src={dog.imageUrl}
            alt={dog.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{dog.emoji}</span>
            <h3 className="text-lg font-bold text-gray-900">{dog.name}</h3>
            <span className="text-sm text-gray-400">{dog.englishName}</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Badge variant="primary">{dog.size}</Badge>
            <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
              {dog.nickname}
            </span>
          </div>

          <p className="text-sm text-gray-600 line-clamp-1 mb-2">{dog.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {dog.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(dog.id);
            }}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                favorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
              }`}
            />
          </button>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
}
