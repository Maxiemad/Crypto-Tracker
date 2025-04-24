import React from 'react';
import { Star } from 'lucide-react';
import CryptoIcon from '../ui/CryptoIcon';
import PercentageChange from '../ui/PercentageChange';
import PriceChart from '../ui/PriceChart';
import { Cryptocurrency } from '../../types';
import { useCrypto } from '../../context/CryptoContext';
import { formatMarketCap, formatVolume, formatSupply, formatPrice } from '../../utils/formatUtils';

interface CryptoTableRowProps {
  crypto: Cryptocurrency;
}

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ crypto }) => {
  const { toggleFavorite, setSelectedCrypto } = useCrypto();
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(crypto.id);
  };

  const handleRowClick = () => {
    setSelectedCrypto(crypto);
  };

  return (
    <tr 
      className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-150 cursor-pointer"
      onClick={handleRowClick}
    >
      <td className="px-4 py-4 w-12">
        <button
          onClick={handleFavoriteClick}
          className="rounded-full p-1 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
          aria-label={crypto.isFavorite ? `Remove ${crypto.name} from favorites` : `Add ${crypto.name} to favorites`}
        >
          <Star 
            size={16} 
            className={crypto.isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'} 
          />
        </button>
      </td>
      
      <td className="px-4 py-4">
        <div className="flex items-center">
          <div className="rounded-full p-1 bg-neutral-50 mr-3 flex-shrink-0">
            <CryptoIcon name={crypto.icon} size={24} />
          </div>
          <div>
            <div className="font-medium text-neutral-900">{crypto.name}</div>
            <div className="text-xs text-neutral-500">{crypto.symbol}</div>
          </div>
        </div>
      </td>
      
      <td className="px-4 py-4 text-right font-medium">
        {formatPrice(crypto.price)}
      </td>
      
      <td className="px-4 py-4 text-right">
        <PercentageChange value={crypto.change1h} />
      </td>
      
      <td className="px-4 py-4 text-right">
        <PercentageChange value={crypto.change24h} />
      </td>
      
      <td className="px-4 py-4 text-right">
        <PercentageChange value={crypto.change7d} />
      </td>
      
      <td className="px-4 py-4 text-right font-medium">
        {formatMarketCap(crypto.marketCap)}
      </td>
      
      <td className="px-4 py-4 text-right">
        {formatVolume(crypto.volume24h)}
      </td>
      
      <td className="px-4 py-4 text-right">
        {formatSupply(crypto.circulatingSupply, crypto.symbol)}
      </td>
      
      <td className="px-4 py-4">
        <PriceChart 
          data={crypto.priceHistory} 
          change7d={crypto.change7d}
        />
      </td>
    </tr>
  );
};

export default CryptoTableRow;