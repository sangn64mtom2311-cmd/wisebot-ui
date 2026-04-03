import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="w-full max-w-[480px]">
      {/* Logo Area */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-2xl">smart_toy</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">AI Chatbot Platform</h2>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="p-8 flex flex-col items-center text-center">
          {/* Illustration Placeholder */}
          <div className="w-full aspect-video mb-8 relative rounded-lg bg-primary/5 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="size-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md mb-2">
                <span className="material-symbols-outlined text-4xl text-primary">mark_email_read</span>
              </div>
            </div>
          </div>

          <h1 className="text-slate-900 dark:text-slate-100 text-2xl font-bold mb-3">Verify your email</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
            We have sent a verification link to your email address. Please follow the instructions to complete your setup.
          </p>

          <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all shadow-md shadow-primary/25 flex items-center justify-center gap-2 mb-6">
            <span className="material-symbols-outlined text-lg">forward_to_inbox</span>
            Resend verification email
          </button>

          <div className="space-y-4 w-full">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              Check your spam folder if you didn&apos;t receive the email.
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 w-full">
              <Link href="/sign-in" className="text-primary hover:text-primary/80 text-sm font-medium flex items-center justify-center gap-1 group transition-colors">
                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-center text-slate-400 dark:text-slate-600 text-xs uppercase tracking-widest font-semibold">
        © 2024 AI Chatbot Platform Inc.
      </p>
    </div>
  );
}
