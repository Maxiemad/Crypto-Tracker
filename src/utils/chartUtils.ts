export const generateChartData = (min: number, max: number, days: number): number[] => {
  const data: number[] = [];
  for (let i = 0; i < days; i++) {
    // Generate a random price within the range
    const randomPrice = min + Math.random() * (max - min);
    // Add some trending pattern
    const trendFactor = i / days; // Increases as we move forward
    const trendedPrice = randomPrice * (1 + (0.15 * trendFactor));
    data.push(parseFloat(trendedPrice.toFixed(2)));
  }
  return data;
};

export const formatCurrency = (value: number, maximumFractionDigits = 2): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits,
  }).format(value);
};

export const formatNumber = (value: number, compact = false): string => {
  return new Intl.NumberFormat('en-US', {
    notation: compact ? 'compact' : 'standard',
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
};