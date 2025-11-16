import React from 'react';

interface ExoTeamLogoProps {
  size?: number;
  className?: string;
}

export default function ExoTeamLogo({ size = 80, className = '' }: ExoTeamLogoProps) {
  return (
    <div className={`inline-flex ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Outer Hexagon */}
        <polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          fill="none"
          stroke="#D60000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner decorative lines (corners) */}
        {/* Top left corner */}
        <line x1="20" y1="22" x2="28" y2="18" stroke="#D60000" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="22" x2="16" y2="30" stroke="#D60000" strokeWidth="2" strokeLinecap="round" />

        {/* Top right corner */}
        <line x1="80" y1="22" x2="72" y2="18" stroke="#D60000" strokeWidth="2" strokeLinecap="round" />
        <line x1="80" y1="22" x2="84" y2="30" stroke="#D60000" strokeWidth="2" strokeLinecap="round" />

        {/* Bottom left corner */}
        <line x1="20" y1="78" x2="28" y2="82" stroke="#D60000" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="78" x2="16" y2="70" stroke="#D60000" strokeWidth="2" strokeLinecap="round" />

        {/* Bottom right corner */}
        <line x1="80" y1="78" x2="72" y2="82" stroke="#D60000" strokeWidth="2" strokeLinecap="round" />
        <line x1="80" y1="78" x2="84" y2="70" stroke="#D60000" strokeWidth="2" strokeLinecap="round" />

        {/* EXO Text */}
        <text
          x="50"
          y="48"
          fontSize="28"
          fontWeight="700"
          fill="#D60000"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          letterSpacing="1"
        >
          EXO
        </text>

        {/* TEAM Text */}
        <text
          x="50"
          y="68"
          fontSize="10"
          fontWeight="500"
          fill="#D60000"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          letterSpacing="2"
        >
          TEAM
        </text>
      </svg>
    </div>
  );
}
