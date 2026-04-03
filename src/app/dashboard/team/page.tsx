export default function TeamManagementPage() {
  return (
    <main className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">Team Management</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your organization&apos;s members and their permission levels.</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all transform active:scale-95">
            <span className="material-symbols-outlined">person_add</span>
            Invite User
          </button>
        </div>

        {/* Filters & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total Members</p>
            <p className="text-2xl font-black mt-1">24</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Admins</p>
            <p className="text-2xl font-black mt-1">4</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pending Invites</p>
            <p className="text-2xl font-black mt-1 text-primary">3</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Remaining Seats</p>
            <p className="text-2xl font-black mt-1">∞</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider border-b border-slate-200 dark:border-slate-800">Name</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider border-b border-slate-200 dark:border-slate-800">Email</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider border-b border-slate-200 dark:border-slate-800">Role</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider border-b border-slate-200 dark:border-slate-800">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider border-b border-slate-200 dark:border-slate-800 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="size-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4hBtJSIE-dgS3llkwB9_YH27E-Jx09v2VDUXtpKmcGQoDA6nwd324qyOL1h3NRf80vij0Bzmn9bIYsF7-u9y4PiIouDaxO-Q-x2rLQcDfMhPawPVGemKXBG5CKiMOrIAjs1kBJn-w97PvRJMa9fpQsBl8AbwCO88O5Kn9pDthTsAQblIxxCYC1Yi_k-SOnNhW3J8xCdGdrBF9D-PDw11hLKvL9enj3NCANixDrHi6a-Q9iQJ4sJ4jX-qKGg-xqLCktjnGscY_Yag" alt="Alex Johnson" />
                      <span className="text-sm font-semibold">Alex Johnson</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">alex@company.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">Owner</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-green-500"></span>
                      <span className="text-sm font-medium">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="size-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA29UlXIofh7yJI2hR2YF7xxTFLsJrU_YB2SPJsQFR5okAs_V6tdNa8qEElKAB5-LMVHv-z3qERECXuEloE8FqwiImPmWWUC87ElGVzMHmbL7iZDmeO9nXym1JSaMOVaIfcu5rF1HHmyNToif7yB2K28_9QI6D_BFsLXO154v4LkMKy0DqSROFrebPoAb10w1BE2Raia6YkGqIoix5q5xrqY2ZMa4Nf_i7hpmW0alU-Upij3PRFZn8nMef40Pn9gaChcq8vXyJRJIE" alt="Sarah Chen" />
                      <span className="text-sm font-semibold">Sarah Chen</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">sarah@company.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Admin</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-green-500"></span>
                      <span className="text-sm font-medium">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="size-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRW8UjOAYzoQO6MEo5G-PClaqt2UNkdAi2y8cRQOo-Foi7iG0OUxDycrqbiN7UC9rxdpPOsuCAFQOcSI63RL0PVWYVRH9hKjyACy7NZKkCgRWP7D5GBtj2zRut2YQ3_jsuMyD62wibye0XfFbIaRc3ttaHGzLiwzI2rBvQ7Vf1ugSdOwfVibavt8bMlJhgUvcn9ggQRvHBoNNAX3tirLXh3Bepkt4kxxe-hhgfbdjtQIR4dVHa5ZNajrGYkWiDFweBSv2XqyVijdU" alt="Michael Smith" />
                      <span className="text-sm font-semibold">Michael Smith</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">michael@company.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Editor</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
                      <span className="text-sm font-medium italic">Pending</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="size-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiIptt4G1Qn1WIyJeE1B3ZJub0xq0-ZGMQYJjb6ZtcjbkmmBQmRRxbhhKNlgzoDVnodanlstcTTg2-5LfYDSgA87VIMmMcXqCGnYNEajW81llJSXuUSvoJptFsuoJ0sQv8o2T4IrBZEpeAGXur4ady_otpgSN8d2Men6SLHypcBjcfDK8HEIWs8xcLzd-j-EDQNA4I2KJ9QBOeALg_ts6IdL25SjmR9IvUKZ1Aznq6FAcU7j_7rFtesay7D2m55cQOZQMjkYyFAzM" alt="Emily Brown" />
                      <span className="text-sm font-semibold">Emily Brown</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">emily@company.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400">Viewer</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-green-500"></span>
                      <span className="text-sm font-medium">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="size-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByfm8ciJZidk2CgtfhEfc9N1bKqyg9jmGpFpsPEI1KD1YltZoCJPG_282lyX5MaXiZkciA-i7jdFWjcwI5gM4-SjbyEbKUDrbCTmwchGXdvZsw6vRUxJTG3PjLrsNMAvbzBVixzyznjB7dz0IpOGXTChwisQ8dKoUFoCYscC5mdKV_LMHnUfB_MivFHomskEvwfXt7AYqhlF5CW150VT9p6vW51NRb7i10coDj58GZSo6aci2WZ52gwp0_Ci-CB881cg8CACgkBug" alt="David Wilson" />
                      <span className="text-sm font-semibold">David Wilson</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">david@company.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Editor</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-green-500"></span>
                      <span className="text-sm font-medium">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-sm text-slate-500">Showing 5 of 24 members</p>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 text-sm font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg disabled:opacity-50" disabled>Previous</button>
              <button className="px-4 py-1.5 text-sm font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
