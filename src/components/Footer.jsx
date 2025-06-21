import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

const headingStyle = {
  color: '#7c3aed',
  fontSize: '16px',
  marginBottom: '16px',
};

const subheadingStyle = {
  color: '#a1a1aa',
  fontSize: '14px',
  margin: '32px 0 8px',
};

const listItemStyle = {
  marginBottom: '8px',
  listStyle: 'none',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const listStyle = {
  padding: 0,
  margin: 0,
};

const Footer = () => {
  const makeLink = (text) => (
    <li style={listItemStyle}>
      <a href="#" style={linkStyle}>
        {text}
      </a>
    </li>
  );

  return (
    <footer
      style={{
        backgroundColor: '#0a0914',
        color: '#ffffff',
        padding: '60px 40px 30px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {/* ✅ LOGO LEFT-ALIGNED */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '40px' }}>
          <img
            src="/assets/cometchat.png"
            alt="CometChat Logo"
            style={{ height: '40px', display: 'block' }}
          />
        </div>

        {/* ✅ GRID SECTION */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
          }}
        >
          {/* COLUMN 1 - Platform */}
          <div>
            <h3 style={headingStyle}>Platform</h3>
            <h4 style={subheadingStyle}>Features</h4>
            <ul style={listStyle}>
              {makeLink('Chat & Messaging')}
              {makeLink('Voice & Video Calls')}
              {makeLink('Security & Compliance')}
              {makeLink('Extensions')}
              {makeLink('Features at a glance')}
              {makeLink('Webhooks & Bots')}
              {makeLink('Moderation')}
              {makeLink('Analytics & Insights')}
            </ul>
            <h4 style={subheadingStyle}>Implementation</h4>
            <ul style={listStyle}>
              {makeLink('Widgets')}
              {makeLink('UI Kits')}
              {makeLink('SDKs & APIs')}
            </ul>
            <h4 style={subheadingStyle}>Technologies</h4>
            <ul style={listStyle}>
              {makeLink('React Chat SDK & API')}
              {makeLink('Angular Chat SDK & API')}
              {makeLink('Vue Chat SDK & API')}
              {makeLink('iOS Swift Chat SDK & API')}
              {makeLink('Android Kotlin Chat SDK & API')}
              {makeLink('Android Java Chat SDK & API')}
              {makeLink('React Native Chat SDK & API')}
              {makeLink('Ionic/Capacitor Chat SDK & API')}
              {makeLink('WordPress Chat SDK & API')}
              {makeLink('Laravel/PHP Chat SDK & API')}
              {makeLink('Flutter Chat SDK & API')}
              {makeLink('Next.js Chat SDK & API')}
            </ul>
          </div>

          {/* COLUMN 2 - Solutions */}
          <div>
            <h3 style={headingStyle}>Solutions</h3>
            <h4 style={subheadingStyle}>By Use cases</h4>
            <ul style={listStyle}>
              {makeLink('Social Community')}
              {makeLink('Marketplace')}
              {makeLink('Healthcare')}
              {makeLink('Education')}
              {makeLink('Virtual Events')}
              {makeLink('On-Demand Service')}
              {makeLink('Dating Apps')}
              {makeLink('Gaming')}
            </ul>
            <h4 style={subheadingStyle}>By Organization Type</h4>
            <ul style={listStyle}>
              {makeLink('Enterprise')}
              {makeLink('Startups')}
            </ul>
          </div>

          {/* COLUMN 3 - Developers */}
          <div>
            <h3 style={headingStyle}>Developers</h3>
            <h4 style={subheadingStyle}>Technologies documentation</h4>
            <ul style={listStyle}>
              {makeLink('React')}
              {makeLink('Angular')}
              {makeLink('Vue')}
              {makeLink('iOS Swift')}
              {makeLink('Android Kotlin')}
              {makeLink('Android Java')}
              {makeLink('React Native')}
              {makeLink('Ionic/Capacitor')}
              {makeLink('WordPress')}
              {makeLink('Laravel/PHP')}
              {makeLink('Flutter')}
              {makeLink('Next.js')}
            </ul>
            <h4 style={subheadingStyle}>Documentation</h4>
            <ul style={listStyle}>
              {makeLink('Documentation')}
              {makeLink('Product updates')}
              {makeLink('Tutorials')}
              {makeLink('Open-source Apps')}
              {makeLink('Product status')}
              {makeLink('Glossary')}
            </ul>
          </div>

          {/* COLUMN 4 - Resources */}
          <div>
            <h3 style={headingStyle}>Resources</h3>
            <ul style={listStyle}>
              {makeLink('Customer stories')}
              {makeLink('Blog')}
              {makeLink('Give feedback')}
              {makeLink('Community forum')}
              {makeLink('Help center')}
              {makeLink('Partners')}
            </ul>
            <div style={{ marginTop: '40px' }}>
              <h3 style={headingStyle}>Competitors</h3>
              <ul style={listStyle}>
                {makeLink('SendBird')}
                {makeLink('GetStream')}
                {makeLink('AppLozic')}
                {makeLink('Twilio')}
                {makeLink('PubNub')}
              </ul>
            </div>
            <div style={{ marginTop: '40px' }}>
              <h3 style={headingStyle}>Company</h3>
              <ul style={listStyle}>
                {makeLink('About us')}
                {makeLink('Careers')}
                {makeLink('Partners')}
                {makeLink('Pricing')}
                {makeLink('Chat with us')}
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ BOTTOM SECTION */}
        <div
          style={{
            marginTop: '40px',
            borderTop: '1px solid #27272a',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            fontSize: '13px',
            color: '#a1a1aa',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <p>© 2023 CometChat</p>
            <a href="#" style={{ color: '#a1a1aa', textDecoration: 'none' }}>
              Terms of Use
            </a>
            <a href="#" style={{ color: '#a1a1aa', textDecoration: 'none' }}>
              Privacy Policy
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              fontSize: '18px',
              color: 'white',
            }}
          >
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
