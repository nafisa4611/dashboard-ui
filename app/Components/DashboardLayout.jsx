"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // bg-bg ensures the Noble theme background covers the whole screen
    <div className="min-h-screen bg-bg flex transition-colors duration-300">
      
      {/* 1. Sidebar */}
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
      />

      {/* 2. Content Area */}
      {/* ml-20 or ml-56 offsets the content so it doesn't hide behind the fixed sidebar */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${collapsed ? "md:ml-20" : "md:ml-56"}`}>
        
        {/* Navbar sits at the top of the content area */}
        <Navbar />

        {/* Main UI / Page Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}