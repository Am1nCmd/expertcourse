import React from 'react';

interface ExpertCourseLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function ExpertCourseLogo({
  size = 200,
  className = '',
  showText = true
}: ExpertCourseLogoProps) {
  const hexSize = size;
  const textSize = size * 0.5;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Hexagon Logo dengan E */}
      <div className="relative flex-shrink-0" style={{ width: hexSize, height: hexSize }}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Hexagon dengan rotasi */}
          <g transform="translate(50, 50) rotate(-15)">
            {/* Hexagon filled merah */}
            <polygon
              points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21"
              fill="#D60000"
              stroke="#B53838"
              strokeWidth="2"
            />

            {/* Huruf E putih bold */}
            <text
              x="0"
              y="2"
              fontSize="52"
              fontWeight="900"
              fill="white"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="Arial Black, sans-serif"
            >
              E
            </text>
          </g>

          {/* Hexagon kecil dekoratif - kanan atas */}
          <polygon
            points="75,8 82,12 82,20 75,24 68,20 68,12"
            fill="#D60000"
            stroke="#B53838"
            strokeWidth="1.5"
          />

          {/* Hexagon kecil dekoratif - kanan bawah */}
          <polygon
            points="85,25 90,28 90,34 85,37 80,34 80,28"
            fill="#D60000"
            stroke="#B53838"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-black tracking-wider"
            style={{
              fontSize: `${textSize}px`,
              color: '#D60000',
              fontFamily: 'Arial Black, sans-serif',
              lineHeight: 1
            }}
          >
            EXPERT
          </span>
          <span
            className="font-black tracking-wide"
            style={{
              fontSize: `${textSize * 0.85}px`,
              color: '#4B5563',
              fontFamily: 'Arial Black, sans-serif',
              lineHeight: 1,
              marginTop: `${textSize * 0.05}px`
            }}
          >
            COURSE
          </span>
        </div>
      )}
    </div>
  );
}
