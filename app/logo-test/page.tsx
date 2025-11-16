'use client';

import ExpertCourseLogo from '@/components/brand/ExpertCourseLogo';

export default function LogoTestPage() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <div className="bg-white p-12 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-8 text-center">Expert Course Logo Test</h1>

        {/* Logo dengan text */}
        <div className="flex justify-center">
          <ExpertCourseLogo size={300} showText={true} />
        </div>
      </div>
    </div>
  );
}
