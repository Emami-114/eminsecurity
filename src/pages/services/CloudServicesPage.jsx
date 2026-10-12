import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, CheckCircle2, ArrowRight, ShieldCheck, Database, Laptop, Lock, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CloudServicesPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>CLOUD-DIENSTE &amp; MODERN WORKPLACE</span>
        </div>

        <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
          MODERN WORKPLACE // CLOUD &amp; HYBRID ARCHITECTURE
        </span>
        <h1>
          {lang === 'de'
            ? 'Cloud-Dienste, Microsoft 365 & Modern Workplace'
            : 'Cloud Services, Microsoft 365 & Modern Workplace'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Flexibles, ortsunabhängiges Arbeiten bei gleichzeitig höchster Datensicherheit und DSGVO-Konformität. Wir begleiten Sie von der strategischen Cloud-Migration über die gehärtete Microsoft 365 Einführung bis hin zu verschlüsselten Cloud-Backups und Hybrid-Infrastrukturen in deutschen Rechenzentren.'
            : 'Enable secure, location-independent work without sacrificing compliance. We navigate your organization through Microsoft 365 migrations, hybrid cloud engineering (Azure / Hetzner), and ransomware-proof cloud backup repositories.'}
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Layers size={22} color="var(--accent-cyan)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Microsoft 365 Migration & Härtung' : 'Microsoft 365 Migration & Hardening'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Sichere Einführung von Exchange Online, SharePoint, Teams und OneDrive. Konfiguration nach CIS Microsoft 365 Benchmarks, Durchsetzung von Conditional Access, MFA und DLP-Richtlinien gegen Datenabfluss.'
                : 'Turnkey migration to Exchange Online, SharePoint, Teams, and OneDrive. Hardened in alignment with CIS M365 benchmarks, adaptive Conditional Access, and Data Loss Prevention.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Cloud size={22} color="var(--accent-cyan)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Hybrid- & Cloud-Infrastruktur' : 'Hybrid & Enterprise Cloud IaaS'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Nahtlose Verbindung lokaler Server mit skalierbaren Cloud-Ressourcen in Microsoft Azure oder zertifizierten deutschen Rechenzentren (Hetzner). DSGVO-konform, hochverfügbar und kosteneffizient.'
                : 'Seamless interconnection of local hardware with elastic compute in Microsoft Azure or ISO 27001 certified German data centers (Hetzner). 100% GDPR compliant and cost-optimized.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Database size={22} color="var(--accent-cyan)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Ransomware-sichere Cloud-Backups' : 'Ransomware-Proof Cloud Backups'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Vollständige Auslagerung verschlüsselter Backups in die Cloud. Dank Object-Lock (WORM-Speicher) können gesicherte Daten auch bei einer kompletten lokalen Kompromittierung nicht überschrieben werden.'
                : 'Offsite encrypted repository replication with Object Lock (WORM). Protects against total physical disaster and malicious internal wiper attacks.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Laptop size={22} color="var(--accent-cyan)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Modern Workplace & Zero Trust' : 'Modern Workplace & Zero Trust'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Sicheres Arbeiten aus dem Homeoffice oder von unterwegs. Nahtloser Zugriff auf Unternehmensdaten nur von verifizierten, konformen Endgeräten mit Identitätsprüfung bei jeder Sitzung.'
                : 'Empower hybrid workforces to access corporate assets safely from any location, requiring cryptographic device compliance verification before granting session access.'}
            </p>
          </div>
        </div>

        {/* Compliance & Data Protection Box */}
        <div className="cyber-card" style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent-cyan)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <ShieldCheck size={22} color="var(--accent-cyan)" />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>
              {lang === 'de' ? '100% DSGVO-konform & Deutsche Rechenzentren' : '100% GDPR Compliant & German Cloud Regions'}
            </h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {lang === 'de'
              ? 'Viele Unternehmen fürchten bei der Cloud-Migration Datenschutzverstöße oder unklare Rechtslagen. Wir wählen ausschließlich nach BSI C5 und ISO 27001 zertifizierte Cloud-Regionen innerhalb der Europäischen Union bzw. Deutschlands und konfigurieren alle Tenants datenschutzkonform.'
              : 'Data sovereignty is critical. We deploy exclusively into BSI C5 and ISO 27001 certified regions across Germany and the EU, ensuring comprehensive compliance with EU GDPR.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <span className="tech-badge">ISO 27001 zertifiziert</span>
            <span className="tech-badge">BSI C5 Konformität</span>
            <span className="tech-badge">DSGVO Auftragsverarbeitung (AVV)</span>
            <span className="tech-badge">Ende-zu-Ende Verschlüsselung</span>
          </div>
        </div>

        {/* CTA Bar */}
        <div style={{
          backgroundColor: '#0b1120',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          color: '#ffffff',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <div>
            <h2 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {lang === 'de' ? 'Planen Sie eine Cloud-Migration oder M365 Optimierung?' : 'Planning a Cloud Migration or M365 Hardening?'}
            </h2>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem' }}>
              {lang === 'de' ? 'Wir analysieren Ihre bestehenden Lizenzen und Systeme für einen reibungslosen Übergang.' : 'Let us audit your licensing and architecture for a seamless transition.'}
            </p>
          </div>
          <Link to="/contact?service=cloud" className="btn btn-primary">
            {lang === 'de' ? 'Cloud-Beratung anfragen' : 'Request Cloud Consultation'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
