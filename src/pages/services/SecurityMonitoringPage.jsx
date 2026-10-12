import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, PhoneCall, AlertTriangle, Smartphone, Shield, Eye, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SecurityMonitoringPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>SECURITY &amp; ÜBERWACHUNG</span>
        </div>

        <span className="tech-badge emerald" style={{ marginBottom: '1rem' }}>
          MANAGED SECURITY // SIEM, IDS/IPS, MDM &amp; KI INCIDENT DETECTION
        </span>
        <h1>
          {lang === 'de'
            ? 'Security & Überwachung: SIEM, IDS/IPS, MDM & KI'
            : 'Security & Surveillance: SIEM, IDS/IPS, MDM & AI Detection'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Klassische Virenscanner reichen gegen moderne Cyber-Bedrohungen längst nicht mehr aus. Wir etablieren einen lückenlosen Schutzschirm für Ihr Unternehmen: Zentrales Log-Management (SIEM), netzwerkweite Intrusion Detection & Prevention (IDS/IPS), zentrale Endgeräteverwaltung (MDM) und KI-gestützte Incident Detection in Echtzeit.'
            : 'Conventional antivirus cannot stop modern ransomware. We deploy an active security shield: Centralized SIEM telemetry correlation, network-wide IDS/IPS inspection, unified Mobile Device Management (MDM), and machine-learning anomaly detection in real time.'}
        </p>

        {/* Emergency Alert Box */}
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.35)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.35rem' }}>
              <AlertTriangle size={18} />
              <span>{lang === 'de' ? 'AKUTER SICHERHEITSVORFALL ODER RANSOMWARE-BEFALL?' : 'ACTIVE SECURITY BREACH OR INFECTION?'}</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {lang === 'de'
                ? 'Systeme NICHT ausschalten (RAM-Speicher sichern!). Unser Notfall-Team ist in Thüringen schnell einsatzbereit.'
                : 'Do not shut down infected hosts (preserves RAM telemetry). Reach our emergency dispatch immediately.'}
            </p>
          </div>
          <a href="tel:+4915233513651" className="btn btn-danger">
            <PhoneCall size={16} />
            +49 152 33513651
          </a>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Activity size={22} color="var(--accent-emerald)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'SIEM Log-Management & Analyse' : 'SIEM Telemetry & Log Analytics'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Zentralisierte Aggregation und automatisierte Korrelation aller Sicherheits-Logs von Servern, Firewalls und Endgeräten (z. B. Wazuh, Microsoft Sentinel). Erkennt unautorisierte Anmeldeversuche und Berechtigungsänderungen sofort.'
                : 'Centralized aggregation and automated correlation of telemetry events across servers, network appliances, and cloud endpoints, eliminating alert blind spots.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <ShieldCheck size={22} color="var(--accent-emerald)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'IDS / IPS (Intrusion Detection & Prevention)' : 'IDS / IPS Network Defense'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Netzwerk- und hostbasierte Intrusion Detection & Prevention Systeme (z. B. Suricata, Snort). Erkennung verdächtiger Datenströme, Portscans, Exploit-Signaturen und automatische Blockade bösartiger IPs an der Perimeter-Firewall.'
                : 'Network and host-based intrusion detection/prevention. Deep packet inspection identifying port scans, exploit signatures, and automatically blocking attacker IPs.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Smartphone size={22} color="var(--accent-emerald)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Mobile Device Management (MDM / Intune)' : 'Mobile Device Management (MDM)'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Zentrale Steuerung und Durchsetzung von Sicherheitsrichtlinien auf Smartphones, Tablets und Laptops (iOS, Android, Windows via Microsoft Intune). Inklusive automatischer BitLocker-Verschlüsselung und Fernlöschung bei Geräteverlust.'
                : 'Unified policy enforcement across mobile devices and laptops via Microsoft Intune. Mandating full-disk encryption, containerized apps, and instant remote wipe.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Cpu size={22} color="var(--accent-emerald)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'KI-basierte Incident Detection (Next-Gen EDR)' : 'AI-Driven Incident Detection (Next-Gen EDR)'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Moderne Endpoint Detection & Response (EDR) mit maschinellem Lernen. Erkennt auffällige Verhaltensmuster, Ransomware-Verschlüsselungsversuche und verdächtige PowerShell-Skripte – und isoliert kompromittierte Geräte in Millisekunden.'
                : 'Next-Gen EDR powered by machine-learning heuristics. Detects abnormal behavioral triggers and isolates ransomware processes in milliseconds before propagation.'}
            </p>
          </div>
        </div>

        {/* Regulatory Compliance Box */}
        <div className="cyber-card" style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent-emerald)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Shield size={22} color="var(--accent-emerald)" />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>
              {lang === 'de' ? 'Erfüllung gesetzlicher Vorgaben (NIS-2, DSGVO, ISO 27001)' : 'Regulatory Compliance (NIS-2, GDPR, ISO 27001)'}
            </h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {lang === 'de'
              ? 'Mit der europäischen NIS-2-Richtlinie und strengen DSGVO-Anforderungen haften Geschäftsführer für mangelhafte Sicherheitsmaßnahmen. Durch unser kontinuierliches Monitoring mit SIEM, IDS/IPS und MDM verfügen Sie über lückenlose, revisionssichere Nachweise für Behörden und Cyber-Versicherungen.'
              : 'NIS-2 and GDPR impose heavy penalties and executive liability for negligence. Our turnkey monitoring stack provides verifiable, audit-proof telemetry reports required by regulators and cyber insurers.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <span className="tech-badge">NIS-2 Art. 21 Konform</span>
            <span className="tech-badge">DSGVO Art. 32 TOMs</span>
            <span className="tech-badge">BSI IT-Grundschutz DER.1</span>
            <span className="tech-badge">Revisionssichere Audit-Logs</span>
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
              {lang === 'de' ? 'Möchten Sie Ihre Sicherheitsüberwachung aufbauen?' : 'Looking to Establish 24/7 Security Monitoring?'}
            </h2>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem' }}>
              {lang === 'de' ? 'Wir richten SIEM, IDS/IPS und MDM passgenau für Ihre Unternehmensgröße ein.' : 'Let us scope and deploy a tailored SIEM, IDS, and MDM architecture.'}
            </p>
          </div>
          <Link to="/contact?service=security-monitoring" className="btn btn-primary">
            {lang === 'de' ? 'Überwachung & Audit anfragen' : 'Request Security Consultation'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
