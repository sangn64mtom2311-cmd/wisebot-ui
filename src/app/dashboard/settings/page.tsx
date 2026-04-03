export default function SettingsPage() {
  return (
    <main className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto">
        {/* Page Title and Actions */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Settings</h1>
            <p className="text-slate-500 text-sm mt-1">Manage your personal preferences and workspace configuration.</p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-lg shadow-primary/20">
            Save Changes
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button className="pb-4 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 border-b-2 border-transparent transition-colors">General</button>
          <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary">Profile</button>
          <button className="pb-4 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 border-b-2 border-transparent transition-colors">Notifications</button>
          <button className="pb-4 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 border-b-2 border-transparent transition-colors">Security</button>
          <button className="pb-4 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 border-b-2 border-transparent transition-colors">Workspace</button>
        </div>

        {/* Settings Sections Container */}
        <div className="flex flex-col gap-8">

          {/* Profile Section */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Profile Information</h2>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="size-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASsPpedpDlcn-zAitTxGDopkCFN1gPVnQxwfpvglwXab9dfBpWwfQ3E4nGTcY3c6lRpZapXNvcvFuJs-BuBtj-Pm8XvFTuVmroNhkCFZHUPF7R9Y-90r8TKd-EDG3EsAHLfkfnP19Ew2UWS2DKvqY3umarTCpEY9Ho_eBH4Pd4gcTa1Ijw0nJE8IyUk0u0DX1DCoTaSPOe3-OZgXa4psK28J6Gq_dZs445UTgPkldDpqY5wTIavblUsKMeY8Qq61B6IpnzdDoW0sE" alt="Profile photo" />
                  </div>
                  <button className="text-xs font-bold text-primary hover:underline">Change Photo</button>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" type="text" defaultValue="Alex Rivera" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" type="email" defaultValue="alex@rivera.ai" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Bio</label>
                    <textarea className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" rows={3} defaultValue="Product Designer specialized in AI interfaces and automation workflows."></textarea>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workspace Section */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">apartment</span>
                  <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Workspace Settings</h2>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Workspace Name</label>
                <input className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" type="text" defaultValue="Rivera AI Labs" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Custom Domain</label>
                <div className="flex items-center">
                  <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-3 py-2 rounded-l-lg text-sm font-medium">https://</span>
                  <input className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-r-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" type="text" defaultValue="app.rivera-ai.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Workspace Logo</label>
                <div className="flex items-center gap-4 p-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg bg-background-light dark:bg-slate-800/50">
                  <div className="size-12 rounded bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">image</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Upload a logo for your workspace</p>
                    <p className="text-xs text-slate-500">SVG, PNG, or JPG up to 2MB</p>
                  </div>
                  <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-900 dark:text-white shadow-sm">Browse</button>
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Security & Authentication</h2>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Current Password</label>
                    <input className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" placeholder="••••••••" type="password" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">New Password</label>
                    <input className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" placeholder="••••••••" type="password" />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Two-Factor Authentication</p>
                    <p className="text-xs text-slate-500">Secure your account with an additional security layer.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-12">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">notifications_active</span>
                  <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Notification Preferences</h2>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex gap-4 items-center">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="material-symbols-outlined text-blue-500">trending_up</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Usage Limit Alerts</p>
                      <p className="text-xs text-slate-500">Get notified when you reach 80% and 100% of your credits.</p>
                    </div>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex gap-4 items-center">
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <span className="material-symbols-outlined text-purple-500">person_add</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">New Team Members</p>
                      <p className="text-xs text-slate-500">Email when someone joins or leaves your workspace.</p>
                    </div>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex gap-4 items-center">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="material-symbols-outlined text-green-500">assessment</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Weekly Analytics Reports</p>
                      <p className="text-xs text-slate-500">Receive a summary of chatbot performance every Monday.</p>
                    </div>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
