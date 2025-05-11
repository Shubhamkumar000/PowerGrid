"use client"

import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Dashboard } from "./components/Dashboard"
import { Forecasts } from "./pages/Forecasts"
import { RiskAlerts } from "./pages/RiskAlerts"
import { DataUpload } from "./pages/DataUpload"
import { WeatherImpact } from "./pages/WeatherImpact"
import { BusinessInsights } from "./pages/BusinessInsights"
import { Chatbot } from "./components/Chatbot"
export function App() {
  const [selectedRegion, setSelectedRegion] = useState("Northeast")
  const [timeframe, setTimeframe] = useState("week")
  return (
    <BrowserRouter>
      <Layout
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
      >
        <Routes>
          <Route path="/" element={<Dashboard selectedRegion={selectedRegion} timeframe={timeframe} />} />
          <Route path="/forecasts" element={<Forecasts selectedRegion={selectedRegion} timeframe={timeframe} />} />
          <Route path="/risk-alerts" element={<RiskAlerts selectedRegion={selectedRegion} />} />
          <Route path="/upload" element={<DataUpload />} />
          <Route path="/weather" element={<WeatherImpact />} />
          <Route path="/insights" element={<BusinessInsights />} />
        </Routes>
        <Chatbot />
      </Layout>
    </BrowserRouter>
  )
}
