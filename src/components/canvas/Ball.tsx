import { memo, useState } from 'react';

interface IProps {
  icon: string;
  techName: string;
}

const BallCanvas = memo(({ icon, techName }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-28 h-28 relative group cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onClick={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl group-hover:bg-violet-400/40 transition-all duration-500 animate-pulse-slow" />
      <div
        className={`w-full h-full rounded-full bg-gradient-to-br from-violet-500/30 via-purple-600/30 to-purple-900/50 backdrop-blur-md border-2 border-violet-500/40 flex items-center justify-center shadow-2xl shadow-violet-500/30 transition-all duration-500 animate-float relative overflow-hidden ${
          isHovered ? 'border-violet-400/70 rotate-y-12 scale-110' : ''
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern
              id="hexagons"
              width="20"
              height="17.32"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(0.5)"
            >
              <polygon
                points="10,0 20,5 20,15 10,20 0,15 0,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100" height="100" fill="url(#hexagons)" />
          </svg>
        </div>

        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 via-purple-700 to-purple-900 flex items-center justify-center p-4 relative z-10 group-hover:rotate-12 transition-all duration-500 shadow-inner">
          <img
            src={icon}
            alt={techName}
            className="w-full h-full object-contain filter drop-shadow-2xl relative z-10 group-hover:brightness-110 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
});

BallCanvas.displayName = 'BallCanvas';

export default BallCanvas;
