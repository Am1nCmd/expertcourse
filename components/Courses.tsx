import { CoursesProps } from '@/types';
import CourseItem from './CourseItem';

export default function Courses({ courses }: CoursesProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-gray-900 mb-4">
            Mata Kuliah yang Diajarkan
          </h2>
          <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
            Lebih dari 12 mata kuliah dengan materi lengkap dan tutor berpengalaman
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
