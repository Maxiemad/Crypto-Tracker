import React from 'react';
import { TrendingUp, ArrowUpRight, DollarSign, BarChart3 } from 'lucide-react';

interface CryptoStatsProps {
  totalMarketCap: number;
  totalVolume: number;
  btcDominance: number;
  activeCryptocurrencies: number;
}

const CryptoStats: React.FC<CryptoStatsProps> = ({
  totalMarketCap,
  totalVolume,
  btcDominance,
  activeCryptocurrencies
}) => {
  const formatLargeNumber = (value: number): string => {
    if (value >= 1_000_000_000_000) {
      return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
    } else if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}B`;
    }
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm transition-transform hover:translate-y-[-2px]">
        <div className="flex items-center mb-2">
          <div className="bg-primary-50 p-2 rounded-full mr-3">
            <BarChart3 size={18} className="text-primary-500" />
          </div>
          <h3 className="text-sm font-medium text-neutral-500">Cryptocurrencies</h3>
        </div>
        <p className="text-2xl font-bold text-neutral-900">{activeCryptocurrencies.toLocaleString()}</p>
      </div>
      
      <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm transition-transform hover:translate-y-[-2px]">
        <div className="flex items-center mb-2">
          <div className="bg-primary-50 p-2 rounded-full mr-3">
            <DollarSign size={18} className="text-primary-500" />
          </div>
          <h3 className="text-sm font-medium text-neutral-500">Total Market Cap</h3>
        </div>
        <p className="text-2xl font-bold text-neutral-900">{formatLargeNumber(totalMarketCap)}</p>
      </div>
      
      <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm transition-transform hover:translate-y-[-2px]">
        <div className="flex items-center mb-2">
          <div className="bg-primary-50 p-2 rounded-full mr-3">
            <TrendingUp size={18} className="text-primary-500" />
          </div>
          <h3 className="text-sm font-medium text-neutral-500">24h Volume</h3>
        </div>
        <p className="text-2xl font-bold text-neutral-900">{formatLargeNumber(totalVolume)}</p>
      </div>
      
      <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm transition-transform hover:translate-y-[-2px]">
        <div className="flex items-center mb-2">
          <div className="bg-amber-50 p-2 rounded-full mr-3">
            <Bitcoin size={18} className="text-amber-500" />
          </div>
          <h3 className="text-sm font-medium text-neutral-500">BTC Dominance</h3>
        </div>
        <div className="flex items-center">
          <p className="text-2xl font-bold text-neutral-900">{btcDominance.toFixed(1)}%</p>
          <div className="ml-2 flex items-center text-success-600 text-sm">
            <ArrowUpRight size={14} />
            <span>0.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bitcoin: React.FC<{ size: number; className?: string }> = ({ size, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.412 11.233A2.307 2.307 0 0 0 9 12.5c0 1.38 1.343 2.5 3 2.5 1.657 0 3-1.12 3-2.5 0-.597-.256-1.141-.676-1.552" />
    <path d="M9.412 7.233A2.307 2.307 0 0 0 9 8.5c0 1.38 1.343 2.5 3 2.5 1.657 0 3-1.12 3-2.5 0-.597-.256-1.141-.676-1.552" />
    <path d="M14 12h1" />
    <path d="M14 8h1" />
    <path d="M9 12h1" />
    <path d="M9 8h1" />
    <path d="M12 16v-8" />
  </svg>
);

export default CryptoStats;