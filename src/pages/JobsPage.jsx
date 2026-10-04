import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Info, Mail, Key, Terminal, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function JobsPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '880px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <span style={{ color: 'var(--accent-cyan)' }}>KARRIERE &amp; JOBS</span>
        </div>

        <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
          TALENT &amp; CULTURE // THÜRINGEN CYBER DEFENSE
        </span>
        <h1>
          {lang === 'de' ? 'Karriere bei EminSecurity' : 'Careers at EminSecurity'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Wir arbeiten an vorderster Front der IT-Sicherheit in Mitteldeutschland. Bei uns gibt es keine langweiligen Routine-Tickets, sondern anspruchsvolle Pentests, hochkomplexe Incident-Response-Einsätze und direkte Verantwortung.'
            : 'We operate at the technical frontier of cyber defense in Central Germany, conducting deep offensive simulations and incident response investigations.'}
        </p>

        {/* Status Notification Box as explicitly requested by user */}
        <div style={{
          backgroundColor: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem 2rem',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem'
        }}>
          <Info size={24} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h2 style={{ fontSize: '1.15rem', color: '#fcd34d', margin: '0 0 0.5rem 0' }}>
              {lang === 'de'
                ? 'Aktuell keine offenen Planstellen ausgeschrieben'
                : 'No Current Vacancies Open'}
            </h2>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Unser Kernteam ist derzeit vollständig besetzt und wir haben aktuell keine vakanten Planstellen ausgeschrieben. Dennoch halten wir stets Ausschau nach außergewöhnlichen Talenten und schätzen Leidenschaft für IT-Sicherheit: Initiativbewerbungen sind bei uns ausdrücklich willkommen!'
                : 'Our core engineering cell is currently fully staffed with no active vacancies. However, we are perpetually keen to meet exceptional practitioners in offensive and defensive security. Proactive applications are warmly invited!'}
            </p>
          </div>
        </div>

        {/* Roles for Initiativbewerbung */}
        <div className="cyber-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
            {lang === 'de' ? 'Wen wir im Rahmen einer Initiativbewerbung gerne kennenlernen:' : 'Profiles We Welcome for Proactive Applications:'}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Terminal size={18} color="var(--accent-cyan)" />
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Penetration Tester / Red Teamer (m/w/d)</h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                Erfahrung in manueller Web/API-Exploitation, Active Directory Angriffspfaden oder Reverse Engineering. Zertifikate (OSCP, OSEP, CRTO) oder praktische Referenzen (HTB Pro Labs, Bug-Bounty-Profile) sind gerne gesehen.
              </p>
            </div>

            <div style={{ paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Shield size={18} color="#10b981" />
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>SOC Analyst / Incident Responder (m/w/d)</h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                Fundierte Kenntnisse in digitaler Forensik (RAM, Disk, Eventlogs), SIEM/EDR Telemetrie (Wazuh, Defender, Sentinel) und schneller Isolation von Ransomware-Bedrohungen.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Briefcase size={18} color="#38bdf8" />
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Security Architect &amp; Systemintegrator (m/w/d)</h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                Spezialist für Zero-Trust Netzwerke, Active Directory Tiering, Linux/Windows Härtung nach CIS Benchmarks und unveränderliche Backup-Systeme.
              </p>
            </div>
          </div>
        </div>

        {/* How to apply */}
        <div className="cyber-card" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'Wie Sie sich initiativ bewerben:' : 'How to Submit Your Application:'}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {lang === 'de'
              ? 'Kein langes Anschreiben nötig: Senden Sie uns Ihren Lebenslauf, Links zu GitHub, HackTheBox oder relevanten Projekten sowie Ihre Gehaltsvorstellung direkt per E-Mail.'
              : 'No lengthy cover letter required: send your CV, links to your GitHub or HackTheBox handles, and salary expectations directly via email.'}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:kontakt@eminsec.de" className="btn btn-primary btn-sm">
              <Mail size={15} />
              kontakt@eminsec.de
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
