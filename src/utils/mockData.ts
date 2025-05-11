// Generate mock data for the dashboard based on region and timeframe
export function generateMockData(region: string, timeframe: string) {
  // Generate demand data
  const demandData = generateDemandData(timeframe)
  // Generate weather impact data
  const weatherImpactData = generateWeatherImpactData(timeframe)
  // Generate peak load data
  const peakLoadData = generatePeakLoadData(region)
  // Generate renewable data
  const renewableData = generateRenewableData(region)
  // Generate heatmap data
  const heatmapData = generateHeatmapData()
  // Generate alerts
  const alerts = generateAlerts(region)
  return {
    demandData,
    weatherImpactData,
    peakLoadData,
    renewableData,
    heatmapData,
    alerts,
  }
}
// Helper functions to generate specific data types
function generateDemandData(timeframe: string) {
  const points = timeframe === "day" ? 24 : timeframe === "week" ? 7 : timeframe === "month" ? 30 : 12
  const data: { time: string; actual: number; forecast: number }[] = []
  for (let i = 0; i < points; i++) {
    const time =
      timeframe === "day"
        ? `${i}:00`
        : timeframe === "week"
          ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i % 7]
          : timeframe === "month"
            ? `Day ${i + 1}`
            : `Month ${i + 1}`
    const baseline = 5000 + Math.random() * 3000
    const variation = Math.random() * 800 - 400
    data.push({
      time,
      actual: Math.round(baseline),
      forecast: Math.round(baseline + variation),
    })
  }
  return data
}
function generateWeatherImpactData(timeframe: string) {
  const points = timeframe === "day" ? 12 : timeframe === "week" ? 7 : timeframe === "month" ? 15 : 12
  const data: { time: string; temperature: number; demand: number }[] = []
  for (let i = 0; i < points; i++) {
    const time =
      timeframe === "day"
        ? `${i * 2}:00`
        : timeframe === "week"
          ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i % 7]
          : timeframe === "month"
            ? `Day ${i * 2}`
            : `Month ${i + 1}`
    const temperature = Math.round(65 + Math.random() * 30)
    const demand = Math.round(4000 + (temperature - 65) * 50 + Math.random() * 800)
    data.push({
      time,
      temperature,
      demand,
    })
  }
  return data
}
function generatePeakLoadData(region: string) {
  // Different regions have different risk profiles
  const regionRiskMap: Record<string, "low" | "medium" | "high"> = {
    Northeast: "high",
    Southeast: "medium",
    Midwest: "low",
    Southwest: "medium",
    West: "high",
  }
  const capacity = 10000
  const current = Math.round(5000 + Math.random() * 2000)
  const riskLevel = regionRiskMap[region] || "medium"
  let predicted
  if (riskLevel === "high") {
    predicted = Math.round(capacity * (0.85 + Math.random() * 0.15))
  } else if (riskLevel === "medium") {
    predicted = Math.round(capacity * (0.7 + Math.random() * 0.15))
  } else {
    predicted = Math.round(capacity * (0.5 + Math.random() * 0.2))
  }
  return {
    current,
    predicted,
    capacity,
    riskLevel,
  }
}
function generateRenewableData(region: string) {
  // Different regions have different renewable mixes
  const regionRenewableMap: Record<string, number> = {
    Northeast: 35,
    Southeast: 20,
    Midwest: 30,
    Southwest: 45,
    West: 60,
  }
  const percentage = regionRenewableMap[region] || 30
  const sources = [
    {
      name: "Solar",
      value: Math.round(percentage * (0.3 + Math.random() * 0.4)),
    },
    {
      name: "Wind",
      value: Math.round(percentage * (0.2 + Math.random() * 0.3)),
    },
    {
      name: "Hydro",
      value: Math.round(percentage * (0.1 + Math.random() * 0.2)),
    },
    {
      name: "Biomass",
      value: Math.round(percentage * (0.05 + Math.random() * 0.1)),
    },
  ]
  // Normalize to make sure they sum to the percentage
  const sum = sources.reduce((acc, source) => acc + source.value, 0)
  sources.forEach((source) => {
    source.value = Math.round((source.value / sum) * percentage)
  })
  return {
    percentage,
    sources,
  }
}
function generateHeatmapData() {
  const regions = ["Urban Center", "Suburbs", "Industrial", "Rural", "Coastal"]
  return regions.map((region) => ({
    region,
    value: Math.round(20 + Math.random() * 80),
  }))
}
function generateAlerts(region: string) {
  const alertPool = [
    {
      title: "Potential Peak Load Risk",
      message: `${region} may exceed 90% capacity during evening hours tomorrow.`,
      time: "10 mins ago",
      severity: "high",
    },
    {
      title: "Weather Alert",
      message: "Heatwave predicted to increase demand by 15% next week.",
      time: "30 mins ago",
      severity: "medium",
    },
    {
      title: "Renewable Generation Drop",
      message: "Wind generation expected to decrease due to calm conditions.",
      time: "1 hour ago",
      severity: "medium",
    },
    {
      title: "Maintenance Scheduled",
      message: "Grid maintenance scheduled for next Tuesday, 2am-4am.",
      time: "3 hours ago",
      severity: "low",
    },
  ]
  // Return 2-4 random alerts
  const count = 2 + Math.floor(Math.random() * 3)
  const shuffled = [...alertPool].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
