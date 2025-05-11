import React, { useState } from 'react';
import { PlayCircleIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';
interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}
export const TutorialsSection = () => {
  const categories = ['All Tutorials', 'Getting Started', 'Forecasting', 'Data Analysis', 'Settings & Configuration', 'Advanced Features'];
  const tutorials: Tutorial[] = [{
    id: 'tut-1',
    title: 'Introduction to PowerPredict',
    description: 'Learn the basics of navigating and using the PowerPredict platform',
    thumbnail: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBncmlkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    duration: '5:32',
    category: 'Getting Started'
  }, {
    id: 'tut-2',
    title: 'Understanding Demand Forecasts',
    description: 'How to interpret and use electricity demand forecasts',
    thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    duration: '8:17',
    category: 'Forecasting'
  }, {
    id: 'tut-3',
    title: 'Weather Impact Analysis',
    description: 'Analyze how weather affects electricity demand patterns',
    thumbnail: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    duration: '6:45',
    category: 'Data Analysis'
  }, {
    id: 'tut-4',
    title: 'Configuring Alert Thresholds',
    description: 'Set up custom alerts for critical demand scenarios',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    duration: '4:29',
    category: 'Settings & Configuration'
  }, {
    id: 'tut-5',
    title: 'Importing Custom Data',
    description: 'How to upload and integrate your own data sources',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    duration: '7:12',
    category: 'Data Analysis'
  }, {
    id: 'tut-6',
    title: 'Advanced Model Configuration',
    description: 'Fine-tune forecasting models for improved accuracy',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    duration: '10:05',
    category: 'Advanced Features'
  }];
  const [activeCategory, setActiveCategory] = useState('All Tutorials');
  const filteredTutorials = activeCategory === 'All Tutorials' ? tutorials : tutorials.filter(tutorial => tutorial.category === activeCategory);
  return <div>
      <h2 className="text-xl font-semibold mb-4">Video Tutorials</h2>
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => <button key={category} className={`px-4 py-2 whitespace-nowrap rounded-full ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category)}>
              {category}
            </button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTutorials.map(tutorial => <div key={tutorial.id} className="border rounded-lg overflow-hidden">
            <div className="relative">
              <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="p-3 bg-white bg-opacity-80 rounded-full">
                  <PlayCircleIcon size={32} className="text-blue-600" />
                </button>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-70 rounded text-white text-xs flex items-center">
                <ClockIcon size={12} className="mr-1" />
                {tutorial.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">{tutorial.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {tutorial.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                  {tutorial.category}
                </span>
                <button className="text-sm text-blue-600 flex items-center hover:underline">
                  Watch Tutorial
                  <ArrowRightIcon size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
          Load More Tutorials
          <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </div>
    </div>;
};