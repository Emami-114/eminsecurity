import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
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

  // Compute readiness score
  let score = 20;
  if (mfa) score += 25;
  if (immutableBackup) score += 25;
  if (incidentPlan) score += 15;
  if (pentestDone) score += 15;

  const isAffected = employees !== 'under50' || sector === 'healthcare';

  return (
    <div className="cyber-card" style={{
      border: '1px solid rgba(0, 229, 255, 0.25)',
      backgroundColor: '#0a0d15'
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
          <ShieldCheck size={20} color="#00e5ff" />
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>
            {lang === 'de' ? 'Interaktiver NIS-2 & Resilienz Schnell-Check' : 'Interactive NIS-2 & Resilience Quick-Check'}
          </h3>
        </div>
        <span className="tech-badge cyan">
          {lang === 'de' ? 'Live Auswertung 2026' : 'Live Assessment 2026'}
        </span>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        {lang === 'de'
          ? 'Prüfen Sie in 60 Sekunden, ob Ihr Unternehmen unter das NIS-2-Umsetzungsgesetz fällt und wie es um Ihre technische Abwehr steht.'
          : 'Check in 60 seconds whether your organization falls under NIS-2 mandates and evaluate your technical defense readiness.'}
      </p>

      <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
        {/* Sector */}
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

        {/* Employees */}
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
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        padding: '1rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)',
        marginBottom: '1.5rem'
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-faint)', marginBottom: '0.75rem' }}>
          {lang === 'de' ? '3. BEREITS IMPLEMENTIERTE MASSNAHMEN:' : '3. CURRENTLY IMPLEMENTED CONTROLS:'}
        </div>
        <div className="grid-2" style={{ gap: '0.85rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem' }}>
            <input type="checkbox" checked={mfa} onChange={(e) => setMfa(e.target.checked)} />
            <span>MFA für alle Benutzer &amp; VPN</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem' }}>
            <input type="checkbox" checked={immutableBackup} onChange={(e) => setImmutableBackup(e.target.checked)} />
            <span>Unveränderliche Backups (WORM / Airgap)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem' }}>
            <input type="checkbox" checked={incidentPlan} onChange={(e) => setIncidentPlan(e.target.checked)} />
            <span>24h-Meldeplan &amp; Incident Runbook</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem' }}>
            <input type="checkbox" checked={pentestDone} onChange={(e) => setPentestDone(e.target.checked)} />
            <span>Regelmäßige Penetrationstests (letzte 12 Monate)</span>
          </label>
        </div>
      </div>

      {/* Result Panel */}
      <div style={{
        backgroundColor: 'var(--bg-surface-elevated)',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-sm)',
        padding: '1.25rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              {lang === 'de' ? 'NIS-2 BETROFFENHEIT:' : 'NIS-2 SCOPE:'}
            </span>
            <span className={`tech-badge ${isAffected ? 'crimson' : 'amber'}`}>
              {isAffected 
                ? (lang === 'de' ? 'Hohe Wahrscheinlichkeit (Pflichtbetrieb)' : 'High Likelihood (Mandatory Scope)')
                : (lang === 'de' ? 'Lieferketten-Prüfung wahrscheinlich' : 'Supply-Chain Verification Likely')}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: score >= 70 ? '#10b981' : score >= 45 ? '#f59e0b' : '#ef4444' }}>
              {score}%
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {lang === 'de' 
                ? (score >= 70 ? 'Solide Basis, Dokumentation & Audit nötig.' : 'Kritische Sicherheitslücken. Handlungsbedarf hoch.')
                : (score >= 70 ? 'Solid baseline, audit validation recommended.' : 'High exposure. Rapid remediation advised.')}
            </div>
          </div>
        </div>

        <Link
          to={`/kontakt?subject=NIS-2%20Audit%20Anfrage%20(Score:%20${score}%)`}
          className="btn btn-primary btn-sm"
          style={{ alignSelf: 'center' }}
        >
          {lang === 'de' ? 'Kostenfreien NIS-2 Initial-Audit anfragen' : 'Request NIS-2 Initial Audit'}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
