import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="border-b w-full h-full p-10 md:p-14">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Empower Your Workflow with AI
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Ask your AI Agent for real-time collaboration, seamless
            integrations, and actionable insights to streamline your operations.
          </p>
        </div>
      </div>
      <div className="h-full">
        <div className="px-10">
          <div className="relative max-h-[750px] overflow-hidden">
            <div className="gap-0 md:columns-2 xl:columns-3">
              <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-col">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="1"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        The AI-driven analytics from #QuantumInsights have
                        revolutionized our product development cycle.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Insights are now more accurate and faster than ever.
                        </span>{" "}
                        A game-changer for tech companies.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/91.jpg"
                        alt="Alex Rivera"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Alex Rivera
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CTO at InnovateTech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="2"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Implementing #AIStream&apos;s customer prediction model has
                        drastically improved our targeting strategy.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Seeing a 50% increase in conversion rates!
                        </span>
                        Highly recommend their solutions.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/12.jpg"
                        alt="Samantha Lee"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Samantha Lee
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Marketing Director at NextGen Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="3"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        As a startup, we need to move fast and stay ahead.
                        #CodeAI&apos;s automated coding assistant helps us do just
                        that.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our development speed has doubled.
                        </span>{" "}
                        Essential tool for any startup.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Raj Patel"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Raj Patel</p>
                        <p className="text-xs font-normal text-primary/50">
                          Founder &amp; CEO at StartUp Grid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="1"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        The AI-driven analytics from #QuantumInsights have
                        revolutionized our product development cycle.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Insights are now more accurate and faster than ever.
                        </span>{" "}
                        A game-changer for tech companies.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/91.jpg"
                        alt="Alex Rivera"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Alex Rivera
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CTO at InnovateTech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="2"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Implementing #AIStream&apos;s customer prediction model has
                        drastically improved our targeting strategy.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Seeing a 50% increase in conversion rates!
                        </span>{" "}
                        Highly recommend their solutions.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/12.jpg"
                        alt="Samantha Lee"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Samantha Lee
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Marketing Director at NextGen Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="3"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        As a startup, we need to move fast and stay ahead.
                        #CodeAI&apos;s automated coding assistant helps us do just
                        that.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our development speed has doubled.
                        </span>{" "}
                        Essential tool for any startup.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Raj Patel"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Raj Patel</p>
                        <p className="text-xs font-normal text-primary/50">
                          Founder &amp; CEO at StartUp Grid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="1"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        The AI-driven analytics from #QuantumInsights have
                        revolutionized our product development cycle.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Insights are now more accurate and faster than ever.
                        </span>{" "}
                        A game-changer for tech companies.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/91.jpg"
                        alt="Alex Rivera"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Alex Rivera
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CTO at InnovateTech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="2"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Implementing #AIStream&apos;s customer prediction model has
                        drastically improved our targeting strategy.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Seeing a 50% increase in conversion rates!
                        </span>{" "}
                        Highly recommend their solutions.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/12.jpg"
                        alt="Samantha Lee"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Samantha Lee
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Marketing Director at NextGen Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="3"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        As a startup, we need to move fast and stay ahead.
                        #CodeAI&apos;s automated coding assistant helps us do just
                        that.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our development speed has doubled.
                        </span>{" "}
                        Essential tool for any startup.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Raj Patel"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Raj Patel</p>
                        <p className="text-xs font-normal text-primary/50">
                          Founder &amp; CEO at StartUp Grid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="1"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        The AI-driven analytics from #QuantumInsights have
                        revolutionized our product development cycle.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Insights are now more accurate and faster than ever.
                        </span>{" "}
                        A game-changer for tech companies.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/91.jpg"
                        alt="Alex Rivera"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Alex Rivera
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CTO at InnovateTech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="2"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Implementing #AIStream&apos;s customer prediction model has
                        drastically improved our targeting strategy.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Seeing a 50% increase in conversion rates!
                        </span>{" "}
                        Highly recommend their solutions.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/12.jpg"
                        alt="Samantha Lee"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Samantha Lee
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Marketing Director at NextGen Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="3"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        As a startup, we need to move fast and stay ahead.
                        #CodeAI&apos;s automated coding assistant helps us do just
                        that.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our development speed has doubled.
                        </span>{" "}
                        Essential tool for any startup.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Raj Patel"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Raj Patel</p>
                        <p className="text-xs font-normal text-primary/50">
                          Founder &amp; CEO at StartUp Grid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:60s]">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="4"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #VoiceGen&apos;s AI-driven voice synthesis has made creating
                        global products a breeze.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Localization is now seamless and efficient.
                        </span>{" "}
                        A must-have for global product teams.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/83.jpg"
                        alt="Emily Chen"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Emily Chen
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Product Manager at Digital Wave
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="5"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Leveraging #DataCrunch&apos;s AI for our financial models has
                        given us an edge in predictive accuracy.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our investment strategies are now powered by real-time
                          data analytics.
                        </span>{" "}
                        Transformative for the finance industry.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Michael Brown"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Michael Brown
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Data Scientist at FinTech Innovations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="6"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #LogiTech&apos;s supply chain optimization tools have
                        drastically reduced our operational costs.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Efficiency and accuracy in logistics have never been
                          better.
                        </span>{" "}
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/5.jpg"
                        alt="Linda Wu"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Linda Wu</p>
                        <p className="text-xs font-normal text-primary/50">
                          VP of Operations at LogiChain Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="4"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #VoiceGen&apos;s AI-driven voice synthesis has made creating
                        global products a breeze.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Localization is now seamless and efficient.
                        </span>{" "}
                        A must-have for global product teams.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/83.jpg"
                        alt="Emily Chen"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Emily Chen
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Product Manager at Digital Wave
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="5"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Leveraging #DataCrunch&apos;s AI for our financial models has
                        given us an edge in predictive accuracy.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our investment strategies are now powered by real-time
                          data analytics.
                        </span>{" "}
                        Transformative for the finance industry.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Michael Brown"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Michael Brown
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Data Scientist at FinTech Innovations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="6"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #LogiTech&apos;s supply chain optimization tools have
                        drastically reduced our operational costs.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Efficiency and accuracy in logistics have never been
                          better.
                        </span>{" "}
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/5.jpg"
                        alt="Linda Wu"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Linda Wu</p>
                        <p className="text-xs font-normal text-primary/50">
                          VP of Operations at LogiChain Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="4"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #VoiceGen&apos;s AI-driven voice synthesis has made creating
                        global products a breeze.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Localization is now seamless and efficient.
                        </span>{" "}
                        A must-have for global product teams.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/83.jpg"
                        alt="Emily Chen"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Emily Chen
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Product Manager at Digital Wave
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="5"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Leveraging #DataCrunch&apos;s AI for our financial models has
                        given us an edge in predictive accuracy.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our investment strategies are now powered by real-time
                          data analytics.
                        </span>{" "}
                        Transformative for the finance industry.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Michael Brown"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Michael Brown
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Data Scientist at FinTech Innovations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="6"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #LogiTech&apos;s supply chain optimization tools have
                        drastically reduced our operational costs.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Efficiency and accuracy in logistics have never been
                          better.
                        </span>{" "}
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/5.jpg"
                        alt="Linda Wu"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Linda Wu</p>
                        <p className="text-xs font-normal text-primary/50">
                          VP of Operations at LogiChain Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="4"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #VoiceGen&apos;s AI-driven voice synthesis has made creating
                        global products a breeze.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Localization is now seamless and efficient.
                        </span>{" "}
                        A must-have for global product teams.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/83.jpg"
                        alt="Emily Chen"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Emily Chen
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Product Manager at Digital Wave
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="5"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Leveraging #DataCrunch&apos;s AI for our financial models has
                        given us an edge in predictive accuracy.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our investment strategies are now powered by real-time
                          data analytics.
                        </span>{" "}
                        Transformative for the finance industry.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Michael Brown"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Michael Brown
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Data Scientist at FinTech Innovations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="6"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #LogiTech&apos;s supply chain optimization tools have
                        drastically reduced our operational costs.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Efficiency and accuracy in logistics have never been
                          better.
                        </span>{" "}
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/5.jpg"
                        alt="Linda Wu"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Linda Wu</p>
                        <p className="text-xs font-normal text-primary/50">
                          VP of Operations at LogiChain Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:30s]">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="7"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        By integrating #GreenTech&apos;s sustainable energy
                        solutions, we&apos;ve seen a significant reduction in carbon
                        footprint.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Leading the way in eco-friendly business practices.
                        </span>{" "}
                        Pioneering change in the industry.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/14.jpg"
                        alt="Carlos Gomez"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Carlos Gomez
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Head of R&amp;D at EcoInnovate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="8"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #TrendSetter&apos;s market analysis AI has transformed how we
                        approach fashion trends.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our campaigns are now data-driven with higher customer
                          engagement.
                        </span>{" "}
                        Revolutionizing fashion marketing.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/56.jpg"
                        alt="Aisha Khan"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Aisha Khan
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Chief Marketing Officer at Fashion Forward
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="9"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Implementing #MediCareAI in our patient care systems has
                        improved patient outcomes significantly.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Technology and healthcare working hand in hand for
                          better health.
                        </span>{" "}
                        A milestone in medical technology.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/18.jpg"
                        alt="Tom Chen"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Tom Chen</p>
                        <p className="text-xs font-normal text-primary/50">
                          Director of IT at HealthTech Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="7"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        By integrating #GreenTech&apos;s sustainable energy
                        solutions, we&apos;ve seen a significant reduction in carbon
                        footprint.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Leading the way in eco-friendly business practices.
                        </span>{" "}
                        Pioneering change in the industry.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/14.jpg"
                        alt="Carlos Gomez"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Carlos Gomez
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Head of R&amp;D at EcoInnovate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="8"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #TrendSetter&apos;s market analysis AI has transformed how we
                        approach fashion trends.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our campaigns are now data-driven with higher customer
                          engagement.
                        </span>{" "}
                        Revolutionizing fashion marketing.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/56.jpg"
                        alt="Aisha Khan"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Aisha Khan
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Chief Marketing Officer at Fashion Forward
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="9"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Implementing #MediCareAI in our patient care systems has
                        improved patient outcomes significantly.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Technology and healthcare working hand in hand for
                          better health.
                        </span>{" "}
                        A milestone in medical technology.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/18.jpg"
                        alt="Tom Chen"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Tom Chen</p>
                        <p className="text-xs font-normal text-primary/50">
                          Director of IT at HealthTech Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="7"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        By integrating #GreenTech&apos;s sustainable energy
                        solutions, we&apos;ve seen a significant reduction in carbon
                        footprint.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Leading the way in eco-friendly business practices.
                        </span>{" "}
                        Pioneering change in the industry.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/14.jpg"
                        alt="Carlos Gomez"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Carlos Gomez
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Head of R&amp;D at EcoInnovate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="8"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #TrendSetter&apos;s market analysis AI has transformed how we
                        approach fashion trends.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our campaigns are now data-driven with higher customer
                          engagement.
                        </span>{" "}
                        Revolutionizing fashion marketing.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/56.jpg"
                        alt="Aisha Khan"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Aisha Khan
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Chief Marketing Officer at Fashion Forward
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="9"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Implementing #MediCareAI in our patient care systems has
                        improved patient outcomes significantly.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Technology and healthcare working hand in hand for
                          better health.
                        </span>{" "}
                        A milestone in medical technology.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/18.jpg"
                        alt="Tom Chen"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Tom Chen</p>
                        <p className="text-xs font-normal text-primary/50">
                          Director of IT at HealthTech Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="7"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        By integrating #GreenTech&apos;s sustainable energy
                        solutions, we&apos;ve seen a significant reduction in carbon
                        footprint.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Leading the way in eco-friendly business practices.
                        </span>{" "}
                        Pioneering change in the industry.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/14.jpg"
                        alt="Carlos Gomez"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Carlos Gomez
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Head of R&amp;D at EcoInnovate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="8"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #TrendSetter&apos;s market analysis AI has transformed how we
                        approach fashion trends.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Our campaigns are now data-driven with higher customer
                          engagement.
                        </span>{" "}
                        Revolutionizing fashion marketing.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/56.jpg"
                        alt="Aisha Khan"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Aisha Khan
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Chief Marketing Officer at Fashion Forward
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="9"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        Implementing #MediCareAI in our patient care systems has
                        improved patient outcomes significantly.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Technology and healthcare working hand in hand for
                          better health.
                        </span>{" "}
                        A milestone in medical technology.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/18.jpg"
                        alt="Tom Chen"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Tom Chen</p>
                        <p className="text-xs font-normal text-primary/50">
                          Director of IT at HealthTech Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:70s]">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="10"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #LearnSmart&apos;s AI-driven personalized learning plans have
                        doubled student performance metrics.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Education tailored to every learner&apos;s needs.
                        </span>{" "}
                        Transforming the educational landscape.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/73.jpg"
                        alt="Sofia Patel"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Sofia Patel
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CEO at EduTech Innovations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="11"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        With #CyberShield&apos;s AI-powered security systems, our
                        data protection levels are unmatched.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Ensuring safety and trust in digital spaces.
                        </span>{" "}
                        Redefining cybersecurity standards.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/25.jpg"
                        alt="Jake Morrison"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Jake Morrison
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CTO at SecureNet Tech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="12"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #DesignPro&apos;s AI has streamlined our creative process,
                        enhancing productivity and innovation.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Bringing creativity and technology together.
                        </span>{" "}
                        A game-changer for creative industries.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/78.jpg"
                        alt="Nadia Ali"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Nadia Ali</p>
                        <p className="text-xs font-normal text-primary/50">
                          Product Manager at Creative Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="10"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #LearnSmart&apos;s AI-driven personalized learning plans have
                        doubled student performance metrics.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Education tailored to every learner&apos;s needs.
                        </span>{" "}
                        Transforming the educational landscape.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/73.jpg"
                        alt="Sofia Patel"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Sofia Patel
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CEO at EduTech Innovations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="11"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        With #CyberShield&apos;s AI-powered security systems, our
                        data protection levels are unmatched.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Ensuring safety and trust in digital spaces.
                        </span>{" "}
                        Redefining cybersecurity standards.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/25.jpg"
                        alt="Jake Morrison"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Jake Morrison
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CTO at SecureNet Tech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="12"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #DesignPro&apos;s AI has streamlined our creative process,
                        enhancing productivity and innovation.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Bringing creativity and technology together.
                        </span>{" "}
                        A game-changer for creative industries.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/78.jpg"
                        alt="Nadia Ali"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Nadia Ali</p>
                        <p className="text-xs font-normal text-primary/50">
                          Product Manager at Creative Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="10"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #LearnSmart&apos;s AI-driven personalized learning plans have
                        doubled student performance metrics.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Education tailored to every learner&apos;s needs.
                        </span>{" "}
                        Transforming the educational landscape.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/73.jpg"
                        alt="Sofia Patel"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Sofia Patel
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CEO at EduTech Innovations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="11"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        With #CyberShield&apos;s AI-powered security systems, our
                        data protection levels are unmatched.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Ensuring safety and trust in digital spaces.
                        </span>{" "}
                        Redefining cybersecurity standards.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/25.jpg"
                        alt="Jake Morrison"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Jake Morrison
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CTO at SecureNet Tech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="12"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #DesignPro&apos;s AI has streamlined our creative process,
                        enhancing productivity and innovation.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Bringing creativity and technology together.
                        </span>{" "}
                        A game-changer for creative industries.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/78.jpg"
                        alt="Nadia Ali"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Nadia Ali</p>
                        <p className="text-xs font-normal text-primary/50">
                          Product Manager at Creative Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="10"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #LearnSmart&apos;s AI-driven personalized learning plans have
                        doubled student performance metrics.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Education tailored to every learner&apos;s needs.
                        </span>{" "}
                        Transforming the educational landscape.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/73.jpg"
                        alt="Sofia Patel"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Sofia Patel
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CEO at EduTech Innovations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="11"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        With #CyberShield&apos;s AI-powered security systems, our
                        data protection levels are unmatched.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Ensuring safety and trust in digital spaces.
                        </span>{" "}
                        Redefining cybersecurity standards.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/25.jpg"
                        alt="Jake Morrison"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Jake Morrison
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          CTO at SecureNet Tech
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="12"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #DesignPro&apos;s AI has streamlined our creative process,
                        enhancing productivity and innovation.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Bringing creativity and technology together.
                        </span>{" "}
                        A game-changer for creative industries.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/women/78.jpg"
                        alt="Nadia Ali"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">Nadia Ali</p>
                        <p className="text-xs font-normal text-primary/50">
                          Product Manager at Creative Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-col">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="13"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #VentureAI&apos;s insights into startup ecosystems have been
                        invaluable for our growth and funding strategies.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Empowering startups with data-driven decisions.
                        </span>{" "}
                        A catalyst for startup success.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/54.jpg"
                        alt="Omar Farooq"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Omar Farooq
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Founder at Startup Hub
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="13"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #VentureAI&apos;s insights into startup ecosystems have been
                        invaluable for our growth and funding strategies.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Empowering startups with data-driven decisions.
                        </span>{" "}
                        A catalyst for startup success.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/54.jpg"
                        alt="Omar Farooq"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Omar Farooq
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Founder at Startup Hub
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="13"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #VentureAI&apos;s insights into startup ecosystems have been
                        invaluable for our growth and funding strategies.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Empowering startups with data-driven decisions.
                        </span>{" "}
                        A catalyst for startup success.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/54.jpg"
                        alt="Omar Farooq"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Omar Farooq
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Founder at Startup Hub
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
                    id="13"
                  >
                    <div className="select-none leading-relaxed font-normal text-primary/90">
                      <p>
                        #VentureAI&apos;s insights into startup ecosystems have been
                        invaluable for our growth and funding strategies.
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
                          Empowering startups with data-driven decisions.
                        </span>{" "}
                        A catalyst for startup success.
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
                        src="https://randomuser.me/api/portraits/men/54.jpg"
                        alt="Omar Farooq"
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium text-primary/90">
                          Omar Farooq
                        </p>
                        <p className="text-xs font-normal text-primary/50">
                          Founder at Startup Hub
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 md:h-1/5 w-full bg-gradient-to-t from-background from-20%"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 md:h-1/5 w-full bg-gradient-to-b from-background from-20%"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
