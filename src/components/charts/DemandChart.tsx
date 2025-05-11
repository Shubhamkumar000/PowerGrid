import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
interface DemandChartProps {
  data: Array<{
    time: string
    actual: number
    forecast: number
  }>
}
export const DemandChart = ({ data }: DemandChartProps) => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorActual)"
            name="Actual Demand"
          />
          <Area
            type="monotone"
            dataKey="forecast"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorForecast)"
            name="Forecasted Demand"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
