import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">bolt</span>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">AIChat Platform</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">How it Works</a>
            <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#pricing">Pricing</a>
            <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Docs</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden sm:block text-slate-700 dark:text-slate-200 text-sm font-bold">Login</Link>
            <Link href="/register" className="bg-primary text-white rounded-lg px-5 py-2.5 text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              Start Free
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-20 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 text-left">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <span>New: GPT-4o Integration is Live</span>
              </div>
              <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Build Your AI Chatbot <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">in Minutes</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                Train your AI on your own documents and provide 24/7 customer support without lifting a finger.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="h-14 px-8 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/25 hover:scale-[1.02] transition-transform flex items-center gap-2">
                  Start Free <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="h-14 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 transition-colors">
                  Book Demo
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBctFEJZD-Nk3PxKfgFGjW0m3NaVw_xd03vy1uZSQKQ6B4BG7IabYALspU2zAoI_pWJ1usBgU0NP-Ar8L4U8Zn6JQu6h_8_KGhVfNTgY61iE1fWLPmcrzbuB9w2afKxhCWgwNfzue3aGP8ZnHfWnL0-HWvrmtslxh32qUUG9AE5rPOfYear1RhmZYlCqeaPIZdetont148z4MU8YQTIFgorIBvbJx9TI2GUDDu_Ug7q_2HOOm4lnHXKRiUPTGp4ZutRl6Jc6hAdH1Y')" }}></div>
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-300" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3N8lLd-Ltrd06u1RoIm_riRaOXlUZO66W8MF6jwpoVHYmY3t4Re71l0piOwepqIAXJfaaUPu5EoD5lTy_Y5TX20GViWzoVCIjjoHBiShCdmHRpg0y9e8Dz1P3OT1Yl5z6RT9B7SwUXDA--44DsgH-jMtSY7_SwbKMC06_-j_SnW2Ml2zD2hR-YpJnCQmmPHDieIcqelP6_bDAldfac8yGVYVro15ePoy7o129Qpv4lZnGu30NMtNai_ccEZ2Orq5_qmMP6_1ZM0A')" }}></div>
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-400" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEO4yILb4gTSipIec32Dyhi3kwkmSBCbjZWg-0hgnvpSe1IHIQ8jcbOglCMW56crfg2HjplRuj_vI1t25sh55U6XKNBFumYR7wRG3nCLcHAACUL-PQkPNkEbUkPSmeCT8uVVW_FC3E5httYdaF_CAMzCLNysZB2164mCLMM1CEZOIq3DbtPGsX4dydRRkjg_6IJespyv-Tfk9pDdZI1ruUw8PPpOuZfQGJqwsbyDFtFWJpM3qkzCnNfaf5vgKkTpTFm4oWkHWd07E')" }}></div>
                </div>
                <span>Join 500+ businesses automating support</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-purple-500 opacity-20 blur-2xl"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden aspect-[4/3]">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-500">Live Preview</span>
                </div>
                <div className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-lg">smart_toy</span>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm max-w-[70%]">
                      Hello! I&apos;m your AI assistant. How can I help you today?
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[70%]">
                      How do I integrate this into my Shopify store?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-lg">smart_toy</span>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm max-w-[75%]">
                      Integrating with Shopify is easy! Just install our app from the Shopify App Store or paste a single line of code into your theme. liquid file.
                    </div>
                  </div>
                  <div className="mt-auto border-t border-slate-200 dark:border-slate-700 pt-4 flex gap-2">
                    <div className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-400">
                      Type your message...
                    </div>
                    <button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-20 py-20" id="features">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Your Business</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to automate your customer support with world-class artificial intelligence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">database</span>
              </div>
              <h3 className="text-lg font-bold mb-2">AI trained on your data</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Upload PDFs, docs, or websites to train your bot instantly with zero coding.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Easy integration</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Embed your chatbot on any website with a single line of code in seconds.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Analytics dashboard</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Track performance, user satisfaction, and deep conversation history insights.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">language</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Multi-language</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Support customers in over 100 languages automatically and flawlessly.</p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-white dark:bg-slate-900/50 py-24" id="how-it-works">
          <div className="max-w-7xl mx-auto px-6 md:px-20">
            <h2 className="text-3xl font-bold mb-16 text-center">How It Works</h2>
            <div className="relative grid md:grid-cols-3 gap-12">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-12"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 z-10 border-4 border-background-light dark:border-slate-900">
                  <span className="material-symbols-outlined text-2xl">upload_file</span>
                </div>
                <h4 className="text-xl font-bold mb-3">1. Upload Data</h4>
                <p className="text-slate-600 dark:text-slate-400">Connect your documents, URLs, or paste text snippets to seed your AI.</p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 z-10 border-4 border-background-light dark:border-slate-900">
                  <span className="material-symbols-outlined text-2xl">psychology</span>
                </div>
                <h4 className="text-xl font-bold mb-3">2. Train AI</h4>
                <p className="text-slate-600 dark:text-slate-400">Our AI models process your data to understand your business nuances perfectly.</p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 z-10 border-4 border-background-light dark:border-slate-900">
                  <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                </div>
                <h4 className="text-xl font-bold mb-3">3. Deploy</h4>
                <p className="text-slate-600 dark:text-slate-400">Add the chat widget to your site and start helping customers 24/7 immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-7xl mx-auto px-6 md:px-20 py-24" id="pricing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-600 dark:text-slate-400">Choose the plan that&apos;s right for your growth stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-slate-500 text-sm mb-6">For testing and personal use.</p>
              <div className="text-4xl font-bold mb-8">$0<span className="text-base font-normal text-slate-500">/mo</span></div>
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> 100 messages/mo
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="material-symbols-outlined">remove_circle</span> Custom Branding
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> 2 Documents
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors">Get Started</button>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-primary relative flex flex-col scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-slate-500 text-sm mb-6">Perfect for small businesses.</p>
              <div className="text-4xl font-bold mb-8">$49<span className="text-base font-normal text-slate-500">/mo</span></div>
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> 5,000 messages/mo
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> Custom Branding
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> Unlimited Documents
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> Analytics
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">Get Started</button>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6">Advanced features for teams.</p>
              <div className="text-4xl font-bold mb-8">Custom</div>
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> Unlimited messages
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> White-label solution
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> API Access
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span> Priority Support
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-900 dark:border-slate-100 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-primary/5 py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-20">
            <h2 className="text-3xl font-bold text-center mb-16">Trusted by Innovative Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex text-amber-400 mb-4">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic mb-8">&quot;This platform transformed our support workflow. We&apos;ve seen a 70% reduction in manual tickets since deploying our AI bot.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvFIO8QJxeRpwjfyjuAWp4lh1ndbyGIKEboFSSnRcf2B7PsxbENMY_cFFuknnySyHTUmNOuLu-Mj7aKeGq30A8mySY6r1364bX4PpSaJdTEfEDtngG4axXXZciCkTt6ae3wL1h9Vx3F1-KHEWyGkmLFsveSdM-kvonoYHcfv8QdGhK4P4Rcaf3B7RF4JNHtaoZXNWq5lDDf6ds5rK6B5Aqhnn40CjctEN8OU2VDbniGscc5D9jgMJS8GpUsKE1lTzH2KsujB5amlI')" }}></div>
                  <div>
                    <h5 className="font-bold">Sarah Jenkins</h5>
                    <p className="text-xs text-slate-500">CX Manager, FlowState</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex text-amber-400 mb-4">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic mb-8">&quot;The multi-language support is unbelievable. We now serve customers globally without hiring a single translator.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8rE5Mv9yslb_EpgRTqs_39c4BGFOfPYTxmJdgfubRLGZIffm0AcXNvIZCAlxUXhLt47bmELag9gzBDeRQV1-MJBF_7H-n5xSBD8oe8SSR6ahptXcMZycZTMDTpn0DQVOTuwDM_hZrW36ewtFrmgaDxQLLaSPMAo6FfTgaTtaJFQDk0nX8StYcSpOu0OE9cYaRH0xZinE2y38TOYYyPYsC9X8DQpomK9S31yNk_opog6mCSj98aRuTN-s6nDhFzwxkte1xFgCWhv4')" }}></div>
                  <div>
                    <h5 className="font-bold">Marcus Chen</h5>
                    <p className="text-xs text-slate-500">Founder, NomadGear</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex text-amber-400 mb-4">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic mb-8">&quot;Training the AI on our existing help docs took less than 5 minutes. Truly impressive technology and ease of use.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbQmPfEYv__NK8N-viYgqZe5SssPjLZ5AePaOyjTJgQR-8Ydy2OO70H3NNqNTC4lx8KwbR_kWWLdUcIqdrvfQrrtW930JMFDuGQi6jhDE1qACu4E0CqjzIt2dXbCs_R8YWpNmizcSrZVs68-AEaNnOMFkSKvjf7z7TCs-nJSqQ1_RHkbPaIJmsO7KghHrq-J9aXryfG6TwtH7dn-LJOXP7gTPKJYveP_-lsM_My7I2oBT36Xgm56uTJM-oNIsUQ1dR9wJFlo4vo98')" }}></div>
                  <div>
                    <h5 className="font-bold">Elena Rodriguez</h5>
                    <p className="text-xs text-slate-500">Tech Lead, BrightSky</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 text-primary mb-6">
                <span className="material-symbols-outlined text-2xl font-bold">bolt</span>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold">AIChat Platform</h2>
              </div>
              <p className="text-slate-500 text-sm max-w-xs mb-6">Empowering businesses with intelligent, 24/7 automated customer support trained on your own unique data.</p>
            </div>
            <div>
              <h6 className="font-bold text-sm mb-6 uppercase tracking-wider">Product</h6>
              <ul className="flex flex-col gap-4 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-sm mb-6 uppercase tracking-wider">Resources</h6>
              <ul className="flex flex-col gap-4 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Docs</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">API Reference</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-sm mb-6 uppercase tracking-wider">Legal</h6>
              <ul className="flex flex-col gap-4 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800 gap-4">
            <p className="text-sm text-slate-500">© 2024 AIChat Platform. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
              <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">terminal</span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
