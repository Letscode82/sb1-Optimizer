import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Portfolio as PortfolioType } from '../types';

interface PortfolioProps {
  portfolio: PortfolioType;
}

export default function Portfolio({ portfolio }: PortfolioProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Portfolio</h2>
        <div className="text-right">
          <p className="text-sm text-gray-500">Total Value</p>
          <p className="text-2xl font-bold text-gray-900">${portfolio.totalValue.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolio.watchLists.map((watchList) => (
          <div key={watchList.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{watchList.name}</h3>
              <span className="flex items-center gap-1 text-green-600">
                <ArrowUpRight size={16} />
                +2.4%
              </span>
            </div>
            
            <div className="space-y-2">
              {watchList.stocks.map((stock) => (
                <div key={stock.symbol} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{stock.symbol}</p>
                    <p className="text-sm text-gray-500">{stock.allocation}%</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${stock.currentPrice}</p>
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <ArrowUpRight size={14} />
                      1.2%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}