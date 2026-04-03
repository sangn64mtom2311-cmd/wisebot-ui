export default function AnalyticsPage() {
  return (
    <main className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Analytics Overview</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Real-time performance metrics for your AI assistants.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex p-1 shadow-sm">
              <button className="px-4 py-1.5 text-xs font-bold bg-primary text-white rounded-md">30 Days</button>
              <button className="px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">7 Days</button>
              <button className="px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">24 Hours</button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold shadow-sm">
              <span className="material-symbols-outlined text-sm">download</span>
              Export
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversation Volume */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Conversation Volume</p>
                <h3 className="text-3xl font-bold mt-1">12,840</h3>
              </div>
              <span className="flex items-center text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
                +12.5%
              </span>
            </div>
            <div className="h-32 flex items-end gap-1">
              <div className="flex-1 bg-primary/10 rounded-t-sm h-[40%]"></div>
              <div className="flex-1 bg-primary/10 rounded-t-sm h-[60%]"></div>
              <div className="flex-1 bg-primary/10 rounded-t-sm h-[45%]"></div>
              <div className="flex-1 bg-primary/10 rounded-t-sm h-[75%]"></div>
              <div className="flex-1 bg-primary rounded-t-sm h-[100%]"></div>
              <div className="flex-1 bg-primary/10 rounded-t-sm h-[85%]"></div>
              <div className="flex-1 bg-primary/10 rounded-t-sm h-[60%]"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Unanswered Questions */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Unanswered Questions</p>
                <h3 className="text-3xl font-bold mt-1">432</h3>
              </div>
              <span className="flex items-center text-rose-500 text-xs font-bold bg-rose-500/10 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-xs mr-1">trending_down</span>
                -5.2%
              </span>
            </div>
            <div className="h-32 flex items-end gap-1">
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-[20%]"></div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-[100%]"></div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-[90%]"></div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-[80%]"></div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-[30%]"></div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-[100%]"></div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-sm h-[90%]"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Token Usage */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Token Usage</p>
                <h3 className="text-3xl font-bold mt-1">1.2M</h3>
              </div>
              <span className="flex items-center text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
                +8.1%
              </span>
            </div>
            <div className="h-32 relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                <path d="M0 80 Q 50 20, 100 60 T 200 40 T 300 10 T 400 50" fill="none" stroke="#1337ec" strokeLinecap="round" strokeWidth="4"></path>
                <path d="M0 80 Q 50 20, 100 60 T 200 40 T 300 10 T 400 50 V 100 H 0 Z" fill="url(#grad1)" opacity="0.1"></path>
                <defs>
                  <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#1337ec", stopOpacity:1}}></stop>
                    <stop offset="100%" style={{stopColor:"#1337ec", stopOpacity:0}}></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>

        {/* Query Table Section */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-xl font-bold">Most Asked Queries</h3>
            <button className="text-sm font-bold text-primary hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">
                <tr>
                  <th className="px-6 py-4">Query phrase</th>
                  <th className="px-6 py-4 text-center">Frequency</th>
                  <th className="px-6 py-4 text-center">Avg. Sentiment</th>
                  <th className="px-6 py-4">Knowledge Source</th>
                  <th className="px-6 py-4 text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium">&quot;How do I reset my password?&quot;</td>
                  <td className="px-6 py-4 text-center">2,412</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[85%]"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">8.5</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium">FAQ_V2.pdf</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="material-symbols-outlined text-emerald-500">trending_up</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium">&quot;Pricing plans for enterprise&quot;</td>
                  <td className="px-6 py-4 text-center">1,890</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[70%]"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">7.0</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium">Pricing_Table_URL</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="material-symbols-outlined text-amber-500">trending_flat</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium">&quot;API documentation for webhooks&quot;</td>
                  <td className="px-6 py-4 text-center">1,120</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[45%]"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">4.5</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium">Dev_Portal_Sync</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="material-symbols-outlined text-emerald-500">trending_up</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium">&quot;Is there a mobile app?&quot;</td>
                  <td className="px-6 py-4 text-center">985</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-[25%]"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">2.5</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded text-xs font-medium italic">Unmatched</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="material-symbols-outlined text-rose-500">trending_down</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium">&quot;Refund policy details&quot;</td>
                  <td className="px-6 py-4 text-center">760</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[60%]"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">6.0</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium">Legal_Notice.txt</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="material-symbols-outlined text-emerald-500">trending_up</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20 flex items-center gap-4">
            <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div>
              <h4 className="font-bold">Insight: High Unanswered Count</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Queries about &quot;mobile app&quot; are trending up but have no knowledge match. Consider adding mobile roadmap data.</p>
            </div>
          </div>

          <div className="bg-emerald-500/5 dark:bg-emerald-500/10 p-6 rounded-xl border border-emerald-500/20 flex items-center gap-4">
            <div className="size-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
              <span className="material-symbols-outlined">sentiment_satisfied</span>
            </div>
            <div>
              <h4 className="font-bold">Chatbot Performance Score</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Your overall customer satisfaction score is 92%, which is 5% higher than the industry benchmark for your sector.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
