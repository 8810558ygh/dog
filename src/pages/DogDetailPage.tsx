import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  ArrowLeft,
  MapPin,
  Clock,
  Scale,
  Ruler,
  Palette,
  Sparkles,
  Star,
  ChevronRight,
} from 'lucide-react';
import { dogsData } from '@data/dogs';
import { useAppStore } from '@store';
import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { useRecentlyViewedDogs } from '@hooks';
import { DogCard } from '@components/DogCard';

export function DogDetailPage() {
  const { dogId } = useParams<{ dogId: string }>();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite, addToRecentlyViewed } = useAppStore();
  const recentlyViewed = useRecentlyViewedDogs();

  const dog = dogsData.find((d) => d.id === dogId);

  useEffect(() => {
    if (dog) {
      addToRecentlyViewed(dog.id);
      window.scrollTo(0, 0);
    }
  }, [dog, addToRecentlyViewed]);

  if (!dog) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">狗狗未找到</h2>
        <Button onClick={() => navigate('/')}>返回首页</Button>
      </div>
    );
  }

  const favorite = isFavorite(dog.id);

  const infoItems = [
    { icon: MapPin, label: '原产地', value: dog.origin },
    { icon: Clock, label: '寿命', value: dog.lifespan },
    { icon: Scale, label: '体重', value: dog.weight },
    { icon: Ruler, label: '身高', value: dog.height },
    { icon: Palette, label: '被毛', value: dog.coat },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-primary-600 transition-colors">
          首页
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">{dog.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={dog.imageUrl}
              alt={dog.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="primary" className="text-sm px-3 py-1">
                {dog.size}
              </Badge>
            </div>
            <button
              onClick={() => toggleFavorite(dog.id)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-md transition-all hover:scale-110"
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  favorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
                }`}
              />
            </button>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{dog.emoji}</span>
            <div>
              <h1 className="text-3xl font-black text-gray-900">{dog.name}</h1>
              <p className="text-lg text-gray-500">{dog.englishName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(dog.popularity / 2)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">热度 {dog.popularity}/10</span>
          </div>

          <div className="mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              {dog.nickname}
            </span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">{dog.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {dog.tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-sm px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Basic Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="p-3 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                  <item.icon className="w-4 h-4" />
                  <span className="text-xs">{item.label}</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Temperament */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">性格特点</h3>
            <div className="flex flex-wrap gap-2">
              {dog.temperament.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">趣味知识</h3>
            <ul className="space-y-2">
              {dog.funFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary-500 mt-0.5">💡</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回列表
          </Button>
        </motion.div>
      </div>

      {/* Recently Viewed */}
      {recentlyViewed.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary-500" />
            最近浏览
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentlyViewed
              .filter((d) => d.id !== dog.id)
              .slice(0, 4)
              .map((d, index) => (
                <DogCard key={d.id} dog={d} index={index} />
              ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
