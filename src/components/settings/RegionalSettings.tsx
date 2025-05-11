import React from 'react';
import { MapPinIcon, GlobeIcon, ClockIcon } from 'lucide-react';
export const RegionalSettings = () => {
  const indiaStates = ['All India', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
  return <div>
      <h2 className="text-xl font-semibold mb-6">Regional Settings</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <MapPinIcon size={20} className="text-blue-500" />
            Primary Region Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default State/Region
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  {indiaStates.map(state => <option key={state}>{state}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Grid Region
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Northern Region</option>
                  <option>Western Region</option>
                  <option>Southern Region</option>
                  <option>Eastern Region</option>
                  <option>North-Eastern Region</option>
                  <option>National Grid</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default Sub-regions to Display
              </label>
              <div className="p-3 border border-gray-300 rounded-md max-h-40 overflow-y-auto">
                <div className="space-y-2">
                  {indiaStates.map(state => <label key={state} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked={state === 'All India' || state === 'Maharashtra' || state === 'Delhi'} />
                      <span className="text-sm">{state}</span>
                    </label>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <GlobeIcon size={20} className="text-blue-500" />
            Localization Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Bengali</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Format
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>DD/MM/YYYY</option>
                  <option>MM/DD/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number Format
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>1,00,000.00 (Indian)</option>
                  <option>100,000.00 (International)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Energy Units
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>MW/MWh</option>
                  <option>kW/kWh</option>
                  <option>GW/GWh</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <ClockIcon size={20} className="text-blue-500" />
            Time Zone Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Zone
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>IST - Indian Standard Time (UTC+5:30)</option>
                  <option>UTC - Coordinated Universal Time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Format
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>24-hour</option>
                  <option>12-hour (AM/PM)</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
              <label className="text-sm text-gray-700">
                Show time zone indicator on charts and reports
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
              <label className="text-sm text-gray-700">
                Use daylight saving time adjustments (when applicable)
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Save Regional Settings
          </button>
        </div>
      </div>
    </div>;
};