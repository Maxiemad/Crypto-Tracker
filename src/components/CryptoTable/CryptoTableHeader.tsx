import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useCrypto } from '../../context/CryptoContext';
import MarketCapTooltip from '../ui/MarketCapTooltip';
import VolumeTooltip from '../ui/VolumeTooltip';
import SupplyTooltip from '../ui/SupplyTooltip';

interface HeaderProps {
  label: string;
  value: string;
  alignment?: 'left' | 'right' | 'center';
  className?: string;
  tooltip?: React.ReactNode;
}

const CryptoTableHeader: React.FC = () => {
  const { sortBy, setSortBy, sortDirection, setSortDirection } = useCrypto();

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const Header: React.FC<HeaderProps> = ({ 
    label, 
    value, 
    alignment = 'left', 
    className = '',
    tooltip
  }) => {
    const isActive = sortBy === value;
    
    const alignmentClass = 
      alignment === 'left' ? 'text-left' : 
      alignment === 'right' ? 'text-right' : 
      'text-center';
    
    return (
      <th 
        className={`px-4 py-3 text-xs font-semibold text-neutral-500 ${alignmentClass} cursor-pointer hover:bg-neutral-100 ${className}`}
        onClick={() => handleSort(value)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span>{label}</span>
            {tooltip && <span className="ml-1">{tooltip}</span>}
          </div>
          <ArrowUpDown 
            size={16} 
            className={`ml-1 ${isActive ? 'opacity-100 text-primary-600' : 'opacity-50'}`}
          />
        </div>
      </th>
    );
  };

  return (
    <thead className="bg-neutral-50 border-b border-neutral-200">
      <tr>
        <th className="px-4 py-3 w-12 text-xs font-semibold text-neutral-500">#</th>
        <Header label="Name" value="name" className="w-52" />
        <Header label="Price" value="price" alignment="right" />
        <Header label="1h %" value="change1h" alignment="right" className="w-24" />
        <Header label="24h %" value="change24h" alignment="right" className="w-24" />
        <Header label="7d %" value="change7d" alignment="right" className="w-24" />
        <Header 
          label="Market Cap" 
          value="marketCap" 
          alignment="right" 
          className="w-40" 
          tooltip={<MarketCapTooltip position="top" />}
        />
        <Header 
          label="Volume(24h)" 
          value="volume24h" 
          alignment="right" 
          className="w-40" 
          tooltip={<VolumeTooltip position="top" />}
        />
        <Header 
          label="Circulating Supply" 
          value="circulatingSupply" 
          alignment="right" 
          className="w-44" 
          tooltip={<SupplyTooltip position="top" />}
        />
        <th className="px-4 py-3 text-xs font-semibold text-neutral-500 text-right w-48">Last 7 Days</th>
      </tr>
    </thead>
  );
};

export default CryptoTableHeader;