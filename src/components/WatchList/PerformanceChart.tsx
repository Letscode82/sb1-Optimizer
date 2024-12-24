import React from 'react';
import { LineChart, TrendingUp } from 'lucide-react';

interface PerformanceChartProps {
  watchListReturn: number;
  indexReturn: number;
}

export default function PerformanceChart({ watchListReturn, indexReturn }: PerformanceChartProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance vs Index</h3>
        <LineChart className="text-blue-600" size={24} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Optimized Portfolio</p>
          <div className="flex items-center gap-2">
            <TrendingUp className={watchListReturn >= 0 ? 'text-green-500' : 'text-red-500'} size={20} />
            <span className={`text-xl font-bold ${watchListReturn >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {watchListReturn}%
            </span>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Index Return</p>
          <div className="flex items-center gap-2">
            <TrendingUp className={indexReturn >= 0 ? 'text-green-500' : 'text-red-500'} size={20} />
            <span className={`text-xl font-bold ${indexReturn >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {indexReturn}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}