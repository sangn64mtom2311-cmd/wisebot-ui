"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { name: "Knowledge Base", href: "/dashboard/knowledge-base", icon: "database" },
  { name: "Chatbot Playground", href: "/dashboard/chatbot", icon: "forum" },
  { name: "Widget Customization", href: "/dashboard/widget", icon: "palette" },
  { name: "Analytics", href: "/dashboard/analytics", icon: "bar_chart" },
  { name: "Team Management", href: "/dashboard/team", icon: "group" },
  { name: "API Keys", href: "/dashboard/api-keys", icon: "key" },
  { name: "Billing", href: "/dashboard/billing", icon: "credit_card" },
  { name: "Settings", href: "/dashboard/settings", icon: "settings" },
];

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0 overflow-y-auto relative">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <div>
              <h1 className="text-sm font-bold">AI Platform</h1>
              <p className="text-xs text-slate-500">Workspace Admin</p>
            </div>
          </div>
          {onClose && (
            <button
              className="lg:hidden p-2 -mr-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={onClose}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>
        <nav className="space-y-1 flex-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg group transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary"
                }`}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
