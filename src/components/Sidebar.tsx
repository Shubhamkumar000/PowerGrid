import { Link, useLocation } from "react-router-dom"
import {
  HomeIcon,
  BarChartIcon,
  CloudLightningIcon,
  UploadIcon,
  AlertTriangleIcon,
  SettingsIcon,
  HelpCircleIcon,
  LightbulbIcon, // You can choose a different icon if preferred
} from "lucide-react"

export const Sidebar = () => {
  const location = useLocation()
  const menuItems = [
    {
      icon: HomeIcon,
      label: "Dashboard",
      path: "/",
    },
    {
      icon: BarChartIcon,
      label: "Forecasts",
      path: "/forecasts",
    },
    {
      icon: CloudLightningIcon,
      label: "Weather Impact",
      path: "/weather",
    },
    {
      icon: UploadIcon,
      label: "Data Upload",
      path: "/upload",
    },
    {
      icon: AlertTriangleIcon,
      label: "Risk Alerts",
      path: "/risk-alerts",
    },
    {
      icon: LightbulbIcon, // Icon for Business Insights
      label: "Business Insights",
      path: "/insights",
    },
    {
      icon: SettingsIcon,
      label: "Settings",
      path: "/settings",
    },
    {
      icon: HelpCircleIcon,
      label: "Help",
      path: "/help",
    },
  ]

  return (
    <aside className="w-16 md:w-64 bg-white border-r shadow-sm">
      <div className="flex items-center justify-center md:justify-start h-16 border-b px-4">
        <div className="flex items-center space-x-2">
          <CloudLightningIcon className="h-8 w-8 text-blue-600" />
          <span className="hidden md:inline text-xl font-bold">PowerPredict</span>
        </div>
      </div>
      <nav className="mt-6 px-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-4 py-3 mb-2 rounded-lg text-sm ${
              location.pathname === item.path
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden md:inline ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
