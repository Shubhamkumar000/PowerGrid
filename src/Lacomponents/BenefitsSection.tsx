import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lightbulb, CloudSun, IndianRupee } from 'lucide-react';
export const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const benefits = [{
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Prevent Blackouts',
    description: 'Accurately predict demand surges to prevent power outages across urban and rural areas.',
    color: 'from-blue-500 to-blue-600'
  }, {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Reduce Waste',
    description: 'Optimize power generation to minimize wastage and reduce environmental impact.',
    color: 'from-green-500 to-green-600'
  }, {
    icon: <CloudSun className="h-8 w-8" />,
    title: 'Maximize Renewables',
    description: 'Intelligently balance renewable energy sources based on weather and demand forecasts.',
    color: 'from-yellow-500 to-yellow-600'
  }, {
    icon: <IndianRupee className="h-8 w-8" />,
    title: 'Cost Efficiency',
    description: "Save billions in operational costs and infrastructure investments across India's power grid.",
    color: 'from-purple-500 to-purple-600'
  }];
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Powering India's Future
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our AI forecasting system delivers multiple benefits to India's
            power infrastructure and economy.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] w-full">
              {benefits.map((benefit, index) => <div key={index} className={`absolute inset-0 transition-all duration-500 ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <div className="h-full w-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-2xl p-8 flex flex-col">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-8">
                      {benefit.description}
                    </p>
                    <div className="mt-auto">
                      <div className="w-full h-[1px] bg-blue-800/50 mb-6"></div>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          {benefits.map((_, idx) => <button key={idx} className={`w-3 h-3 rounded-full transition-all ${idx === activeIndex ? 'bg-blue-500' : 'bg-blue-900/50'}`} onClick={() => setActiveIndex(idx)} />)}
                        </div>
                        <div className="text-blue-400 text-sm font-mono">
                          0{activeIndex + 1} / 04
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="absolute -top-1 -left-1 right-1 bottom-1 border border-blue-500/20 rounded-2xl"></div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Impact Across India
                </h3>
                <div className="space-y-6">
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-300">Blackout Prevention</span>
                      <span className="text-blue-300">92%</span>
                    </div>
                    <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{
                      width: '92%'
                    }}></div>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-300">Energy Efficiency</span>
                      <span className="text-blue-300">78%</span>
                    </div>
                    <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{
                      width: '78%'
                    }}></div>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-300">Cost Reduction</span>
                      <span className="text-blue-300">65%</span>
                    </div>
                    <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400" style={{
                      width: '65%'
                    }}></div>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-300">
                        Renewable Integration
                      </span>
                      <span className="text-blue-300">86%</span>
                    </div>
                    <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400" style={{
                      width: '86%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};