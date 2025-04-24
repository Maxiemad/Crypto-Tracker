import React, { useMemo } from 'react';
import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableRow from './CryptoTableRow';
import { useCrypto } from '../../context/CryptoContext';

const CryptoTable: React.FC = () => {
  const { cryptocurrencies, showFavoritesOnly, searchTerm, sortBy, sortDirection } = useCrypto();

  const filteredAndSortedCryptos = useMemo(() => {
    let filtered = [...cryptocurrencies];
    
    // Filter by favorites if enabled
    if (showFavoritesOnly) {
      filtered = filtered.filter(crypto => crypto.isFavorite);
    }
    
    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        crypto => 
          crypto.name.toLowerCase().includes(search) || 
          crypto.symbol.toLowerCase().includes(search)
      );
    }
    
    // Sort
    filtered.sort((a, b) => {
      let aValue = a[sortBy as keyof typeof a];
      let bValue = b[sortBy as keyof typeof b];
      
      // For string values, convert to lowercase for case-insensitive sorting
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    
    return filtered;
  }, [cryptocurrencies, showFavoritesOnly, searchTerm, sortBy, sortDirection]);

  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm bg-white">
      <table className="min-w-full divide-y divide-neutral-200">
        <CryptoTableHeader />
        <tbody className="divide-y divide-neutral-200">
          {filteredAndSortedCryptos.map(crypto => (
            <CryptoTableRow key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
      
      {filteredAndSortedCryptos.length === 0 && (
        <div className="p-8 text-center text-neutral-500">
          {searchTerm ? 'No cryptocurrencies match your search' : 'No cryptocurrencies to display'}
        </div>
      )}
    </div>
  );
};

export default CryptoTable;