import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import WatchList from './components/WatchList';
import Portfolio from './components/Portfolio';
import AIInvestment from './components/AIInvestment';
import { BarChart3, Briefcase, Brain } from 'lucide-react';
import type { WatchList as WatchListType, Portfolio as PortfolioType } from './types';

// Mock data
const mockWatchList: WatchListType = {
  id: '1',
  name: 'Tech Growth',
  totalCapital: 50000,
  stocks: [
    { symbol: 'AAPL', name: 'Apple Inc.', currentPrice: 173.50, quantity: 10, allocation: 1735 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', currentPrice: 378.85, quantity: 5, allocation: 1894.25 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', currentPrice: 142.65, quantity: 15, allocation: 2139.75 },
  ]
};

const mockPortfolio: PortfolioType = {
  id: '1',
  watchLists: [mockWatchList],
  totalValue: 50000,
  executedValue: 35000,
  nonExecutedValue: 15000
};

function App() {
  const [activeTab, setActiveTab] = useState('watchlist');
  const [portfolio, setPortfolio] = useState(mockPortfolio);

  const handleOptimize = (watchList: WatchListType) => {
    // Mock optimization logic
    console.log('Optimizing watchlist:', watchList);
  };

  const handleAddToPortfolio = (watchList: WatchListType) => {
    setPortfolio(prev => ({
      ...prev,
      watchLists: [...prev.watchLists, watchList]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">StockAI Optimizer</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="watchlist" className="space-y-8">
          <TabsList className="bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger value="watchlist" className="flex items-center gap-2">
              <BarChart3 size={16} />
              Watch List
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2">
              <Briefcase size={16} />
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Brain size={16} />
              AI Investment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="watchlist">
            <WatchList
              watchList={mockWatchList}
              onOptimize={handleOptimize}
              onAddToPortfolio={handleAddToPortfolio}
            />
          </TabsContent>

          <TabsContent value="portfolio">
            <Portfolio portfolio={portfolio} />
          </TabsContent>

          <TabsContent value="ai">
            <AIInvestment onAddToPortfolio={handleAddToPortfolio} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;