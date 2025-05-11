import React from 'react';
import { PaletteIcon, LayoutIcon, EyeIcon, MonitorIcon } from 'lucide-react';
export const AppearanceSettings = () => {
  return <div>
      <h2 className="text-xl font-semibold mb-6">Appearance Settings</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <PaletteIcon size={20} className="text-blue-500" />
            Theme
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 cursor-pointer bg-white">
              <div className="flex justify-between mb-4">
                <div className="w-full h-20 bg-white border rounded-md overflow-hidden">
                  <div className="h-6 bg-blue-600"></div>
                  <div className="p-2">
                    <div className="h-2 w-16 bg-gray-300 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Light</span>
                <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 cursor-pointer">
              <div className="flex justify-between mb-4">
                <div className="w-full h-20 bg-gray-900 border rounded-md overflow-hidden">
                  <div className="h-6 bg-blue-600"></div>
                  <div className="p-2">
                    <div className="h-2 w-16 bg-gray-700 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Dark</span>
                <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="border rounded-lg p-4 cursor-pointer">
              <div className="flex justify-between mb-4">
                <div className="w-full h-20 bg-white border rounded-md overflow-hidden">
                  <div className="h-6 bg-blue-600"></div>
                  <div className="p-2">
                    <div className="h-2 w-16 bg-gray-300 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">System</span>
                <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <EyeIcon size={20} className="text-blue-500" />
            Color Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Color
                </label>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-green-600 border border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-600 border border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-red-600 border border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-amber-600 border border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-teal-600 border border-gray-300"></div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chart Colors
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Default</option>
                  <option>Colorblind Friendly</option>
                  <option>Monochrome</option>
                  <option>Vibrant</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" />
              <label className="text-sm text-gray-700">
                High contrast mode for better accessibility
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <LayoutIcon size={20} className="text-blue-500" />
            Layout Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Dashboard Layout
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Grid Layout</option>
                  <option>List Layout</option>
                  <option>Compact View</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Navigation Style
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Sidebar (Default)</option>
                  <option>Top Navigation</option>
                  <option>Minimized Sidebar</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
              <label className="text-sm text-gray-700">
                Show quick actions in header
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
              <label className="text-sm text-gray-700">
                Show region selector in header
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <MonitorIcon size={20} className="text-blue-500" />
            Display Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chart Animation
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Enabled (Default)</option>
                  <option>Disabled</option>
                  <option>Reduced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Font Size
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Small</option>
                  <option>Medium (Default)</option>
                  <option>Large</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
              <label className="text-sm text-gray-700">
                Show data tooltips on hover
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
              <label className="text-sm text-gray-700">
                Enable smooth scrolling
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <div className="flex gap-2">
            <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Reset to Defaults
            </button>
            <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Save Appearance Settings
            </button>
          </div>
        </div>
      </div>
    </div>;
};