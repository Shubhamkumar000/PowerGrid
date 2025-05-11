import React from 'react';
interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}
export const Tabs = ({
  value,
  onValueChange,
  children
}: TabsProps) => {
  return <div className="tabs">{children}</div>;
};
interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}
export const TabsList = ({
  children,
  className
}: TabsListProps) => {
  return <div className={`tabs-list ${className}`}>{children}</div>;
};
interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}
export const TabsTrigger = ({
  value,
  children,
  className
}: TabsTriggerProps) => {
  return <button className={`px-4 py-3 font-medium text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 ${className}`} onClick={() => {}}>
      {children}
    </button>;
};
interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}
export const TabsContent = ({
  value,
  children
}: TabsContentProps) => {
  return <div className="tabs-content">{children}</div>;
};