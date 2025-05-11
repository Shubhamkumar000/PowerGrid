import React from 'react';
export const ElectricityPulse = () => {
  return <>
      <div className="absolute -top-2 left-0 right-0 h-[2px] overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" style={{
        animationDuration: '2s'
      }}></div>
      </div>
      <div className="absolute -bottom-2 left-0 right-0 h-[2px] overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" style={{
        animationDuration: '2s',
        animationDelay: '0.5s'
      }}></div>
      </div>
      <div className="absolute top-0 -left-2 bottom-0 w-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" style={{
        animationDuration: '2s',
        animationDelay: '0.3s'
      }}></div>
      </div>
      <div className="absolute top-0 -right-2 bottom-0 w-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" style={{
        animationDuration: '2s',
        animationDelay: '0.7s'
      }}></div>
      </div>
      <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-blue-500"></div>
      <div className="absolute top-0 right-0 w-[20px] h-[20px] border-t-2 border-r-2 border-blue-500"></div>
      <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-b-2 border-l-2 border-blue-500"></div>
      <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-blue-500"></div>
    </>;
};