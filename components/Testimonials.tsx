'use client';

import { TestimonialsProps } from '@/types';
import TestimonialCard from './TestimonialCard';
import { Quote, Users, TrendingUp, Award } from 'lucide-react';
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

const testimonialVariants: Variants = {
  offscreen: {
    rotateY: 90,
    opacity: 0,
  },
  onscreen: {
    rotateY: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(214,0,0,0.03),transparent_50%)]" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-100 rounded-full blur-2xl opacity-40" />
      
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
            💬 Testimoni Real
          </div>
          
          <h2 className="text-h2 text-gray-900 mb-6">
            Buktikan Sendiri
            <span className="text-primary-500 block md:inline md:ml-3">Kesuksesan Mereka!</span>
          </h2>
          
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto mb-8">
            Ribuan mahasiswa telah merasakan transformasi belajar dan 
            <span className="text-primary-500 font-semibold"> meningkatkan prestasi akademik</span> mereka bersama Expert Course
          </p>

          {/* Success Statistics */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600">IPK Meningkat</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Mahasiswa</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={testimonialVariants}
              transition={{ delay: index * 0.2 }}
              style={{ perspective: 1000 }}
            >
              <TestimonialCard 
                testimonial={testimonial}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500 to-red-600 rounded-xl p-8 md:p-12 text-white">
            <h3 className="text-h3 mb-4">
              Siap Menjadi Bagian dari Success Stories Berikutnya?
            </h3>
            <p className="text-body-large opacity-90 mb-6 max-w-2xl mx-auto">
              Bergabung sekarang dan rasakan sendiri transformasi belajar yang akan mengubah masa depan akademikmu!
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <span>✨ Mulai hari ini juga</span>
              <span>🎯 Hasil terukur</span>
              <span>🔥 Metode terbukti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
