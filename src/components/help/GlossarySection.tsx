import React, { useState } from 'react';
import { SearchIcon, BookIcon } from 'lucide-react';
interface GlossaryItem {
  term: string;
  definition: string;
  category: string;
}
export const GlossarySection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Forecasting', 'Grid Operations', 'Renewable Energy', 'Technical', 'Weather'];
  const glossaryItems: GlossaryItem[] = [{
    term: 'LSTM',
    definition: 'Long Short-Term Memory is a type of recurrent neural network architecture used in PowerPredict for time series forecasting that can learn and remember over long sequences of data.',
    category: 'Technical'
  }, {
    term: 'Prophet',
    definition: 'An open-source forecasting tool developed by Facebook that PowerPredict uses to decompose time series into trend, seasonality, and holiday components for accurate predictions.',
    category: 'Technical'
  }, {
    term: 'Peak Load',
    definition: 'The maximum electric load demand during a specified period of time, often measured in megawatts (MW). PowerPredict helps predict peak loads to prevent grid overloads.',
    category: 'Grid Operations'
  }, {
    term: 'Base Load',
    definition: 'The minimum level of demand on an electrical grid over a period of time, typically 24 hours. Base load is usually supplied by power plants that operate continuously.',
    category: 'Grid Operations'
  }, {
    term: 'Load Factor',
    definition: 'The ratio of average load to peak load during a specific period. A higher load factor indicates more efficient use of electricity generation capacity.',
    category: 'Grid Operations'
  }, {
    term: 'Forecast Horizon',
    definition: 'The time period into the future for which predictions are made. PowerPredict offers various forecast horizons from hours to years ahead.',
    category: 'Forecasting'
  }, {
    term: 'MAPE',
    definition: 'Mean Absolute Percentage Error, a measure of prediction accuracy in forecasting methods. Lower MAPE values indicate more accurate forecasts.',
    category: 'Forecasting'
  }, {
    term: 'Ensemble Model',
    definition: 'A forecasting approach that combines multiple individual models to improve prediction accuracy and robustness. PowerPredict uses ensemble techniques to enhance forecast reliability.',
    category: 'Forecasting'
  }, {
    term: 'Grid Stability',
    definition: 'The ability of an electrical grid to maintain reliable and steady operation under normal conditions and to regain a state of operating equilibrium after being subjected to a disturbance.',
    category: 'Grid Operations'
  }, {
    term: 'Renewable Penetration',
    definition: 'The percentage of total electricity generation that comes from renewable energy sources like solar, wind, and hydro power.',
    category: 'Renewable Energy'
  }, {
    term: 'Duck Curve',
    definition: 'A graph of power production over the course of a day that shows the timing imbalance between peak demand and renewable energy production, particularly solar power.',
    category: 'Renewable Energy'
  }, {
    term: 'Cooling Degree Days (CDD)',
    definition: "A measurement designed to quantify the demand for energy needed to cool buildings. It's the number of degrees that a day's average temperature is above a baseline temperature (usually 65°F or 18°C).",
    category: 'Weather'
  }, {
    term: 'Heating Degree Days (HDD)',
    definition: "Similar to CDD, but measures the number of degrees that a day's average temperature is below the baseline, indicating energy demand for heating.",
    category: 'Weather'
  }, {
    term: 'Demand Response',
    definition: 'Programs and technologies that encourage consumers to reduce electricity usage during peak demand periods in exchange for incentives.',
    category: 'Grid Operations'
  }, {
    term: 'Confidence Interval',
    definition: 'A range of values that is likely to contain the true future value with a specified probability. PowerPredict shows confidence intervals around forecasts to indicate prediction uncertainty.',
    category: 'Forecasting'
  }, {
    term: 'API',
    definition: 'Application Programming Interface, a set of rules that allows different software applications to communicate with each other. PowerPredict provides APIs for data integration with other systems.',
    category: 'Technical'
  }, {
    term: 'Time Series',
    definition: 'A sequence of data points collected or recorded at specific time intervals. Electricity demand data is a time series that PowerPredict analyzes for patterns and trends.',
    category: 'Technical'
  }, {
    term: 'Seasonality',
    definition: 'Regular and predictable patterns in electricity demand that repeat over specific time periods, such as daily, weekly, or yearly cycles.',
    category: 'Forecasting'
  }];
  const filteredItems = glossaryItems.filter(item => activeCategory === 'All' || item.category === activeCategory).filter(item => item.term.toLowerCase().includes(searchTerm.toLowerCase()) || item.definition.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => a.term.localeCompare(b.term));
  return <div>
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BookIcon size={24} className="text-blue-600" />
        Electricity Demand Forecasting Glossary
      </h2>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon size={18} className="text-gray-400" />
            </div>
            <input type="search" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Search glossary terms..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="flex overflow-x-auto pb-2">
          {categories.map(category => <button key={category} className={`px-4 py-2 whitespace-nowrap rounded-full mr-2 ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category)}>
              {category}
            </button>)}
        </div>
      </div>
      {filteredItems.length > 0 ? <div className="space-y-4">
          {filteredItems.map((item, index) => <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-lg">{item.term}</h3>
                <span className="px-2 py-0.5 text-xs bg-gray-100 rounded-full">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-700">{item.definition}</p>
            </div>)}
        </div> : <div className="text-center py-8">
          <p className="text-gray-500">
            No glossary terms found matching your criteria.
          </p>
          <button className="mt-2 text-blue-600 hover:underline" onClick={() => {
        setSearchTerm('');
        setActiveCategory('All');
      }}>
            Reset filters
          </button>
        </div>}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-medium mb-2">
          Don't see a term you're looking for?
        </h3>
        <p className="text-sm">
          Our glossary is continuously updated. If you need clarification on any
          terminology related to electricity demand forecasting, please contact
          our support team.
        </p>
      </div>
    </div>;
};