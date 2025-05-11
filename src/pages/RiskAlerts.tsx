"use client"

import { useState } from "react"
import { AlertTriangleIcon, BellIcon, CheckCircleIcon, XCircleIcon, FilterIcon } from "lucide-react"
interface RiskAlertsProps {
  selectedRegion: string
}
export const RiskAlerts = ({ selectedRegion }: RiskAlertsProps) => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const alerts = [
    {
      id: 1,
      title: "Critical Peak Load Warning",
      message: `${selectedRegion} region predicted to exceed 95% capacity tomorrow between 2-4 PM.`,
      severity: "high",
      status: "active",
      time: "10 mins ago",
      actions: ["Notify operators", "Activate demand response", "Review backup capacity"],
    },
    {
      id: 2,
      title: "Weather Impact Alert",
      message: "Incoming heatwave expected to increase demand by 20% over the next 48 hours.",
      severity: "medium",
      status: "active",
      time: "1 hour ago",
      actions: ["Monitor temperatures", "Update forecast models"],
    },
    {
      id: 3,
      title: "Grid Stability Notice",
      message: "Frequency fluctuations detected in the northern sector.",
      severity: "low",
      status: "resolved",
      time: "2 hours ago",
      actions: ["Check equipment status", "Log incident report"],
    },
  ]
  const filteredAlerts = alerts.filter(
    (alert) =>
      (selectedSeverity === "all" || alert.severity === selectedSeverity) &&
      (selectedStatus === "all" || alert.status === selectedStatus),
  )
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-50"
      case "medium":
        return "text-yellow-600 bg-yellow-50"
      default:
        return "text-blue-600 bg-blue-50"
    }
  }
  const getStatusColor = (status: string) => {
    return status === "active" ? "text-red-600" : "text-green-600"
  }
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-red-50 border border-red-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-600 text-sm font-medium">High Priority</p>
              <h3 className="text-2xl font-bold text-red-700 mt-1">3</h3>
            </div>
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangleIcon className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-600 text-sm font-medium">Medium Priority</p>
              <h3 className="text-2xl font-bold text-yellow-700 mt-1">5</h3>
            </div>
            <div className="bg-yellow-100 p-2 rounded-lg">
              <BellIcon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Low Priority</p>
              <h3 className="text-2xl font-bold text-blue-700 mt-1">8</h3>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <BellIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Resolved Today</p>
              <h3 className="text-2xl font-bold text-green-700 mt-1">12</h3>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Alert Management</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FilterIcon className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="border rounded-md px-2 py-1 text-sm bg-white"
                >
                  <option value="all">All Severities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="border rounded-md px-2 py-1 text-sm bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y">
          {filteredAlerts.map((alert) => (
            <div key={alert.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className={`flex items-center text-sm ${getStatusColor(alert.status)}`}>
                      {alert.status === "active" ? (
                        <AlertTriangleIcon className="h-4 w-4 mr-1" />
                      ) : (
                        <CheckCircleIcon className="h-4 w-4 mr-1" />
                      )}
                      {alert.status.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">{alert.time}</span>
                  </div>
                  <h3 className="text-lg font-medium mt-2">{alert.title}</h3>
                  <p className="text-gray-600 mt-1">{alert.message}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {alert.actions.map((action, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <XCircleIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
