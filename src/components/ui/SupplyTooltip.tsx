import React from 'react';
import InfoTooltip from './InfoTooltip';

interface SupplyTooltipProps {
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const SupplyTooltip: React.FC<SupplyTooltipProps> = ({ position = 'top' }) => {
  return (
    <InfoTooltip 
      text="Circulating supply is the approximate number of coins that are currently in circulation and publicly available."
      position={position}
    />
  );
};

export default SupplyTooltip;