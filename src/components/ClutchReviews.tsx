import React from 'react';

const ClutchReviews: React.FC = () => {
  const reviews = [
    { initials: "CB", name: "Chris Brigham", role: "Owner · Brigham & Associates", quote: "Before this system, our team spent 45 minutes on data entry per new case. That work is gone now. The ROI was visible in the first month." },
    { initials: "NT", name: "Nicole Tosti", role: "Founder · Settlewing", quote: "Kodexo built the AI engine behind Settlewing. The document generation accuracy exceeded what we expected, and they delivered ahead of schedule." }
  ];

  return (
    <section style={{ background: 'var(--cream)', borderTop: '1px solid var(--rule)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--primary)' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Verified client reviews</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', color: 'var(--ink)', marginBottom: '20px', maxWidth: '800px' }}>
            What clients say, <em style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: 500 }}>on the record</em>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink)', maxWidth: '800px', fontWeight: 300, lineHeight: 1.7 }}>
            These reviews are published on Clutch — an independent B2B review platform. You can click through to verify every word.
          </p>
        </div>
        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: 'var(--white)', borderRadius: '10px', padding: '32px', border: '1px solid var(--rule)', position: 'relative', transition: 'box-shadow 0.2s' }}
            onMouseOver={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(13,17,23,0.08)'}
            onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}>
              <a href="https://clutch.co/profile/kodexo-labs" target="_blank" rel="noreferrer" style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: 'var(--muted)', fontWeight: 500, letterSpacing: '0.04em' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>✓</span> Verified on Clutch
              </a>
              <div style={{ color: '#ff6d00', fontSize: '18px', letterSpacing: '2px', marginBottom: '16px' }}>★★★★★</div>
              <p style={{ fontSize: '15px', color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.7, fontWeight: 300, marginBottom: '20px' }}>"{r.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--rule)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--cream)', border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--heading)', fontSize: '14px', color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>{r.initials}</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.reveal-stagger[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
};

export default ClutchReviews;
