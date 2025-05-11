import React from 'react';
import { AlertTriangleIcon, BellIcon, ActivityIcon, ThermometerIcon } from 'lucide-react';
export const AlertSettings = () => {
  return <div>
      <h2 className="text-xl font-semibold mb-6">Alert Configuration</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <AlertTriangleIcon size={20} className="text-amber-500" />
            Demand Threshold Alerts
          </h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Peak Demand Alert</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Threshold (% of capacity)
                  </label>
                  <div className="flex items-center">
                    <input type="range" min="50" max="100" step="5" defaultValue="85" className="w-full" />
                    <span className="ml-2 text-sm font-medium">85%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alert Severity
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Low</option>
                    <option>Medium</option>
                    <option selected>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alert Message Template
                </label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={2} defaultValue="Peak demand alert: Current demand has reached {value}% of grid capacity in {region}. Consider load balancing measures."></textarea>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Forecast Deviation Alert</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Threshold (% deviation)
                  </label>
                  <div className="flex items-center">
                    <input type="range" min="5" max="30" step="1" defaultValue="15" className="w-full" />
                    <span className="ml-2 text-sm font-medium">15%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alert Severity
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Low</option>
                    <option selected>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alert Message Template
                </label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={2} defaultValue="Forecast deviation alert: Actual demand is {value}% {direction} than forecasted in {region}. Please review and adjust operations accordingly."></textarea>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <ThermometerIcon size={20} className="text-red-500" />
            Weather-based Alerts
          </h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Extreme Temperature Alert</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    High Temperature Threshold (°C)
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="40" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Low Temperature Threshold (°C)
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="5" />
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alert Message Template
                </label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={2} defaultValue="Extreme temperature alert: {condition} temperature of {value}°C detected in {region}. Expect increased electricity demand for {cooling/heating}."></textarea>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Severe Weather Alert</h4>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Weather Conditions to Monitor
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                    <span className="text-sm">Thunderstorms</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                    <span className="text-sm">Heavy Rain</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                    <span className="text-sm">Cyclones</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                    <span className="text-sm">Heatwaves</span>
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alert Severity
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option selected>Critical</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <ActivityIcon size={20} className="text-blue-500" />
            Grid Stability Alerts
          </h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Frequency Deviation Alert</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upper Threshold (Hz)
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="50.2" step="0.1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lower Threshold (Hz)
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="49.8" step="0.1" />
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alert Severity
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option selected>Critical</option>
                </select>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Voltage Stability Alert</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upper Threshold (% deviation)
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="10" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lower Threshold (% deviation)
                  </label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="10" />
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alert Severity
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Low</option>
                  <option>Medium</option>
                  <option selected>High</option>
                  <option>Critical</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <BellIcon size={20} className="text-blue-500" />
            Alert Delivery
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Alert Aggregation</h4>
                <p className="text-sm text-gray-600">
                  Group similar alerts to reduce notification volume
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Alert Interval
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>5 minutes</option>
                  <option>15 minutes</option>
                  <option selected>30 minutes</option>
                  <option>1 hour</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alert Expiry Time
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>1 hour</option>
                  <option>4 hours</option>
                  <option selected>8 hours</option>
                  <option>24 hours</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Save Alert Settings
          </button>
        </div>
      </div>
    </div>;
};