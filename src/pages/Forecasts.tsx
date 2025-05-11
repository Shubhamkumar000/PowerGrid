import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { CalendarIcon, TrendingUpIcon, AlertTriangleIcon } from "lucide-react"
import { generateMockData } from "../utils/mockData"
interface ForecastsProps {
  selectedRegion: string
  timeframe: string
}
export const Forecasts = ({ selectedRegion, timeframe }: ForecastsProps) => {
  const data = generateMockData(selectedRegion, timeframe)
  const confidenceIntervals = data.demandData.map((point) => ({
    ...point,
    upperBound: point.forecast * 1.1,
    lowerBound: point.forecast * 0.9,
  }))
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm">24h Peak Forecast</p>
              <h3 className="text-2xl font-bold mt-1">8,245 MW</h3>
              <p className="text-green-600 text-sm flex items-center mt-1">
                <TrendingUpIcon className="h-4 w-4 mr-1" />
                +5.2% vs Yesterday
              </p>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <CalendarIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm">7-Day Average</p>
              <h3 className="text-2xl font-bold mt-1">7,890 MW</h3>
              <p className="text-yellow-600 text-sm flex items-center mt-1">
                <TrendingUpIcon className="h-4 w-4 mr-1" />
                +2.1% vs Last Week
              </p>
            </div>
            <div className="bg-yellow-100 p-2 rounded-lg">
              <TrendingUpIcon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm">Risk Level</p>
              <h3 className="text-2xl font-bold mt-1">Moderate</h3>
              <p className="text-orange-600 text-sm flex items-center mt-1">
                <AlertTriangleIcon className="h-4 w-4 mr-1" />2 Active Alerts
              </p>
            </div>
            <div className="bg-orange-100 p-2 rounded-lg">
              <AlertTriangleIcon className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Demand Forecast with Confidence Intervals</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={confidenceIntervals}>
              <defs>
                <linearGradient id="confidence" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="upperBound" stroke="transparent" fillOpacity={1} fill="url(#confidence)" />
              <Area type="monotone" dataKey="lowerBound" stroke="transparent" fillOpacity={1} fill="url(#confidence)" />
              <Line type="monotone" dataKey="forecast" stroke="#3b82f6" strokeWidth={2} name="Forecast" />
              <Line type="monotone" dataKey="actual" stroke="#6b7280" strokeWidth={2} name="Actual" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Hourly Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.weatherImpactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="demand" stroke="#3b82f6" name="Demand (MW)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Forecast Accuracy</h2>
          <div className="space-y-4">
            {["24h", "7d", "30d", "90d"].map((period) => (
              <div key={period} className="flex items-center">
                <div className="w-20">
                  <span className="text-sm text-gray-600">{period}</span>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{
                        width: `${90 - Math.random() * 15}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right">
                  <span className="text-sm text-gray-600">{(90 + Math.random() * 8).toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
