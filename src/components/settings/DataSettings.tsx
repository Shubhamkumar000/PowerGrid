import React from 'react';
import { DatabaseIcon, RefreshCwIcon, DownloadIcon, LinkIcon, FileTextIcon } from 'lucide-react';
export const DataSettings = () => {
  return <div>
      <h2 className="text-xl font-semibold mb-6">
        Data & Integration Settings
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <DatabaseIcon size={20} className="text-blue-500" />
            Data Sources
          </h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-md">
                    <FileTextIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">India Energy Exchange (IEX)</h4>
                    <p className="text-sm text-gray-600">
                      Market data from IEX
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Connected
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    API Key
                  </label>
                  <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="●●●●●●●●●●●●●●●●" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Refresh Interval
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>3 hours</option>
                    <option>6 hours</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                  Disconnect
                </button>
                <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                  Test Connection
                </button>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-md">
                    <FileTextIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Indian Meteorological Department (IMD)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Weather data from IMD
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Connected
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    API Key
                  </label>
                  <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="●●●●●●●●●●●●●●●●" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Refresh Interval
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>1 hour</option>
                    <option>3 hours</option>
                    <option>6 hours</option>
                    <option>12 hours</option>
                    <option>24 hours</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                  Disconnect
                </button>
                <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                  Test Connection
                </button>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              <LinkIcon size={16} />
              Connect New Data Source
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <RefreshCwIcon size={20} className="text-blue-500" />
            Data Refresh Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Automatic Data Refresh</h4>
                <p className="text-sm text-gray-600">
                  Automatically update data at specified intervals
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
                  Default Refresh Interval
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>3 hours</option>
                  <option>6 hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Off-hours Refresh Interval
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>1 hour</option>
                  <option>3 hours</option>
                  <option>6 hours</option>
                  <option>12 hours</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <DownloadIcon size={20} className="text-blue-500" />
            Data Export Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Export Format
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>CSV</option>
                  <option>Excel</option>
                  <option>JSON</option>
                  <option>PDF</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Zone for Data Exports
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>IST (UTC+5:30)</option>
                  <option>UTC</option>
                  <option>Local Browser Time</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
              <label className="text-sm text-gray-700">
                Include metadata in exports
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
              <label className="text-sm text-gray-700">
                Include forecast confidence intervals in exports
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Save Data Settings
          </button>
        </div>
      </div>
    </div>;
};