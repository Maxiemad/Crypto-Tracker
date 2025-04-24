import React from 'react';
import InfoTooltip from './InfoTooltip';

interface VolumeTooltipProps {
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const VolumeTooltip: React.FC<VolumeTooltipProps> = ({ position = 'top' }) => {
  return (
    <InfoTooltip 
      text="Volume (24h) is the total amount of a cryptocurrency that has been traded in the last 24 hours."
      position={position}
    />
  );
};

export default VolumeTooltip;