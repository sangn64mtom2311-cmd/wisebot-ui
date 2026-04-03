export default function WidgetCustomizationPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Widget Customization</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Design and configure your chatbot&apos;s external appearance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Configuration Form */}
          <div className="lg:col-span-7 space-y-6">
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">identity_platform</span>
                Bot Identity
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Bot Name</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="text" defaultValue="Studio Assistant"/>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Welcome Message</label>
                  <textarea className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all" rows={3} defaultValue="Hello! How can I help you today? I'm here to answer any questions about our workspace."></textarea>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">colorize</span>
                Branding & Style
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Primary Widget Color</label>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="relative size-8 rounded-md bg-primary cursor-pointer border border-white/20"></div>
                      <input className="bg-transparent border-none p-0 text-sm font-mono text-slate-600 dark:text-slate-300 w-20 focus:ring-0" type="text" defaultValue="#1337ec"/>
                    </div>
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                    <div className="flex gap-2">
                      <button className="size-8 rounded-full bg-[#1337ec] ring-2 ring-offset-2 ring-primary"></button>
                      <button className="size-8 rounded-full bg-[#6366f1] hover:scale-110 transition-transform"></button>
                      <button className="size-8 rounded-full bg-[#8b5cf6] hover:scale-110 transition-transform"></button>
                      <button className="size-8 rounded-full bg-[#ec4899] hover:scale-110 transition-transform"></button>
                      <button className="size-8 rounded-full bg-[#0ea5e9] hover:scale-110 transition-transform"></button>
                      <button className="size-8 rounded-full bg-[#64748b] hover:scale-110 transition-transform"></button>
                      <button className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-sm text-slate-500">add</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Widget Position</label>
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg w-full max-w-xs">
                    <button className="flex-1 text-xs font-bold py-2 bg-white dark:bg-slate-700 text-primary rounded-md shadow-sm">Right</button>
                    <button className="flex-1 text-xs font-medium py-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">Left</button>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex items-center justify-end gap-3 pt-4">
              <button className="px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors">Discard Changes</button>
              <button className="px-6 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg shadow-primary/20 transition-all">Save Changes</button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Live Preview</h3>
                <div className="flex items-center gap-2">
                  <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-slate-500">Previewing Live</span>
                </div>
              </div>

              <div className="relative bg-slate-200 dark:bg-slate-800 h-[600px] rounded-2xl border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                {/* Mock App Interface Background */}
                <div className="absolute inset-0 p-6 space-y-4 opacity-30 select-none pointer-events-none">
                  <div className="h-8 w-1/3 bg-slate-400 dark:bg-slate-600 rounded"></div>
                  <div className="h-4 w-full bg-slate-300 dark:bg-slate-700 rounded"></div>
                  <div className="h-4 w-2/3 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-slate-300 dark:bg-slate-700 rounded"></div>
                    <div className="h-24 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>

                {/* Actual Chat Widget Preview */}
                <div className="mt-auto m-6 flex flex-col items-end gap-4 relative z-10">
                  {/* Chat Bubble Container */}
                  <div className="w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                    {/* Widget Header */}
                    <div className="p-4 flex items-center gap-3 bg-primary text-white">
                      <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="material-symbols-outlined">smart_toy</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-none">Studio Assistant</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="size-1.5 bg-green-400 rounded-full"></span>
                          <span className="text-[10px] text-white/80 uppercase font-medium">Online</span>
                        </div>
                      </div>
                      <button className="ml-auto text-white/80 hover:text-white">
                        <span className="material-symbols-outlined text-lg">close</span>
                      </button>
                    </div>

                    {/* Widget Body */}
                    <div className="h-64 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-900 space-y-4">
                      <div className="flex flex-col gap-1">
                        <div className="bg-primary/10 dark:bg-primary/20 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[85%]">
                          Hello! How can I help you today? I&apos;m here to answer any questions about our workspace.
                        </div>
                        <span className="text-[9px] text-slate-400 ml-1">2:41 PM</span>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[85%] shadow-sm">
                          How do I set up my first knowledge base?
                        </div>
                        <span className="text-[9px] text-slate-400 mr-1">2:42 PM</span>
                      </div>
                    </div>

                    {/* Widget Footer */}
                    <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2">
                      <input className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 py-2 text-xs focus:ring-1 focus:ring-primary text-slate-900 dark:text-slate-100" placeholder="Type a message..." type="text"/>
                      <button className="size-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 shadow-md">
                        <span className="material-symbols-outlined text-sm">send</span>
                      </button>
                    </div>
                  </div>

                  {/* Floating Action Button */}
                  <button className="size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>chat_bubble</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
