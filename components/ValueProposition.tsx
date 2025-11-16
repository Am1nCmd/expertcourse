'use client';

import { ValuePropositionProps } from '@/types';
import { GraduationCap, Clock, BookOpen, Users } from 'lucide-react';

export default function ValueProposition({ values }: ValuePropositionProps) {
  return (
    <section className="section-padding-large bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-5 py-2.5 rounded-xl text-sm font-semibold mb-6">
            ✨ Keunggulan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mengapa Pilih
            <span className="text-primary-500 block md:inline md:ml-3">Expert Course?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan pengalaman belajar terbaik dengan pendekatan yang terbukti
            <span className="text-primary-600 font-semibold"> meningkatkan prestasi akademik mahasiswa</span>
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => {
            // Render icon based on value.icon string
            let IconComponent = null;
            if (value.icon === 'GraduationCap') IconComponent = GraduationCap;
            else if (value.icon === 'Clock') IconComponent = Clock;
            else if (value.icon === 'BookOpen') IconComponent = BookOpen;
            else if (value.icon === 'Users') IconComponent = Users;

            return (
              <div
                key={value.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card bg-white border border-gray-200 hover:border-primary-300 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="card-body text-center space-y-5 p-6 md:p-8">
                    {/* Icon with background */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-red-600 rounded-xl flex justify-center items-center text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        {IconComponent && <IconComponent className="w-8 h-8" />}
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="card-title text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors justify-center">
                        {value.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-red-400 rounded-lg mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-red-600 rounded-xl p-8 text-white">
            <h3 className="text-h3 mb-4">
              Siap Memulai Perjalanan Akademik yang Lebih Baik?
            </h3>
            <p className="text-body-large opacity-90 mb-6 max-w-2xl mx-auto">
              Bergabung dengan ribuan mahasiswa yang telah merasakan transformasi belajar bersama kami
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>1000+ Mahasiswa Aktif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>50+ Mata Kuliah</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Rating 4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
