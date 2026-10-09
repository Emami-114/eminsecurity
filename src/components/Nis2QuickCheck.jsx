import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Nis2QuickCheck() {
  const { lang } = useLanguage();

  const [sector, setSector] = useState('manufacturing');
  const [employees, setEmployees] = useState('50-250');
  const [mfa, setMfa] = useState(true);
  const [immutableBackup, setImmutableBackup] = useState(false);
  const [incidentPlan, setIncidentPlan] = useState(false);
  const [pentestDone, setPentestDone] = useState(false);

  let score = 20;
  if (mfa) score += 25;
  if (immutableBackup) score += 25;
  if (incidentPlan) score += 15;
  if (pentestDone) score += 15;

  const isAffected = employees !== 'under50' || sector === 'healthcare';

  return (
    <div className="cyber-card" style={{
      backgroundColor: '#ffffff',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            backgroundColor: 'var(--accent-blue-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ShieldCheck size={20} color="#0062ff" />
          </div>
          <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>
            {lang === 'de' ? 'Interaktiver NIS-2 & Resilienz Schnell-Check' : 'Interactive NIS-2 & Resilience Quick-Check'}
          </h3>
        </div>
        <span className="tech-badge blue">
          {lang === 'de' ? 'Offizieller Prüfstandard 2026' : 'Audit Standard 2026'}
        </span>
      </div>

      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        {lang === 'de'
          ? 'Ermitteln Sie in wenigen Klicks, ob Ihr Unternehmen unter das NIS-2-Umsetzungsgesetz fällt und wie hoch Ihr aktueller Reifegrad ist.'
          : 'Determine in seconds whether your organization falls under NIS-2 statutory scope and evaluate your defense maturity.'}
      </p>

      <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">
            {lang === 'de' ? '1. Branche / Tätigkeitsfeld' : '1. Industry Sector'}
          </label>
          <select 
            value={sector} 
            onChange={(e) => setSector(e.target.value)} 
            className="form-select"
          >
            <option value="manufacturing">{lang === 'de' ? 'Produktion, Optik & Maschinenbau' : 'Manufacturing & Engineering'}</option>
            <option value="healthcare">{lang === 'de' ? 'Gesundheitswesen (Klinik, Praxis, MVZ)' : 'Healthcare (Clinic, Medical Practice)'}</option>
            <option value="services">{lang === 'de' ? 'IT-Dienstleister & Software' : 'IT Services & Software'}</option>
            <option value="legal">{lang === 'de' ? 'Kanzlei, Wirtschaftsprüfung, Notare' : 'Legal, Audit & Notary'}</option>
            <option value="public">{lang === 'de' ? 'Kommunen & Öffentliche Betriebe' : 'Public Sector & Utilities'}</option>
          </select>
        </div>

        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">
            {lang === 'de' ? '2. Mitarbeiteranzahl' : '2. Company Size'}
          </label>
          <select 
            value={employees} 
            onChange={(e) => setEmployees(e.target.value)} 
            className="form-select"
          >
            <option value="under50">{lang === 'de' ? 'Unter 50 Mitarbeiter' : 'Under 50 employees'}</option>
            <option value="50-250">{lang === 'de' ? '50 bis 249 Mitarbeiter (Mittleres Unternehmen)' : '50 to 249 staff (Mid-size)'}</option>
            <option value="over250">{lang === 'de' ? 'Ab 250 Mitarbeiter (Großunternehmen)' : '250+ staff (Large enterprise)'}</option>
          </select>
        </div>
      </div>

      {/* Checkbox controls */}
      <div style={{
        backgroundColor: 'var(--bg-subtle)',
        padding: '1.25rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)',
        marginBottom: '1.5rem'
      }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-faint)', marginBottom: '0.85rem' }}>
          {lang === 'de' ? '3. BEREITS IMPLEMENTIERTE SICHERHEITSMASSNAHMEN:' : '3. CURRENTLY IMPLEMENTED CONTROLS:'}
        </div>
        <div className="grid-2" style={{ gap: '0.85rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem', color: '#1e293b' }}>
            <input type="checkbox" checked={mfa} onChange={(e) => setMfa(e.target.checked)} style={{ accentColor: '#0062ff' }} />
            <span>MFA für alle Benutzer &amp; VPN</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem', color: '#1e293b' }}>
            <input type="checkbox" checked={immutableBackup} onChange={(e) => setImmutableBackup(e.target.checked)} style={{ accentColor: '#0062ff' }} />
            <span>Unveränderliche Backups (WORM / Airgap)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem', color: '#1e293b' }}>
            <input type="checkbox" checked={incidentPlan} onChange={(e) => setIncidentPlan(e.target.checked)} style={{ accentColor: '#0062ff' }} />
            <span>24h-Meldeplan &amp; Incident Runbook</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem', color: '#1e293b' }}>
            <input type="checkbox" checked={pentestDone} onChange={(e) => setPentestDone(e.target.checked)} style={{ accentColor: '#0062ff' }} />
            <span>Regelmäßige Penetrationstests (letzte 12 Monate)</span>
          </label>
        </div>
      </div>

      {/* Result Panel */}
      <div style={{
        backgroundColor: '#f8fafc',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              {lang === 'de' ? 'NIS-2 BETROFFENHEIT:' : 'NIS-2 SCOPE:'}
            </span>
            <span className={`tech-badge ${isAffected ? 'crimson' : 'amber'}`}>
              {isAffected 
                ? (lang === 'de' ? 'Pflichtbetrieb nach NIS-2' : 'Mandatory NIS-2 Scope')
                : (lang === 'de' ? 'Lieferketten-Prüfpflicht' : 'Supply-Chain Obligation')}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: score >= 70 ? '#10b981' : score >= 45 ? '#d97706' : '#dc2626' }}>
              {score}%
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              {lang === 'de' 
                ? (score >= 70 ? 'Guter Reifegrad. Feinschliff & Zertifizierungsvorbereitung empfohlen.' : 'Kritische Lücken. Technische Nachrüstung dringend empfohlen.')
                : (score >= 70 ? 'Solid posture. Certification preparation recommended.' : 'High exposure. Immediate remediation needed.')}
            </div>
          </div>
        </div>

        <Link
          to={`/kontakt?subject=NIS-2%20Audit%20Anfrage%20(Score:%20${score}%)`}
          className="btn btn-primary btn-sm"
        >
          {lang === 'de' ? 'Kostenfreien NIS-2 Initial-Audit anfragen' : 'Request NIS-2 Initial Audit'}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
