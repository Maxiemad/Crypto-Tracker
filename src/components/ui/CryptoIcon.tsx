import React from 'react';
import { Bitcoin, Feather as LucideEthereum, DollarSign, Landmark, Coins, CircleDot } from 'lucide-react';

interface CryptoIconProps {
  name: string;
  size?: number;
  className?: string;
}

const CryptoIcon: React.FC<CryptoIconProps> = ({ name, size = 24, className = '' }) => {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'bitcoin':
        return <Bitcoin size={size} className={`text-amber-500 ${className}`} />;
      case 'ethereum':
        return <LucideEthereum size={size} className={`text-indigo-400 ${className}`} />;
      case 'tether':
        return <DollarSign size={size} className={`text-teal-500 ${className}`} />;
      case 'xrp':
        return <Landmark size={size} className={`text-blue-500 ${className}`} />;
      case 'bnb':
        return <Coins size={size} className={`text-yellow-500 ${className}`} />;
      case 'solana':
        return <CircleDot size={size} className={`text-purple-500 ${className}`} />;
      default:
        return <Coins size={size} className={`text-gray-500 ${className}`} />;
    }
  };

  return getIcon();
};

export default CryptoIcon;