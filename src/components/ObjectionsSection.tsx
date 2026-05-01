import React from 'react';
import { HelpCircle } from 'lucide-react';

const ObjectionsSection: React.FC = () => {
  const objections = [
    { q: "How is this different from the software we already pay for?", a: "Most legal software is built for standard firm workflows. We build for firms whose intake logic, compliance requirements, or integration needs don't fit any subscription product. You own the system, there is no monthly seat fee, and it works exactly the way your firm works." },
    { q: "What about bar compliance and AI disclosure requirements?", a: "Every system we build keeps attorneys in control. Client-facing messages are reviewed and approved by your staff before they send. The AI handles data extraction, population, and routing — not legal advice or client judgment." },
    { q: "Will client data go through OpenAI or any external AI server?", a: "Not unless you want it to. For regulated practices, we deploy the AI model directly into your AWS or Azure cloud account. The model runs inside your environment — all processing happens there. No client data routes through our servers or any third-party AI API." },
    { q: "We use Clio / Filevine / CasePeer. Will this replace it?", a: "No — it works on top of it. We build the automation layer that captures and processes data before it reaches your case management system. Your team keeps using the tools they know." },
    { q: "What does it cost?", a: "Most projects start at $3,999 for focused single-workflow builds and go up to $10,000+ for multi-system integrations with complex logic and document generation. We give you a fixed-price quote in writing after the scoping call." },
    { q: "What if it doesn't work the way we expected?", a: "We build in milestone reviews where you see working software before the next phase begins. If something is not right, we fix it before continuing. This structure means quality issues surface and get resolved before they compound." }
  ];

  return (
    <section style={{ background: 'var(--cream)', borderTop: '1px solid var(--rule)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--primary)' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Questions we get asked</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', color: 'var(--ink)', marginBottom: '20px', maxWidth: '800px' }}>
            What every firm wants to know <em style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: 500 }}>before they commit</em>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink)', maxWidth: '800px', fontWeight: 300, lineHeight: 1.7 }}>
            We answer these on every discovery call. Putting them here so the call can be about the actual work instead.
          </p>
        </div>
        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {objections.map((obj, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '28px', borderRadius: '14px', border: '1px solid var(--rule)', transition: 'all 0.2s' }}
            onMouseOver={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start', lineHeight: 1.4 }}>
                <div style={{ background: 'rgba(17,85,136,0.08)', color: 'var(--primary)', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '-2px' }}>
                  <HelpCircle size={16} />
                </div>
                {obj.q}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, paddingLeft: '38px' }}>{obj.a}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.reveal-stagger[style*="1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
};

export default ObjectionsSection;
