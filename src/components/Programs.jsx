import React from 'react';
import './Programs.css';

const programData = [
  {
    icon: "🧩",
    title: "Affiliate partner program",
    desc: "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers."
  },
  {
    icon: "💻",
    title: "Technology partner program",
    desc: "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!"
  },
  {
    icon: "🚀",
    title: "Start up growth program",
    desc: "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies."
  }
];

const Programs = () => {
  return (
    <section className="programs">
      <p className="programs-subtitle">Our programs</p>
      <h2 className="programs-title">Types of partnerships programs</h2>

      <div className="program-cards">
        {programData.map((item, index) => (
          <div className="program-card" key={index}>
            <div className="program-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
