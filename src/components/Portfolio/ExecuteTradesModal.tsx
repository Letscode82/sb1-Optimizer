import React from 'react';
import { X } from 'lucide-react';

interface Broker {
  id: string;
  name: string;
  logo: string;
}

const brokers: Broker[] = [
  { id: 'zerodha', name: 'Zerodha', logo: 'https://zerodha.com/static/images/logo.svg' },
  { id: 'groww', name: 'Groww', logo: 'https://groww.in/logo.svg' },
  { id: 'upstox', name: 'Upstox', logo: 'https://upstox.com/app/themes/upstox/dist/img/logo.svg' },
  { id: 'angelone', name: 'Angel One', logo: 'https://angelbroking.com/images/ab-logo.svg' }
];

interface ExecuteTradesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBroker: (brokerId: string) => void;
}

export default function ExecuteTradesModal({ isOpen, onClose, onSelectBroker }: ExecuteTradesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Choose Your Broker</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {brokers.map((broker) => (
            <button
              key={broker.id}
              onClick={() => onSelectBroker(broker.id)}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors flex flex-col items-center gap-2"
            >
              <img src={broker.logo} alt={broker.name} className="h-8" />
              <span className="text-sm font-medium text-gray-700">{broker.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}