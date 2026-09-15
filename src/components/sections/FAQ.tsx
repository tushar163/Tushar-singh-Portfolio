"use client";

import { useState } from "react";
import { faqItems } from "@/data/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <MotionSection id="faq" className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
          Frequently Asked Questions
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Common Questions About Tushar Singh
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
          Answers to questions clients and recruiters often ask about my
          skills, experience, and availability.
        </p>
      </div>

      <div className="grid gap-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="rounded-2xl border border-[var(--line)] bg-[var(--panel)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
                  {item.question}
                </h3>
                <span
                  className="flex-none text-xl text-[var(--muted)] transition-transform duration-200"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-base leading-7 text-[var(--muted)]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
}
