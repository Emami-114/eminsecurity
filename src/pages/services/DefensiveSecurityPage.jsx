import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, PhoneCall, AlertTriangle, CheckCircle2, ArrowRight, Eye, Database, HardDrive } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function DefensiveSecurityPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>DEFENSIVE SECURITY &amp; SOC</span>
        </div>

        <span className="tech-badge emerald" style={{ marginBottom: '1rem' }}>
          DEFENSIVE SECURITY // 24/7 SOC &amp; INCIDENT RESPONSE
        </span>
        <h1>
          {lang === 'de'
            ? 'Blue Teaming, 24/7 SOC & Notfall-Forensik'
            : 'Blue Teaming, 24/7 SOC & Incident Forensics'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Ein Einbruch wird im Schnitt erst nach über 14 Tagen bemerkt – oft erst, wenn Erpresserbriefe auf den Bildschirmen erscheinen. Unser Security Operations Center (SOC) überwacht Ihre Endgeräte, Netzwerke und Cloud-Dienste rund um die Uhr, erkennt Anomalien in Sekunden und interveniert sofort.'
            : 'Adversaries operate undetected inside corporate networks for weeks before detonating ransomware. Our 24/7 Security Operations Center detects stealthy anomalies in seconds and isolates infected hosts immediately.'}
        </p>

        {/* Emergency Alert Box */}
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
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
              <span>AKUTER RANSOMWARE-ANGRIFF ODER SYSTEMSTILLSTAND?</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#fca5a5' }}>
              Schalten Sie betroffene Systeme NICHT aus (flüchtiger Speicher geht verloren). Rufen Sie sofort unsere 24/7 Notfall-Hotline an.
            </p>
          </div>
          <a href="tel:+4915233513651" className="btn btn-danger">
            <PhoneCall size={16} />
            +49 152 33513651
          </a>
        </div>

        {/* Core Capabilities */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Eye size={20} color="#10b981" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>SOC-as-a-Service (24/7/365)</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Kontinuierliche Analyse aller sicherheitsrelevanten Telemetriedaten durch unsere deutschen Security Analysts. Erkennung von Password Spraying, Living-off-the-Land Binaries (LOLBins) und unautorisierten Datenabflüssen.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Activity size={20} color="#10b981" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Incident Response &amp; Krisenmanagement</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Strukturierte Eindämmung aktiver Vorfälle: Netzwerkisolierung infizierter Systeme, Auslesen flüchtiger Speicher (RAM-Dumps), Identifikation des Patienten Null und Koordination mit Behörden (BSI, LKA Thüringen).
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <HardDrive size={20} color="#10b981" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Digitale Forensik &amp; Spurensicherung</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Gerichtsverwertbare Rekonstruktion von Cyber-Verbrechen nach BSI-Standards. Erstellung von Gutachten für Cyber-Versicherungen, Vorstände und Datenschutzaufsichtsbehörden zur Vermeidung von DSGVO-Bußgeldern.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Database size={20} color="#10b981" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>SIEM &amp; EDR/XDR Engineering</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Maßgeschneiderte Einrichtung von Erkennungssystemen (Microsoft Defender for Endpoint/Identity, Wazuh, Crowdstrike, Sentinel) inklusive maßgeschneiderter Sigma- und YARA-Regeln gegen branchenspezifische Bedrohungen.
            </p>
          </div>
        </div>

        {/* Retainer Model */}
        <div className="cyber-card" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', padding: '2rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'Der EminSecurity Incident Retainer: Vor-Ort-Garantie in Thüringen' : 'EminSecurity Incident Response Retainer'}
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Im Ernstfall zählt jede Minute. Mit unserem Rahmenvertrag reservieren Sie dedizierte Expertenkontingente mit vertraglich zugesicherter Reaktionszeit direkt an Ihren Standorten in Jena, Erfurt, Weimar, Gera und Hermsdorf.
          </p>
          <div className="grid-3">
            <div style={{ padding: '1rem', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
              <div style={{ color: '#059669', fontWeight: 700, fontSize: '1.1rem' }}>&lt; 15 Minuten</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', margin: '0.2rem 0', fontWeight: 600 }}>Remote Triage SLA</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sofortige telefonische Einsatzleitung und Beginn der Netzwerkisolierung.</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
              <div style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '1.1rem' }}>&lt; 90 Minuten</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', margin: '0.2rem 0', fontWeight: 600 }}>Vor-Ort Thüringen SLA</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Unsere Forensiker treffen direkt an Ihrem Serverraum oder Rechenzentrum ein.</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
              <div style={{ color: '#d97706', fontWeight: 700, fontSize: '1.1rem' }}>100% Inklusive</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', margin: '0.2rem 0', fontWeight: 600 }}>BSI- &amp; Versicherungskonform</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Anerkannte Dokumentation für alle gängigen deutschen Cyber-Versicherer.</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/kontakt?subject=SOC%20Retainer%20Anfrage" className="btn btn-primary">
            {lang === 'de' ? 'Incident Response Retainer anfragen' : 'Request Incident Retainer'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
