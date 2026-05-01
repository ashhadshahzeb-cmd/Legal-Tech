import React from 'react';

const TrustStrip: React.FC = () => {
  const logos = [
    { src: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/74.png", alt: "Settlewing" },
    { src: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/73.png", alt: "Brigham & Associates" },
    { src: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/71.png", alt: "AGG Law Firm" },
    { src: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/72.png", alt: "MZA Healthcare" },
    { text: "⭐ 5.0 on Clutch" }
  ];

  return (
    <div style={{ background: 'var(--white)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '24px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap', flexShrink: 0 }}>Trusted by</span>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 0, flexWrap: 'wrap' }}>
          {logos.map((logo, i) => (
            <div key={i} style={{ flex: 1, minWidth: '140px', height: '60px', borderRight: i < logos.length - 1 ? '1px solid var(--rule)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
              {'src' in logo ? (
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  style={{ 
                    maxHeight: '50px', 
                    maxWidth: '160px', 
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
              ) : (
                <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500, fontFamily: 'var(--heading)' }}>{logo.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
