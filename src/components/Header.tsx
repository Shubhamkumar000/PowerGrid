"use client"
import { BellIcon, UserIcon } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

interface HeaderProps {
  selectedRegion: string
  setSelectedRegion: (region: string) => void
  timeframe: string
  setTimeframe: (timeframe: string) => void
}

export const Header = ({ selectedRegion, setSelectedRegion, timeframe, setTimeframe }: HeaderProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  const regions = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
  ]

  const timeframes = [
    { value: "day", label: "Daily" },
    { value: "week", label: "Weekly" },
    { value: "month", label: "Monthly" },
    { value: "year", label: "Yearly" },
  ]

  const allowedPaths = ["/dashboard", "/weather", "/forecasts"]

  if (!allowedPaths.includes(location.pathname)) {
    return null
  }

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800">Electricity Demand Forecast</h1>
        <div className="flex items-center space-x-2">
          <select
            value={selectedRegion}
            onChange={(e) => {
              const selected = e.target.value
              console.log("Selected State:", selected)
              setSelectedRegion(selected)

              // Uncomment below to send the selected state to an API
              /*
              fetch("https://your-api-endpoint.com/api/state", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ state: selected })
              })
              .then(response => response.json())
              .then(data => {
                console.log("API response:", data)
              })
              .catch(error => {
                console.error("Error posting selected state:", error)
              })
              */
            }}
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
        <button
          className="p-1.5 rounded-full hover:bg-gray-100"
          onClick={() => navigate("/Settings")}
        >
          <UserIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  )
}
