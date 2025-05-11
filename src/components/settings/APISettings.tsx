import React, { useState } from 'react';
import { KeyIcon, EyeIcon, EyeOffIcon, ClipboardIcon, PlusIcon, TrashIcon } from 'lucide-react';
export const APISettings = () => {
  const [showKey, setShowKey] = useState(false);
  return <div>
      <h2 className="text-xl font-semibold mb-6">API Access Settings</h2>
      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <KeyIcon size={20} className="text-blue-500" />
              API Keys
            </h3>
            <button className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
              <PlusIcon size={16} />
              Generate New Key
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium">Primary API Key</h4>
                  <p className="text-sm text-gray-600">
                    Created on 15 May 2023
                  </p>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md">
                  <KeyIcon size={16} className="text-gray-500" />
                  <span className="font-mono text-sm">
                    {showKey ? 'pwr_pred_84f29ab3d7e15c6b2a9f' : '••••••••••••••••••••••••'}
                  </span>
                </div>
                <button className="p-2 text-gray-500 hover:text-gray-700" onClick={() => setShowKey(!showKey)}>
                  {showKey ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <ClipboardIcon size={18} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Access Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Read Only</option>
                    <option selected>Read & Write</option>
                    <option>Full Access</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiration
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>30 days</option>
                    <option>90 days</option>
                    <option>1 year</option>
                    <option selected>Never</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50">
                  <TrashIcon size={16} />
                  Revoke Key
                </button>
                <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                  Regenerate
                </button>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium">Integration API Key</h4>
                  <p className="text-sm text-gray-600">
                    Created on 3 June 2023
                  </p>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md">
                  <KeyIcon size={16} className="text-gray-500" />
                  <span className="font-mono text-sm">
                    ••••••••••••••••••••••••
                  </span>
                </div>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <EyeIcon size={18} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <ClipboardIcon size={18} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Access Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option selected>Read Only</option>
                    <option>Read & Write</option>
                    <option>Full Access</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiration
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>30 days</option>
                    <option>90 days</option>
                    <option selected>1 year</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50">
                  <TrashIcon size={16} />
                  Revoke Key
                </button>
                <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                  Regenerate
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">API Usage Limits</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rate Limit
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>100 requests/minute</option>
                  <option selected>500 requests/minute</option>
                  <option>1000 requests/minute</option>
                  <option>Unlimited</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Daily Quota
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>10,000 requests/day</option>
                  <option selected>50,000 requests/day</option>
                  <option>100,000 requests/day</option>
                  <option>Unlimited</option>
                </select>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border rounded-lg">
              <h4 className="font-medium mb-2">Current Usage</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>API Calls Today</span>
                    <span className="font-medium">12,456 / 50,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                    width: '25%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Current Rate</span>
                    <span className="font-medium">
                      78 / 500 requests/minute
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                    width: '15%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Webhook Configuration</h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Alert Webhook</h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Webhook URL
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="https://api.energyco.in/webhooks/alerts" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Secret Key
                  </label>
                  <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="whsk_7d9f8a2e3b1c5" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Events
                  </label>
                  <div className="p-3 border border-gray-300 rounded-md max-h-32 overflow-y-auto">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                        <span className="text-sm">Peak Demand Alerts</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                        <span className="text-sm">
                          Forecast Deviation Alerts
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                        <span className="text-sm">Grid Stability Warnings</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Weather Events</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                  Test Webhook
                </button>
              </div>
            </div>
            <button className="flex items-center gap-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              <PlusIcon size={16} />
              Add New Webhook
            </button>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Save API Settings
          </button>
        </div>
      </div>
    </div>;
};