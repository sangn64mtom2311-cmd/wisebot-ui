export default function ChatbotPlaygroundPage() {
  return (
    <main className="flex-1 flex overflow-hidden">
      {/* Chat Window */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Conversation</span>
            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Model: GPT-4o</span>
          </div>
          <button className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900">
            <span className="material-symbols-outlined text-sm">refresh</span> Clear Chat
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-sm">smart_toy</span>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium">AI Assistant</p>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl rounded-tl-none text-sm max-w-2xl">
                Hello! I&apos;m your custom chatbot. How can I help you explore the knowledge base today?
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj5rIGZRtToE51ywgFhashBpwvHTZ36wrXapg7isDrGk8j9i9RPK_tuk_x9mIlwMmchmPWsyPCItlRszruKSlenWwztPCcJqC8IU2NpX0lrII494zyNSNnTLLdwbcxCppE0wRFZzR7c_uWN3zxwhQd-tT6MmKiLvaLFfnpCEfIyGgQ327NWeXB9nSvy2Ch7Z3I2Ahk53V23p4d7lHNxHonhujHN5b1n4ZDhN8UlqhasmLTBkN8g1HnzDJYOJ12LZIJauXxfRFKdfE')" }}></div>
            <div className="space-y-1 text-right">
              <p className="text-xs text-slate-500 font-medium">You</p>
              <div className="bg-primary text-white p-4 rounded-xl rounded-tr-none text-sm max-w-2xl text-left inline-block">
                What are our company policies on remote work?
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-sm">smart_toy</span>
            </div>
            <div className="space-y-1 flex-1">
              <p className="text-xs text-slate-500 font-medium">AI Assistant</p>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl rounded-tl-none text-sm max-w-2xl">
                According to our current Employee Handbook, the remote work policy is as follows:
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Full-time remote work is eligible for most technical roles.</li>
                  <li>Hybrid options require 2 days in the office.</li>
                  <li>Remote employees receive a $500 home-office stipend.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800">
          <div className="relative max-w-3xl mx-auto">
            <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" placeholder="Type your message..." rows={1}></textarea>
            <button className="absolute right-2 bottom-2 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg hover:bg-primary/90">
              <span className="material-symbols-outlined text-lg">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebars Container */}
      <div className="w-80 flex flex-col shrink-0 bg-background-light dark:bg-background-dark">
        {/* Source Citations */}
        <div className="flex-1 flex flex-col overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div className="p-4 bg-slate-50 dark:bg-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">link</span>
            Source Citations
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className="p-3 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary/50 cursor-pointer bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-sm text-primary">description</span>
                <span className="text-xs font-semibold truncate">Employee_Handbook_2024.pdf</span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2 italic">&quot;...eligible employees may work remotely up to 5 days per week with manager approval...&quot;</p>
            </div>

            <div className="p-3 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary/50 cursor-pointer bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-sm text-primary">article</span>
                <span className="text-xs font-semibold truncate">Office_Safety_Guidelines.docx</span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2 italic">&quot;...stipend for ergonomic equipment is available through the HR portal...&quot;</p>
            </div>
          </div>
        </div>

        {/* Model Settings */}
        <div className="h-auto p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="font-semibold text-xs uppercase tracking-wider text-slate-500 flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-sm">tune</span>
            Model Settings
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-xs font-medium">Temperature</label>
                <span className="text-xs font-bold text-primary">0.7</span>
              </div>
              <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="70"/>
              <p className="text-[10px] text-slate-500">Controls randomness: Lower is more focused and deterministic.</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-xs font-medium">Top-K</label>
                <span className="text-xs font-bold text-primary">40</span>
              </div>
              <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="1" type="range" defaultValue="40"/>
              <p className="text-[10px] text-slate-500">Limits vocabulary to top K most likely tokens.</p>
            </div>
            <button className="w-full py-2.5 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary/20 transition-colors">
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
