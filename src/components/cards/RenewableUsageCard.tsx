interface RenewableUsageCardProps {
  data: {
    percentage: number
    sources: Array<{
      name: string
      value: number
    }>
  }
}
export const RenewableUsageCard = ({ data }: RenewableUsageCardProps) => {
  const { percentage, sources } = data
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Renewable Energy Mix</h2>
      <div className="flex items-center justify-center mb-4">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4ade80"
              strokeWidth="3"
              strokeDasharray={`${percentage}, 100`}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-3xl font-bold">{percentage}%</div>
            <div className="text-xs text-gray-500">Renewable</div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {sources.map((source, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor:
                  source.name === "Solar"
                    ? "#fbbf24"
                    : source.name === "Wind"
                      ? "#60a5fa"
                      : source.name === "Hydro"
                        ? "#38bdf8"
                        : "#34d399",
              }}
            ></div>
            <span className="text-sm text-gray-700">{source.name}</span>
            <div className="flex-1 mx-2 h-1 bg-gray-200 rounded-full">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${source.value}%`,
                  backgroundColor:
                    source.name === "Solar"
                      ? "#fbbf24"
                      : source.name === "Wind"
                        ? "#60a5fa"
                        : source.name === "Hydro"
                          ? "#38bdf8"
                          : "#34d399",
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{source.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
