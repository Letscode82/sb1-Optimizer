import React from 'react';

export interface Stock {
  symbol: string;
  name: string;
  exchange?: string;
  currentPrice: number;
  change?: number;
  changePercent?: number;
  quantity: number;
  allocation: number;
  optimizedAllocation?: number;
}

export interface WatchList {
  id: string;
  name: string;
  totalCapital: number;
  riskAppetite?: 'conservative' | 'moderate' | 'aggressive';
  stocks: Stock[];
}

export interface Portfolio {
  id: string;
  watchLists: WatchList[];
  totalValue: number;
  executedValue: number;
  nonExecutedValue: number;
}

export type RiskAppetite = 'conservative' | 'moderate' | 'aggressive';

export interface BrokerConnection {
  id: string;
  name: string;
  logo: string;
  status: 'connected' | 'disconnected';
}