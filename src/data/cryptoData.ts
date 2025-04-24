import { Cryptocurrency } from '../types';
import { generateChartData } from '../utils/chartUtils';

const bitcoinData = generateChartData(90000, 95000, 7);
const ethereumData = generateChartData(1700, 1850, 7);
const tetherData = generateChartData(0.99, 1.01, 7);
const xrpData = generateChartData(2.1, 2.3, 7);
const bnbData = generateChartData(580, 620, 7);
const solanaData = generateChartData(140, 160, 7);
const cardanoData = generateChartData(0.45, 0.55, 7);
const dogecoinData = generateChartData(0.08, 0.12, 7);
const polkadotData = generateChartData(6.5, 7.5, 7);
const avalancheData = generateChartData(35, 40, 7);

export const cryptoData: Cryptocurrency[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85,
    priceHistory: bitcoinData,
    description: 'Bitcoin is the first decentralized cryptocurrency, launched in 2009 by an individual or group known as Satoshi Nakamoto. It operates on a peer-to-peer network without centralized authorities, using blockchain technology to record transactions. Bitcoin has a limited supply of 21 million coins and is often referred to as "digital gold" due to its store of value properties.',
    isFavorite: false,
    icon: 'bitcoin'
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1802.46,
    change1h: 0.60,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71,
    priceHistory: ethereumData,
    description: 'Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. It enables developers to build and deploy decentralized applications (dApps) and is the foundation for thousands of other cryptocurrencies and projects. Unlike Bitcoin, Ethereum aims to be more than a store of value, providing a platform for innovation in the blockchain space.',
    isFavorite: false,
    icon: 'ethereum'
  },
  {
    id: 'tether',
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    change1h: 0.00,
    change24h: 0.00,
    change7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: 145.27,
    priceHistory: tetherData,
    description: 'Tether (USDT) is a type of cryptocurrency known as a stablecoin. Each USDT token is backed by an equivalent amount of traditional currency, such as dollars, euros, or yen, which are held in a designated bank account. Tether tokens are pegged to their respective fiat currencies on a 1-to-1 basis, maintaining a stable value compared to volatile cryptocurrencies.',
    isFavorite: false,
    icon: 'tether'
  },
  {
    id: 'xrp',
    rank: 4,
    name: 'XRP',
    symbol: 'XRP',
    price: 2.22,
    change1h: 0.46,
    change24h: 0.54,
    change7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39,
    priceHistory: xrpData,
    description: 'XRP is a digital asset built for payments. It enables real-time global payments anywhere in the world. XRP was created by Ripple, a payments technology company that uses blockchain to make international payment transfers faster and less expensive. Unlike Bitcoin and Ethereum, XRP is not mined but was pre-mined with a total supply of 100 billion tokens.',
    isFavorite: false,
    icon: 'xrp'
  },
  {
    id: 'bnb',
    rank: 5,
    name: 'BNB',
    symbol: 'BNB',
    price: 606.65,
    change1h: 0.09,
    change24h: -1.20,
    change7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89,
    priceHistory: bnbData,
    description: 'BNB (originally Binance Coin) is the native cryptocurrency of the Binance exchange and Binance Smart Chain. Initially created as a utility token for discounted trading fees on the Binance exchange, BNB has evolved to serve multiple purposes within the Binance ecosystem, including payments for transaction fees, travel arrangements, and more.',
    isFavorite: false,
    icon: 'bnb'
  },
  {
    id: 'solana',
    rank: 6,
    name: 'Solana',
    symbol: 'SOL',
    price: 151.51,
    change1h: 0.53,
    change24h: 1.26,
    change7d: 14.74,
    marketCap: 78381958631,
    volume24h: 4881674486,
    circulatingSupply: 517.31,
    priceHistory: solanaData,
    description: 'Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. It features fast transaction speeds, low costs, and eco-friendly operations through its unique proof-of-history consensus mechanism combined with proof-of-stake. Solana can process thousands of transactions per second with minimal fees.',
    isFavorite: false,
    icon: 'solana'
  },
  {
    id: 'cardano',
    rank: 7,
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.49,
    change1h: 0.32,
    change24h: 2.15,
    change7d: 8.92,
    marketCap: 17251956947,
    volume24h: 874281784,
    circulatingSupply: 35.23,
    priceHistory: cardanoData,
    description: 'Cardano is a proof-of-stake blockchain platform that says its goal is to allow "changemakers, innovators and visionaries" to bring about positive global change. It uses a unique peer-reviewed research approach to development and innovation.',
    isFavorite: false,
    icon: 'cardano'
  },
  {
    id: 'dogecoin',
    rank: 8,
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.10,
    change1h: 1.20,
    change24h: 3.45,
    change7d: 15.67,
    marketCap: 14251956947,
    volume24h: 774281784,
    circulatingSupply: 142.67,
    priceHistory: dogecoinData,
    description: 'Dogecoin is a cryptocurrency that started as a joke but has gained significant popularity. It features the face of the Shiba Inu dog from the "Doge" meme as its logo and namesake. Despite its humorous origins, it has developed a strong community and has been used for charitable causes.',
    isFavorite: false,
    icon: 'dogecoin'
  },
  {
    id: 'polkadot',
    rank: 9,
    name: 'Polkadot',
    symbol: 'DOT',
    price: 7.15,
    change1h: 0.75,
    change24h: 2.89,
    change7d: 9.34,
    marketCap: 12251956947,
    volume24h: 674281784,
    circulatingSupply: 1715.92,
    priceHistory: polkadotData,
    description: 'Polkadot is a protocol that connects blockchains — allowing value and data to be sent across previously incompatible networks (Bitcoin and Ethereum, for example). It\'s also designed to be fast and scalable.',
    isFavorite: false,
    icon: 'polkadot'
  },
  {
    id: 'avalanche',
    rank: 10,
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 37.82,
    change1h: 1.15,
    change24h: 4.23,
    change7d: 12.45,
    marketCap: 11251956947,
    volume24h: 574281784,
    circulatingSupply: 297.45,
    priceHistory: avalancheData,
    description: 'Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks. It is one of Ethereum\'s rivals, aiming to unseat Ethereum as the most popular blockchain for smart contracts.',
    isFavorite: false,
    icon: 'avalanche'
  }
];