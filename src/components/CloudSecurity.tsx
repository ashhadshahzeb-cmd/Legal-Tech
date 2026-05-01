import React from 'react';
import { Shield, Lock, Search, FileCheck } from 'lucide-react';

const CloudSecurity: React.FC = () => {
  const features = [
    { icon: <Shield size={24} className="text-secondary" />, title: "Deployed to your AWS or Azure account", desc: "The AI model runs inside your existing cloud tenant — not ours, not a third party's. Your infrastructure, your access keys, your audit trail." },
    { icon: <Lock size={24} className="text-secondary" />, title: "Client data never leaves your environment", desc: "Every query, every document, every intake response — processed entirely within your cloud boundary. Nothing is routed through an external AI API unless you explicitly choose it." },
    { icon: <FileCheck size={24} className="text-secondary" />, title: "BAA signed before development begins", desc: "We bring a pre-drafted Business Associate Agreement to the first project meeting. The liability chain is formally established before a single line of code is written." },
    { icon: <Search size={24} className="text-secondary" />, title: "Built with synthetic data during development", desc: "Our engineers never work with real client data during the build phase. We use fabricated test records throughout development. Real PHI only enters the system at your controlled launch." }
  ];

  return (
    <section id="security" style={{ background: 'var(--ink)', color: 'white' }}>
      <div className="container">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--secondary)', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '2px', background: 'var(--secondary)' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>How we handle your data</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', color: 'white', marginBottom: '20px', maxWidth: '800px' }}>
              Your cloud account. <em style={{ fontStyle: 'italic', color: 'var(--secondary)', fontWeight: 500 }}>Your data. Full stop.</em>
            </h2>
            <p style={{ fontSize: '16px', color: 'white', lineHeight: 1.78, fontWeight: 300, maxWidth: '800px' }}>
              We do not run your client data through a shared server. We deploy the AI model directly into your existing AWS or Azure cloud account. It runs inside your environment, under your access controls. You can audit it, restrict it, and shut it down — because it is yours.
            </p>
          </div>
          <div className="reveal-stagger" style={{ display: 'grid', gap: '14px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '16px', alignItems: 'flex-start', transition: 'all 0.25s' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(7,148,133,0.3)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}>
                <div style={{ flexShrink: 0, color: 'var(--secondary)', width: '36px', height: '36px', background: 'rgba(7,148,133,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>{f.title}</h3>
                  <p style={{ fontSize: '13px', color: 'white', lineHeight: 1.6, fontWeight: 300 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){#security .reveal{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
};

export default CloudSecurity;
