import React, { useState } from 'react';
import { FAQSection } from './FAQSection';
import { TutorialsSection } from './TutorialsSection';
import { ContactSupport } from './ContactSupport';
import { DocumentationSection } from './DocumentationSection';
import { GlossarySection } from './GlossarySection';
import { SearchIcon, BookOpenIcon, HelpCircleIcon, PlayCircleIcon, MessageSquareIcon, BookIcon, FileTextIcon } from 'lucide-react';
export const HelpPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log('Searching for:', searchQuery);
  };
  return <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Help Center</h1>
        <p className="text-gray-600">
          Find answers, learn how to use the platform, and get support
        </p>
      </div>
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex w-full max-w-2xl">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon size={18} className="text-gray-400" />
            </div>
            <input type="search" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Search for help topics, guides, or questions..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          <button type="submit" className="px-5 py-3 ml-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-gray-700">Help Topics</h2>
            </div>
            <nav className="p-2">
              <ul className="space-y-1">
                <li>
                  <button onClick={() => setActiveSection('getting-started')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeSection === 'getting-started' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                    <BookOpenIcon size={18} />
                    <span>Getting Started</span>
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => setActiveSection('faq')}
                      className={`w-full flex items-center px-4 py-3 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap ${
                        activeSection === 'faq'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <HelpCircleIcon size={18} />
                      </div>
                      <span className="ml-3 truncate">Frequently Asked Questions</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('tutorials')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeSection === 'tutorials' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                    <PlayCircleIcon size={18} />
                    <span>Video Tutorials</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('documentation')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeSection === 'documentation' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                    <FileTextIcon size={18} />
                    <span>Documentation</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('glossary')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeSection === 'glossary' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                    <BookIcon size={18} />
                    <span>Glossary</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('contact')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeSection === 'contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
                    <MessageSquareIcon size={18} />
                    <span>Contact Support</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow p-6">
            {activeSection === 'getting-started' && <div>
                <h2 className="text-xl font-semibold mb-4">
                  Getting Started with PowerPredict
                </h2>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Welcome to PowerPredict, India's premier AI-powered
                    electricity demand forecasting system. This guide will help
                    you understand the platform and get started with making
                    accurate predictions.
                  </p>
                  <h3 className="text-lg font-medium mt-6 mb-3">
                    System Overview
                  </h3>
                  <p className="mb-4">
                    PowerPredict uses advanced machine learning models like LSTM
                    and Prophet to analyze historical electricity usage data,
                    weather patterns, and seasonal trends to provide accurate
                    forecasts of electricity demand across different regions of
                    India.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Real-time electricity demand forecasting</li>
                        <li>Regional and state-level predictions</li>
                        <li>Weather impact analysis</li>
                        <li>Renewable energy integration</li>
                        <li>Alert system for demand spikes</li>
                        <li>Historical data analysis</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Prevent blackouts through better planning</li>
                        <li>Reduce energy wastage</li>
                        <li>Optimize renewable energy usage</li>
                        <li>Lower operational costs</li>
                        <li>Improve grid stability</li>
                        <li>Data-driven decision making</li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mt-6 mb-3">
                    Quick Start Guide
                  </h3>
                  <ol className="list-decimal pl-5 space-y-4 mb-6">
                    <li>
                      <strong>Dashboard Overview</strong>
                      <p>
                        Start at the dashboard to get a high-level view of
                        current electricity demand, forecasts, and any alerts.
                        The dashboard shows key metrics and visualizations for
                        your selected region.
                      </p>
                    </li>
                    <li>
                      <strong>Select Your Region</strong>
                      <p>
                        Use the region selector in the header to choose which
                        area of India you want to analyze. You can select
                        states, grid regions, or view all-India data.
                      </p>
                    </li>
                    <li>
                      <strong>Explore Forecasts</strong>
                      <p>
                        Navigate to the Forecasts section to see detailed
                        predictions for different time horizons. You can view
                        hourly, daily, weekly, monthly, or yearly forecasts.
                      </p>
                    </li>
                    <li>
                      <strong>Analyze Weather Impact</strong>
                      <p>
                        Check the Weather Impact section to understand how
                        temperature, humidity, and other weather factors affect
                        electricity demand in your region.
                      </p>
                    </li>
                    <li>
                      <strong>Upload Your Data</strong>
                      <p>
                        If you have additional data, use the Data Upload section
                        to incorporate it into the forecasting models for more
                        accurate predictions.
                      </p>
                    </li>
                  </ol>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="flex items-center gap-2 font-medium text-blue-700 mb-2">
                      <HelpCircleIcon size={18} />
                      Need More Help?
                    </h4>
                    <p className="text-blue-700">
                      Check out our{' '}
                      <button onClick={() => setActiveSection('tutorials')} className="text-blue-600 underline">
                        video tutorials
                      </button>{' '}
                      for step-by-step guidance or{' '}
                      <button onClick={() => setActiveSection('contact')} className="text-blue-600 underline">
                        contact our support team
                      </button>{' '}
                      for personalized assistance.
                    </p>
                  </div>
                </div>
              </div>}
            {activeSection === 'faq' && <FAQSection />}
            {activeSection === 'tutorials' && <TutorialsSection />}
            {activeSection === 'documentation' && <DocumentationSection />}
            {activeSection === 'glossary' && <GlossarySection />}
            {activeSection === 'contact' && <ContactSupport />}
          </div>
        </div>
      </div>
    </div>;
};