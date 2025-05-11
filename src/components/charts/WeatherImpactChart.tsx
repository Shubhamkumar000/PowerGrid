import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
interface WeatherImpactChartProps {
  data: Array<{
    time: string
    temperature: number
    demand: number
  }>
}
export const WeatherImpactChart = ({ data }: WeatherImpactChartProps) => {
  return (
    <div className="h-60">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature (°F)" />
          <Line yAxisId="right" type="monotone" dataKey="demand" stroke="#387908" name="Demand (MW)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
