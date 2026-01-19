"use client";

import { useState } from "react";

const faqItems = [
  {
    id: "after-call",
    question: "What does ActionLog do after a sales call?",
    answer: "ActionLog automatically captures everything that matters after a sales or customer call. It transcribes the conversation, generates clear summaries, extracts action items, and prepares follow-ups—so nothing is missed and every next step is tracked.",
  },
  {
    id: "automate-workflows",
    question: "How does ActionLog automate post-sales workflows?",
    answer: "After each call, ActionLog uses AI to identify decisions, commitments, risks, and next steps. It then automatically creates tasks, follow-up emails, and CRM updates, ensuring your post-sales process runs smoothly without manual work.",
  },
  {
    id: "security",
    question: "How secure is my call data?",
    answer: "Your data is protected using enterprise-grade encryption both in transit and at rest. ActionLog follows industry best practices for data privacy and compliance, ensuring your customer conversations remain confidential and secure.",
  },
  {
    id: "integration",
    question: "Can ActionLog integrate with my existing tools?",
    answer: "Yes. ActionLog integrates seamlessly with popular CRMs, email platforms, and collaboration tools such as Salesforce, HubSpot, Slack, and more—allowing you to fit it directly into your existing workflow.",
  },
  {
    id: "free-trial",
    question: "Is there a free plan or trial available?",
    answer: "Yes. ActionLog offers a free plan so you can experience post-sales automation firsthand. You can upgrade at any time as your team grows and your usage increases.",
  },
  {
    id: "save-time",
    question: "How does ActionLog save me time?",
    answer: "ActionLog eliminates manual note-taking, task creation, and follow-up drafting. By automating everything that happens after a call, teams save hours every week and can focus on closing deals and strengthening customer relationships.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
    >
      <div className="border-b w-full h-full p-10 md:p-14">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            Answers to common questions about ActionLog and its features. If you
            have any other questions, please don&apos;t hesitate to contact us.
          </p>
        </div>
      </div>
      <div className="max-w-3xl w-full mx-auto px-10">
        <div className="w-full border-b-0 grid gap-2">
          {faqItems.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className="last:border-b-0 border-0 grid gap-2"
              >
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className={`focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 border bg-accent border-border rounded-lg px-4 py-3.5 cursor-pointer no-underline hover:no-underline ${
                      isOpen ? "ring ring-primary/20" : ""
                    }`}
                  >
                    {item.question}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  role="region"
                  data-state={isOpen ? "open" : "closed"}
                  className={`overflow-hidden text-sm transition-all duration-200 ease-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer && (
                    <div className="px-4 pb-3.5 pt-0 text-muted-foreground">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
