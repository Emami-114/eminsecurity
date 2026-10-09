import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, AlertTriangle, CheckCircle2, ArrowRight, Clock, Users, Building, Scale } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Nis2QuickCheck from '../../components/Nis2QuickCheck';

export default function Nis2Page() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/compliance" style={{ color: 'var(--text-muted)' }}>COMPLIANCE</Link> / <span style={{ color: 'var(--accent-cyan)' }}>NIS-2 RICHTLINIE</span>
        </div>

        <span className="tech-badge crimson" style={{ marginBottom: '1rem' }}>
          GESETZLICHE PFLICHTEN 2026 // NIS-2 UMSETZUNGSGESETZ
        </span>
        <h1>
          {lang === 'de'
            ? 'NIS-2 Richtlinie: Handlungspflichten, Fristen & Bußgelder'
            : 'NIS-2 Directive: Corporate Duties, Deadlines & Sanctions'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Das deutsche NIS-2-Umsetzungsgesetz verpflichtet rund 30.000 Unternehmen zu konkreten Cyber-Sicherheitsmaßnahmen und strikten Meldepflichten. Erstmals haften Geschäftsführer und Vorstände persönlich mit ihrem Privatvermögen bei fahrlässiger Nicht-Umsetzung.'
            : 'The NIS-2 directive expands regulatory oversight over 30,000 entities across Germany. Managing directors face unprecedented personal liability for failing to mandate and oversee effective cyber safeguards.'}
        </p>

        {/* Warning Callout Box */}
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.35)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.5rem' }}>
            <AlertTriangle size={18} />
            <span>PFLICHTEN &amp; SANKTIONEN AUF EINEN BLICK</span>
          </div>
          <div className="grid-3" style={{ gap: '1rem', marginTop: '1rem' }}>
            <div>
              <div style={{ color: '#991b1b', fontWeight: 700, fontSize: '0.95rem' }}>Bis zu 10 Mio. € Bußgeld</div>
              <div style={{ fontSize: '0.84rem', color: '#7f1d1d' }}>Oder bis zu 2% des weltweiten Jahresumsatzes bei Nichtbeachtung.</div>
            </div>
            <div>
              <div style={{ color: '#991b1b', fontWeight: 700, fontSize: '0.95rem' }}>24h Frühwarnung an BSI</div>
              <div style={{ fontSize: '0.84rem', color: '#7f1d1d' }}>Erste Meldung eines gravierenden Vorfalls binnen 24 Stunden zwingend vorgeschrieben.</div>
            </div>
            <div>
              <div style={{ color: '#991b1b', fontWeight: 700, fontSize: '0.95rem' }}>Persönliche GF-Haftung</div>
              <div style={{ fontSize: '0.84rem', color: '#7f1d1d' }}>Verbot des Haftungsausschlusses oder der einfachen Delegation an externe IT.</div>
            </div>
          </div>
        </div>

        {/* 10 Mindestanforderungen nach Art. 21 NIS-2 */}
        <div className="cyber-card" style={{ padding: '2rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
            {lang === 'de' ? 'Die 10 obligatorischen Risikomanagement-Maßnahmen (Art. 21 NIS-2)' : 'The 10 Mandatory Risk Management Controls (Art. 21 NIS-2)'}
          </h2>
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>1. Risikoanalysen:</strong> Regelmäßige Bewertung von IT-Sicherheitsrisiken und Asset-Inventarisierung.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>2. Bewältigung von Vorfällen:</strong> Strukturierte Incident-Handling-Prozesse und Notfall-Runbooks.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>3. Business Continuity (BCM):</strong> Notfall-Backups, Disaster-Recovery-Pläne und Krisenorganisation.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>4. Sicherheit in der Lieferkette:</strong> Prüfung und vertragliche Bindung aller IT-Zulieferer und Partner.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>5. Sicherheit bei Erwerb &amp; Entwicklung:</strong> Sichere Softwareentwicklung und Schwachstellen-Handling.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>6. Bewertung der Wirksamkeit:</strong> Regelmäßige Penetrationstests und Audits zur Wirksamkeitsprüfung.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>7. Cyber-Hygiene &amp; Schulungen:</strong> Grundlegende Praktiken, MFA und Awareness-Trainings für Mitarbeiter.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>8. Kryptografie &amp; Verschlüsselung:</strong> Durchgängiger Einsatz starker Verschlüsselungsverfahren.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>9. Personalsicherheit &amp; Zugriffskontrollen:</strong> Strikte Rechtevergabe und Identitätsmanagement.</div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <CheckCircle2 size={16} color="#00e5ff" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}><strong>10. Multifaktor-Authentifizierung (MFA):</strong> Phishing-resistente MFA für alle Fernzugriffe und Admins.</div>
            </div>
          </div>
        </div>

        {/* Nis2 Quick Check */}
        <div style={{ marginBottom: '3rem' }}>
          <Nis2QuickCheck />
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-subtle)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'NIS-2 Readiness Audit für Ihr Unternehmen anfordern' : 'Schedule a Comprehensive NIS-2 Readiness Audit'}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {lang === 'de' ? 'Wir prüfen Ihren Ist-Zustand, erstellen einen Maßnahmenplan und schließen technische Lücken vor dem Prüfbescheid.' : 'We perform a baseline gap analysis and engineer necessary controls.'}
          </p>
          <Link to="/kontakt?subject=NIS-2%20Readiness%20Audit" className="btn btn-primary">
            {lang === 'de' ? 'Jetzt NIS-2 Audit anfragen' : 'Request NIS-2 Audit'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
