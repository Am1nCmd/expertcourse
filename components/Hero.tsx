'use client';

import { HeroProps } from '@/types';
import { ArrowRight, Star, Users, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { ScatteredHexagons } from './brand/HexagonPattern';

export default function Hero({ headline, subheadline, primaryCTA, secondaryCTA, heroImage }: HeroProps) {

  return (
    <section className="relative min-h-[85vh] flex items-center section-padding overflow-hidden">
      {/* Premium dark red/maroon gradient background for excellent contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-gray-900 to-primary-800 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,0,0,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,21,56,0.15),transparent_50%)]" />

      {/* Hexagon Pattern Background - Subtle pattern */}
      <ScatteredHexagons className="-z-10" color="rgba(255,255,255,0.05)" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            {/* Trust indicator */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg border border-white/30">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">1K+</span>
                </div>
              </div>
              <span className="text-sm text-white font-medium drop-shadow-sm">Mahasiswa bergabung</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white drop-shadow-xl">Raih IPK</span>
                <span className="block text-red-400 mt-2 drop-shadow-xl font-extrabold">Impianmu!</span>
              </h1>

              <div className="w-20 h-1.5 bg-gradient-to-r from-red-400 to-orange-300 rounded-lg mx-auto lg:mx-0 shadow-md" />
            </div>

            <p className="text-base md:text-lg text-gray-100 drop-shadow-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Bimbingan belajar online <span className="text-red-300 font-bold">eksklusif mahasiswa</span> dengan
              tutor berpengalaman. Tingkatkan IPK dengan metode yang terbukti efektif.
            </p>

            {/* Statistics */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-red-300" />
                <span className="font-bold text-white drop-shadow-lg">1000+ Mahasiswa</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-300" />
                <span className="font-bold text-white drop-shadow-lg">50+ Mata Kuliah</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                <span className="font-bold text-white drop-shadow-lg">4.9/5 Rating</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href={primaryCTA.href}
                className="btn btn-primary btn-lg gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {primaryCTA.text}
                <ArrowRight className="w-6 h-6" />
              </a>

              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="btn btn-outline btn-lg border-2 border-white/50 hover:border-white text-white hover:text-gray-900 font-semibold px-8 text-lg rounded-xl transition-all duration-300 hover:bg-white/90 backdrop-blur-md shadow-lg"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          </div>
          
          {/* Enhanced Hero Visual */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] order-1 lg:order-2">
            {/* Elegant background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800/30 via-primary-700/20 to-gray-900/30 rounded-3xl blur-3xl" />
            <div className="absolute top-10 right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full max-w-2xl relative">
                {/* Main hero visual - removed background card */}
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="relative mb-6">
                      {/* Expert Course Logo - Using optimized WebP - Much Bigger size */}
                      <div className="flex justify-center mb-6">
                        <div className="relative w-[450px] h-60 md:w-[550px] md:h-72 lg:w-[600px] lg:h-80">
                          <Image
                            src="/images/ExpertCourse.webp"
                            alt="Expert Course - Bimbingan Belajar Online Mahasiswa"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                            sizes="(max-width: 768px) 450px, (max-width: 1024px) 550px, 600px"
                          />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs px-3 py-1.5 rounded-lg font-bold shadow-lg">
                        #1
                      </div>
                    </div>
                    <p className="text-gray-100 font-bold mb-4 text-lg drop-shadow-lg">Platform Bimbel Terpercaya</p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="inline-block bg-green-600/50 backdrop-blur-md text-green-100 px-4 py-2 rounded-lg text-sm font-bold border border-green-400/80 shadow-lg">
                      ✓ Terpercaya & Terbukti
                    </div>
                  </div>
                </div>

                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-4 hover-lift border border-white/40">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">A</span>
                    </div>
                    <span className="text-sm font-bold text-white drop-shadow-md">IPK 3.8+</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-4 hover-lift border border-white/40">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-red-300" />
                    <span className="text-sm font-bold text-white drop-shadow-md">50+ Courses</span>
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
