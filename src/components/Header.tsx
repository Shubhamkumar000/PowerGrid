"use client"
import { BellIcon, UserIcon } from "lucide-react"
interface HeaderProps {
  selectedRegion: string
  setSelectedRegion: (region: string) => void
  timeframe: string
  setTimeframe: (timeframe: string) => void
}
export const Header = ({ selectedRegion, setSelectedRegion, timeframe, setTimeframe }: HeaderProps) => {
  const regions = ["Northeast", "Southeast", "Midwest", "Southwest", "West"]
  const timeframes = [
    {
      value: "day",
      label: "Daily",
    },
    {
      value: "week",
      label: "Weekly",
    },
    {
      value: "month",
      label: "Monthly",
    },
    {
      value: "year",
      label: "Yearly",
    },
  ]
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800">Electricity Demand Forecast</h1>
        <div className="flex items-center space-x-2">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="border rounded-md px-2 py-1 text-sm bg-white"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          <div className="flex border rounded-md overflow-hidden">
            {timeframes.map((item) => (
              <button
                key={item.value}
                onClick={() => setTimeframe(item.value)}
                className={`px-3 py-1 text-sm ${timeframe === item.value ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-1.5 rounded-full hover:bg-gray-100">
          <BellIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-1.5 rounded-full hover:bg-gray-100">
          <UserIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  )
}
