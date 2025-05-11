import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface FAQItem {
  question: string;
  answer: string;
}
export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const faqs: FAQItem[] = [{
    question: 'How accurate are the electricity demand forecasts?',
    answer: 'Our forecasts typically achieve 95-98% accuracy for day-ahead predictions and 90-95% accuracy for week-ahead forecasts. Accuracy varies by region, with urban areas generally having more precise predictions than rural areas due to data availability. We continuously improve our models by incorporating new data and refining our algorithms.'
  }, {
    question: 'How often is forecast data updated?',
    answer: 'Forecast data is updated hourly by default, incorporating the latest weather data and actual electricity consumption patterns. You can adjust the update frequency in the Data Settings page according to your needs, with options ranging from 15-minute updates to daily updates.'
  }, {
    question: 'Can I export forecast data to other systems?',
    answer: 'Yes, PowerPredict allows you to export forecast data in multiple formats including CSV, Excel, JSON, and PDF. You can set up automated exports via API or schedule regular reports to be delivered by email. Navigate to the Data Settings page to configure export options.'
  }, {
    question: 'How does the system account for unusual events like festivals?',
    answer: "Our models incorporate India's national and regional holiday calendars, including major festivals like Diwali and Holi that significantly impact electricity usage patterns. You can also manually add special events through the system to improve forecast accuracy during non-standard periods."
  }, {
    question: 'What weather data sources does PowerPredict use?',
    answer: 'PowerPredict integrates with the Indian Meteorological Department (IMD) for official weather data across India. We also use satellite data and international weather services as supplementary sources to ensure comprehensive coverage and reliability.'
  }, {
    question: 'How can I customize alerts for potential grid issues?',
    answer: 'Navigate to Settings > Alert Configuration to set up customized alerts. You can define thresholds for peak demand, forecast deviations, and extreme weather events. Alerts can be delivered via email, SMS, in-app notifications, or through webhooks to integrate with your existing systems.'
  }, {
    question: 'Can the system forecast renewable energy generation?',
    answer: 'Yes, PowerPredict includes renewable energy forecasting capabilities for solar, wind, and hydro generation. These forecasts consider weather patterns, historical generation data, and installed capacity to predict renewable contribution to the grid.'
  }, {
    question: 'How far into the future can the system forecast?',
    answer: 'The system provides forecasts ranging from hour-ahead to year-ahead predictions. Short-term forecasts (hours to days) have the highest accuracy, while long-term forecasts (months to a year) provide trend analysis rather than precise hourly predictions.'
  }, {
    question: 'Is my data secure on the platform?',
    answer: 'Yes, we implement industry-standard security measures including end-to-end encryption, secure authentication, and regular security audits. All data is stored in compliance with Indian data protection regulations, and you can review our complete security policy in the documentation section.'
  }, {
    question: "How do I add new users to my organization's account?",
    answer: 'Administrators can add new users by navigating to Settings > User Management. You can set different permission levels for each user, controlling their access to data, settings, and administrative functions.'
  }];
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  return <div>
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => <div key={index} className="border rounded-lg overflow-hidden">
            <button className="flex items-center justify-between w-full px-4 py-3 text-left bg-white hover:bg-gray-50" onClick={() => toggleItem(index)}>
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openItem === index ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
            </button>
            {openItem === index && <div className="px-4 py-3 bg-gray-50 border-t">
                <p className="text-gray-700">{faq.answer}</p>
              </div>}
          </div>)}
      </div>
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-medium mb-2">
          Can't find what you're looking for?
        </h3>
        <p className="mb-4">
          Our support team is ready to help with any questions you may have
          about using PowerPredict.
        </p>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Contact Support
        </button>
      </div>
    </div>;
};