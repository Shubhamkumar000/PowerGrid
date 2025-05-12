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
  ScatterChart,
  Scatter,
} from "recharts"
import { CloudIcon, ThermometerIcon, DropletIcon, WindIcon } from "lucide-react"
export const WeatherImpact = () => {
  // Sample weather impact data
  const temperatureCorrelation = Array.from(
    {
      length: 24,
    },
    (_, i) => ({
      temperature: parseFloat((60 + Math.random() * 30).toFixed(2)),
      demand: 4000 + Math.random() * 2000 + i * 100,
    }),
  )
  const weeklyPattern = Array.from(
    {
      length: 7,
    },
    (_, i) => ({
      day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
      solar: 2000 + Math.random() * 1000,
      wind: 1500 + Math.random() * 1000,
      demand: 5000 + Math.random() * 2000,
    }),
  )
  const weatherConditions = [
    {
      condition: "Clear",
      impact: -5,
      frequency: 45,
    },
    {
      condition: "Cloudy",
      impact: 2,
      frequency: 30,
    },
    {
      condition: "Rain",
      impact: 8,
      frequency: 15,
    },
    {
      condition: "Storm",
      impact: 15,
      frequency: 10,
    },
  ]
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Temperature",
            value: "78°F",
            change: "+2.3°F",
            icon: ThermometerIcon,
            color: "text-red-600",
            bg: "bg-red-100",
          },
          {
            title: "Humidity",
            value: "65%",
            change: "+5%",
            icon: DropletIcon,
            color: "text-blue-600",
            bg: "bg-blue-100",
          },
          {
            title: "Wind Speed",
            value: "12 mph",
            change: "-3 mph",
            icon: WindIcon,
            color: "text-green-600",
            bg: "bg-green-100",
          },
          {
            title: "Cloud Cover",
            value: "30%",
            change: "-10%",
            icon: CloudIcon,
            color: "text-gray-600",
            bg: "bg-gray-100",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
                <p className={`${item.color} text-sm flex items-center mt-1`}>{item.change} vs Yesterday</p>
              </div>
              <div className={`${item.bg} p-2 rounded-lg`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Temperature vs Demand</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis dataKey="temperature" name="Temperature" unit="°F" domain={["auto", "auto"]} />
                <YAxis dataKey="demand" name="Demand" unit=" MW" domain={["auto", "auto"]} />
                <Tooltip
                  cursor={{
                    strokeDasharray: "3 3",
                  }}
                />
                <Scatter name="Temperature Correlation" data={temperatureCorrelation} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Pattern</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyPattern}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="solar"
                  stackId="1"
                  stroke="#fbbf24"
                  fill="#fbbf24"
                  name="Solar Generation"
                />
                <Area
                  type="monotone"
                  dataKey="wind"
                  stackId="1"
                  stroke="#60a5fa"
                  fill="#60a5fa"
                  name="Wind Generation"
                />
                <Line type="monotone" dataKey="demand" stroke="#ef4444" name="Demand" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">24-Hour Forecast</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={Array.from(
                  {
                    length: 24,
                  },
                  (_, i) => ({
                    hour: `${i}:00`,
                    temperature: 65 + Math.sin((i / 24) * Math.PI * 2) * 10 + Math.random() * 5,
                    demand: 5000 + Math.sin((i / 24) * Math.PI * 2) * 1000 + Math.random() * 500,
                  }),
                )}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#ef4444" name="Temperature (°F)" />
                <Line yAxisId="right" type="monotone" dataKey="demand" stroke="#3b82f6" name="Expected Demand (MW)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Weather Conditions Impact</h2>
          <div className="space-y-4">
            {weatherConditions.map((condition, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">{condition.condition}</span>
                  <span className="text-sm text-gray-500">{condition.frequency}%</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{
                        width: `${condition.frequency}%`,
                      }}
                    ></div>
                  </div>
                  <span className={`text-sm ${condition.impact > 0 ? "text-red-600" : "text-green-600"}`}>
                    {condition.impact > 0 ? "+" : ""}
                    {condition.impact}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Weather Alerts</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Heat Wave Warning",
                  message: "Expected temperature spike next week",
                  impact: "High",
                  color: "red",
                },
                {
                  title: "Strong Winds",
                  message: "Increased wind generation expected",
                  impact: "Medium",
                  color: "yellow",
                },
              ].map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 border-${alert.color}-500 bg-${alert.color}-50`}>
                  <div className="flex justify-between">
                    <span className="font-medium">{alert.title}</span>
                    <span className={`text-${alert.color}-600 text-sm`}>{alert.impact} Impact</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
