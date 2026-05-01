import React, { useState } from 'react';

const HubSpotCustomForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    practice_area: '',
    biggest_time_drain: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const portalId = "23256174";
    const formId = "78c95aa8-b96e-4d0d-9532-651f8e9561a2";
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const body = {
      fields: [
        { name: 'firstname', value: formData.firstname },
        { name: 'lastname', value: formData.lastname },
        { name: 'email', value: formData.email },
        { name: 'company', value: formData.company },
        { name: 'practice_area', value: formData.practice_area },
        { name: 'biggest_time_drain', value: formData.biggest_time_drain }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', marginTop: '-20px' }}>
        <style>{`
          .hs-glass-card {
            background: transparent;
            border: none;
            padding: 0;
            margin: 0;
          }
          .hs-meetings-shell {
            border-radius: 12px;
            overflow: hidden;
            width: 100%;
            margin-bottom: -70px;
          }
          .meetings-iframe-container { width: 100% !important; }
        `}</style>
        
        <div className="hs-glass-card">
          <div className="hs-meetings-shell">
            <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/kodexo?embed=true"></div>
            <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" async></script>
          </div>
        </div>
      </div>
    );
  }

  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '13px', fontWeight: 500, color: '#4a4a4a', marginBottom: '6px', letterSpacing: '-0.01em' };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px', position: 'relative', zIndex: 10 }}>
      <style>{`
        .hs-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid #e2e0db;
          background: #fcfcfb;
          font-size: 15px;
          color: var(--ink);
          outline: none;
          transition: all 0.2s;
          pointer-events: auto !important;
        }
        .hs-input:focus {
          border-color: var(--secondary) !important;
          background: white !important;
          box-shadow: 0 0 0 3px rgba(7,148,133,0.1);
        }
      `}</style>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>First Name</label>
          <input 
            type="text" 
            required 
            className="hs-input"
            placeholder="e.g. Sarah"
            value={formData.firstname}
            onChange={e => setFormData({ ...formData, firstname: e.target.value })}
          />
        </div>
        <div>
          <label style={labelStyle}>Last Name</label>
          <input 
            type="text" 
            required 
            className="hs-input"
            placeholder="e.g. Johnson"
            value={formData.lastname}
            onChange={e => setFormData({ ...formData, lastname: e.target.value })}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Work Email</label>
          <input 
            type="email" 
            required 
            className="hs-input"
            placeholder="sarah@lawfirm.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label style={labelStyle}>Law Firm Name</label>
          <input 
            type="text" 
            required 
            className="hs-input"
            placeholder="Firm Name"
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Practice Area</label>
        <select 
          required 
          className="hs-input"
          style={{ cursor: 'pointer' }}
          value={formData.practice_area}
          onChange={e => setFormData({ ...formData, practice_area: e.target.value })}
        >
          <option value="">Select practice area</option>
          <option value="Personal Injury">Personal Injury</option>
          <option value="Family Law">Family Law / Divorce</option>
          <option value="Estate Planning">Estate Planning</option>
          <option value="Criminal Defense">Criminal Defense</option>
          <option value="Immigration">Immigration</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Biggest time drain right now?</label>
        <select 
          required 
          className="hs-input"
          style={{ cursor: 'pointer' }}
          value={formData.biggest_time_drain}
          onChange={e => setFormData({ ...formData, biggest_time_drain: e.target.value })}
        >
          <option value="">What slows your team down most</option>
          <option value="Intake">Intake — too much manual data entry</option>
          <option value="Lead Follow-up">Lead follow-up — leads go cold</option>
          <option value="Document Drafting">Document drafting — letters, briefs</option>
          <option value="After-hours">After-hours — missing calls</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        style={{ width: '100%', padding: '14px', marginTop: '8px', fontSize: '15px', fontWeight: 600 }}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending Request...' : 'Book Free 30-Minute Call →'}
      </button>

      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '10px', textAlign: 'center' }}>
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
    </form>
  );
};

export default HubSpotCustomForm;
