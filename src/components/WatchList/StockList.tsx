import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import type { Stock } from '../../types';

interface StockListProps {
  stocks: Stock[];
  onUpdateAllocation: (symbol: string, allocation: number) => void;
}

export default function StockList({ stocks, onUpdateAllocation }: StockListProps) {
  return (
    <div className="space-y-2">
      {stocks.map((stock) => (
        <div
          key={stock.symbol}
          className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:border-gray-200"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-900">{stock.symbol}</h3>
              <span className="text-sm text-gray-500">{stock.exchange}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-medium">${stock.currentPrice}</span>
              <span className={`flex items-center gap-1 text-sm ${stock.change < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {stock.change < 0 ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                {stock.change} ({stock.changePercent}%)
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Current Allocation</label>
              <input
                type="number"
                value={stock.allocation}
                onChange={(e) => onUpdateAllocation(stock.symbol, Number(e.target.value))}
                className="w-24 px-2 py-1 text-right border border-gray-200 rounded"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Optimized</label>
              <span className="block w-24 px-2 py-1 text-right font-medium">
                {stock.optimizedAllocation || '-'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}