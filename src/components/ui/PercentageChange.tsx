import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import clsx from 'clsx';

interface PercentageChangeProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
}

const PercentageChange: React.FC<PercentageChangeProps> = ({ value, size = 'md' }) => {
  const isPositive = value > 0;
  const isNeutral = value === 0;
  
  const iconSize = {
    sm: 14,
    md: 16,
    lg: 18
  };
  
  const textClass = clsx(
    'flex items-center font-medium',
    {
      'text-success-600': isPositive,
      'text-error-600': !isPositive && !isNeutral,
      'text-neutral-500': isNeutral,
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-base': size === 'lg',
    }
  );

  return (
    <div className={textClass}>
      {isPositive ? (
        <ArrowUpRight size={iconSize[size]} className="mr-1" />
      ) : isNeutral ? (
        <Minus size={iconSize[size]} className="mr-1" />
      ) : (
        <ArrowDownRight size={iconSize[size]} className="mr-1" />
      )}
      <span>{value.toFixed(2)}%</span>
    </div>
  );
};

export default PercentageChange;