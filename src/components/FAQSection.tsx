import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'SMS Marketing & Mobile Commerce Merchants',
      answer: 'Businesses acquiring customers through SMS campaigns, text message promotions, and mobile-first acquisition. We recover failed payments from SMS-driven transactions and mobile billing flows.'
    },
    {
      question: 'Subscription Services & Recurring Billing',
      answer: 'Merchants processing high-volume subscription renewals and recurring payments via SMS. Our system reduces involuntary churn and recovers failed recurring transactions automatically.'
    },
    {
      question: 'Direct-to-Consumer (DTC) Brands',
      answer: 'DTC brands running SMS-based acquisition campaigns and mobile order fulfillment. Maximize ROI on your marketing spend by recovering declined mobile orders.'
    },
    {
      question: 'Health & Wellness Merchants',
      answer: 'Health, wellness, and supplement merchants using SMS for customer acquisition and retention. Recover failed payments from subscription renewals and one-time mobile purchases.'
    },
    {
      question: 'Retail & Consumer Goods',
      answer: 'Retail merchants processing SMS-driven orders for consumer goods, fashion, electronics, and lifestyle products. Improve payment success rates across mobile channels.'
    },
    {
      question: 'Digital Services & SaaS Platforms',
      answer: 'SaaS companies and digital service providers using SMS for billing notifications and payment updates. Reduce churn and maintain predictable recurring revenue.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Who We Serve</FAQTitle>
        <FAQDescription>
          We support merchants across multiple industries and payment environments—SMS marketing, subscription services, mobile commerce, and more.
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
