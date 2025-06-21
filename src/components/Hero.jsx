// src/components/Hero.jsx
import React from 'react';
import { FaBlackTie } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '60px 20px',
        backgroundImage: `url('/assets/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ flex: '1 1 400px', paddingRight: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#ffffff' }}>
            Join the CometChat partner universe
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#e5e7eb' }}>
            Create value for your clients, leveraging our world-class technology. <br />
            Partner with us and grow your business!
          </p>
        </div>

        <div
          style={{
            flex: '1 1 350px',
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <form>
            <h3
              style={{
                marginBottom: '20px',
                fontSize: '1.5rem',
                color: 'white',
                textAlign: 'left',
              }}
            >
              Became a partner
            </h3>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Full Name</label>
              <input type="text" placeholder="Type your name here..." style={{ ...inputStyle, color: 'white' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}>📧</span>
                <input
                  type="email"
                  placeholder="Type your email here..."
                  style={{ ...inputStyle, paddingLeft: '30px', color: 'white' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Company Name</label>
              <input type="text" placeholder="Type your company's name..." style={{ ...inputStyle, color: 'white' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <button type="submit" style={buttonStyle}>
                Submit application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Logo Strip Below Form */}
      <div style={{ marginTop: '80px', width: '100%' }}>
        <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '20px', textAlign: 'center' }}>
        
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '3rem',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <img src="/assets/aws.png" alt="AWS" style={logoStyle} />
          <img src="/assets/microsoft.png" alt="Microsoft" style={logoStyle} />
          <img src="/assets/nasscom.png" alt="NASSCOM" style={logoStyle} />
          <img src="/assets/techstars.png" alt="Techstars" style={logoStyle} />
          <img src="/assets/10x-genomics.png" alt="10x Genomics" style={logoStyle} />
          <img src="/assets/cisco.png" alt="Cisco" style={logoStyle} />
        </div>
      </div>
    </section>
  );
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: '500',
  color: 'white',
  fontSize: '14px',
  textAlign: 'left',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  fontSize: '14px',
  backgroundColor: 'transparent',
};

const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: '#7c3aed',
  color: 'white',
  fontSize: '16px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const iconStyle = {
  position: 'absolute',
  left: '8px',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '16px',
  color: '#6b7280',
};

const logoStyle = {
  height: '40px',
  maxWidth: '120px',
  filter: 'brightness(0) invert(1)',
};

export default Hero;
