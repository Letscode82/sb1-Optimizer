import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { Stock } from '../../types';

const mockStocks = [
  { symbol: 'HDFCBANK', name: 'HDFC Bank', exchange: 'BSE', currentPrice: 1797.65, change: -3.35, changePercent: -0.18 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', exchange: 'BSE', currentPrice: 4180.65, change: 23.85, changePercent: 0.57 },
  { symbol: 'ONGC', name: 'Oil & Natural Gas Corporation', exchange: 'NSE', currentPrice: 238.95, change: -1.90, changePercent: -0.78 },
];

interface StockSearchProps {
  onAddStock: (stock: Stock) => void;
}

export default function StockSearch({ onAddStock }: StockSearchProps) {
  const [query, setQuery] = useState('');

  const filteredStocks = query
    ? mockStocks.filter(stock => 
        stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
        stock.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleAddStock = (stock: typeof mockStocks[0]) => {
    onAddStock({
      ...stock,
      quantity: 0,
      allocation: 0,
    });
    setQuery('');
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-lg shadow-sm p-4">
        <Search className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search & add"
          className="ml-2 flex-1 outline-none"
        />
        <span className="text-gray-400">6/100</span>
      </div>

      {query && filteredStocks.length > 0 && (
        <div className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10">
          {filteredStocks.map((stock) => (
            <div
              key={stock.symbol}
              className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              onClick={() => handleAddStock(stock)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{stock.symbol}</div>
                  <div className="text-sm text-gray-500">{stock.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{stock.currentPrice}</div>
                  <div className={`text-sm ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.change} ({stock.changePercent}%)
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}