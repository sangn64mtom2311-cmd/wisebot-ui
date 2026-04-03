export default function DashboardOverviewPage() {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-slate-900 dark:text-white text-lg font-bold">Dashboard Overview</h2>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Conversations</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2,543</h3>
            <span className="text-emerald-500 text-sm font-semibold flex items-center">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              12.5%
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Users</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">1,205</h3>
            <span className="text-emerald-500 text-sm font-semibold flex items-center">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              5.2%
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg Response Time</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">1m 42s</h3>
            <span className="text-rose-500 text-sm font-semibold flex items-center">
              <span className="material-symbols-outlined text-sm">trending_down</span>
              8.1%
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Resolution Rate</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">94.2%</h3>
            <span className="text-emerald-500 text-sm font-semibold flex items-center">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              2.4%
            </span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Conversations Over Time</h3>
            <p className="text-slate-500 text-sm mt-1">Daily trend of incoming message volumes</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-2xl font-bold text-slate-900 dark:text-white leading-none">12,840</p>
              <p className="text-emerald-500 text-xs font-semibold mt-1">Last 7 Days (+15.3%)</p>
            </div>
            <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs font-bold py-2 px-3 text-slate-600 dark:text-slate-400 focus:ring-1 focus:ring-primary/30 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
        </div>

        <div className="relative h-64 w-full">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Gradient Area */}
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1337ec" stopOpacity="0.2"></stop>
                <stop offset="100%" stopColor="#1337ec" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path d="M0 80 Q15 20, 30 50 T60 30 T100 10 L100 100 L0 100 Z" fill="url(#chartGradient)"></path>
            {/* Line */}
            <path d="M0 80 Q15 20, 30 50 T60 30 T100 10" fill="none" stroke="#1337ec" strokeLinecap="round" strokeWidth="2"></path>
          </svg>
          {/* Grid lines simulation */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-b border-slate-100 dark:border-slate-800">
            <div className="border-t border-slate-100 dark:border-slate-800/50 w-full"></div>
            <div className="border-t border-slate-100 dark:border-slate-800/50 w-full"></div>
            <div className="border-t border-slate-100 dark:border-slate-800/50 w-full"></div>
            <div className="border-t border-slate-100 dark:border-slate-800/50 w-full"></div>
          </div>
        </div>
        <div className="flex justify-between mt-4 px-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mon</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tue</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Wed</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Thu</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fri</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sat</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sun</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Top Questions</h3>
          <button className="text-primary text-sm font-bold hover:underline">View All</button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Question Category</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Volume</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Change</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-lg">payments</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Billing & Subscription</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">842</td>
              <td className="px-6 py-4">
                <span className="text-emerald-500 text-xs font-bold">+14.2%</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-lg">lock</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Account Security</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">654</td>
              <td className="px-6 py-4">
                <span className="text-rose-500 text-xs font-bold">-2.1%</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-lg">api</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">API Documentation</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">432</td>
              <td className="px-6 py-4">
                <span className="text-emerald-500 text-xs font-bold">+8.5%</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
