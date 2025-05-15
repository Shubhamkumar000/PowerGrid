import React, { useState } from 'react'
import {
  UploadIcon,
  FileIcon,
  CheckCircleIcon,
  XIcon,
  DatabaseIcon,
  RefreshCwIcon,
  CloudLightningIcon,
} from 'lucide-react'
import { parseExcelFile, generateDataStatistics } from '../utils/excelParser'

export const DataUpload = () => {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadHistory, setUploadHistory] = useState<any[]>([])
  const [analyzing, setAnalyzing] = useState(false)
  const [excelData, setExcelData] = useState<any[]>([])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(e.type === 'dragenter' || e.type === 'dragover')
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = async (file: File) => {
    setSelectedFile(file)
    setUploadStatus('idle')
    setUploadProgress(0)
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    setUploadStatus('uploading')
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        simulateProcessing()
      }
    }, 200)
  }

  const simulateProcessing = async () => {
    try {
      setUploadStatus('success')
      setAnalyzing(true)

      const data = await parseExcelFile(selectedFile!)
      setExcelData(data)

      // Simulate 5 seconds of analyzing
      setTimeout(() => {
        setAnalyzing(false)
        // Push to uploadHistory
        setUploadHistory((prev) => [
          {
            id: Date.now(),
            filename: selectedFile!.name,
            date: new Date().toISOString().slice(0, 10),
            status: 'success',
            records: data.length,
            size: `${(selectedFile!.size / (1024 * 1024)).toFixed(2)} MB`,
          },
          ...prev,
        ])
        setSelectedFile(null)
      }, 5000)
    } catch (error) {
      console.error('Error parsing file:', error)
      setUploadStatus('error')
      setAnalyzing(false)
    }
  }

  const renderUploadState = () => {
    if (!selectedFile) {
      return (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
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
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".csv,.json,.xml"
              />
            </label>
            to upload
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Supported formats: CSV, JSON, XML (Max size: 10MB)
          </p>
        </div>
      )
    }

    return (
      <div className="border rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FileIcon className="h-8 w-8 text-blue-500 mr-3" />
          <div className="flex-1">
            <p className="font-medium">{selectedFile.name}</p>
            <p className="text-sm text-gray-500">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600" onClick={() => setSelectedFile(null)}>
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {uploadStatus === 'idle' && (
          <button className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700" onClick={handleUpload}>
            Upload File
          </button>
        )}

        {uploadStatus === 'uploading' && (
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Uploading...</span>
              <span>{uploadProgress}%</span>
            </div>
          </div>
        )}

        {uploadStatus === 'success' && analyzing && (
          <div className="text-yellow-600 mt-2 font-medium animate-pulse">Analyzing file...</div>
        )}

        {uploadStatus === 'success' && !analyzing && (
          <div className="flex items-center text-green-600 mt-2">
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            <span>Data processing done!</span>
          </div>
        )}

        {uploadStatus === 'error' && (
          <div className="flex items-center text-red-600 mt-2">
            <XIcon className="h-5 w-5 mr-2" />
            <span>Upload failed. Please try again.</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">File Upload</h2>
          {renderUploadState()}
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
                {item.status === 'success' ? (
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
            { name: 'Load API', type: 'Real-time', status: 'Connected', icon: DatabaseIcon },
            { name: 'Weather Service', type: 'API', status: 'Connected', icon: CloudLightningIcon },
            { name: 'Historical Database', type: 'Database', status: 'Connected', icon: DatabaseIcon },
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
