"use client"

import type React from "react"
import { useState } from "react"
import {
  UploadIcon,
  FileIcon,
  CheckCircleIcon,
  XIcon,
  DatabaseIcon,
  RefreshCwIcon,
  CloudLightningIcon,
} from "lucide-react"
import { parseExcelFile, generateDataStatistics } from "../utils/excelParser"
export const DataUpload = () => {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadHistory] = useState([
    {
      id: 1,
      filename: "june_2023_demand.csv",
      date: "2023-06-15",
      status: "success",
      records: 720,
      size: "1.2 MB",
    },
    {
      id: 2,
      filename: "weather_data_q2.json",
      date: "2023-06-14",
      status: "success",
      records: 2160,
      size: "3.4 MB",
    },
    {
      id: 3,
      filename: "may_2023_demand.csv",
      date: "2023-05-31",
      status: "error",
      records: 0,
      size: "1.1 MB",
    },
  ])
  const [excelData, setExcelData] = useState<any[]>([])
  const [statistics, setStatistics] = useState<any>(null)
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      handleFile(file)
    }
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      handleFile(file)
    }
  }
  const handleFile = async (file: File) => {
    setSelectedFile(file)
    setUploadStatus("idle")
    setUploadProgress(0)
    try {
      const data = await parseExcelFile(file)
      setExcelData(data)
      setStatistics(generateDataStatistics(data))
      setUploadStatus("success")
    } catch (error) {
      setUploadStatus("error")
      console.error("Error parsing file:", error)
    }
  }
  const handleUpload = () => {
    if (!selectedFile) return
    setUploadStatus("uploading")
    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setUploadStatus("success")
      }
    }, 300)
  }
  const renderUploadState = () => {
    if (!selectedFile) {
      return (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your files here, or
            <label className="mx-1 text-blue-600 hover:text-blue-500 cursor-pointer">
              browse
              <input type="file" className="hidden" onChange={handleFileChange} accept=".csv,.json,.xml" />
            </label>
            to upload
          </p>
          <p className="mt-1 text-xs text-gray-500">Supported formats: CSV, JSON, XML (Max size: 10MB)</p>
        </div>
      )
    }
    return (
      <div className="border rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FileIcon className="h-8 w-8 text-blue-500 mr-3" />
          <div className="flex-1">
            <p className="font-medium">{selectedFile.name}</p>
            <p className="text-sm text-gray-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600" onClick={() => setSelectedFile(null)}>
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        {uploadStatus === "idle" && (
          <button
            className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
            onClick={handleUpload}
          >
            Upload File
          </button>
        )}
        {uploadStatus === "uploading" && (
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{
                  width: `${uploadProgress}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Uploading...</span>
              <span>{uploadProgress}%</span>
            </div>
          </div>
        )}
        {uploadStatus === "success" && (
          <div className="flex items-center text-green-600">
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            <span>Upload successful! Data is being processed.</span>
          </div>
        )}
        {uploadStatus === "error" && (
          <div className="flex items-center text-red-600">
            <XIcon className="h-5 w-5 mr-2" />
            <span>Upload failed. Please try again.</span>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">File Upload</h2>
          {renderUploadState()}
          {statistics && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Data Statistics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Total Records</p>
                  <p className="text-lg font-semibold">{statistics.totalRecords}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Demand</p>
                  <p className="text-lg font-semibold">{statistics.avgDemand.toFixed(2)} MW</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Max Demand</p>
                  <p className="text-lg font-semibold">{statistics.maxDemand.toFixed(2)} MW</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Min Demand</p>
                  <p className="text-lg font-semibold">{statistics.minDemand.toFixed(2)} MW</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">API Integration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">API Endpoint</label>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm"
                  value="https://api.powerpredict.com/v1/data"
                  readOnly
                />
                <button className="bg-gray-100 border border-l-0 border-gray-300 px-3 rounded-r-md hover:bg-gray-200">
                  Copy
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">API Key</label>
              <div className="flex">
                <input
                  type="password"
                  className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm"
                  value="••••••••••••••••"
                  readOnly
                />
                <button className="bg-gray-100 border border-l-0 border-gray-300 px-3 rounded-r-md hover:bg-gray-200">
                  Show
                </button>
              </div>
            </div>
            <div className="pt-2">
              <button className="w-full bg-blue-600 text-white rounded-md px-4 py-2 text-sm hover:bg-blue-700">
                Generate New API Key
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Upload History</h2>
        </div>
        <div className="divide-y">
          {uploadHistory.map((item) => (
            <div key={item.id} className="p-4 flex items-center">
              <div className="flex-shrink-0">
                {item.status === "success" ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <XIcon className="h-5 w-5 text-red-500" />
                )}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileIcon className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">{item.filename}</span>
                  </div>
                  <div className="text-sm text-gray-500">{item.date}</div>
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <span className="mr-4">{item.records} records</span>
                  <span>{item.size}</span>
                </div>
              </div>
              <div className="ml-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <RefreshCwIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Data Sources</h2>
          <button className="text-sm text-blue-600 hover:text-blue-500">Add New Source</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Main Grid Sensors",
              type: "Real-time",
              status: "Connected",
              icon: DatabaseIcon,
            },
            {
              name: "Weather Service",
              type: "API",
              status: "Connected",
              icon: CloudLightningIcon,
            },
            {
              name: "Historical Database",
              type: "Database",
              status: "Connected",
              icon: DatabaseIcon,
            },
          ].map((source, index) => (
            <div key={index} className="border rounded-lg p-4 flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <source.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{source.name}</h3>
                <p className="text-sm text-gray-500">{source.type}</p>
                <span className="inline-flex items-center px-2 py-0.5 mt-2 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {source.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
