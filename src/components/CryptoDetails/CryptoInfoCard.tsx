import React from 'react';
import { X, ExternalLink, HelpCircle, BarChart3, TrendingUp, DollarSign } from 'lucide-react';
import { Cryptocurrency } from '../../types';
import CryptoIcon from '../ui/CryptoIcon';
import PercentageChange from '../ui/PercentageChange';
import PriceChart from '../ui/PriceChart';
import { formatMarketCap, formatVolume, formatSupply, formatPrice } from '../../utils/formatUtils';

interface CryptoInfoCardProps {
  crypto: Cryptocurrency;
  onClose: () => void;
}

const CryptoInfoCard: React.FC<CryptoInfoCardProps> = ({ crypto, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-auto m-4 animate-scaleIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close details"
        >
          <X size={20} className="text-neutral-500" />
        </button>
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-neutral-100 p-3 rounded-full mr-4">
              <CryptoIcon name={crypto.icon} size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">{crypto.name} <span className="text-neutral-500 text-lg font-normal">{crypto.symbol}</span></h2>
              <div className="flex items-center mt-1">
                <span className="text-neutral-500 text-sm mr-2">Rank #{crypto.rank}</span>
                <button className="text-primary-500 text-sm flex items-center hover:underline">
                  <ExternalLink size={14} className="mr-1" />
                  View on Explorer
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-neutral-900 mb-1">Price</h3>
                <div className="flex items-end">
                  <div className="text-2xl font-bold">{formatPrice(crypto.price)}</div>
                  <div className="ml-2">
                    <PercentageChange value={crypto.change24h} size="md" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-neutral-500 mb-1">1h %</div>
                  <PercentageChange value={crypto.change1h} size="md" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 mb-1">24h %</div>
                  <PercentageChange value={crypto.change24h} size="md" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 mb-1">7d %</div>
                  <PercentageChange value={crypto.change7d} size="md" />
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Market Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="text-sm text-neutral-500 flex items-center">
                    Market Cap
                    <div className="group relative ml-1">
                      <HelpCircle size={14} className="text-neutral-400" />
                      <div className="hidden group-hover:block absolute left-full ml-2 p-2 bg-neutral-800 text-white text-xs rounded w-48 z-10">
                        Total value of all coins in circulation
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{formatMarketCap(crypto.marketCap)}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-neutral-500 flex items-center">
                    Volume (24h)
                    <div className="group relative ml-1">
                      <HelpCircle size={14} className="text-neutral-400" />
                      <div className="hidden group-hover:block absolute left-full ml-2 p-2 bg-neutral-800 text-white text-xs rounded w-48 z-10">
                        Total trading volume in the last 24 hours
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{formatVolume(crypto.volume24h)}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-neutral-500 flex items-center">
                    Circulating Supply
                    <div className="group relative ml-1">
                      <HelpCircle size={14} className="text-neutral-400" />
                      <div className="hidden group-hover:block absolute left-full ml-2 p-2 bg-neutral-800 text-white text-xs rounded w-48 z-10">
                        Number of coins currently in circulation
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{formatSupply(crypto.circulatingSupply, crypto.symbol)}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm mb-6">
            <h3 className="text-lg font-medium text-neutral-900 mb-3">Price Chart (7 Days)</h3>
            <div className="h-52">
              <PriceChart data={crypto.priceHistory} change7d={crypto.change7d} height={200} />
            </div>
          </div>
          
          <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-3">
              <h3 className="text-lg font-medium text-neutral-900">About {crypto.name}</h3>
              <div className="group relative ml-2">
                <HelpCircle size={16} className="text-neutral-400" />
                <div className="hidden group-hover:block absolute left-full ml-2 p-2 bg-neutral-800 text-white text-xs rounded w-48 z-10">
                  General information about {crypto.name}
                </div>
              </div>
            </div>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {crypto.description}
            </p>
            
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <h4 className="text-md font-medium text-neutral-900 mb-2">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {crypto.id === 'bitcoin' && (
                  <>
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-1">
                        <DollarSign size={16} className="text-amber-500 mr-1" />
                        <span className="text-sm font-medium">Store of Value</span>
                      </div>
                      <p className="text-xs text-neutral-600">Often referred to as "digital gold" due to its limited supply</p>
                    </div>
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-1">
                        <BarChart3 size={16} className="text-amber-500 mr-1" />
                        <span className="text-sm font-medium">Decentralized</span>
                      </div>
                      <p className="text-xs text-neutral-600">No central authority controls the Bitcoin network</p>
                    </div>
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-1">
                        <TrendingUp size={16} className="text-amber-500 mr-1" />
                        <span className="text-sm font-medium">Limited Supply</span>
                      </div>
                      <p className="text-xs text-neutral-600">Only 21 million coins will ever be created</p>
                    </div>
                  </>
                )}
                
                {crypto.id === 'ethereum' && (
                  <>
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-1">
                        <BarChart3 size={16} className="text-indigo-500 mr-1" />
                        <span className="text-sm font-medium">Smart Contracts</span>
                      </div>
                      <p className="text-xs text-neutral-600">Programmable blockchain that supports decentralized applications</p>
                    </div>
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-1">
                        <DollarSign size={16} className="text-indigo-500 mr-1" />
                        <span className="text-sm font-medium">DeFi Platform</span>
                      </div>
                      <p className="text-xs text-neutral-600">Foundation for decentralized finance applications</p>
                    </div>
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                      <div className="flex items-center mb-1">
                        <TrendingUp size={16} className="text-indigo-500 mr-1" />
                        <span className="text-sm font-medium">NFT Support</span>
                      </div>
                      <p className="text-xs text-neutral-600">Enables creation and trading of non-fungible tokens</p>
                    </div>
                  </>
                )}
                
                {!['bitcoin', 'ethereum'].includes(crypto.id) && (
                  <div className="col-span-3 bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                    <p className="text-sm text-neutral-600">Learn more about {crypto.name}'s unique features and use cases on their official website.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoInfoCard;