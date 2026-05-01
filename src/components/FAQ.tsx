import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How long until we actually see it working?", a: "Most systems are live within 4–6 weeks from signed SOW to deployed system. Simpler single-workflow builds land in 3–4 weeks. Complex multi-system integrations with document generation take 6–8. We give you the specific timeline in writing at the scoping call." },
    { q: "Do you have experience with our practice area?", a: "We have live deployments in personal injury, medical-legal, employment law, and general practice, as well as a legal tech platform built for plaintiff PI attorneys. Each practice area has different intake logic and we build that logic into the system." },
    { q: "What happens when a case is too complex for the AI to handle?", a: "Every system includes escalation logic you define during scoping. When the AI encounters a case type it cannot confidently classify, it routes to a human immediately — with all the captured data already populated." },
    { q: "Can we see a working demo before committing?", a: "Yes. We offer a paid discovery sprint — a one-week engagement where we build a working prototype using your real intake data structure. You see a functional system before committing to the full build. If you proceed, that amount credits toward the project cost." },
    { q: "How long until we see return on the investment?", a: "Most firms see ROI within 60–90 days of launch. If your coordinator saves 40 minutes per new matter at 50 matters per month, that is 33 staff hours per month freed. The system pays for itself well within the first year." },
    { q: "Does it handle multilingual intake?", a: "Yes. English and Spanish are available by default. Additional languages are available for firms serving specific communities — we have built bilingual intake for immigration and family law practices." }
  ];

  return (
    <section id="faq" className="bg-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--secondary)', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--secondary)' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Common questions</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', color: 'white', marginBottom: '16px' }}>
            What you are thinking about <em style={{ fontStyle: 'italic', color: 'var(--secondary)', fontWeight: 500 }}>before you book</em>
          </h2>
        </div>

        <div className="reveal" style={{ maxWidth: '760px', margin: '0 auto', display: 'grid', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: `1px solid ${openIndex === i ? 'rgba(7,148,133,0.3)' : 'rgba(255,255,255,0.06)'}`, overflow: 'hidden', transition: 'border-color 0.3s' }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{ width: '100%', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', color: 'white', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--heading)' }}>
                {faq.q}
                <Plus size={18} style={{ transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)', color: 'var(--secondary)', flexShrink: 0, marginLeft: '16px' }} />
              </button>
              <div style={{ maxHeight: openIndex === i ? '200px' : '0', overflow: 'hidden', transition: 'all 0.35s cubic-bezier(.4,0,.2,1)', padding: openIndex === i ? '0 28px 24px 28px' : '0 28px' }}>
                <p style={{ fontSize: '14px', color: 'white', lineHeight: 1.7, fontWeight: 300 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
