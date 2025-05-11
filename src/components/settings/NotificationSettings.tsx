import React from 'react';
import { BellIcon, MailIcon, SmartphoneIcon, AlertTriangleIcon } from 'lucide-react';
export const NotificationSettings = () => {
  return <div>
      <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <AlertTriangleIcon size={20} className="text-amber-500" />
            Alert Notifications
          </h3>
          <div className="space-y-4 ml-8">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h4 className="font-medium">Peak Demand Alerts</h4>
                <p className="text-sm text-gray-600">
                  Get notified when demand approaches capacity
                </p>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">SMS</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">In-app</span>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h4 className="font-medium">Forecast Deviation Alerts</h4>
                <p className="text-sm text-gray-600">
                  Notifications when actual demand differs from forecast
                </p>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">SMS</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">In-app</span>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h4 className="font-medium">Grid Stability Warnings</h4>
                <p className="text-sm text-gray-600">
                  Critical alerts for potential grid stability issues
                </p>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">SMS</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">In-app</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <BellIcon size={20} className="text-blue-500" />
            System Notifications
          </h3>
          <div className="space-y-4 ml-8">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h4 className="font-medium">Report Generation</h4>
                <p className="text-sm text-gray-600">
                  Notifications when reports are ready for download
                </p>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">SMS</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">In-app</span>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h4 className="font-medium">Data Updates</h4>
                <p className="text-sm text-gray-600">
                  Get notified when new data is available
                </p>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">SMS</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">In-app</span>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <h4 className="font-medium">System Maintenance</h4>
                <p className="text-sm text-gray-600">
                  Notifications about planned maintenance
                </p>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">SMS</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">In-app</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t">
          <h3 className="text-lg font-medium mb-4">Delivery Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  <MailIcon size={16} className="text-gray-500" />
                </span>
                <input type="email" className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md" defaultValue="rajesh.kumar@energyco.in" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number (SMS)
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  <SmartphoneIcon size={16} className="text-gray-500" />
                </span>
                <input type="tel" className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md" defaultValue="+91 98765 43210" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Save Notification Settings
          </button>
        </div>
      </div>
    </div>;
};