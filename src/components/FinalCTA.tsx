import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import HubSpotCustomForm from './HubSpotCustomForm';

interface FinalCTAProps {
  onBookingClick?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = () => {
  const benefits = [
    "No pre-scoping call prep needed — just bring your process",
    "Walk away with a documented 'Automation Map' for your firm",
    "Detailed quote with fixed-price and guaranteed timeline",
    "Checklist for data compliance and HIPAA requirements"
  ];

  return (
    <section id="book" className="bg-white" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--rule)' }}>
      <div style={{ position: 'absolute', bottom: '-120px', right: '-120px', width: '440px', height: '440px', borderRadius: '50%', border: '1px solid var(--rule)', pointerEvents: 'none' }} />
      <div className="container">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 490px', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '2px', background: 'var(--primary)' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ready to talk</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', color: 'var(--ink)', marginBottom: '20px', lineHeight: 1.15, maxWidth: '800px' }}>
              30 minutes. We map your workflow and tell you exactly what AI can and cannot automate.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--ink)', lineHeight: 1.7, marginBottom: '36px', fontWeight: 300, maxWidth: '800px' }}>
              No demo, no deck, no pitch. A working session about your specific intake process. You walk away with a clear picture of what is automatable.
            </p>
            <div style={{ display: 'grid', gap: '12px' }}>
              {benefits.map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--ink-soft)', fontSize: '14px', fontWeight: 400 }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--cream)', borderRadius: '16px', padding: '40px 32px', border: '1px solid var(--rule)', boxShadow: '0 24px 48px rgba(0,0,0,0.04)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--ink)', marginBottom: '12px', fontWeight: 600 }}>Ready to get started?</h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '32px', fontWeight: 300, lineHeight: 1.5 }}>Join the list of law firms already automating their manual overhead.</p>
            
            <div style={{ textAlign: 'left' }}>
              <HubSpotCustomForm />
            </div>

            <div style={{ marginTop: '24px', fontSize: '11px', color: 'var(--muted)', textAlign: 'center' }}>
              All enquiries are protected under mutual NDA · No commitment required
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){#book .reveal{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
};

export default FinalCTA;
