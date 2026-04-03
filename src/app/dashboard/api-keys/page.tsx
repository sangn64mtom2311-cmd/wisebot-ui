export default function ApiKeysPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
      <div className="max-w-6xl mx-auto space-y-8">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight">API Keys</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage secure access to your AI models and resources.</p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Generate New Key
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Key</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Created Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Used</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold">Production Master</span>
                  </td>
                  <td className="px-6 py-5">
                    <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">sk-••••••••4k2l</code>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Oct 12, 2023</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">2 mins ago</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 transition-colors" title="Copy Key">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                      </button>
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-500 hover:text-red-600 transition-colors" title="Revoke Key">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold">Staging Environment</span>
                  </td>
                  <td className="px-6 py-5">
                    <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">sk-••••••••9p1m</code>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Nov 05, 2023</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-500 dark:text-slate-500 italic">1 day ago</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 transition-colors" title="Copy Key">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                      </button>
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-500 hover:text-red-600 transition-colors" title="Revoke Key">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold">Local Development</span>
                  </td>
                  <td className="px-6 py-5">
                    <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">sk-••••••••2z7q</code>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Dec 01, 2023</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-400 dark:text-slate-600 italic">Never used</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 transition-colors" title="Copy Key">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                      </button>
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-500 hover:text-red-600 transition-colors" title="Revoke Key">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-6 shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined text-[32px]">security</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">API Security Best Practices</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Never share your API keys in public repositories or client-side code. Use environment variables to store your keys securely and rotate them regularly to minimize risk.
              </p>
              <button className="mt-4 text-sm font-bold text-primary hover:underline flex items-center gap-1">
                View Security Guide
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20 flex flex-col sm:flex-row gap-6 shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[32px]">menu_book</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">API Documentation</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Learn how to integrate our AI models into your application using our comprehensive documentation, client libraries, and SDKs.
              </p>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
                Read Documentation
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
