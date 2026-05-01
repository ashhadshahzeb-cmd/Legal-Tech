import React from 'react';
import { Star } from 'lucide-react';

const ProofHeroBar: React.FC = () => {
  return (
    <div style={{ background: 'var(--cream)', borderBottom: '1px solid var(--rule)', padding: '40px 0' }}>
      <div className="container">
        <div className="reveal" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Left: Quote */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <p style={{ fontSize: '18px', color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '16px', fontWeight: 400 }}>
              "Before this system, our team spent 45 minutes on data entry per new case. That work is gone now. The ROI was visible in the first month."
            </p>
            <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
              <span style={{ fontWeight: 700, color: 'var(--ink)' }}>Chris Brigham</span> • Owner, Brigham & Associates
            </div>
          </div>

          {/* Right: Clutch Stars */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} size={18} style={{ color: '#ffb300', fill: '#ffb300' }} />
              ))}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 500 }}>
              Verified on <a href="#" style={{ color: '#0d47a1', fontWeight: 700 }}>Clutch</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProofHeroBar;
