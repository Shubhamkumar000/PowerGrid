import React from 'react';
import { UserIcon, MailIcon, PhoneIcon, BuildingIcon, SaveIcon } from 'lucide-react';
export const ProfileSettings = () => {
  return <div>
      <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
      <div className="flex gap-6">
        <div className="w-1/3">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <UserIcon size={40} className="text-gray-500" />
            </div>
            <h3 className="font-medium">Rajesh Kumar</h3>
            <p className="text-sm text-gray-500">Energy Analyst</p>
            <button className="mt-4 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              Change Photo
            </button>
          </div>
        </div>
        <div className="w-2/3">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="Rajesh" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="Kumar" />
              </div>
            </div>
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
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  <PhoneIcon size={16} className="text-gray-500" />
                </span>
                <input type="tel" className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md" defaultValue="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  <BuildingIcon size={16} className="text-gray-500" />
                </span>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md" defaultValue="Maharashtra State Electricity Distribution Co. Ltd." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Energy Analyst</option>
                <option>Grid Operator</option>
                <option>Planning Manager</option>
                <option>Administrator</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                <SaveIcon size={16} />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};