import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { knowledgeBaseItems } from '../data/translations';

export default function KnowledgePage() {
  const { lang } = useLanguage();

  const handleFakeDownload = (filename) => {
    alert(lang === 'de' ? `Download gestartet: ${filename}` : `Download started: ${filename}`);
  };

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <span style={{ color: 'var(--accent-cyan)' }}>EMINSEC KNOWLEDGE</span>
        </div>

        <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
          SECURITY WHITE PAPERS // OPEN ACCESS KNOWLEDGE
        </span>
        <h1>
          {lang === 'de'
            ? 'EminSec Knowledge Hub: Whitepaper & Checklisten'
            : 'EminSec Knowledge Hub: Whitepapers & Checklists'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Praxiserprobte Handlungsleitfäden, Notfall-Checklisten und Härtungs-Matrizen direkt aus den operativen Einsätzen unserer Analysten – kostenfrei für IT-Verantwortliche und Geschäftsführer.'
            : 'Field-tested incident playbooks, regulatory compliance checklists, and system hardening matrices engineered by our security consultants.'}
        </p>

        {/* Knowledge items list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3.5rem' }}>
          {knowledgeBaseItems.map((item) => (
            <div key={item.id} className="cyber-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span className="tech-badge" style={{ marginBottom: '0.5rem' }}>
                    {item.tag}
                  </span>
                  <h2 style={{ fontSize: '1.35rem', margin: 0, color: '#fff' }}>
                    {item.title[lang]}
                  </h2>
                </div>

                <button 
                  onClick={() => handleFakeDownload(item.downloadName)}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Download size={14} />
                  {lang === 'de' ? 'PDF Leitfaden herunterladen' : 'Download PDF Guide'}
                </button>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                {item.summary[lang]}
              </p>

              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                fontSize: '0.8rem',
                color: 'var(--text-faint)',
                fontFamily: 'var(--font-mono)'
              }}>
                <span>DATEINAME: {item.downloadName}</span>
                <span>UMFANG: {item.pages}</span>
                <span>FORMAT: PDF / DIN A4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Guideline CTA */}
        <div style={{
          backgroundColor: '#090c14',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            {lang === 'de' ? 'Benötigen Sie ein maßgeschneidertes Sicherheits-Playbook?' : 'Require a Custom Incident Playbook?'}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {lang === 'de'
              ? 'Wir erstellen individuelle Notfall-Runbooks und Richtlinien, abgestimmt auf Ihre IT-Systeme, Ihr Branchenumfeld und gesetzliche Vorschriften.'
              : 'We architect tailored emergency runbooks aligned with your exact technical topology.'}
          </p>
          <Link to="/kontakt" className="btn btn-secondary">
            {lang === 'de' ? 'Individuelles Playbook anfragen' : 'Request Tailored Playbook'}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
