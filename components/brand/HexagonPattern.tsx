import React from 'react';

interface HexagonPatternProps {
  className?: string;
  opacity?: number;
}

export default function HexagonPattern({ className = '', opacity = 0.1 }: HexagonPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          {/* Define hexagon pattern */}
          <pattern
            id="hexagon-pattern"
            x="0"
            y="0"
            width="100"
            height="87"
            patternUnits="userSpaceOnUse"
          >
            {/* Single hexagon outline */}
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="#D60000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
        </defs>

        {/* Apply pattern to fill entire SVG */}
        <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
      </svg>
    </div>
  );
}

// Variant with scattered hexagons (like in PDF header/footer)
interface ScatteredHexagonsProps {
  className?: string;
  color?: string;
}

export function ScatteredHexagons({ className = '', color = '#D60000' }: ScatteredHexagonsProps) {
  // More hexagons with higher opacity for better visibility
  const hexagons = [
    { x: 10, y: 5, size: 40, opacity: 0.2 },
    { x: 85, y: 15, size: 35, opacity: 0.18 },
    { x: 50, y: 25, size: 50, opacity: 0.15 },
    { x: 20, y: 70, size: 30, opacity: 0.22 },
    { x: 75, y: 80, size: 45, opacity: 0.16 },
    { x: 92, y: 50, size: 38, opacity: 0.19 },
    { x: 5, y: 40, size: 32, opacity: 0.21 },
    { x: 60, y: 10, size: 28, opacity: 0.17 },
    { x: 30, y: 60, size: 42, opacity: 0.2 },
    { x: 70, y: 35, size: 36, opacity: 0.18 },
    { x: 15, y: 85, size: 33, opacity: 0.19 },
    { x: 95, y: 75, size: 40, opacity: 0.17 },
  ];

  const createHexagonPoints = (cx: number, cy: number, size: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = Math.round((cx + size * Math.cos(angle)) * 100) / 100;
      const y = Math.round((cy + size * Math.sin(angle)) * 100) / 100;
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {hexagons.map((hex, index) => (
          <polygon
            key={index}
            points={createHexagonPoints(
              (hex.x / 100) * 1000,
              (hex.y / 100) * 1000,
              hex.size
            )}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            opacity={hex.opacity}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}

// Animated hexagon pattern
export function AnimatedHexagonPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="animated-hexagon-pattern"
            x="0"
            y="0"
            width="120"
            height="104"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="60,6 105,33 105,87 60,114 15,87 15,33"
              fill="none"
              stroke="#D60000"
              strokeWidth="2"
              opacity="0.08"
            >
              <animate
                attributeName="opacity"
                values="0.05;0.15;0.05"
                dur="4s"
                repeatCount="indefinite"
              />
            </polygon>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#animated-hexagon-pattern)" />
      </svg>
    </div>
  );
}
