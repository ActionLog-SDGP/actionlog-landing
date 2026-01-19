export default function Pricing() {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
    >
      <div className="border-b w-full h-full p-10 md:p-14">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Pricing that scales with you
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Whichever plan you pick, it&apos;s free until you love your docs.
            That&apos;s our promise.
          </p>
        </div>
      </div>
      <div className="relative w-full h-full">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <div className="relative flex w-fit items-center rounded-full border p-0.5 backdrop-blur-sm cursor-pointer h-9 flex-row bg-muted mx-auto">
            <button className="relative px-2 h-8 flex items-center justify-center cursor-pointer z-0">
              <div
                className="absolute inset-0 rounded-full bg-white dark:bg-[#3F3F46]  shadow-md border border-border"
                style={{ opacity: "1" }}
              ></div>
              <span className="relative block text-sm font-medium duration-200 shrink-0 text-primary">
                Monthly
              </span>
            </button>
            <button className="relative z-[1] px-2 h-8 flex items-center justify-center cursor-pointer">
              <span className="relative block text-sm font-medium duration-200 shrink-0 text-muted-foreground">
                Yearly
                <span className="ml-2 text-xs font-semibold text-secondary bg-secondary/15 py-0.5 w-[calc(100%+1rem)] px-1 rounded-full">
                  -20%
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="grid min-[650px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-6">
          <div className="rounded-xl grid grid-rows-[180px_auto_1fr] relative h-fit min-[650px]:h-full min-[900px]:h-fit bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border">
            <div className="flex flex-col gap-4 p-4">
              <p className="text-sm">Free</p>
              <div className="flex items-baseline mt-2">
                <span
                  className="text-4xl font-semibold"
                  style={{
                    opacity: "1",
                    filter: "blur(0px)",
                    transform: "none",
                  }}
                >
                  $0
                </span>
                <span className="ml-2">/month</span>
              </div>
              <p className="text-sm mt-2">Perfect for individuals getting started with post-call automation
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <button className="h-10 w-full flex items-center justify-center text-sm font-normal tracking-wide rounded-full px-4 cursor-pointer transition-all ease-out active:scale-95 bg-accent text-primary shadow-[0px_1px_2px_0px_rgba(255,255,255,0.16)_inset,0px_3px_3px_-1.5px_rgba(16,24,40,0.24),0px_1px_1px_-0.5px_rgba(16,24,40,0.20)]">
                Start Free
              </button>
            </div>
            <hr className="border-border dark:border-white/20" />
            <div className="p-4">
              <p className="text-sm mb-4">Includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Call recording (limited)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">AI call transcription
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Basic call summaries
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Action item extraction
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Email follow-up drafts
                  </span>
                </li>

           
              </ul>
            </div>
          </div>
          <div className="rounded-xl grid grid-rows-[180px_auto_1fr] relative h-fit min-[650px]:h-full min-[900px]:h-fit md:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-accent">
            <div className="flex flex-col gap-4 p-4">
              <p className="text-sm">
                Startup
                <span className="bg-gradient-to-b from-secondary/50 from-[1.92%] to-secondary to-[100%] text-white h-6 inline-flex w-fit items-center justify-center px-2 rounded-full text-sm ml-2 shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
                  Popular
                </span>
              </p>
              <div className="flex items-baseline mt-2">
                <span
                  className="text-4xl font-semibold"
                  style={{
                    opacity: "1",
                    filter: "blur(0px)",
                    transform: "none",
                  }}
                >
                  $12
                </span>
                <span className="ml-2">/month</span>
              </div>
              <p className="text-sm mt-2">
              Ideal for sales reps and small teams
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <button className="h-10 w-full flex items-center justify-center text-sm font-normal tracking-wide rounded-full px-4 cursor-pointer transition-all ease-out active:scale-95 bg-secondary text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]">
                Upgrade to Pro
              </button>
            </div>
            <hr className="border-border dark:border-white/20" />
            <div className="p-4">
              <p className="text-sm mb-4">Everything in Free +
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border flex items-center justify-center bg-muted-foreground/40 border-border">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Unlimited call recordings
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border flex items-center justify-center bg-muted-foreground/40 border-border">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Advanced AI summaries & insights
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border flex items-center justify-center bg-muted-foreground/40 border-border">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">CRM integration (HubSpot, Salesforce, etc.)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border flex items-center justify-center bg-muted-foreground/40 border-border">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Automated follow-ups & task creation
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border flex items-center justify-center bg-muted-foreground/40 border-border">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Multi-user team workspace
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border flex items-center justify-center bg-muted-foreground/40 border-border">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Call performance analytics</span>
                </li>
            
              </ul>
            </div>
          </div>
          <div className="rounded-xl grid grid-rows-[180px_auto_1fr] relative h-fit min-[650px]:h-full min-[900px]:h-fit bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border">
            <div className="flex flex-col gap-4 p-4">
              <p className="text-sm">Enterprise</p>
              <div className="flex items-baseline mt-2">
                <span
                  className="text-4xl font-semibold"
                  style={{
                    opacity: "1",
                    filter: "blur(0px)",
                    transform: "none",
                  }}
                >
                  $24
                </span>
                <span className="ml-2">/month</span>
              </div>
              <p className="text-sm mt-2">
              Best for large sales teams and enterprise organizations

              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <button className="h-10 w-full flex items-center justify-center text-sm font-normal tracking-wide rounded-full px-4 cursor-pointer transition-all ease-out active:scale-95 bg-primary text-primary-foreground shadow-[0px_1px_2px_0px_rgba(255,255,255,0.16)_inset,0px_3px_3px_-1.5px_rgba(16,24,40,0.24),0px_1px_1px_-0.5px_rgba(16,24,40,0.20)]">
                Contact Sales
              </button>
            </div>
            <hr className="border-border dark:border-white/20" />
            <div className="p-4">
              <p className="text-sm mb-4">Everything in Pro +</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Contact Sales
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Real-time collaboration & shared insights
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Custom AI models & workflows
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Advanced security & role-based access
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Compliance support (GDPR, SOC-ready)
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <div className="size-5 rounded-full border border-primary/20 flex items-center justify-center">
                    <div className="size-3 flex items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block dark:hidden"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden dark:block"
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#FAFAFA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">Priority support & SLA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
