import { AlertTriangleIcon } from "lucide-react"
interface PeakLoadCardProps {
  data: {
    current: number
    predicted: number
    capacity: number
    riskLevel: "low" | "medium" | "high"
  }
}
export const PeakLoadCard = ({ data }: PeakLoadCardProps) => {
  const { current, predicted, capacity, riskLevel } = data
  const usagePercentage = (predicted / capacity) * 100
  const getRiskColor = () => {
    if (riskLevel === "high") return "text-red-600"
    if (riskLevel === "medium") return "text-yellow-600"
    return "text-green-600"
  }
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Peak Load Prediction</h2>
        <div className={`flex items-center ${getRiskColor()}`}>
          <AlertTriangleIcon className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium capitalize">{riskLevel} Risk</span>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Current Load</span>
            <span className="font-medium">{current} MW</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: `${(current / capacity) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Predicted Peak</span>
            <span className="font-medium">{predicted} MW</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${usagePercentage > 90 ? "bg-red-500" : usagePercentage > 75 ? "bg-yellow-500" : "bg-green-500"}`}
              style={{
                width: `${usagePercentage}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between pt-1 text-sm">
          <span className="text-gray-600">Grid Capacity</span>
          <span className="font-medium">{capacity} MW</span>
        </div>
      </div>
    </div>
  )
}
