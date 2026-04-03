import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <div>
              <h1 className="text-sm font-bold">AI Platform</h1>
              <p className="text-xs text-slate-500">Workspace Admin</p>
            </div>
          </div>
          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">dashboard</span>
              Dashboard
            </Link>
            <Link href="/dashboard/knowledge-base" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">database</span>
              Knowledge Base
            </Link>
            <Link href="/dashboard/chatbot" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">forum</span>
              Chatbot Playground
            </Link>
            <Link href="/dashboard/widget" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">palette</span>
              Widget Customization
            </Link>
            <Link href="/dashboard/analytics" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">bar_chart</span>
              Analytics
            </Link>
            <Link href="/dashboard/team" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">group</span>
              Team Management
            </Link>
            <Link href="/dashboard/api-keys" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">key</span>
              API Keys
            </Link>
            <Link href="/dashboard/billing" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">credit_card</span>
              Billing
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">settings</span>
              Settings
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white placeholder:text-slate-500"
                placeholder="Global search..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg cursor-pointer">
              <span className="text-xs font-medium">Internal Workspace</span>
              <span className="material-symbols-outlined text-lg">unfold_more</span>
            </div>
            <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center cursor-pointer" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALFiyQCjPDo_T3LPOmDPKFMczgJF98waR_Vqv_EaktiYU2aihAKnvU7btAea_Bq8HUXoTq2B0FBrdfWJSECwryoybmNGRQT_2POOIa5-SC3VCM3TFF-sgdG5i6fxoJt9OvkIAFan0zYV0cKoOkoL5KANSr7VqFxghpAbFeGNoSjHnfkvfdFWu-4bpOR1ZykOZTLOJFveMUUFBg34IKJ-aenTmKKdZ1Fc_9knxDVANcUtR4BfTW_3su2h5BN4WEXJSAK2_boqNnI8')" }}></div>
          </div>
        </header>

        {/* Dashboard Body */}
        {children}
      </div>
    </div>
  );
}
