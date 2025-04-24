import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Cryptocurrency } from '../types';
import { cryptoData } from '../data/cryptoData';

interface CryptoContextProps {
  cryptocurrencies: Cryptocurrency[];
  toggleFavorite: (id: string) => void;
  favorites: string[];
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (value: boolean) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  sortDirection: 'asc' | 'desc';
  setSortDirection: (value: 'asc' | 'desc') => void;
  selectedCrypto: Cryptocurrency | null;
  setSelectedCrypto: (crypto: Cryptocurrency | null) => void;
}

const CryptoContext = createContext<CryptoContextProps | undefined>(undefined);

export const CryptoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>(cryptoData);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedCrypto, setSelectedCrypto] = useState<Cryptocurrency | null>(null);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }

    setCryptocurrencies(
      cryptocurrencies.map(crypto => 
        crypto.id === id 
          ? { ...crypto, isFavorite: !crypto.isFavorite } 
          : crypto
      )
    );
  };

  return (
    <CryptoContext.Provider 
      value={{
        cryptocurrencies,
        toggleFavorite,
        favorites,
        showFavoritesOnly,
        setShowFavoritesOnly,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        sortDirection,
        setSortDirection,
        selectedCrypto,
        setSelectedCrypto
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = (): CryptoContextProps => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error('useCrypto must be used within a CryptoProvider');
  }
  return context;
};