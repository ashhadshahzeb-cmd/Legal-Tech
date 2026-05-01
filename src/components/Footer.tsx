import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      background: '#070e18', 
      padding: '30px 80px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="footer-brand" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="https://kodexolabs.com/wp-content/uploads/2024/11/Kodexo-labs-Logo-Png-White-01-2048x697.webp" 
          alt="Kodexo Labs" 
          style={{ height: '32px', width: 'auto', opacity: 0.8 }} 
        />
      </div>

      <ul className="footer-links" style={{ 
        display: 'flex', 
        gap: '28px', 
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        {[
          { label: 'Solutions', href: '#solutions' },
          { label: 'Client Work', href: '#proof' },
          { label: 'Process', href: '#process' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Contact', href: '#book' }
        ].map((link) => (
          <li key={link.label}>
            <a href={link.href} style={{ 
              fontSize: '12px', 
              color: 'rgba(255,255,255,0.45)', 
              textDecoration: 'none', 
              transition: 'color 0.2s',
              fontWeight: 400
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="footer-legal" style={{ 
        fontSize: '11px', 
        color: 'rgba(255,255,255,0.25)', 
        textAlign: 'right', 
        lineHeight: 1.6,
        fontWeight: 300
      }}>
        Kodexo Labs LLC · Austin, TX<br />
        Kodexo Labs Ltd · United Kingdom<br />
        © 2026 Kodexo Labs
      </div>

      <style>{`
        @media (max-width: 920px) {
          footer { 
            padding: 40px 24px !important; 
            flex-direction: column !important; 
            gap: 32px !important; 
            text-align: center !important; 
          }
          .footer-legal { text-align: center !important; }
          .footer-links { flex-wrap: wrap !important; justify-content: center !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
