import React, { useState } from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import type { RiskAppetite } from '../types';

export default function AIInvestment() {
  const [riskAppetite, setRiskAppetite] = useState<RiskAppetite>('moderate');
  const [capital, setCapital] = useState<number>(10000);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">AI-Powered Investment</h2>
      
      <div className="space-y-6">
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

        <button
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Brain size={20} />
          Generate AI Recommendations
        </button>
      </div>

      <div className="mt-8">
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