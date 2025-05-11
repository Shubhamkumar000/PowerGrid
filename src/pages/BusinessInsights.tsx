import {
  TrendingUpIcon,
  LineChartIcon,
  LightbulbIcon,
  BarChart3Icon,
  ArrowUpIcon,
  BatteryChargingIcon,
} from "lucide-react"
export const BusinessInsights = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Business Insights & Benefits</h1>
        <p className="text-lg opacity-90">Transform your energy management strategy with data-driven decisions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Cost Optimization",
            description:
              "Reduce operational costs by up to 25% through precise demand forecasting and optimal resource allocation.",
            icon: TrendingUpIcon,
            metric: "25%",
            subtext: "Average Cost Reduction",
          },
          {
            title: "Peak Load Management",
            description: "Prevent overloading and reduce peak demand charges with accurate load predictions.",
            icon: LineChartIcon,
            metric: "30%",
            subtext: "Peak Load Reduction",
          },
          {
            title: "Renewable Integration",
            description: "Optimize renewable energy usage and reduce carbon footprint with weather-aware forecasting.",
            icon: BatteryChargingIcon,
            metric: "40%",
            subtext: "Renewable Usage Increase",
          },
          {
            title: "Operational Efficiency",
            description: "Improve grid stability and reduce maintenance costs through predictive analytics.",
            icon: BarChart3Icon,
            metric: "20%",
            subtext: "Efficiency Improvement",
          },
          {
            title: "Revenue Growth",
            description: "Increase revenue through optimized energy trading and demand response programs.",
            icon: ArrowUpIcon,
            metric: "15%",
            subtext: "Revenue Increase",
          },
          {
            title: "Smart Decisions",
            description: "Make informed decisions with AI-powered insights and real-time analytics.",
            icon: LightbulbIcon,
            metric: "50%",
            subtext: "Faster Decision Making",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="border-t pt-4">
              <div className="text-2xl font-bold text-blue-600">{item.metric}</div>
              <div className="text-sm text-gray-500">{item.subtext}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Maximize Your Business Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Recommended Actions</h3>
            <ul className="space-y-3">
              {[
                "Implement peak load shifting strategies",
                "Optimize renewable energy integration",
                "Develop demand response programs",
                "Upgrade to smart grid technologies",
                "Establish real-time monitoring systems",
              ].map((action, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-600 text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{action}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Expected Outcomes</h3>
            <div className="space-y-4">
              {[
                {
                  label: "Cost Savings",
                  value: 85,
                },
                {
                  label: "Operational Efficiency",
                  value: 92,
                },
                {
                  label: "Customer Satisfaction",
                  value: 78,
                },
                {
                  label: "Environmental Impact",
                  value: 88,
                },
              ].map((outcome, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">{outcome.label}</span>
                    <span className="text-sm text-gray-500">{outcome.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{
                        width: `${outcome.value}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
