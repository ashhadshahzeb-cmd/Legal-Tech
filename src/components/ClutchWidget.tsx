import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const ClutchWidget: React.FC = () => {
  return (
    <div style={{ 
      width: '100%', 
      margin: '0 auto', 
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      {/* Subtle Star Rating */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Star key={i} size={16} style={{ color: '#ffb300', fill: '#ffb300' }} />
        ))}
      </div>
      
      {/* Refined Quote */}
      <blockquote style={{ margin: 0, padding: 0, maxWidth: '850px' }}>
        <p style={{ 
          fontSize: 'clamp(20px, 2.5vw, 28px)', 
          color: 'white', 
          lineHeight: 1.35, 
          fontWeight: 400, 
          letterSpacing: '-0.02em',
          marginBottom: '24px'
        }}>
          "They're committed to accomplishing tasks with a focus on customer service and excellence."
        </p>
        
        <footer style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ fontSize: '15px', color: 'white', fontWeight: 600 }}>
            President, Brigham and Associates, Inc.
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            padding: '6px 16px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--secondary)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <CheckCircle2 size={12} />
              Verified Review
            </div>
            <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Clutch<span style={{ color: 'var(--secondary)', fontSize: '18px', lineHeight: 0 }}>.</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 400, marginLeft: '4px' }}>4.9/5.0 Rating</span>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};

export default ClutchWidget;
