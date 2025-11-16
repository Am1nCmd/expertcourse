import { CourseItemProps } from '@/types';
import * as Icons from 'lucide-react';

export default function CourseItem({ course }: CourseItemProps) {
  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <div className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
        {getIcon(course.icon)}
      </div>
      <h3 className="mt-4 text-center font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
        {course.name}
      </h3>
      {course.category && (
        <span className="mt-2 text-xs text-gray-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
          {course.category}
        </span>
      )}
    </div>
  );
}
