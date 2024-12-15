import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from './faqData';
import FadeIn from '../animations/FadeIn';

const FAQ = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300">
              Find answers to common questions about our tailoring services
            </p>
          </div>
        </FadeIn>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;