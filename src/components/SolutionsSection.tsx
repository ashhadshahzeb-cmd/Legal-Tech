import React from 'react';

interface SolutionsSectionProps {
  onBookingClick?: () => void;
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onBookingClick }) => {
  const solutions = [
    { ord: "01", sub: "Most requested", title: "AI Client Intake System", desc: "24/7 intake that captures new leads via phone, web, or chat — extracts all case data, qualifies against your criteria, and populates your case management system.", tags: ["Clio API", "Filevine", "Voice AI", "SMS follow-up"], timeline: "4–6 weeks" },
    { ord: "02", sub: "Highest ROI for PI firms", title: "Lead Qualification & Response Agent", desc: "Responds to every new inquiry within 60 seconds, asks your qualification questions, routes hot leads straight to your calendar, and nurtures the rest automatically.", tags: ["SMS AI", "Email", "Calendar booking", "CRM sync"], timeline: "3–4 weeks" },
    { ord: "03", sub: "Document-heavy practices", title: "AI Document Generation", desc: "Demand letters, mediation briefs, intake summaries — generated from your case data in minutes. Built on your templates, your firm's voice, your structure.", tags: ["Demand letters", "Mediation briefs", "Summaries"], timeline: "4–5 weeks" },
    { ord: "04", sub: "Personal injury firms", title: "PI Intake & Screening Automation", desc: "Built specifically for PI firms processing 50+ new leads per month. Handles initial screening — liability, statute of limitations, coverage — extracts accident details, and routes by case value.", tags: ["CasePeer", "Liability check", "SOL screening"], timeline: "5–6 weeks" },
    { ord: "05", sub: "Client communication", title: "Automated Client Updates", desc: "Case status updates, document request sequences, appointment reminders, post-consultation follow-up — all automated. Clients feel informed and attended to.", tags: ["Email sequences", "SMS", "Portal updates"], timeline: "2–3 weeks" },
    { ord: "06", sub: "Ongoing support", title: "AI Care Plan — Monthly Maintenance", desc: "Monthly retraining, performance monitoring, model updates, and priority support. Your system keeps learning from your real cases and gets more accurate every month.", tags: ["Monthly retraining", "Uptime SLA", "Priority support"], timeline: "Ongoing · from $600/month" }
  ];

  return (
    <section id="solutions" style={{ background: 'var(--ink)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--secondary)', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--secondary)' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>What we build</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', color: 'white', marginBottom: '20px', maxWidth: '800px' }}>
            Custom systems, not <em style={{ fontStyle: 'italic', color: 'var(--secondary)', fontWeight: 500 }}>subscription templates</em>
          </h2>
          <p style={{ fontSize: '17px', color: 'white', maxWidth: '800px', fontWeight: 300, lineHeight: 1.78 }}>
            Every system we build is scoped to your firm's intake logic, integrated with the tools you already use, and deployed in your own cloud environment. You own it. There is no monthly seat fee.
          </p>
        </div>

        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {solutions.map((sol, i) => (
            <div 
              key={i} 
              onClick={onBookingClick}
              style={{ padding: '28px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s cubic-bezier(.4,0,.2,1)', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(7,148,133,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: '11px', color: 'var(--secondary)', fontStyle: 'italic', marginBottom: '13px', fontFamily: 'var(--heading)' }}>{sol.ord}. {sol.sub}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'white', marginBottom: '10px', lineHeight: 1.3 }}>{sol.title}</h3>
              <p style={{ fontSize: '13px', color: 'white', marginBottom: '20px', lineHeight: 1.65, fontWeight: 300, flex: 1 }}>{sol.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                {sol.tags.map((tag, j) => (
                  <span key={j} style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', padding: '3px 8px', background: 'rgba(7,148,133,0.1)', color: 'var(--secondary)', borderRadius: '3px' }}>{tag}</span>
                ))}
              </div>
              <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>{sol.timeline}</span> · deployed in your cloud
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:1024px){#solutions .reveal-stagger{grid-template-columns:1fr 1fr!important}}@media(max-width:640px){#solutions .reveal-stagger{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
};

export default SolutionsSection;
