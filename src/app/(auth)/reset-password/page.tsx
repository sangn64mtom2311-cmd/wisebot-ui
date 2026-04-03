import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <header className="absolute top-0 w-full flex items-center justify-between whitespace-nowrap px-6 py-6 lg:px-10">
        <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">smart_toy</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">AI Chatbot Platform</h2>
        </div>
      </header>

      <div className="w-full max-w-[440px] bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-primary/5 border border-slate-200/60 dark:border-slate-800 p-8 lg:p-10 z-10 mt-16">
        <div className="flex flex-col items-center mb-8">
          <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">lock_reset</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Reset your password</h1>
          <p className="text-slate-500 dark:text-slate-400 text-center mt-2 leading-relaxed">
            Enter your email and we&apos;ll send you a password reset link.
          </p>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Email address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <input
                className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 pl-10 pr-4 placeholder:text-slate-400 transition-all text-base font-normal"
                placeholder="name@company.com"
                required
                type="email"
              />
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-md shadow-primary/20">
              <span className="truncate">Send Reset Link</span>
              <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <Link href="/sign-in" className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 text-sm font-semibold transition-colors">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to login
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full py-8 px-6 text-center">
        <p className="text-slate-400 dark:text-slate-600 text-xs">
          © 2024 AI Chatbot Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
