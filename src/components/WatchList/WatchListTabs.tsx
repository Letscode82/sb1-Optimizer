import React from 'react';
import { Plus } from 'lucide-react';

interface WatchListTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const watchlists = ['Watchlist 1', 'Watchlist 2', 'Watchlist 3', 'Watchlist 4'];

export default function WatchListTabs({ activeTab, onTabChange }: WatchListTabsProps) {
  return (
    <div className="flex items-center gap-4 mb-6 border-b">
      {watchlists.map((list) => (
        <button
          key={list}
          onClick={() => onTabChange(list)}
          className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
            activeTab === list
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          {list}
        </button>
      ))}
      <button className="ml-auto flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
        <Plus size={16} />
        New List
      </button>
    </div>
  );
}