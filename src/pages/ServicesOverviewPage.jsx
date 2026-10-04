import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Terminal, Server, Users, Code2, ArrowRight, CheckCircle2, FileCode, Cpu, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/translations';

export default function ServicesOverviewPage() {
  const { lang } = useLanguage();

  const serviceIcons = {
    'offensive-security': <Terminal size={26} color="#00e5ff" />,
    'defensive-security': <Shield size={26} color="#10b981" />,
    'it-administration': <Server size={26} color="#38bdf8" />,
    'awareness-training': <Users size={26} color="#f59e0b" />,
    'software-testing': <Code2 size={26} color="#c084fc" />
  };

  return (
    <div className="section-spacing">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '880px', marginBottom: '3.5rem' }}>
          <span className="tech-badge cyan" style={{ marginBottom: '0.75rem' }}>
            ENGINEERING CAPABILITIES // END-TO-END
          </span>
          <h1>
            {lang === 'de'
              ? 'Ganzheitliche Sicherheitsleistungen von Offensive bis Defensive'
              : 'Holistic Cyber Defense: From Offensive Exploits to 24/7 Shielding'}
          </h1>
          <p className="lead">
            {lang === 'de'
              ? 'Wir bieten keine Standard-Softwarepakete von der Stange, sondern maßgeschneiderte Sicherheitsarchitekturen und fundierte technische Überprüfungen nach BSI- und OWASP-Standards.'
              : 'No generic software bundles: we deliver rigorous technical audits, hardened system integration, and tailored cyber defense architectures.'}
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
          {servicesData.map((svc) => (
            <div 
              key={svc.id} 
              id={svc.id}
              className="cyber-card" 
              style={{ padding: '2.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {serviceIcons[svc.id]}
                  </div>
                  <div>
                    <span className="tech-badge" style={{ marginBottom: '0.3rem' }}>
                      {svc.category}
                    </span>
                    <h2 style={{ fontSize: '1.6rem', margin: 0 }}>
                      {svc.title[lang]}
                    </h2>
                  </div>
                </div>

                <Link to={svc.path} className="btn btn-primary btn-sm">
                  {lang === 'de' ? 'Dedizierte Leistungsseite' : 'Dedicated Service Page'}
                  <ArrowRight size={14} />
                </Link>
              </div>

              <p style={{ fontSize: '1.05rem', color: '#cbd5e1', marginBottom: '1.75rem' }}>
                {svc.shortDesc[lang]}
              </p>

              {/* Sub-services modules */}
              <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '1.75rem' }}>
                {svc.subServices.map((sub, i) => (
                  <div key={i} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem'
                  }}>
                    <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                      {sub.title[lang]}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {sub.desc[lang]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Deliverable & Standards info */}
              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>STANDARDS:</span>
                  {svc.standards.map((std, i) => (
                    <span key={i} className="tech-badge" style={{ fontSize: '0.72rem' }}>
                      {std}
                    </span>
                  ))}
                </div>

                <div style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>
                  <strong style={{ color: '#fff' }}>Deliverables:</strong> {svc.deliverable[lang]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology & Vorgehensmodell */}
        <div className="cyber-card" style={{ backgroundColor: '#090c14', padding: '2.5rem' }}>
          <span className="tech-badge cyan" style={{ marginBottom: '0.75rem' }}>
            UNSER VORGEHENSMODELL // METHODOLOGY
          </span>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
            {lang === 'de' ? 'Strukturierter 4-Phasen-Prozess' : 'Structured 4-Phase Security Lifecycle'}
          </h2>
          <div className="grid-4" style={{ marginTop: '1.5rem' }}>
            <div style={{ padding: '1rem', borderLeft: '2px solid var(--accent-cyan)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>PHASE 1</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.3rem 0' }}>Scoping &amp; Recon</h3>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>Definition des Prüfrahmens (Rules of Engagement), Asset-Identifikation und OSINT-Aufklärung.</p>
            </div>
            <div style={{ padding: '1rem', borderLeft: '2px solid #38bdf8' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#38bdf8', fontSize: '0.85rem' }}>PHASE 2</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.3rem 0' }}>Deep Inspection</h3>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>Manuelle Schwachstellenanalyse, Ausnutzung (Exploitation), Privilegieneskalation und Lateral Movement.</p>
            </div>
            <div style={{ padding: '1rem', borderLeft: '2px solid #10b981' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#10b981', fontSize: '0.85rem' }}>PHASE 3</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.3rem 0' }}>Report &amp; Debrief</h3>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>Technischer Nachweis mit CVSS-Scoring, Executive Summary und Vor-Ort-Präsentation mit der Geschäftsführung.</p>
            </div>
            <div style={{ padding: '1rem', borderLeft: '2px solid #c084fc' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#c084fc', fontSize: '0.85rem' }}>PHASE 4</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.3rem 0' }}>Remediation &amp; Retest</h3>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>Unterstützung bei der Schließung der Sicherheitslücken und kostenloser Retest zur Validierung der Fixes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
