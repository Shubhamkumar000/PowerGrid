"use client"
import { BellIcon, UserIcon } from "lucide-react"
import { useLocation } from "react-router-dom" // Import useLocation hook

interface HeaderProps {
  selectedRegion: string
  setSelectedRegion: (region: string) => void
  timeframe: string
  setTimeframe: (timeframe: string) => void
}

export const Header = ({ selectedRegion, setSelectedRegion, timeframe, setTimeframe }: HeaderProps) => {
  const location = useLocation() // Get the current location (URL)

  // List of all states in India
  const regions = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
  ]
  
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

  // Define the allowed paths where the Header should be shown
  const allowedPaths = ["/dashboard", "/weather", "/forecasts"]

  // Conditionally render the Header based on the current path
  if (!allowedPaths.includes(location.pathname)) {
    return null // Do not render Header on other paths
  }

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
