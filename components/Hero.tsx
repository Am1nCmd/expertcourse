'use client';

import { HeroProps } from '@/types';
import { Button } from '@heroui/react';
import { ArrowRight, Star, Users, BookOpen } from 'lucide-react';
import ExpertCourseLogo from './brand/ExpertCourseLogo';
import { ScatteredHexagons } from './brand/HexagonPattern';

export default function Hero({ headline, subheadline, primaryCTA, secondaryCTA, heroImage }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center section-padding-large overflow-hidden">
      {/* Background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,0,0,0.05),transparent_50%)]" />

      {/* Hexagon Pattern Background */}
      <ScatteredHexagons className="-z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust indicator */}
            <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-primary-100">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">1K+</span>
                </div>
              </div>
              <span className="text-sm text-gray-600 font-medium">Mahasiswa bergabung</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Raih IPK</span>
                <span className="block text-primary-500 mt-2">Impianmu!</span>
              </h1>

              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-red-400 rounded-lg mx-auto lg:mx-0" />
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Bimbingan belajar online <span className="text-primary-600 font-semibold">eksklusif mahasiswa</span> dengan
              tutor berpengalaman. Tingkatkan IPK dengan metode yang terbukti efektif.
            </p>

            {/* Statistics */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-500" />
                <span className="font-bold text-gray-900">1000+ Mahasiswa</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-500" />
                <span className="font-bold text-gray-900">50+ Mata Kuliah</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-bold text-gray-900">4.9/5 Rating</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-8">
              <Button
                as="a"
                href={primaryCTA.href}
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                endContent={<ArrowRight className="w-6 h-6" />}
              >
                {primaryCTA.text}
              </Button>

              {secondaryCTA && (
                <Button
                  as="a"
                  href={secondaryCTA.href}
                  size="lg"
                  variant="bordered"
                  className="border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:bg-primary-50"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
          
          {/* Enhanced Hero Visual */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/40 to-primary-200/30 rounded-2xl blur-3xl" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-300/30 rounded-full blur-xl" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full max-w-lg relative">
                {/* Main hero card with Hexagon Logo */}
                <div className="card-gradient w-full h-full flex items-center justify-center p-8 hover-lift">
                  <div className="text-center">
                    <div className="relative mb-6">
                      {/* Expert Course Hexagon Logo */}
                      <div className="flex justify-center mb-6">
                        <ExpertCourseLogo size={160} showText={false} />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs px-3 py-1.5 rounded-lg font-bold shadow-lg">
                        #1
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-primary-500 mb-2">Expert Course</h3>
                    <p className="text-gray-600 font-semibold mb-4">Bimbingan Belajar Online</p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                      ✓ Terpercaya & Terbukti
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 hover-lift">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">A</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">IPK 3.8+</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 hover-lift">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary-500" />
                    <span className="text-sm font-semibold text-gray-700">50+ Courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
