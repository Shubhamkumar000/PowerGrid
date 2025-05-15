import React from "react"
import { DemandChart } from "./charts/DemandChart"
import { PeakLoadCard } from "./cards/PeakLoadCard"
import { RenewableUsageCard } from "./cards/RenewableUsageCard"
import { RegionalHeatmap } from "./charts/RegionalHeatmap"
import { WeatherImpactChart } from "./charts/WeatherImpactChart"
import { generateMockData } from "../utils/mockData"

interface DashboardProps {
  selectedRegion: string
  timeframe: string
}

export const Dashboard = ({ selectedRegion, timeframe }: DashboardProps) => {
  const data = generateMockData(selectedRegion, timeframe)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* Left Section (Main Charts) */}
      <div className="lg:col-span-2 space-y-6">
        {/* Demand Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Electricity Demand Forecast</h2>
          <DemandChart data={data.demandData} />
        </div>

        {/* Weather + Regional Heatmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Weather Impact</h2>
            <WeatherImpactChart data={data.weatherImpactData} />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Regional Demand Distribution</h2>
            <RegionalHeatmap data={data.heatmapData} />
          </div>
        </div>
      </div>

      {/* Right Section (Cards + Alerts) */}
      <div className="space-y-6">
        <PeakLoadCard data={data.peakLoadData} />
        <RenewableUsageCard data={data.renewableData} />

        {/* Alerts */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-3">
            {data.alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  alert.severity === "high"
                    ? "border-red-500 bg-red-50"
                    : alert.severity === "medium"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-blue-500 bg-blue-50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{alert.title}</span>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
