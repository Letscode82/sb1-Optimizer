import React, { useState } from 'react';
import { Plus, TrendingUp, Briefcase } from 'lucide-react';
import type { Stock, WatchList } from '../types';

interface WatchListProps {
  watchList: WatchList;
  onOptimize: (watchList: WatchList) => void;
  onAddToPortfolio: (watchList: WatchList) => void;
}

export default function WatchList({ watchList, onOptimize, onAddToPortfolio }: WatchListProps) {
  const [capital, setCapital] = useState(watchList.totalCapital);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{watchList.name}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => onOptimize(watchList)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <TrendingUp size={20} />
            Optimize
          </button>
          <button
            onClick={() => onAddToPortfolio(watchList)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Briefcase size={20} />
            Add to Portfolio
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Total Capital Allocation
        </label>
        <input
          type="number"
          value={capital}
          onChange={(e) => setCapital(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Allocation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Optimized Allocation</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {watchList.stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${stock.currentPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.allocation}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {stock.optimizedAllocation ? `${stock.optimizedAllocation}%` : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}