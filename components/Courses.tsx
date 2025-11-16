'use client';

import { CoursesProps } from '@/types';
import CourseItem from './CourseItem';
import { motion, Variants } from 'framer-motion';

const headerVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const courseVariants: Variants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.6,
    },
  },
};

export default function Courses({ courses }: CoursesProps) {
  return (
    <section className="section-padding-large bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-h2 text-gray-900 mb-4">
            Mata Kuliah yang Diajarkan
          </h2>
          <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
            Lebih dari 12 mata kuliah dengan materi lengkap dan tutor berpengalaman
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={courseVariants}
              transition={{ delay: index * 0.05 }}
            >
              <CourseItem course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
