import React from 'react';
import { FileTextIcon, DownloadIcon, ArrowRightIcon, BookOpenIcon, CodeIcon, DatabaseIcon, AlertTriangleIcon } from 'lucide-react';
interface DocumentCategory {
  title: string;
  icon: React.ReactNode;
  documents: Document[];
}
interface Document {
  title: string;
  description: string;
  type: string;
  size: string;
  updated: string;
}
export const DocumentationSection = () => {
  const documentCategories: DocumentCategory[] = [{
    title: 'User Guides',
    icon: <BookOpenIcon size={20} className="text-blue-600" />,
    documents: [{
      title: 'PowerPredict User Manual',
      description: 'Complete guide to using the PowerPredict platform',
      type: 'PDF',
      size: '4.2 MB',
      updated: '15 Jul 2023'
    }, {
      title: 'Quick Start Guide',
      description: 'Get up and running with PowerPredict in minutes',
      type: 'PDF',
      size: '1.8 MB',
      updated: '22 Aug 2023'
    }, {
      title: 'Dashboard Reference',
      description: 'Detailed explanation of all dashboard elements and metrics',
      type: 'PDF',
      size: '3.5 MB',
      updated: '10 Sep 2023'
    }]
  }, {
    title: 'Technical Documentation',
    icon: <CodeIcon size={20} className="text-purple-600" />,
    documents: [{
      title: 'API Documentation',
      description: 'Complete reference for the PowerPredict API',
      type: 'HTML',
      size: 'Online',
      updated: '30 Sep 2023'
    }, {
      title: 'Model Architecture',
      description: 'Technical overview of forecasting models and algorithms',
      type: 'PDF',
      size: '6.7 MB',
      updated: '12 Aug 2023'
    }, {
      title: 'Integration Guide',
      description: 'How to integrate PowerPredict with other systems',
      type: 'PDF',
      size: '2.9 MB',
      updated: '25 Jul 2023'
    }]
  }, {
    title: 'Data Resources',
    icon: <DatabaseIcon size={20} className="text-green-600" />,
    documents: [{
      title: 'Data Dictionary',
      description: 'Definitions of all data fields and metrics',
      type: 'PDF',
      size: '3.1 MB',
      updated: '18 Sep 2023'
    }, {
      title: 'Data Import Templates',
      description: 'Templates for importing custom data',
      type: 'XLSX',
      size: '0.8 MB',
      updated: '05 Aug 2023'
    }, {
      title: 'Historical Data Guide',
      description: 'How to access and use historical electricity demand data',
      type: 'PDF',
      size: '2.3 MB',
      updated: '14 Jul 2023'
    }]
  }, {
    title: 'Troubleshooting',
    icon: <AlertTriangleIcon size={20} className="text-amber-600" />,
    documents: [{
      title: 'Common Issues & Solutions',
      description: 'Troubleshooting guide for frequent problems',
      type: 'PDF',
      size: '1.5 MB',
      updated: '28 Sep 2023'
    }, {
      title: 'Error Code Reference',
      description: 'Complete list of error codes and their meanings',
      type: 'PDF',
      size: '0.9 MB',
      updated: '20 Aug 2023'
    }, {
      title: 'Network Requirements',
      description: 'Network configuration for optimal performance',
      type: 'PDF',
      size: '0.7 MB',
      updated: '10 Jul 2023'
    }]
  }];
  return <div>
      <h2 className="text-xl font-semibold mb-4">Documentation</h2>
      <div className="space-y-8">
        {documentCategories.map((category, index) => <div key={index}>
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              {category.icon}
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.documents.map((doc, docIndex) => <div key={docIndex} className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{doc.title}</h4>
                    <span className="px-2 py-0.5 text-xs bg-gray-100 rounded-full">
                      {doc.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {doc.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>{doc.size}</span>
                      <span>Updated: {doc.updated}</span>
                    </div>
                    <button className="flex items-center text-blue-600 hover:underline">
                      <DownloadIcon size={14} className="mr-1" />
                      Download
                    </button>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>
      <div className="mt-8 bg-gray-50 border rounded-lg p-6">
        <h3 className="text-lg font-medium mb-3">
          Looking for something specific?
        </h3>
        <p className="mb-4">
          Browse our complete documentation library or use the search function
          to find exactly what you need.
        </p>
        <button className="flex items-center text-blue-600 hover:underline">
          Browse All Documentation
          <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </div>
    </div>;
};