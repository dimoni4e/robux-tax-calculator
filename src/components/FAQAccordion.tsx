"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset
                   transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.slice(0, 20).replace(/\s/g, '-')}`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 pr-4">
            {question}
          </h3>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        id={`faq-answer-${question.slice(0, 20).replace(/\s/g, '-')}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-4 bg-white">
          <p className="text-gray-600 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqItems = [
    { question: t.faqQuestion1, answer: t.faqAnswer1 },
    { question: t.faqQuestion2, answer: t.faqAnswer2 },
    { question: t.faqQuestion3, answer: t.faqAnswer3 },
    { question: t.faqQuestion4, answer: t.faqAnswer4 },
    { question: t.faqQuestion5, answer: t.faqAnswer5 },
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="mt-12 sm:mt-16 bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          {t.faqTitle}
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
