// src/components/PreFooter.jsx
import React from 'react';

const PreFooter = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '60px 20px',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Get started for free</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#d1d5db' }}>
          Build and test for as long as you need.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#d1d5db' }}>
          Pick a plan when you're ready.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: 'black',
              color: 'white',
            }}
          >
            Start free trial
          </button>
          <button
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: '#7c3aed',
              color: 'white',
            }}
          >
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
