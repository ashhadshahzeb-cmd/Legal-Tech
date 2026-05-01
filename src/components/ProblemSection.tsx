import React from 'react';
import { Clock, PhoneOff, FileText, Lock } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const pains = [
    { icon: <Clock size={32} className="text-secondary" />, title: "40+ minutes of admin after every intake call", desc: "The call ends. Your coordinator opens your case management system and starts typing — the same 20 fields they typed on the last call. Schedules follow-up. Drafts the retainer. Updates the tracker. Every single matter.", voice: "Intake coordinators spend nearly an hour per new matter on pure data entry. That's before anyone has done any legal work.", cite: "Operations director, PI firm, 12 attorneys" },
    { icon: <PhoneOff size={32} className="text-secondary" />, title: "Leads going cold because nobody called back fast enough", desc: "A potential client calls at 7pm on a Friday with an urgent PI case. Voicemail. No callback until Monday morning. By then they have retained the firm that called them back in under 10 minutes — the one that had a system.", voice: "Speed of response is where we lose the most qualified leads. We knew it was a problem. We just didn't know how to fix it without hiring more people.", cite: "Managing partner, employment law firm" },
    { icon: <FileText size={32} className="text-secondary" />, title: "Document drafting that should not take 3 hours", desc: "Demand letters, mediation briefs, intake summaries — they follow a predictable structure every time. Your attorneys and paralegals are doing templated work that a well-built system can produce in minutes with the right case data.", voice: "We spend more time formatting documents than thinking about them. That ratio is backwards for a firm at our stage.", cite: "Senior associate, personal injury practice" },
    { icon: <Lock size={32} className="text-secondary" />, title: "Client data going somewhere it should not", desc: "Most AI tools for law firms send your client information — intake data, medical records, case details — to a third-party server you do not control. Your bar association, your malpractice insurer, and your clients all have questions.", voice: "The moment I found out where our data was actually going, I pulled the tool immediately. We need something that stays in our environment.", cite: "Managing partner, estate planning firm" }
  ];

  return (
    <section id="problem" className="bg-white">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--primary)' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Why firms reach out to us</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', color: 'var(--ink)', marginBottom: '20px', maxWidth: '800px' }}>
            The complaints we hear on <br></br> <em style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: 500 }}>every single call</em>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--ink)', maxWidth: '800px', fontWeight: 300, lineHeight: 1.78 }}>
            These are not abstract inefficiencies. They are real operational drains that eat hours,<br></br> lose leads, and create liability exposure.
          </p>
        </div>

        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {pains.map((pain, i) => (
            <div key={i} style={{ padding: '36px', background: 'var(--cream)', borderRadius: '14px', border: '1px solid var(--rule)', transition: 'all 0.3s cubic-bezier(.4,0,.2,1)' }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.06)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ marginBottom: '16px' }}>{pain.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px', lineHeight: 1.3 }}>{pain.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--ink)', marginBottom: '20px', lineHeight: 1.65, fontWeight: 300 }}>{pain.desc}</p>
              <div style={{ padding: '14px 18px', background: 'rgba(17,85,136,0.04)', borderLeft: '3px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'var(--ink-soft)', marginBottom: '6px', lineHeight: 1.5 }}>"{pain.voice}"</p>
                <cite style={{ fontSize: '10px', color: 'var(--primary)', fontWeight: 600, fontStyle: 'normal', textTransform: 'uppercase', letterSpacing: '0.05em' }}>— {pain.cite}</cite>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){#problem .reveal-stagger{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
};

export default ProblemSection;
