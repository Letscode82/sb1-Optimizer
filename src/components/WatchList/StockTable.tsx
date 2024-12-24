import React from 'react';
import type { Stock } from '../../types';

interface StockTableProps {
  stocks: Stock[];
  onUpdateQuantity: (symbol: string, quantity: number) => void;
}

export default function StockTable({ stocks, onUpdateQuantity }: StockTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Allocation</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Optimized Allocation</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stocks.map((stock) => (
            <tr key={stock.symbol}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.symbol}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${stock.currentPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="number"
                  value={stock.quantity}
                  onChange={(e) => onUpdateQuantity(stock.symbol, Number(e.target.value))}
                  className="w-24 px-2 py-1 border border-gray-300 rounded-md"
                  min="0"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${(stock.currentPrice * stock.quantity).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {stock.optimizedAllocation ? `$${stock.optimizedAllocation.toLocaleString()}` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}