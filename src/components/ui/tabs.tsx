import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
  value: string;
  onChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function Tabs({ defaultValue, className = '', children }: {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = '', children }: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`inline-flex rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = '', children }: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');
  
  const isActive = value === context.value;
  
  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-colors
        ${isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}
        ${className}`}
      onClick={() => context.onChange(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: {
  value: string;
  children: React.ReactNode;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');
  
  if (value !== context.value) return null;
  
  return <div>{children}</div>;
}