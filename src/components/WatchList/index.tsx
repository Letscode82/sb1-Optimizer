import React, { useState } from 'react';
import { Search, SlidersHorizontal, Briefcase } from 'lucide-react';
import type { Stock, WatchList as WatchListType } from '../../types';

interface WatchListProps {
  watchList: WatchListType;
  onOptimize: (watchList: WatchListType) => void;
  onAddToPortfolio: (watchList: WatchListType) => void;
}

export default function WatchList({ watchList, onOptimize, onAddToPortfolio }: WatchListProps) {
  const [totalCapital, setTotalCapital] = useState(watchList.totalCapital);
  const [stocks, setStocks] = useState<Stock[]>(watchList.stocks);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Market Indices */}
      <div className="flex justify-between items-center mb-6 text-sm">
        <div>
          <span className="font-medium">NIFTY 50</span>
          <span className="ml-2">23,727.65</span>
          <span className="text-red-500 ml-2">-25.80 (-0.10%)</span>
        </div>
        <div>
          <span className="font-medium">NIFTY BANK</span>
          <span className="ml-2">51,233.00</span>
          <span className="text-red-500 ml-2">-84.60 (-0.16%)</span>
        </div>
      </div>

      {/* Watchlist Tabs */}
      <div className="flex space-x-6 mb-4 border-b">
        <button className="px-4 py-2 text-blue-500 border-b-2 border-blue-500">Watchlist 1</button>
        <button className="px-4 py-2 text-gray-500">Watchlist 2</button>
        <button className="px-4 py-2 text-gray-500">Watchlist 3</button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search & add"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-2 flex-1 outline-none"
          />
        </div>
        <div className="text-gray-400">6/100</div>
      </div>

      {/* Total Capital Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Total Capital Allocation
        </label>
        <input
          type="number"
          value={totalCapital}
          onChange={(e) => setTotalCapital(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Stocks List */}
      <div className="space-y-1">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="bg-white p-4 flex justify-between items-center border-b">
            <div>
              <div className="font-medium">{stock.symbol}</div>
              <div className="text-sm text-gray-500">{stock.exchange}</div>
            </div>
            <div className="text-right">
              <div className="text-lg text-red-500">{stock.currentPrice}</div>
              <div className="text-sm text-red-500">
                {stock.change} ({stock.changePercent}%)
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-end space-x-4">
        <button
          onClick={() => onOptimize(watchList)}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          <SlidersHorizontal className="w-5 h-5" />
          Optimize
        </button>
        <button
          onClick={() => onAddToPortfolio(watchList)}
          className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg"
        >
          <Briefcase className="w-5 h-5" />
          Add to Portfolio
        </button>
      </div>
    </div>
  );
}