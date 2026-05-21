import { useDogStats } from '@hooks';
import { Dog, Ruler, TrendingUp } from 'lucide-react';

export function StatsBar() {
  const { total, bySize, mostPopular } = useDogStats();

  const stats = [
    {
      icon: Dog,
      label: '收录品种',
      value: total,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      icon: Ruler,
      label: '体型分类',
      value: Object.keys(bySize).length,
      color: 'text-green-600 bg-green-50',
    },
    {
      icon: TrendingUp,
      label: '最受欢迎',
      value: mostPopular?.name || '-',
      color: 'text-primary-600 bg-primary-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
        >
          <div className={`p-3 rounded-xl ${stat.color}`}>
            <stat.icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
