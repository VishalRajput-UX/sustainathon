import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { contactFaqs } from '../../data/contactFaqs';

export const ContactFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('01');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section data-nav-theme="dark" aria-labelledby="faq-heading" className="w-full py-16 md:py-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div>
          <div className="flex items-center gap-2 text-accentOrange mb-3">
            <HelpCircle className="h-4 w-4" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold">
              Frequently Asked Questions
            </span>
          </div>
          <h2 id="faq-heading" className="font-royal text-3xl md:text-5xl uppercase leading-none tracking-tight text-white">
            Quick Answers
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-[#AEAAA5] leading-relaxed">
          Everything you need to know about participating, team rules, evaluation, and the grand finale logistics.
        </p>
      </div>

      <div className="border-t border-white/15 divide-y divide-white/10">
        {contactFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="py-6 md:py-8 transition-colors">
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 text-left group focus:outline-none"
              >
                <div className="flex items-start gap-4 md:gap-8">
                  <span className="font-mono text-xs md:text-sm text-accentOrange font-medium pt-1 shrink-0">
                    {faq.id}
                  </span>
                  <div>
                    <span className="inline-block mb-1.5 rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#AEAAA5]">
                      {faq.category}
                    </span>
                    <h3 className="font-medium text-lg md:text-2xl text-white group-hover:text-accentOrange transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 pt-1 text-white/70 group-hover:text-accentOrange transition-colors">
                  {isOpen ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-8 md:pl-16 pr-4 pt-4 pb-2">
                      <p className="text-sm md:text-base text-[#AEAAA5] leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
