import * as XLSX from "xlsx"
export interface ExcelData {
  date: string
  region: string
  demand: number
  temperature: number
  renewable: number
}
export const parseExcelFile = (file: File): Promise<ExcelData[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = e.target?.result
        const workbook = XLSX.read(data, {
          type: "binary",
        })
        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        const parsedData: ExcelData[] = jsonData.map((row: any) => ({
          date: row.Date || "",
          region: row.Region || "",
          demand: Number.parseFloat(row.Demand) || 0,
          temperature: Number.parseFloat(row.Temperature) || 0,
          renewable: Number.parseFloat(row.Renewable) || 0,
        }))
        resolve(parsedData)
      } catch (error) {
        reject(error)
      }
    }
    reader.onerror = (error) => reject(error)
    reader.readAsBinaryString(file)
  })
}
export const generateDataStatistics = (data: ExcelData[]) => {
  const totalDemand = data.reduce((sum, row) => sum + row.demand, 0)
  const avgDemand = totalDemand / data.length
  const maxDemand = Math.max(...data.map((row) => row.demand))
  const minDemand = Math.min(...data.map((row) => row.demand))
  const avgTemperature = data.reduce((sum, row) => sum + row.temperature, 0) / data.length
  const avgRenewable = data.reduce((sum, row) => sum + row.renewable, 0) / data.length
  return {
    totalRecords: data.length,
    avgDemand,
    maxDemand,
    minDemand,
    avgTemperature,
    avgRenewable,
    uniqueRegions: [...new Set(data.map((row) => row.region))].length,
  }
}
