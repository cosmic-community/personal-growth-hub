'use client';

interface SectionTransitionProps {
  variant?: 'wave' | 'curve' | 'diagonal';
  color?: 'primary' | 'secondary' | 'accent';
  flip?: boolean;
  className?: string;
}

export default function SectionTransition({ 
  variant = 'wave', 
  color = 'primary', 
  flip = false,
  className = ''
}: SectionTransitionProps) {
  const getPath = () => {
    switch (variant) {
      case 'wave':
        return "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,96L1392,96C1344,96,1248,96,1152,96C1056,96,960,96,864,96C768,96,672,96,576,96C480,96,384,96,288,96C192,96,96,96,48,96L0,96Z";
      case 'curve':
        return "M0,64L1440,32L1440,96L0,96Z";
      case 'diagonal':
        return "M0,96L1440,32L1440,96Z";
      default:
        return "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,96L1392,96C1344,96,1248,96,1152,96C1056,96,960,96,864,96C768,96,672,96,576,96C480,96,384,96,288,96C192,96,96,96,48,96L0,96Z";
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'fill-emerald-50 dark:fill-emerald-950/30';
      case 'secondary':
        return 'fill-slate-50 dark:fill-slate-950/30';
      case 'accent':
        return 'fill-blue-50 dark:fill-blue-950/30';
      default:
        return 'fill-emerald-50 dark:fill-emerald-950/30';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        className={`w-full h-16 ${flip ? 'rotate-180' : ''} transition-colors duration-300`}
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={getPath()}
          className={getColorClasses()}
        />
      </svg>
    </div>
  );
}