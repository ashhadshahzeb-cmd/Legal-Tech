import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBookingClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookingClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '12px 0' : '18px 0',
      background: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(.4,0,.2,1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://kodexolabs.com/wp-content/uploads/2024/11/Kodexo-labs-Logo-Png-White-01-2048x697.webp" 
            alt="Kodexo Labs" 
            style={{ height: '35px', width: 'auto' }} 
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {[
            { label: 'Solutions', href: '#solutions' },
            { label: 'Client Work', href: '#client-work' },
            { label: 'How It Works', href: '#process' },
            { label: 'FAQ', href: '#faq' }
          ].map((link) => (
            <a key={link.label} href={link.href} style={{
              fontSize: '13px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.6)',
              transition: 'color 0.2s',
              letterSpacing: '0.01em'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              {link.label}
            </a>
          ))}
          <button onClick={onBookingClick} className="btn btn-primary" style={{ 
            padding: '10px 22px', 
            fontSize: '13px', 
            borderRadius: '8px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer'
          }}>
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
