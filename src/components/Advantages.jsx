import React from 'react';
import './Advantages.css';

const data = [
  {
    icon: "🪙",
    title: "Free credits",
    desc: "Empowering partners to scale."
  },
  {
    icon: "📈",
    title: "Revenue share",
    desc: "Get monthly recurring revenues when you refer clients."
  },
  {
    icon: "🎓",
    title: "Training and mentoring sessions",
    desc: "Enabling partners to deliver the best experience."
  },
  {
    icon: "🛠️",
    title: "Special developer access",
    desc: "Get an all-access account to build unlimited PoCs for your clients."
  },
  {
    icon: "⏱️",
    title: "Reduced time",
    desc: "Deliver your products much faster with our partners' programs."
  },
  {
    icon: "📊",
    title: "Value addition to your users",
    desc: "We need a 2 line text here"
  },
  {
    icon: "📚",
    title: "Knowledge sessions",
    desc: "Access to product and market sessions."
  },
  {
    icon: "🧑‍🔧",
    title: "On-demand support",
    desc: "Technical assistance for implementation."
  },
  {
    icon: "👥",
    title: "Significant passive income",
    desc: "We need a 2 line text here"
  }
];

const Advantages = () => {
  return (
    <section className="advantages">
      <p className="subtitle">Be a partner</p>
      <h2 className="main-title">CometChat partner advantages</h2>
      <div className="advantage-grid">
        {data.map((item, index) => (
          <div className="advantage-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
