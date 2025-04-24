import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface InfoTooltipProps {
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'sm' | 'md';
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ 
  text, 
  position = 'top',
  size = 'sm'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const iconSize = size === 'sm' ? 14 : 16;
  
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  };

  return (
    <div className="relative inline-block">
      <button 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        className="text-neutral-400 hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-full transition-colors"
        aria-label="Information"
      >
        <HelpCircle size={iconSize} />
      </button>
      
      {isVisible && (
        <div className={`absolute z-50 w-48 p-2 bg-neutral-800 text-white text-xs rounded shadow-lg 
          ${positionClasses[position]} animate-fadeIn`}>
          {text}
          <div 
            className={`absolute w-2 h-2 bg-neutral-800 transform rotate-45
              ${position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-1' : 
                position === 'right' ? 'right-full top-1/2 -translate-y-1/2 mr-[-4px]' : 
                position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 mb-[-4px]' : 
                'left-full top-1/2 -translate-y-1/2 ml-[-4px]'}`}
          />
        </div>
      )}
    </div>
  );
};

export default InfoTooltip;