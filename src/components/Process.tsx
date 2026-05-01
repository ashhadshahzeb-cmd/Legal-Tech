import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    { week: "Week 0", title: "Free Scoping Call — 30 minutes", items: ["We map your current intake workflow step by step", "We identify which steps can realistically be automated", "You get a fixed-price quote and timeline before the call ends", "No commitment, no follow-up pressure"] },
    { week: "Week 1", title: "Discovery & Architecture", items: ["SOW signed with fixed scope and price", "BAA executed before any development begins", "Architecture diagram approved by your team", "Your cloud environment access confirmed"] },
    { week: "Week 2–4", title: "Build — Weekly Demos Throughout", items: ["AI pipeline built using synthetic test data only", "Case management integrations built and verified", "Weekly video demo — you see real progress every 7 days", "Slack access to the team throughout"] },
    { week: "Week 5–6", title: "Testing & Launch", items: ["UAT with your real intake scenarios", "Accuracy review and sign-off by your team", "1-hour staff walkthrough and training session", "Full documentation and deployment to your environment"] },
    { week: "Ongoing", title: "AI Care Plan (Optional)", items: ["Monthly retraining on your real case data", "Performance monitoring and accuracy reports", "Model updates and priority support", "System improves as it learns your firm's patterns"] }
  ];

  return (
    <section id="process" className="bg-white">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '64px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--primary)' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>How it works</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', color: 'var(--ink)', marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px auto' }}>
            From first call to <em style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: 500 }}>live system</em>
          </h2>
          <p style={{ color: 'var(--ink)', maxWidth: '800px', margin: '0 auto', fontSize: '17px', fontWeight: 300, lineHeight: 1.78 }}>
            Fixed scope. Fixed timeline. You see working software at every stage. No open-ended retainers, no vague "agile" timelines, no surprises.
          </p>
        </div>

        <div className="reveal" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '40px 0' }}>
          {/* Central Vertical Line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--rule)', transform: 'translateX(-50%)', zIndex: 0 }} />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: i === steps.length - 1 ? 0 : '64px', position: 'relative', zIndex: 1, flexDirection: isEven ? 'row' : 'row-reverse' }}>
                <div style={{ flex: 1 }} />
                <div style={{ flexShrink: 0, width: '80px', display: 'flex', justifyContent: 'center', margin: '0 32px' }}>
                  <div style={{ width: '64px', height: '64px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 8px var(--white), 0 10px 30px rgba(17,85,136,0.2)', position: 'relative', fontSize: '20px', fontWeight: 700, fontFamily: 'var(--heading)' }}>
                    {i + 1}
                    <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--secondary)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, border: '2px solid var(--white)' }}>
                      ✓
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1, background: 'var(--cream)', padding: '32px', borderRadius: '16px', border: '1px solid var(--rule)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.05)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.02)'; }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>{step.week}</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>{step.title}</h3>
                  <ul style={{ display: 'grid', gap: '8px' }}>
                    {step.items.map((item, j) => (
                      <li key={j} style={{ fontSize: '14px', color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 400 }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`@media(max-width:768px){#process [style*="flex-direction"]{flex-direction:column!important}#process [style*="flex: 1"]:first-child{display:none!important}#process [style*="width: 80px"]{margin:0 0 16px 0!important}}`}</style>
    </section>
  );
};

export default Process;
