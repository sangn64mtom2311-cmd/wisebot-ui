"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (!token) {
        router.push("/sign-in");
      } else {
        setIsLoading(false);
      }
    }
  }, [router]);

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark">Loading...</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden text-slate-900 dark:text-slate-100 relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-50 transform lg:transform-none lg:static transition-transform duration-200 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-4 lg:px-6 shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-2 lg:gap-4 flex-1 max-w-xl">
            <button
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white placeholder:text-slate-500"
                placeholder="Global search..."
                type="text"
              />
            </div>
            {/* Mobile search icon only */}
            <button className="sm:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 ml-2 lg:ml-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg cursor-pointer">
              <span className="text-xs font-medium truncate max-w-[100px] lg:max-w-none">Internal Workspace</span>
              <span className="material-symbols-outlined text-lg">unfold_more</span>
            </div>
            <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center cursor-pointer shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALFiyQCjPDo_T3LPOmDPKFMczgJF98waR_Vqv_EaktiYU2aihAKnvU7btAea_Bq8HUXoTq2B0FBrdfWJSECwryoybmNGRQT_2POOIa5-SC3VCM3TFF-sgdG5i6fxoJt9OvkIAFan0zYV0cKoOkoL5KANSr7VqFxghpAbFeGNoSjHnfkvfdFWu-4bpOR1ZykOZTLOJFveMUUFBg34IKJ-aenTmKKdZ1Fc_9knxDVANcUtR4BfTW_3su2h5BN4WEXJSAK2_boqNnI8')" }}></div>
          </div>
        </header>

        {/* Dashboard Body */}
        {children}
      </div>
    </div>
  );
}
