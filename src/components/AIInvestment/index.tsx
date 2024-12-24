import React, { useState } from 'react';
import { Brain, ArrowRight, Briefcase } from 'lucide-react';
import type { RiskAppetite, WatchList } from '../../types';

interface AIInvestmentProps {
  onAddToPortfolio: (watchList: WatchList) => void;
}

export default function AIInvestment({ onAddToPortfolio }: AIInvestmentProps) {
  const [riskAppetite, setRiskAppetite] = useState<RiskAppetite>('moderate');
  const [capital, setCapital] = useState<number>(10000);
  const [recommendations, setRecommendations] = useState<WatchList | null>(null);

  const handleGenerateRecommendations = () => {
    // Mock AI recommendations
    const mockRecommendations: WatchList = {
      id: Date.now().toString(),
      name: `AI Portfolio - ${riskAppetite}`,
      totalCapital: capital,
      riskAppetite,
      stocks: [
        { symbol: 'AAPL', name: 'Apple Inc.', currentPrice: 173.50, quantity: 5, allocation: 867.50, optimizedAllocation: 867.50 },
        { symbol: 'MSFT', name: 'Microsoft Corp.', currentPrice: 378.85, quantity: 2, allocation: 757.70, optimizedAllocation: 757.70 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', currentPrice: 142.65, quantity: 8, allocation: 1141.20, optimizedAllocation: 1141.20 },
      ]
    };
    setRecommendations(mockRecommendations);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">AI-Powered Investment</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Risk Appetite
            </label>
            <select
              value={riskAppetite}
              onChange={(e) => setRiskAppetite(e.target.value as RiskAppetite)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investment Capital
            </label>
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button
          onClick={handleGenerateRecommendations}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Brain size={20} />
          Generate AI Recommendations
        </button>

        {recommendations && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">AI Recommendations</h3>
              <button
                onClick={() => onAddToPortfolio(recommendations)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Briefcase size={20} />
                Add to Portfolio
              </button>
            </div>

            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-gray-500">Symbol</th>
                  <th className="text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="text-left text-sm font-medium text-gray-500">Quantity</th>
                  <th className="text-left text-sm font-medium text-gray-500">Allocation</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.stocks.map((stock) => (
                  <tr key={stock.symbol}>
                    <td className="py-2 font-medium text-gray-900">{stock.symbol}</td>
                    <td className="py-2 text-gray-500">{stock.name}</td>
                    <td className="py-2">{stock.quantity}</td>
                    <td className="py-2">${stock.allocation.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">How it works</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              1
            </div>
            <p className="text-gray-600">Select your risk appetite and investment amount</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              2
            </div>
            <p className="text-gray-600">Our AI analyzes market data and creates a personalized portfolio</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              3
            </div>
            <p className="text-gray-600">Review and execute trades through your preferred broker</p>
          </div>
        </div>
      </div>
    </div>
  );
}