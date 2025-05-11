"use client";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing Page Components
import { NavBar } from "./Lacomponents/NavBar";
import { HeroSection } from "./Lacomponents/HeroSection";
import { ParticleBackground } from "./Lacomponents/ParticleBackground";
import { PowerGridSection } from "./Lacomponents/PowerGridSection";
import { BenefitsSection } from "./Lacomponents/BenefitsSection";
import { FooterSection } from "./Lacomponents/FooterSection";

// Dashboard & Pages
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Forecasts } from "./pages/Forecasts";
import { RiskAlerts } from "./pages/RiskAlerts";
import { DataUpload } from "./pages/DataUpload";
import { WeatherImpact } from "./pages/WeatherImpact";
import { BusinessInsights } from "./pages/BusinessInsights";
import { Chatbot } from "./components/Chatbot";

export function App() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("Northeast");
  const [timeframe, setTimeframe] = useState("week");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <div className="relative w-full bg-black text-white overflow-hidden">
              <ParticleBackground />
              <NavBar />
              <main>
                <HeroSection scrollY={scrollY} />
                <PowerGridSection />
                <BenefitsSection />
              </main>
              <FooterSection />
            </div>
          }
        />

        {/* Dashboard and other pages */}
        <Route
          path="/dashboard"
          element={
            <Layout
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              timeframe={timeframe}
              setTimeframe={setTimeframe}
            >
              <Dashboard
                selectedRegion={selectedRegion}
                timeframe={timeframe}
              />
              <Chatbot />
            </Layout>
          }
        />
        <Route
          path="/forecasts"
          element={
            <Forecasts
              selectedRegion={selectedRegion}
              timeframe={timeframe}
            />
          }
        />
        <Route
          path="/risk-alerts"
          element={<RiskAlerts selectedRegion={selectedRegion} />}
        />
        <Route path="/upload" element={<DataUpload />} />
        <Route path="/weather" element={<WeatherImpact />} />
        <Route path="/insights" element={<BusinessInsights />} />
      </Routes>
    </BrowserRouter>
  );
}
