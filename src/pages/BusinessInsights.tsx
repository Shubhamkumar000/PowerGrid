import React from 'react'
import {
  TrendingUpIcon,
  LineChartIcon,
  LightbulbIcon,
  BarChart3Icon,
  ArrowUpIcon,
  BatteryChargingIcon,
  ZapIcon,
  SunIcon,
  CloudRainIcon,
  FactoryIcon,
  BuildingIcon,
  HomeIcon,
  AlertTriangleIcon,
  CalendarIcon,
  MapPinIcon,
  InfoIcon,
  DollarSignIcon,
  ActivityIcon,
  ShieldIcon,
  BriefcaseIcon,
} from 'lucide-react'
export const BusinessInsights = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">
            Business Insights & Benefits
          </h1>
          <p className="text-lg opacity-90">
            Transform India's energy management strategy with AI-powered
            electricity demand forecasting
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Cost Optimization',
              description:
                'Reduce operational costs by up to 25% through precise demand forecasting and optimal resource allocation across Indian power grids.',
              icon: TrendingUpIcon,
              metric: '25%',
              subtext: 'Average Cost Reduction',
            },
            {
              title: 'Peak Load Management',
              description:
                "Prevent overloading and reduce peak demand charges with accurate load predictions, critical during India's extreme seasonal demands.",
              icon: LineChartIcon,
              metric: '30%',
              subtext: 'Peak Load Reduction',
            },
            {
              title: 'Renewable Integration',
              description:
                'Optimize solar and wind energy usage across diverse Indian regions with weather-aware forecasting for a greener power grid.',
              icon: BatteryChargingIcon,
              metric: '40%',
              subtext: 'Renewable Usage Increase',
            },
            {
              title: 'Grid Stability',
              description:
                "Improve stability across India's varied regional grids and reduce maintenance costs through predictive analytics.",
              icon: BarChart3Icon,
              metric: '20%',
              subtext: 'Efficiency Improvement',
            },
            {
              title: 'Revenue Growth',
              description:
                'Increase revenue through optimized energy trading between states and participation in national demand response programs.',
              icon: ArrowUpIcon,
              metric: '15%',
              subtext: 'Revenue Increase',
            },
            {
              title: 'Smart Decisions',
              description:
                "Make informed decisions with AI-powered insights tailored to India's unique energy landscape and consumption patterns.",
              icon: LightbulbIcon,
              metric: '50%',
              subtext: 'Faster Decision Making',
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
                <div className="text-2xl font-bold text-blue-600">
                  {item.metric}
                </div>
                <div className="text-sm text-gray-500">{item.subtext}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">
            Past Experience: Summer Grid Stress in Northern India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="max-w-md w-full">
              <div className="flex items-start mb-4">
                <MapPinIcon className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">States Affected</h3>
                  <p className="text-gray-700">
                    Uttar Pradesh, Haryana, Delhi, Punjab
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <CalendarIcon className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">2023 Data</h3>
                  <p className="text-gray-700">
                    Northern region peak demand hit 85 GW in June — highest in a
                    decade.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangleIcon className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Blackouts</h3>
                  <p className="text-gray-700">
                    UP and Haryana rural feeders experienced 6–8 hour outages.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-md w-full">
              <div className="flex items-start mb-4">
                <DollarSignIcon className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Economic Impact</h3>
                  <p className="text-gray-700">
                    ₹1,200 crore estimated losses to industries and agriculture
                    sector due to power interruptions.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <ActivityIcon className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Technical Details</h3>
                  <p className="text-gray-700">
                    Grid frequency dropped to critical 48.7 Hz during peak
                    hours, with 15% transmission line overloading.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldIcon className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Emergency Response</h3>
                  <p className="text-gray-700">
                    Emergency power purchases from eastern grid at ₹12/unit; 20%
                    industrial load shedding implemented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Regional Demand Insights
            </h2>
            <div className="space-y-4">
              {[
                {
                  region: 'Northern India',
                  icon: SunIcon,
                  insights:
                    'High summer cooling demand, agricultural pumping loads',
                  recommendation:
                    'Focus on solar integration and evening peak management',
                },
                {
                  region: 'Southern India',
                  icon: FactoryIcon,
                  insights:
                    'Industrial load dominance, consistent year-round demand',
                  recommendation:
                    'Implement industrial load scheduling and incentives',
                },
                {
                  region: 'Eastern India',
                  icon: CloudRainIcon,
                  insights: 'Monsoon seasonality, rural electrification growth',
                  recommendation: 'Develop weather-adaptive forecasting models',
                },
                {
                  region: 'Western India',
                  icon: BuildingIcon,
                  insights: 'Urban centers, commercial load patterns',
                  recommendation: 'Target commercial demand response programs',
                },
                {
                  region: 'Northeast',
                  icon: HomeIcon,
                  insights:
                    'Low population density, growing residential demand',
                  recommendation:
                    'Focus on grid extension and localized forecasting',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start border-b border-gray-100 pb-3 last:border-0"
                >
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.region}</h3>
                    <p className="text-sm text-gray-600">{item.insights}</p>
                    <p className="text-sm text-blue-600 mt-1">
                      {item.recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Maximize Grid Impact</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">
                  Recommended Actions
                </h3>
                <ul className="space-y-3">
                  {[
                    'Implement state-specific peak load shifting strategies',
                    'Optimize solar and wind integration for regional weather patterns',
                    'Develop cross-state demand response programs',
                    'Upgrade to smart grid technologies across urban centers',
                    'Establish real-time monitoring systems for rural electrification',
                  ].map((action, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <span className="text-blue-600 text-sm">
                          {index + 1}
                        </span>
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
                      label: 'Cost Savings',
                      value: 85,
                    },
                    {
                      label: 'Grid Reliability',
                      value: 92,
                    },
                    {
                      label: 'Rural Electrification',
                      value: 78,
                    },
                    {
                      label: 'Environmental Impact',
                      value: 88,
                    },
                  ].map((outcome, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-600">
                          {outcome.label}
                        </span>
                        <span className="text-sm text-gray-500">
                          {outcome.value}%
                        </span>
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
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">
            AI Forecasting Impact on Indian Power Sector
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Blackout Prevention',
                description:
                  'Reduction in unplanned outages through accurate forecasting',
                icon: ZapIcon,
              },
              {
                title: 'Renewable Adoption',
                description:
                  'Increased integration of solar and wind energy sources',
                icon: SunIcon,
              },
              {
                title: 'Resource Optimization',
                description:
                  'Average annual savings for mid-sized distribution company',
                icon: TrendingUpIcon,
              },
              {
                title: 'Carbon Reduction',
                description: 'Tons of CO₂ emissions avoided annually',
                icon: BatteryChargingIcon,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-5 text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-blue-100 mb-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mt-6">
  <h2 className="text-xl font-semibold mb-4">
    Past Experience: Summer Grid Stress in Northern India
  </h2>
  <div className="space-y-3 text-gray-700">
    <p>
      <strong>States Affected:</strong> Uttar Pradesh, Haryana, Delhi, Punjab
    </p>
    <p>
      <strong>2023 Data:</strong> Northern region peak demand hit <span className="font-bold text-blue-600">85 GW</span> in June — highest in a decade.
    </p>
    <p>
      <strong>Blackouts:</strong> UP and Haryana rural feeders experienced <span className="font-bold text-red-600">6–8 hour outages</span>.
    </p>
    <p>
      <strong>Cause:</strong> Poor demand anticipation, delayed coal transport, and transformer overheating.
    </p>
  </div>
</div>

    </div>
  )
}
