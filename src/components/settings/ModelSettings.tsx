import React from 'react';
import { BrainIcon, BarChart3Icon, SlackIcon, SettingsIcon } from 'lucide-react';
export const ModelSettings = () => {
  return <div>
      <h2 className="text-xl font-semibold mb-6">Forecast Model Settings</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <BrainIcon size={20} className="text-blue-500" />
            Model Selection
          </h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input type="radio" name="forecasting-model" id="lstm" className="w-4 h-4 text-blue-600" defaultChecked />
                  <div>
                    <label htmlFor="lstm" className="font-medium">
                      LSTM Neural Network
                    </label>
                    <p className="text-sm text-gray-600">
                      Deep learning model for time series forecasting with high
                      accuracy
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                  Recommended
                </span>
              </div>
              <div className="mt-4 ml-7">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Training Window
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Last 1 year</option>
                      <option>Last 2 years</option>
                      <option>Last 3 years</option>
                      <option>Last 5 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Model Complexity
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Low</option>
                      <option>Medium</option>
                      <option selected>High</option>
                      <option>Very High</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <input type="radio" name="forecasting-model" id="prophet" className="w-4 h-4 text-blue-600" />
                <div>
                  <label htmlFor="prophet" className="font-medium">
                    Prophet
                  </label>
                  <p className="text-sm text-gray-600">
                    Facebook's forecasting tool for time series with seasonality
                  </p>
                </div>
              </div>
              <div className="mt-4 ml-7">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Seasonality Mode
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Additive</option>
                      <option>Multiplicative</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Change Point Prior Scale
                    </label>
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="0.05" step="0.01" min="0.001" max="0.5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <input type="radio" name="forecasting-model" id="ensemble" className="w-4 h-4 text-blue-600" />
                <div>
                  <label htmlFor="ensemble" className="font-medium">
                    Ensemble Model
                  </label>
                  <p className="text-sm text-gray-600">
                    Combines multiple models for improved forecast accuracy
                  </p>
                </div>
              </div>
              <div className="mt-4 ml-7">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Models for Ensemble
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                      <span className="text-sm">LSTM</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                      <span className="text-sm">Prophet</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                      <span className="text-sm">ARIMA</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">XGBoost</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <BarChart3Icon size={20} className="text-blue-500" />
            Forecast Parameters
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Forecast Horizon
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>24 hours</option>
                  <option>48 hours</option>
                  <option>7 days</option>
                  <option>14 days</option>
                  <option>30 days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Forecast Update Frequency
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Hourly</option>
                  <option>Every 6 hours</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confidence Interval
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>80%</option>
                  <option>90%</option>
                  <option>95%</option>
                  <option>99%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Granularity
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>Hourly</option>
                  <option>Daily</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <SlackIcon size={20} className="text-blue-500" />
            Feature Selection
          </h3>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-600 mb-3">
              Select features to include in the forecasting model
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Historical Demand</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Temperature</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Humidity</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Day of Week</span>
                </label>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Holidays</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm">Special Events</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Economic Indicators</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Fuel Prices</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <SettingsIcon size={20} className="text-blue-500" />
            Advanced Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Automatic Model Retraining</h4>
                <p className="text-sm text-gray-600">
                  Periodically retrain models with new data
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Anomaly Detection</h4>
                <p className="text-sm text-gray-600">
                  Detect and flag unusual patterns in data
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Model Performance Monitoring</h4>
                <p className="text-sm text-gray-600">
                  Track forecast accuracy and model performance
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Save Model Settings
          </button>
        </div>
      </div>
    </div>;
};