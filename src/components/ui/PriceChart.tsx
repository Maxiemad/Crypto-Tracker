import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { formatCurrency } from '../../utils/chartUtils';

interface PriceChartProps {
  data: number[];
  change7d: number;
  width?: number;
  height?: number;
}

const PriceChart: React.FC<PriceChartProps> = ({ 
  data, 
  change7d,
  width = 200, 
  height = 60 
}) => {
  const formattedData = data.map((price, index) => ({
    day: index,
    price
  }));

  const isPositive = change7d >= 0;
  const strokeColor = isPositive ? '#10b981' : '#ef4444';

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={formattedData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <XAxis dataKey="day" hide={true} />
        <YAxis hide={true} domain={['dataMin', 'dataMax']} />
        <Tooltip
          formatter={(value: number) => [formatCurrency(value), 'Price']}
          labelFormatter={() => ''}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)'
          }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke={strokeColor}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: strokeColor, stroke: '#fff', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;