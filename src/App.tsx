import React, { useState } from 'react';
import Header from './components/Header/Header';
import CryptoTable from './components/CryptoTable/CryptoTable';
import CryptoInfoCard from './components/CryptoDetails/CryptoInfoCard';
import CryptoStats from './components/CryptoOverview/CryptoStats';
import { CryptoProvider, useCrypto } from './context/CryptoContext';

const AppContent: React.FC = () => {
  const { selectedCrypto, setSelectedCrypto } = useCrypto();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Global market stats
  const marketStats = {
    totalMarketCap: 2500000000000, // $2.5T
    totalVolume: 150000000000, // $150B
    btcDominance: 42.8,
    activeCryptocurrencies: 10573
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-neutral-900' : 'bg-neutral-50'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-6">
        <CryptoStats 
          totalMarketCap={marketStats.totalMarketCap}
          totalVolume={marketStats.totalVolume}
          btcDominance={marketStats.btcDominance}
          activeCryptocurrencies={marketStats.activeCryptocurrencies}
        />
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-white mb-4">
            Today's Cryptocurrency Prices
          </h2>
          <CryptoTable />
        </div>
        
        {selectedCrypto && (
          <CryptoInfoCard 
            crypto={selectedCrypto} 
            onClose={() => setSelectedCrypto(null)} 
          />
        )}
      </main>
      <footer className="bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 py-4 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © 2025 CryptoTracker. All rights reserved. For informational purposes only.
        </p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <CryptoProvider>
      <AppContent />
    </CryptoProvider>
  );
}

export default App;