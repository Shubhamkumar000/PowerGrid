import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
interface LayoutProps {
  children: ReactNode
  selectedRegion: string
  setSelectedRegion: (region: string) => void
  timeframe: string
  setTimeframe: (timeframe: string) => void
}
export const Layout = ({ children, selectedRegion, setSelectedRegion, timeframe, setTimeframe }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          timeframe={timeframe}
          setTimeframe={setTimeframe}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
