import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Post-call follow-ups are now effortless.",
    highlight: "The AI summaries and action items are incredibly accurate. Our team saves hours every week after sales calls.",
    name: "James Carter",
    title: "Sales Manager",
    company: "BrightFlow Systems",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    quote: "Exactly what our customer success team needed.",
    highlight: "We finally have a single source of truth for every customer call. CRM syncing works flawlessly.",
    name: "Emily Watson",
    title: "Head of Customer Success",
    company: "CloudNest Technologies",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    quote: "Turns conversations into revenue.",
    highlight: "Automated follow-ups ensure nothing slips through the cracks. It's become part of our daily sales workflow.",
    name: "Michael Anderson",
    title: "Revenue Operations Lead",
    company: "GrowthPath AI",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 4,
    quote: "A game changer for growing sales teams.",
    highlight: "As we scaled, manual note-taking stopped working. This tool brought clarity, accountability, and speed.",
    name: "Sarah Thompson",
    title: "Director of Sales",
    company: "Elevate Solutions",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    id: 5,
    quote: "Impressive accuracy and insights.",
    highlight: "Even complex customer discussions are captured perfectly. The AI insights help us coach reps better.",
    name: "Daniel Brooks",
    title: "Senior Account Executive",
    company: "SyncWave Software",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    quote: "Enterprise-ready automation done right.",
    highlight: "Security, collaboration, and automation are all thoughtfully built. It fits seamlessly into our enterprise stack.",
    name: "Jonathan Miller",
    title: "VP of Sales Operations",
    company: "Stratus Digital",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    id: 7,
    quote: "No more missed action items.",
    highlight: "Every call is automatically transcribed and summarized. Our team never loses track of commitments or next steps.",
    name: "Rachel Martinez",
    title: "Account Manager",
    company: "TechVenture Partners",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 8,
    quote: "The ROI is immediate and measurable.",
    highlight: "We've reduced follow-up time by 70% and improved our response rate significantly. The analytics are incredibly valuable.",
    name: "David Chen",
    title: "Sales Operations Manager",
    company: "Nexus Analytics",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 9,
    quote: "Seamless integration with our existing tools.",
    highlight: "Works perfectly with Salesforce and Slack. Our entire team stays in sync without any manual work.",
    name: "Lisa Park",
    title: "VP of Revenue",
    company: "DataFlow Inc",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 10,
    quote: "Transformed how we handle discovery calls.",
    highlight: "The AI captures every detail we need for qualification. Our conversion rate from discovery to demo has doubled.",
    name: "Robert Taylor",
    title: "Sales Director",
    company: "InnovateLabs",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    id: 11,
    quote: "Best investment we made this year.",
    highlight: "The time savings alone justify the cost. But the quality of insights and improved customer relationships are priceless.",
    name: "Amanda Foster",
    title: "Chief Revenue Officer",
    company: "ScaleUp Dynamics",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    id: 12,
    quote: "Our reps love the automatic note-taking.",
    highlight: "They can focus on the conversation instead of frantically typing. The summaries are always accurate and comprehensive.",
    name: "Kevin Rodriguez",
    title: "Sales Enablement Lead",
    company: "Velocity Solutions",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    id: 13,
    quote: "Game-changing for remote sales teams.",
    highlight: "With distributed teams, having consistent call documentation is crucial. This tool ensures nothing gets lost in translation.",
    name: "Jennifer Kim",
    title: "Head of Sales",
    company: "RemoteFirst Corp",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    id: 14,
    quote: "The AI understands context perfectly.",
    highlight: "It doesn't just transcribe—it actually understands what matters. The action items are always relevant and actionable.",
    name: "Mark Williams",
    title: "Sales Engineering Manager",
    company: "CloudBridge Systems",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 15,
    quote: "Reduced our onboarding time significantly.",
    highlight: "New reps can review call summaries to learn best practices. It's like having a training library built automatically.",
    name: "Nicole Brown",
    title: "Director of Sales Training",
    company: "Acme Technologies",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    id: 16,
    quote: "Perfect for high-volume sales environments.",
    highlight: "We handle hundreds of calls weekly. The automation ensures every conversation is properly documented and followed up.",
    name: "Chris Mitchell",
    title: "VP of Sales",
    company: "RapidScale Inc",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    id: 17,
    quote: "The transcription quality is outstanding.",
    highlight: "Even with background noise or multiple speakers, the AI captures everything accurately. It's incredibly reliable.",
    name: "Patricia Johnson",
    title: "Sales Operations Director",
    company: "TechFlow Solutions",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    id: 18,
    quote: "Streamlined our entire sales process.",
    highlight: "From initial contact to closing, every step is tracked and documented. Our sales cycle has become much more efficient.",
    name: "Thomas Wilson",
    title: "Chief Sales Officer",
    company: "NextGen Enterprises",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    id: 19,
    quote: "Incredible time savings for our team.",
    highlight: "What used to take hours of manual work now happens automatically. We've reclaimed 15+ hours per week per rep.",
    name: "Michelle Davis",
    title: "Sales Manager",
    company: "ProActive Sales",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    id: 20,
    quote: "The best sales tool we've implemented.",
    highlight: "It's become essential to our workflow. I can't imagine running our sales team without it now.",
    name: "Andrew Garcia",
    title: "Director of Revenue",
    company: "SalesForce Dynamics",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 21,
    quote: "Improved our customer relationships.",
    highlight: "By never missing a detail or commitment, our customers trust us more. It's elevated our service quality significantly.",
    name: "Stephanie White",
    title: "Customer Success Manager",
    company: "ClientFirst Solutions",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 22,
    quote: "Makes remote sales management easy.",
    highlight: "I can review all team calls without being on them. The visibility into our sales process is game-changing.",
    name: "Ryan Martinez",
    title: "Sales Team Lead",
    company: "Distributed Sales Co",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 23,
    quote: "The AI insights are incredibly valuable.",
    highlight: "It identifies patterns and opportunities we would have missed. It's like having a sales analyst on every call.",
    name: "Lauren Anderson",
    title: "Head of Sales Strategy",
    company: "Strategic Sales Group",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    id: 24,
    quote: "Essential for enterprise sales teams.",
    highlight: "Complex deals require detailed documentation. This tool ensures nothing falls through the cracks in our long sales cycles.",
    name: "Brian Thompson",
    title: "Enterprise Sales Director",
    company: "GlobalTech Solutions",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 25,
    quote: "Transformed our sales coaching.",
    highlight: "We use call summaries to identify coaching opportunities. Our reps are improving faster than ever before.",
    name: "Jessica Lee",
    title: "Sales Enablement Manager",
    company: "Growth Partners",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    id: 26,
    quote: "The ROI speaks for itself.",
    highlight: "Within the first month, we saw measurable improvements in follow-up rates and deal velocity. It pays for itself.",
    name: "Matthew Harris",
    title: "Revenue Operations Manager",
    company: "ScaleUp Ventures",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    id: 27,
    quote: "Perfect integration with our stack.",
    highlight: "Works seamlessly with HubSpot, Slack, and our other tools. The setup was quick and painless.",
    name: "Ashley Clark",
    title: "Sales Operations Lead",
    company: "TechStack Solutions",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: 28,
    quote: "Our close rate improved dramatically.",
    highlight: "Better follow-ups and documentation led to a 25% increase in our close rate. The impact is undeniable.",
    name: "Jason Lewis",
    title: "Sales Director",
    company: "CloseRate Inc",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 29,
    quote: "A must-have for modern sales teams.",
    highlight: "If you're not using AI for call documentation, you're falling behind. This tool keeps us competitive.",
    name: "Samantha Walker",
    title: "VP of Sales",
    company: "Modern Sales Co",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    id: 30,
    quote: "The support team is exceptional.",
    highlight: "Not only is the product great, but the customer support is top-notch. They're always responsive and helpful.",
    name: "Daniel Young",
    title: "Sales Manager",
    company: "SupportFirst Solutions",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
                  <div
                    className="flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)] dark:shadow-[0px_0px_0px_1px_rgba(250,250,250,0.1),0px_0px_0px_1px_#18181B,0px_8px_12px_-4px_rgba(15,12,12,0.3),0px_1px_2px_0px_rgba(15,12,12,0.3)]"
      id={testimonial.id.toString()}
                  >
      <div className="select-none leading-relaxed font-normal text-primary/90 w-full">
        <div className="mb-2 text-yellow-500">⭐️⭐️⭐️⭐️⭐️</div>
        <p className="mb-2 font-medium">{testimonial.quote}</p>
                      <p>
                        <span className="p-1 py-0.5 font-medium dark:font-semibold text-secondary">
            {testimonial.highlight}
                        </span>
                      </p>
                    </div>
                    <div className="flex w-full select-none items-center justify-start gap-3.5">
                      <Image
          src={testimonial.image}
          alt={testimonial.name}
                        className="size-8 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div>
          <p className="font-medium text-primary/90">{testimonial.name}</p>
                        <p className="text-xs font-normal text-primary/50">
            {testimonial.title}
          </p>
                        <p className="text-xs font-normal text-primary/50">
            {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
  );
}

export default function Testimonials() {
  // Duplicate testimonials for smooth infinite scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  // Split testimonials evenly across columns for better distribution
  const testimonialsPerColumn = Math.ceil(duplicatedTestimonials.length / 3);
  const column1 = duplicatedTestimonials.slice(0, testimonialsPerColumn);
  const column2 = duplicatedTestimonials.slice(testimonialsPerColumn, testimonialsPerColumn * 2);
  const column3 = duplicatedTestimonials.slice(testimonialsPerColumn * 2);

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
      <div className="h-full w-full">
        <div className="px-6 md:px-10 lg:px-16 py-8">
          <div className="relative max-h-[750px] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {/* Column 1 */}
              <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-col">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  {column1.map((testimonial, index) => (
                    <TestimonialCard key={`col1-first-${testimonial.id}-${index}`} testimonial={testimonial} />
                  ))}
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  {column1.map((testimonial, index) => (
                    <TestimonialCard key={`col1-second-${testimonial.id}-${index}`} testimonial={testimonial} />
                  ))}
                    </div>
                      </div>
              
              {/* Column 2 */}
              <div className="group flex overflow-hidden p-2 [--duration:45s] [--gap:1rem] [gap:var(--gap)] flex-col">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  {column2.map((testimonial, index) => (
                    <TestimonialCard key={`col2-first-${testimonial.id}-${index}`} testimonial={testimonial} />
                  ))}
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  {column2.map((testimonial, index) => (
                    <TestimonialCard key={`col2-second-${testimonial.id}-${index}`} testimonial={testimonial} />
                  ))}
                    </div>
                      </div>
              
              {/* Column 3 */}
              <div className="group flex overflow-hidden p-2 [--duration:50s] [--gap:1rem] [gap:var(--gap)] flex-col hidden xl:flex">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  {column3.map((testimonial, index) => (
                    <TestimonialCard key={`col3-first-${testimonial.id}-${index}`} testimonial={testimonial} />
                  ))}
                </div>
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col">
                  {column3.map((testimonial, index) => (
                    <TestimonialCard key={`col3-second-${testimonial.id}-${index}`} testimonial={testimonial} />
                  ))}
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
