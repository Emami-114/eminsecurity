import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Lock, HardDrive, Cloud, ArrowRight, CheckCircle2, ShieldCheck, Network } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ItAdministrationPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>IT-ADMINISTRATION &amp; SYSTEMINTEGRATION</span>
        </div>

        <span className="tech-badge" style={{ color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.3)', backgroundColor: 'rgba(56, 189, 248, 0.1)', marginBottom: '1rem' }}>
          INFRASTRUCTURE &amp; RESILIENCE // CIS HARDENING
        </span>
        <h1>
          {lang === 'de'
            ? 'IT-Administration, Systemintegration & Härtung'
            : 'IT Administration, Systems Integration & Hardening'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Sicherheit darf kein nachträglich aufgepfropfter Fremdkörper sein. Wir planen, härten und betreiben Ihre IT-Infrastruktur nach dem Zero-Trust-Prinzip – von Active Directory Tiering und Mikrosegmentierung bis hin zu unveränderlichen Backup-Architekturen, die Ransomware widerstehen.'
            : 'Security must be designed into the infrastructure from day one. We engineer, harden, and manage modern enterprise IT networks on Zero-Trust foundations – from Tiered Active Directory to immutable WORM backup storage.'}
        </p>

        {/* 4 Pillars */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Lock size={20} color="#38bdf8" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Active Directory &amp; Identity Härtung</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Implementierung des Microsoft Enterprise Access Modells (Tier-0 / Tier-1 / Tier-2). Abschaltung veralteter Protokolle (NTLMv1, SMBv1, LLMNR), Härtung gegen Kerberoasting und Durchsetzung von Privileged Identity Management (PIM).
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Network size={20} color="#38bdf8" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Zero-Trust &amp; Mikrosegmentierung</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Strikte logische und physische Trennung: Büro-Arbeitsplätze dürfen niemals direkten Zugriff auf medizinische Geräte (IoMT), Telematik-Konnektoren oder Fertigungsmaschinen (OT/SCADA) haben. Jeder Zugriff erfordert explizite Authentifizierung.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <HardDrive size={20} color="#38bdf8" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Immutable Backups (Ransomware-Proof)</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Konzeption von 3-2-1-1-0 Datensicherungen mit WORM-Speichern (Write Once, Read Many). Selbst wenn Angreifer Domänen-Administrator-Rechte erlangen, können historische Snapshots nicht gelöscht oder verschlüsselt werden.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Cloud size={20} color="#38bdf8" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Cloud &amp; Hybrid Härtung (M365 / Azure / Hetzner)</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Absicherung von Microsoft 365 Tenants und Cloud-Servern nach CIS Microsoft 365 Benchmark. Durchsetzung von Phishing-resistenter MFA, Conditional Access, DLP-Richtlinien und lückenlosem Audit-Logging.
            </p>
          </div>
        </div>

        {/* Benefits list */}
        <div className="cyber-card" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', padding: '2rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'Warum EminSecurity für Ihre IT-Infrastruktur?' : 'Why EminSecurity for Systems Engineering?'}
          </h2>
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-main)' }}>Pentester-Perspektive:</strong> Wir bauen Systeme so auf, wie wir sie als Angreifer selbst nicht knacken können.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-main)' }}>Praxis- &amp; Klinikerfahrung:</strong> Routinierter Umgang mit CGM, Turbomed, Medistar, PACS und Telematik-Konnektoren in Thüringen.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-main)' }}>Keine Hersteller-Bindung:</strong> Wir empfehlen und integrieren neutrale, praxiserprobte Lösungen ohne verdeckte Provisionen.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-main)' }}>Vollständige Dokumentation:</strong> Klare Notfall-Runbooks für Ihr internes Team, keine Geiselhaft durch geheime Passwörter.
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/kontakt?subject=IT-Administration%20und%20Haertung" className="btn btn-primary">
            {lang === 'de' ? 'Infrastruktur-Check & Härtungsberatung anfragen' : 'Request Infrastructure Assessment'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
