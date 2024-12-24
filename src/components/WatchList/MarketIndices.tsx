import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

const indices: MarketIndex[] = [
  { name: 'NIFTY 50', value: 23727.65, change: -25.80, changePercent: -0.10 },
  { name: 'NIFTY BANK', value: 51233.00, change: -84.60, changePercent: -0.16 },
];

export default function MarketIndices() {
  return (
    <div className="flex gap-6 mb-6 p-4 bg-white rounded-lg shadow-sm">
      {indices.map((index) => (
        <div key={index.name} className="flex items-center gap-2">
          <span className="font-medium text-gray-900">{index.name}</span>
          <span className="font-medium">{index.value.toLocaleString()}</span>
          <span className={`flex items-center gap-1 text-sm ${index.change < 0 ? 'text-red-500' : 'text-green-500'}`}>
            {index.change < 0 ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
            {index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
          </span>
        </div>
      ))}
    </div>
  );
}