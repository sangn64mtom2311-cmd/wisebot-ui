export default function BillingPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight mb-2 text-slate-900 dark:text-slate-100">Billing</h2>
          <p className="text-slate-500">Manage your workspace subscription, payment methods, and monitor usage limits.</p>
        </div>

        {/* Current Plan Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-48 bg-primary/10 flex items-center justify-center p-8">
              <div className="bg-primary size-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-md mb-2 inline-block">Active Plan</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pro Workspace Subscription</h3>
                <p className="text-slate-500 text-sm mt-1">Full access to all advanced AI features and priority support.</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">$49</span>
                  <span className="text-slate-500 text-sm">/month</span>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-all flex items-center gap-2">
                  Upgrade Plan
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-bold mb-1 text-slate-900 dark:text-white">Next Billing Date</h4>
              <p className="text-slate-500 text-sm">Your plan will renew on October 12, 2024</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-slate-400">credit_card</span>
                <span className="text-sm font-medium">•••• 4242</span>
              </div>
              <button className="text-primary text-sm font-bold hover:underline">Edit</button>
            </div>
          </div>
        </div>

        {/* Usage Quotas */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">data_usage</span>
            Usage Quotas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Message Quota */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Messages</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">7,500 / 10,000</p>
                </div>
                <span className="material-symbols-outlined text-slate-400">forum</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-xs text-slate-400 mt-2">Resets in 18 days</p>
            </div>

            {/* Storage Quota */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Training Data</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">4.2 GB / 5 GB</p>
                </div>
                <span className="material-symbols-outlined text-slate-400">database</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: "84%" }}></div>
              </div>
              <p className="text-xs text-amber-600 mt-2">Storage nearly full</p>
            </div>

            {/* API Quota */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">API Requests</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">12k / 50k</p>
                </div>
                <span className="material-symbols-outlined text-slate-400">api</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{ width: "24%" }}></div>
              </div>
              <p className="text-xs text-slate-400 mt-2">Optimal usage</p>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">receipt_long</span>
              Payment History
            </h3>
            <button className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 text-sm flex items-center gap-1 font-medium">
              Download All
              <span className="material-symbols-outlined text-sm">download</span>
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Invoice ID</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">INV-2024-009</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded text-[10px] font-bold">PAID</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Sep 12, 2024</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">$49.00</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold hover:underline">Download</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">INV-2024-008</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded text-[10px] font-bold">PAID</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Aug 12, 2024</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">$49.00</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold hover:underline">Download</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">INV-2024-007</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded text-[10px] font-bold">PAID</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Jul 12, 2024</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">$49.00</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold hover:underline">Download</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">INV-2024-006</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded text-[10px] font-bold">REFUNDED</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Jun 12, 2024</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">$19.00</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold hover:underline">Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button className="text-slate-500 font-bold text-sm hover:text-slate-900 dark:hover:text-slate-100 transition-colors">View full history</button>
          </div>
        </div>

      </div>
    </main>
  );
}
