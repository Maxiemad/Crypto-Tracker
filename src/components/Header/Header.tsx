import React, { useState } from 'react';
import { Search, Star, Moon, Sun, Menu, X } from 'lucide-react';
import { useCrypto } from '../../context/CryptoContext';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const { searchTerm, setSearchTerm, showFavoritesOnly, setShowFavoritesOnly } = useCrypto();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Cryptocurrencies', href: '#' },
    { name: 'Exchanges', href: '#' },
    { name: 'NFTs', href: '#' },
    { name: 'DeFi', href: '#' },
    { name: 'Learn', href: '#' },
  ];

  return (
    <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 py-4 px-4 md:px-6 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center w-full md:w-auto justify-between">
            <div className="flex items-center">
              <div className="flex items-center gap-1.5 mr-2">
                <div className="bg-primary-500 text-white p-1.5 rounded">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 9C9.5 8.17157 10.1716 7.5 11 7.5H13C13.8284 7.5 14.5 8.17157 14.5 9C14.5 9.82843 13.8284 10.5 13 10.5H11C10.1716 10.5 9.5 11.1716 9.5 12C9.5 12.8284 10.1716 13.5 11 13.5H13C13.8284 13.5 14.5 14.1716 14.5 15C14.5 15.8284 13.8284 16.5 13 16.5H11C10.1716 16.5 9.5 15.8284 9.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7.5V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">CryptoTracker</h1>
              </div>
              <span className="text-neutral-500 text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">v1.0</span>
            </div>
            
            <button 
              className="md:hidden p-2 rounded-lg border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
          
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto gap-2 md:gap-6`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="w-full md:w-auto px-4 py-2 md:p-0 text-center text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors rounded-lg md:rounded-none hover:bg-neutral-50 dark:hover:bg-neutral-700 md:hover:bg-transparent md:dark:hover:bg-transparent"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search cryptocurrency..."
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button 
              className={`flex items-center gap-1 px-3 py-2 rounded-lg border ${
                showFavoritesOnly 
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-primary-200 dark:border-primary-700' 
                  : 'bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-600'
              } transition-colors`}
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            >
              <Star size={16} className={showFavoritesOnly ? 'fill-primary-500 text-primary-500 dark:fill-primary-400 dark:text-primary-400' : ''} />
              <span className="text-sm font-medium">Favorites</span>
            </button>
            
            <button 
              className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;