import React from 'react';
import InfoTooltip from './InfoTooltip';

interface MarketCapTooltipProps {
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const MarketCapTooltip: React.FC<MarketCapTooltipProps> = ({ position = 'top' }) => {
  return (
    <InfoTooltip 
      text="Market capitalization is the total value of a cryptocurrency. It is calculated by multiplying the price of the cryptocurrency by its circulating supply."
      position={position}
    />
  );
};

export default MarketCapTooltip;