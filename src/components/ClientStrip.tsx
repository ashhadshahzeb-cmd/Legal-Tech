import React from 'react';

const ClientStrip: React.FC = () => {
  const clients = [
    { name: "Settlewing", logo: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/73.png" },
    { name: "Brigham & Associates", logo: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/72.png" },
    { name: "AGG Law Firm", logo: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/71.png" },
    { name: "MZA Healthcare", logo: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/74.png" },
  ];

  return (
    <div style={{ 
      background: '#fff', 
      borderBottom: '1px solid #eee', 
      padding: '30px 0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        gap: '40px',
        maxWidth: '1440px',
        margin: '0 auto'
      }}>
        <div style={{ 
          fontSize: '11px', 
          fontWeight: 700, 
          color: '#999', 
          textTransform: 'uppercase', 
          letterSpacing: '0.15em',
          borderRight: '1px solid #eee',
          paddingRight: '40px',
          whiteSpace: 'nowrap'
        }}>
          Trusted By
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-around', 
          flex: 1, 
          gap: '20px'
        }}>
          {clients.map((client, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              padding: '0 20px',
              borderRight: i === clients.length - 1 ? 'none' : '1px solid #f0f0f0'
            }}>
              <img 
                src={client.logo} 
                alt={client.name} 
                style={{ 
                  height: '45px', 
                  width: 'auto', 
                  filter: 'grayscale(100%) brightness(0.8)', // Professional subtle look
                  opacity: 0.6,
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'grayscale(0%)'; }}
                onMouseOut={(e) => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8)'; }}
              />
            </div>
          ))}
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          borderLeft: '1px solid #eee',
          paddingLeft: '40px',
          whiteSpace: 'nowrap'
        }}>
          <span style={{ color: '#f59e0b', fontSize: '16px' }}>★</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#444' }}>5.0 on Clutch</span>
        </div>
      </div>
    </div>
  );
};

export default ClientStrip;
