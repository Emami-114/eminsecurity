import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, CheckCircle2, ArrowRight, AlertTriangle, Scale, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { complianceData } from '../data/translations';
import Nis2QuickCheck from '../components/Nis2QuickCheck';

export default function ComplianceOverviewPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <span style={{ color: 'var(--accent-cyan)' }}>COMPLIANCE &amp; REGULIERUNG</span>
        </div>

        <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
          REGULATORY COMPLIANCE // LAW &amp; STANDARDS 2026
        </span>
        <h1>
          {lang === 'de'
            ? 'Rechtssicherheit & Zertifizierung: NIS-2, ISO 27001 & BSI'
            : 'Regulatory Compliance: NIS-2, ISO 27001 & BSI Standards'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Regulatorische Anforderungen sind keine lästige Pflicht mehr, sondern überlebenswichtig für Geschäftsbeziehungen: Wer NIS-2 oder ISO 27001 nicht nachweisen kann, wird von Großkunden und KRITIS-Unternehmen aus der Lieferkette ausgeschlossen. Wir verwandeln Compliance in einen echten Wettbewerbsvorteil.'
            : 'Compliance is no longer mere bureaucracy: failing to document NIS-2 or ISO 27001 safeguards leads to immediate exclusion from global supply chains and massive regulatory liability.'}
        </p>

        {/* 2 Main Pillar Cards */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3.5rem' }}>
          {complianceData.map((item) => (
            <div key={item.id} className="cyber-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="tech-badge cyan">{item.badge}</span>
                <Scale size={18} color="var(--accent-cyan)" />
              </div>
              <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                <Link to={item.path} style={{ color: '#fff' }}>
                  {item.title[lang]}
                </Link>
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', flex: 1, marginBottom: '1.5rem' }}>
                {item.lead[lang]}
              </p>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <Link to={item.path} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  {lang === 'de' ? 'Vollständige Anforderungs-Übersicht' : 'Detailed Requirements Overview'}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Other Regulations: BSI, TISAX, PDSG */}
        <div className="cyber-card" style={{ backgroundColor: '#090c14', padding: '2rem', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
            {lang === 'de' ? 'Weitere unterstützte Rahmenwerke & Branchenstandards' : 'Additional Supported Frameworks'}
          </h2>
          <div className="grid-3" style={{ gap: '1.25rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.4rem' }}>BSI IT-Grundschutz</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Strukturierte Umsetzung der BSI-Standards 200-1, 200-2 und 200-3 für Landesbehörden, Kommunen und Stadtwerke in Thüringen.
              </p>
            </div>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.4rem' }}>TISAX &amp; VDA-ISA</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Sicherheitslabels für Automobilzulieferer in Gera, Jena und Eisenach. Schutz vertraulicher Prototypendaten.
              </p>
            </div>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.4rem' }}>PDSG &amp; § 75b SGB V</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Erfüllung der KBV-IT-Sicherheitsrichtlinie für Arztpraxen, MVZ und Dialysezentren inklusive Nachweisführung.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Check Tool */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>
            {lang === 'de' ? 'Selbsttest: Wo steht Ihr Unternehmen?' : 'Self-Assessment: Where Do You Stand?'}
          </h2>
          <Nis2QuickCheck />
        </div>
      </div>
    </div>
  );
}
