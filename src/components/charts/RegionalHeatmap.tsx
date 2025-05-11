interface RegionalHeatmapProps {
  data: Array<{
    region: string
    value: number
  }>
}
export const RegionalHeatmap = ({ data }: RegionalHeatmapProps) => {
  // This is a simplified version of a heatmap using colored bars
  const getColorIntensity = (value: number) => {
    const maxValue = Math.max(...data.map((item) => item.value))
    const percentage = (value / maxValue) * 100
    if (percentage > 80) return "bg-red-500"
    if (percentage > 60) return "bg-orange-400"
    if (percentage > 40) return "bg-yellow-400"
    if (percentage > 20) return "bg-green-400"
    return "bg-green-300"
  }
  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="w-24 text-sm text-gray-600">{item.region}</div>
          <div className="flex-1 h-8 bg-gray-100 rounded-md overflow-hidden">
            <div
              className={`h-full ${getColorIntensity(item.value)}`}
              style={{
                width: `${(item.value / 100) * 100}%`,
              }}
            ></div>
          </div>
          <div className="w-12 text-right text-sm text-gray-600 ml-2">{item.value} MW</div>
        </div>
      ))}
    </div>
  )
}
