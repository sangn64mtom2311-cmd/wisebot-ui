export default function KnowledgeBasePage() {
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Knowledge Base</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and sync documents for your AI model training.</p>
        </div>
        <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-lg">add_circle</span>
          Create Knowledge Base
        </button>
      </div>

      {/* Knowledge Base Cards Grid */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Managed Data Sources</h3>
          <button className="text-primary text-sm font-semibold hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-32 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
              <span className="material-symbols-outlined text-4xl text-primary/40 group-hover:scale-110 transition-transform">description</span>
              <div className="absolute top-3 right-3 bg-green-100 dark:bg-green-900/30 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Synced</div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Product Documentation</h4>
              <p className="text-xs text-slate-500 mb-4">Internal user guides and API references for the core platform.</p>
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">article</span> 45 Docs</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 2h ago</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-32 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
              <span className="material-symbols-outlined text-4xl text-primary/40 group-hover:scale-110 transition-transform">forum</span>
              <div className="absolute top-3 right-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Live Sync</div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Customer Support FAQ</h4>
              <p className="text-xs text-slate-500 mb-4">Shared library of common support responses and knowledge articles.</p>
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">article</span> 122 Articles</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 5m ago</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-32 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
              <span className="material-symbols-outlined text-4xl text-primary/40 group-hover:scale-110 transition-transform">terminal</span>
              <div className="absolute top-3 right-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Idle</div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Technical Specifications</h4>
              <p className="text-xs text-slate-500 mb-4">Manuals for engineering teams and detailed hardware specs.</p>
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">article</span> 15 Manuals</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 1d ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Upload Area */}
      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">Upload Documents</h3>
        <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition-colors group">
          <div className="size-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
          </div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">Click to upload or drag & drop</h4>
          <p className="text-slate-500 text-sm mt-1">PDF, DOCX, TXT (Max 25MB per file)</p>
          <button className="mt-6 px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Select Files</button>
        </div>
      </section>

      {/* Uploaded Documents Table */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Recent Uploads</h3>
          <div className="flex gap-2">
            <button className="p-1.5 border border-slate-200 dark:border-slate-800 rounded-md text-slate-500 hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-lg">filter_list</span>
            </button>
            <button className="p-1.5 border border-slate-200 dark:border-slate-800 rounded-md text-slate-500 hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-lg">refresh</span>
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">File Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                    <span className="text-sm font-semibold">User_Guide_v2.pdf</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">PDF</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <span className="size-1.5 rounded-full bg-green-500"></span>
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">2.4 MB</td>
                <td className="px-6 py-4 text-sm text-slate-500">Jun 12, 2024</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="text-sm font-semibold">Release_Notes_June.docx</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">DOCX</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <span className="size-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Processing
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">850 KB</td>
                <td className="px-6 py-4 text-sm text-slate-500">Jun 14, 2024</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">article</span>
                    <span className="text-sm font-semibold">System_Logs.txt</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">TXT</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    <span className="size-1.5 rounded-full bg-red-500"></span>
                    Failed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">12 KB</td>
                <td className="px-6 py-4 text-sm text-slate-500">Jun 14, 2024</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                    <span className="text-sm font-semibold">API_Ref_v4.pdf</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">PDF</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <span className="size-1.5 rounded-full bg-green-500"></span>
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">4.1 MB</td>
                <td className="px-6 py-4 text-sm text-slate-500">May 28, 2024</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Showing 4 of 24 documents</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-bold hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-bold bg-white dark:bg-slate-800 hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
