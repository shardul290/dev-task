import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "This is a frequently asked question?",
    answer: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa."
  },
  {
    question: "This is a frequently asked question?",
    answer: ""
  },
  {
    question: "This is a very long frequently asked question about our services with more than one line?",
    answer: ""
  },
  {
    question: "This is a frequently asked question?",
    answer: ""
  },
  {
    question: "This is a question?",
    answer: ""
  },
  {
    question: "This is a question?",
    answer: ""
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <p className="faq-subtitle">FAQ's</p>
      <h2 className="faq-title">We want to help you<br />with all your doubts</h2>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {item.question}
              <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && item.answer && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
