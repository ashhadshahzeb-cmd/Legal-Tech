import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import HubSpotCustomForm from './HubSpotCustomForm';
import ClutchWidget from './ClutchWidget';

interface HeroProps {
  onBookingClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '100px',
      background: 'var(--ink)',
      position: 'relative',
      overflow: 'hidden',
      color: 'white'
    }}>
      {/* Ambient Glow */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(17,85,136,0.12) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-30%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(7,148,133,0.08) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
      {/* Grid */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)', zIndex: 0 }} />

      {/* Main Hero Content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%', padding: '40px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 480px', gap: '50px', alignItems: 'center', width: '100%' }}>
          {/* Left */}
          <div className="reveal" style={{ maxWidth: '620px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(10px)', padding: '6px 16px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--secondary)', borderRadius: '50%', boxShadow: '0 0 12px var(--secondary)', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>Custom-built for law firms · Not a SaaS subscription</span>
            </div>

            <h1 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 700, lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.03em' }}>
              Your team is doing work that{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--secondary)' }}>should not require a human</em>
            </h1>

            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, maxWidth: '480px', marginBottom: '24px', fontWeight: 300 }}>
              We build AI systems that handle intake, qualify leads, generate documents, and follow up — deployed inside your existing cloud infrastructure.
            </p>

            <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[{ n: "40+", l: "Min saved / intake" }, { n: "100%", l: "Data in your cloud" }, { n: "Live", l: "HIPAA-compliant" }].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--heading)', fontSize: '20px', color: 'white', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginTop: '4px', fontWeight: 300 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '24px' }}>
              <img
                src="https://staging.kodexolabs.com/wp-content/uploads/2026/05/image-01.png"
                alt="Kodexo Labs Hero Graphic"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button onClick={onBookingClick} className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '13px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                Book a 30-minute call <ArrowRight size={14} />
              </button>
              <a href="#proof" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>See client work ↗</a>
            </div>
          </div>

          {/* Right — White Form Panel */}
          <div className="reveal" style={{ background: 'var(--white)', padding: '24px 32px', borderRadius: '16px', position: 'relative', zIndex: 1, boxShadow: '-20px 0 60px rgba(0,0,0,0.35)' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '4px' }}>Free consultation</div>
            <h3 style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '4px' }}>Tell us what you want off your plate</h3>
            <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '16px', fontWeight: 300, lineHeight: 1.4 }}>We will map out your intake workflow on the call.</p>

            <HubSpotCustomForm />

            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '12px', fontSize: '10px', color: 'var(--muted)', position: 'relative', zIndex: 2 }}>
              <Lock size={12} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
              Protected under mutual NDA
            </div>
          </div>
        </div>
      </div>

      {/* Merged Client Strip */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '40px 0', width: '100%', zIndex: 1, position: 'relative', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '25px', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '40px', opacity: 0.9 }}>Firms & Clients</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '30px 60px' }}>
            {[
              "https://staging.kodexolabs.com/wp-content/uploads/2026/05/74.png",
              "https://staging.kodexolabs.com/wp-content/uploads/2026/05/73.png",
              "https://staging.kodexolabs.com/wp-content/uploads/2026/05/71.png",
              "https://staging.kodexolabs.com/wp-content/uploads/2026/05/72.png"
            ].map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt="Client Logo" 
                style={{ 
                  height: '80px', 
                  width: 'auto', 
                  opacity: 0.9, 
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
                }}
                onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.15) translateY(-5px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1) translateY(0)'; }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Merged Review Strip with Clutch Widget */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0', width: '100%', zIndex: 1, position: 'relative', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <ClutchWidget />
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @media(max-width:1024px){.container{grid-template-columns:1fr!important;gap:40px!important}}
      `}</style>
    </div>
  );
};

export default Hero;
