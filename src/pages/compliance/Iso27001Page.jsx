import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Award, FileText, Layers, RefreshCw } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Iso27001Page() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/compliance" style={{ color: 'var(--text-muted)' }}>COMPLIANCE</Link> / <span style={{ color: 'var(--accent-cyan)' }}>ISO/IEC 27001</span>
        </div>

        <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
          ISO/IEC 27001:2022 // ISMS CERTIFICATION
        </span>
        <h1>
          {lang === 'de'
            ? 'ISMS Einführung & ISO 27001 Zertifizierungsbegleitung'
            : 'ISMS Implementation & ISO 27001 Audit Readiness'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Die ISO/IEC 27001 ist der globale Goldstandard für Informationssicherheits-Managementsysteme (ISMS). Unsere zertifizierten Lead Auditoren begleiten Sie pragmatisch von der initialen Gap-Analyse bis zum erfolgreichen externen Zertifizierungsaudit durch TÜV, DEKRA oder DQS.'
            : 'ISO/IEC 27001 represents the international benchmark for Information Security Management Systems. Our accredited Lead Auditors guide you smoothly from baseline gap analysis to successful third-party certification.'}
        </p>

        {/* 4 Step Roadmap */}
        <div className="cyber-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>
            {lang === 'de' ? 'Der pragmatische Weg zum Zertifikat in 4 Meilensteinen' : 'Roadmap to ISO 27001 Certification'}
          </h2>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 600 }}>MEILENSTEIN 1</div>
              <h3 style={{ fontSize: '1.1rem', margin: '0.3rem 0 0.5rem', color: 'var(--text-main)' }}>Gap-Analyse &amp; Scoping</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                Bestimmung des Geltungsbereichs (Scope), Abgleich des Ist-Zustands gegen die 93 Kontrollen des ISO 27001:2022 Annex A und Erstellung des Implementierungs-Fahrplans.
              </p>
            </div>

            <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#0284c7', fontSize: '0.85rem', fontWeight: 600 }}>MEILENSTEIN 2</div>
              <h3 style={{ fontSize: '1.1rem', margin: '0.3rem 0 0.5rem', color: 'var(--text-main)' }}>Risikoanalyse &amp; Richtlinien</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                Asset-Inventarisierung, strukturierte Risikobewertung nach ISO 27005 und Ausarbeitung schlanker, betriebsnaher Richtlinien (Statement of Applicability - SoA).
              </p>
            </div>

            <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#059669', fontSize: '0.85rem', fontWeight: 600 }}>MEILENSTEIN 3</div>
              <h3 style={{ fontSize: '1.1rem', margin: '0.3rem 0 0.5rem', color: 'var(--text-main)' }}>Internes Audit &amp; Management Review</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                Unabhängige Überprüfung aller Prozesse durch unsere Lead Auditoren vor dem Ernstfall, Behebung von Abweichungen und Durchführung des formalen Management Reviews.
              </p>
            </div>

            <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: '#7c3aed', fontSize: '0.85rem', fontWeight: 600 }}>MEILENSTEIN 4</div>
              <h3 style={{ fontSize: '1.1rem', margin: '0.3rem 0 0.5rem', color: 'var(--text-main)' }}>Zertifizierungsaudit Begleitung</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                Wir stehen während Stage 1 und Stage 2 des externen Zertifizierungs-Auditors (z. B. TÜV Thüringen) an Ihrer Seite und unterstützen bei der fachlichen Argumentation.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-subtle)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'ISO 27001 Projekt starten' : 'Begin Your ISO 27001 Journey'}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {lang === 'de' ? 'Vereinbaren Sie eine unverbindliche Erstberatung mit unseren akkreditierten ISO 27001 Lead Auditoren.' : 'Schedule a complimentary consultation with our certified Lead Auditors.'}
          </p>
          <Link to="/kontakt?subject=ISO%2027001%20Beratung" className="btn btn-primary">
            {lang === 'de' ? 'Erstgespräch anfragen' : 'Request Consultation'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
