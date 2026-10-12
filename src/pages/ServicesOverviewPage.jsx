import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Cloud, Code2, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/translations';

export default function ServicesOverviewPage() {
  const { lang } = useLanguage();

  const serviceIcons = {
    'systemintegration': <Server size={26} color="var(--accent-blue)" />,
    'cloud-services': <Cloud size={26} color="var(--accent-cyan)" />,
    'softwareentwicklung': <Code2 size={26} color="#7c3aed" />,
    'voip-telefonie': <PhoneCall size={26} color="var(--accent-amber)" />,
    'security-ueberwachung': <ShieldCheck size={26} color="var(--accent-emerald)" />
  };

  return (
    <div className="section-spacing">
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>SERVICES</span>
        </div>

        {/* Header */}
        <div style={{ maxWidth: '880px', marginBottom: '3.5rem' }}>
          <span className="tech-badge blue" style={{ marginBottom: '0.75rem' }}>
            IT-SYSTEMHAUS &amp; MANAGED SERVICES // LEISTUNGSSPEKTRUM
          </span>
          <h1>
            {lang === 'de'
              ? 'Ganzheitliche IT-Systemhaus & Security Leistungen'
              : 'End-to-End IT Systems & Security Capabilities'}
          </h1>
          <p className="lead">
            {lang === 'de'
              ? 'Von stabiler Systemintegration, flexiblen Cloud-Diensten und moderner VoIP-Telefonie bis hin zu individueller Softwareentwicklung und lückenloser Sicherheitsüberwachung mit SIEM, IDS/IPS, MDM und KI-gestützter Erkennung.'
              : 'From reliable systems integration, cloud solutions, and VoIP to custom software engineering and proactive surveillance with SIEM, IDS/IPS, MDM, and AI-driven telemetry.'}
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
          {servicesData.map((svc) => (
            <div 
              key={svc.id} 
              id={svc.id}
              className="cyber-card" 
              style={{ padding: 'clamp(1.25rem, 3.5vw, 2.5rem)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {serviceIcons[svc.id]}
                  </div>
                  <div>
                    <span className="tech-badge" style={{ marginBottom: '0.35rem' }}>
                      {svc.category}
                    </span>
                    <h2 style={{ fontSize: '1.6rem', margin: 0, color: 'var(--text-main)' }}>
                      {svc.title[lang]}
                    </h2>
                  </div>
                </div>

                <Link to={svc.path} className="btn btn-primary btn-sm">
                  {lang === 'de' ? 'Dedizierte Leistungsseite' : 'Dedicated Service Page'}
                  <ArrowRight size={14} />
                </Link>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                {svc.shortDesc[lang]}
              </p>

              {/* Sub-services modules */}
              <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '1.75rem' }}>
                {svc.subServices.map((sub, i) => (
                  <div key={i} style={{
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1.15rem 1.25rem'
                  }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem', fontSize: '0.98rem' }}>
                      {sub.title[lang]}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
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
                  <strong style={{ color: 'var(--text-main)' }}>Deliverables:</strong> {svc.deliverable[lang]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology & Vorgehensmodell */}
        <div className="cyber-card" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', padding: '2.5rem' }}>
          <span className="tech-badge blue" style={{ marginBottom: '0.75rem' }}>
            UNSER VORGEHENSMODELL // METHODOLOGY
          </span>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'Strukturierter 4-Phasen-Prozess für Ihre IT' : 'Structured 4-Phase IT Implementation Lifecycle'}
          </h2>
          <div className="grid-4" style={{ marginTop: '1.5rem' }}>
            <div style={{ padding: '1.25rem', borderLeft: '3px solid var(--accent-blue)', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderLeftWidth: '3px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 600 }}>PHASE 1</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.35rem 0', color: 'var(--text-main)' }}>Analyse &amp; Audit</h3>
              <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-muted)', lineHeight: 1.5 }}>Genaue Bestandsaufnahme Ihrer bestehenden IT-Systeme, Identifikation von Flaschenhälsen und Sicherheitsrisiken.</p>
            </div>
            <div style={{ padding: '1.25rem', borderLeft: '3px solid #0284c7', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderLeftWidth: '3px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#0284c7', fontSize: '0.85rem', fontWeight: 600 }}>PHASE 2</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.35rem 0', color: 'var(--text-main)' }}>Konzeption &amp; Design</h3>
              <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-muted)', lineHeight: 1.5 }}>Maßgeschneiderte Architektur für Netzwerke, Cloud-Workplaces, VoIP-Telefonie und Sicherheitsüberwachung.</p>
            </div>
            <div style={{ padding: '1.25rem', borderLeft: '3px solid #7c3aed', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderLeftWidth: '3px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#7c3aed', fontSize: '0.85rem', fontWeight: 600 }}>PHASE 3</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.35rem 0', color: 'var(--text-main)' }}>Rollout &amp; Migration</h3>
              <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-muted)', lineHeight: 1.5 }}>Reibungslose Umsetzung im laufenden Betrieb ohne Ausfallzeiten, saubere Datenübernahme und Mitarbeitereinweisung.</p>
            </div>
            <div style={{ padding: '1.25rem', borderLeft: '3px solid #10b981', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderLeftWidth: '3px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#059669', fontSize: '0.85rem', fontWeight: 600 }}>PHASE 4</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0.35rem 0', color: 'var(--text-main)' }}>Managed Care &amp; SIEM</h3>
              <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-muted)', lineHeight: 1.5 }}>Laufende Wartung, 24/7 SIEM &amp; Incident Detection, proaktives Patchmanagement und Vor-Ort-Support in Thüringen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
