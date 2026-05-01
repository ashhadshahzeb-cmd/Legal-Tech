import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ProofSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      name: "AGG Law Firm",
      tag: "Personal Injury / General Practice",
      title: "Automated their entire new client intake — from first call to a fully populated case file",
      body: "AGG was handling intake manually — phone call, then 40 minutes of data entry per case. We built a voice AI intake agent that captures all case data from the initial call, screens for case type, extracts key liability details, and populates their case management system. Staff reviews everything before it goes to the client. The system runs inside their own AWS environment — nothing leaves their infrastructure.",
      stats: [
        { n: "24/7", l: "Intake coverage without additional staff" },
        { n: "40m", l: "Admin eliminated per new matter" },
        { n: "0", l: "PHI sent to third-party servers" },
        { n: "Live", l: "Integrated with their case management system" }
      ],
      badges: ["Voice AI", "LangGraph", "AWS deployment", "CMS integration", "SMS follow-up"],
      cta: { text: "Build this for our firm", href: "#book" },
      fullWidthImage: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/AI_Workflow_Horizontal_Tree-scaled.png"
    },
    {
      name: "Settlewing",
      tag: "Legal Tech Platform · Personal Injury Attorneys",
      title: "AI-powered demand letters and mediation briefs for plaintiff attorneys — in minutes, not hours",
      body: "Settlewing is a legal support platform built for plaintiff PI attorneys. We built the AI engine that processes case data and medical records to generate persuasive demand letters and mediation briefs — documents structured the way adjusters and mediators actually respond to, not generic templates. The platform is HIPAA-compliant, runs on secure cloud infrastructure, and is used by PI attorneys handling active cases today.",
      stats: [
        { n: "Auto", l: "Demand letters generated from case data" },
        { n: "PI", l: "Plaintiff attorney workflow, end-to-end" },
        { n: "HIPAA", l: "Compliant — data encrypted in transit and at rest" },
        { n: "Live", l: "Production platform — active users today" }
      ],
      badges: ["Document AI", "Medical record processing", "FastAPI", "HIPAA controls", "Azure deployment"],
      cta: { text: "Visit Settlewing", href: "https://www.settlewing.com" },
      fullWidthImage: "https://staging.kodexolabs.com/wp-content/uploads/2026/05/Admin-managment-scaled.png"
    },
    {
      name: "Brigham & Associates",
      tag: "Medical-Legal · Personal Injury",
      title: "Automated medical record review and demand letter generation for high-volume PI cases",
      body: "Brigham & Associates handles high-volume medical-legal work where each case requires reviewing stacks of records and generating demand letters. We built a system that ingests records, extracts key medical findings organized by injury type and treatment timeline, and drafts the relevant demand letter sections. The AI runs inside their cloud tenancy — their case data never leaves their environment.",
      stats: [
        { n: "3x", l: "Faster demand letter generation" },
        { n: "Auto", l: "Medical record review and extraction" },
        { n: "HIPAA", l: "BAA in place, on-premise equivalent deployment" },
        { n: "Live", l: "Medical-legal PI workflow" }
      ],
      badges: ["Document AI", "PDF processing", "FastAPI", "Client cloud deployment", "HIPAA controls"],
      cta: { text: "Build this for our firm", href: "#book" }
    },
    {
      name: "INIH Solutions",
      tag: "Legal Tech Platform · Personal Injury Referral",
      title: "Multi-channel AI intake system deployed across Web, WhatsApp, and Voice",
      body: "INIH Solutions operates a national personal injury referral platform capturing leads across web, WhatsApp, and voice in seven languages. Serving injured Americans across the country, with a focused presence in underserved South Asian and Arab American communities, we built and deployed three AI agents with full customer support and intake capabilities. The system handles lead capture, multilingual intake screening, and case data submission to the INIH portal (Lovable + Supabase) without requiring human intervention at the first-touch stage. Every agent enforces INIH's strict compliance guardrails: no legal advice, no outcome promises, and mandatory AI disclosure at the start of every interaction. Qualified leads are handed off to the intake team and all case data flows directly into the client's CRM.",
      stats: [
        { n: "7", l: "Languages supported across all agents" },
        { n: "3", l: "Dedicated agents: Web, WhatsApp, and Voice" },
        { n: "100%", l: "Automated first-touch intake screening" },
        { n: "TCPA", l: "Full compliance guardrails in place" }
      ],
      badges: ["Conversational AI", "WhatsApp API", "Twilio", "VAPI AI", "Multilingual", "NLP", "N8N Automation", "Supabase", "CRM Integration", "TCPA Compliance"],
      cta: { text: "Build this for our firm", href: "#book" }
    }
  ];

  const c = cases[activeTab];

  return (
    <section id="proof" style={{ background: 'var(--ink)', padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '1440px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <div className="reveal" style={{ maxWidth: '700px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--secondary)', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '2px', background: 'var(--secondary)' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Client work</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 42px)', color: 'white', marginBottom: '16px' }}>
              Real systems, running <em style={{ fontStyle: 'italic', color: 'var(--secondary)', fontWeight: 500 }}>in production</em>
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', fontWeight: 300, lineHeight: 1.6 }}>
              Live deployments with real results, built for firms and legal tech platforms with high compliance requirements.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
            {cases.map((cs, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                padding: '12px 20px', fontSize: '13px', fontWeight: activeTab === i ? 600 : 500,
                color: activeTab === i ? 'white' : 'rgba(255,255,255,0.5)',
                borderBottom: activeTab === i ? '2px solid var(--secondary)' : '2px solid transparent',
                marginBottom: '-2px', transition: 'all 0.2s', cursor: 'pointer', background: 'none',
                whiteSpace: 'nowrap'
              }}>{cs.name}</button>
            ))}
          </div>
        </div>

        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: c.fullWidthImage ? '1fr 1fr' : '1.4fr 0.6fr',
          gap: '64px',
          paddingTop: '52px',
          alignItems: 'center'
        }}>
          {/* Content Area */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '13px' }}>{c.tag}</div>
            <h3 style={{ fontFamily: 'var(--heading)', fontSize: '32px', color: 'white', lineHeight: 1.2, marginBottom: '20px' }}>{c.title}</h3>
            <p style={{ fontSize: '17px', color: 'white', lineHeight: 1.7, fontWeight: 300, marginBottom: '28px', opacity: 0.9 }}>{c.body}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}>
              {c.badges.map((b, i) => (
                <span key={i} style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '5px 12px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '3px', color: 'rgba(255,255,255,0.7)' }}>{b}</span>
              ))}
            </div>
            <a href={c.cta.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', fontSize: '15px', fontWeight: 500, borderBottom: '1px solid var(--secondary)', paddingBottom: '2px' }}>
              {c.cta.text} <ArrowRight size={14} />
            </a>
          </div>

          {/* Visual Area */}
          <div style={{ width: '100%' }}>
            {c.fullWidthImage ? (
              <div style={{ animation: 'fadeIn 0.6s ease-out forwards' }}>
                <img
                  src={c.fullWidthImage}
                  alt="Project Visual"
                  style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                />
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {c.stats.map((s, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '22px' }}>
                    <div style={{ fontFamily: 'var(--heading)', fontSize: '32px', color: 'white', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', fontWeight: 300, lineHeight: 1.4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {c.fullWidthImage && (
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '40px' }}>
            {c.stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--heading)', fontSize: '32px', color: 'white', lineHeight: 1, marginBottom: '8px' }}>{s.n}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @media(max-width:1024px){
          #proof [style*="grid-template-columns: 1.4fr 0.6fr"]{ grid-template-columns: 1fr !important; }
          #proof [style*="grid-template-columns: repeat(4, 1fr)"]{ grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ProofSection;
