import React, { useState } from 'react';
import { TrendingUp, Play } from 'lucide-react';
import type { Portfolio as PortfolioType } from '../../types';
import ExecuteTradesModal from './ExecuteTradesModal';

interface PortfolioProps {
  portfolio: PortfolioType;
}

export default function Portfolio({ portfolio }: PortfolioProps) {
  const [isExecuteModalOpen, setIsExecuteModalOpen] = useState(false);

  const handleExecuteTrades = (brokerId: string) => {
    console.log('Executing trades through broker:', brokerId);
    setIsExecuteModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Portfolio</h2>
          <button
            onClick={() => setIsExecuteModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Play size={20} />
            Execute Trades
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500">Total Value</p>
            <p className="text-2xl font-bold text-gray-900">${portfolio.totalValue.toLocaleString()}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500">Executed Value</p>
            <p className="text-2xl font-bold text-green-600">${portfolio.executedValue.toLocaleString()}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500">Pending Execution</p>
            <p className="text-2xl font-bold text-blue-600">${portfolio.nonExecutedValue.toLocaleString()}</p>
          </div>
        </div>

        <div className="space-y-6">
          {portfolio.watchLists.map((watchList) => (
            <div key={watchList.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{watchList.name}</h3>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp size={16} />
                  <span>+2.4%</span>
                </div>
              </div>
              
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left text-sm font-medium text-gray-500">Symbol</th>
                    <th className="text-left text-sm font-medium text-gray-500">Quantity</th>
                    <th className="text-left text-sm font-medium text-gray-500">Current Value</th>
                    <th className="text-left text-sm font-medium text-gray-500">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {watchList.stocks.map((stock) => (
                    <tr key={stock.symbol}>
                      <td className="py-2">
                        <div>
                          <p className="font-medium text-gray-900">{stock.symbol}</p>
                          <p className="text-sm text-gray-500">{stock.name}</p>
                        </div>
                      </td>
                      <td className="py-2">{stock.quantity}</td>
                      <td className="py-2">${(stock.currentPrice * stock.quantity).toLocaleString()}</td>
                      <td className="py-2">
                        <span className="text-green-600">+1.2%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      <ExecuteTradesModal
        isOpen={isExecuteModalOpen}
        onClose={() => setIsExecuteModalOpen(false)}
        onSelectBroker={handleExecuteTrades}
      />
    </div>
  );
}