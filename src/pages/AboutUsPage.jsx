import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, CheckCircle2, ArrowRight, Terminal, HeartHandshake, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutUsPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <span style={{ color: 'var(--accent-cyan)' }}>ÜBER UNS</span>
        </div>

        <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
          ENGINEERING CULTURE // THÜRINGER DNA
        </span>
        <h1>
          {lang === 'de'
            ? 'EminSecurity: Cyber-Sicherheit aus Überzeugung'
            : 'EminSecurity: Cyber Defense by Engineering Conviction'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Wir haben EminSecurity mit einer klaren Vision gegründet: Mittelständische Unternehmen, Kliniken und Arztpraxen in Thüringen und Mitteldeutschland vor existenzbedrohenden Cyber-Angriffen zu schützen. Ohne leere Marketingversprechen, sondern mit der handwerklichen Präzision von echten Hackern und Verteidigern.'
            : 'We founded EminSecurity with a resolute mission: shielding critical regional enterprises and medical institutions against existential cyber threats with deep offensive technical mastery.'}
        </p>

        {/* 3 Principles */}
        <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Terminal size={22} color="#00e5ff" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Keine Verkäufer, nur Engineers</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Bei uns sprechen Sie ab der ersten Minute mit erfahrenen Penetration Testern oder Incident Respondern, die Ihre Infrastruktur technisch verstehen und sofort fundierte Antworten geben.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <HeartHandshake size={22} color="#10b981" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Pragmatismus statt Panikmache</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Wir nutzen keine Schreckensszenarien, um unnötige Software zu verkaufen. Wir priorisieren Maßnahmen nach tatsächlichem Schadenspotenzial und Ihrem realistischen Budget.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Eye size={22} color="#38bdf8" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Offensive Perspektive</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Nur wer weiß, wie Angreifer Netzwerke infiltrieren und EDR-Systeme austricksen, kann eine wirksame Verteidigung und belastbare Sicherheitsarchitektur aufbauen.
            </p>
          </div>
        </div>

        {/* Credentials & Certifications */}
        <div className="cyber-card" style={{ backgroundColor: '#090c14', padding: '2.5rem', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>
            {lang === 'de' ? 'Akkreditierungen & Qualifikationen unseres Kernteams' : 'Our Certifications & Credentials'}
          </h2>
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff' }}>OSCP (Offensive Security Certified Professional):</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Praktischer 24-stündiger Hacking-Standard für manuelle Netzwerk- und Host-Exploitation.</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff' }}>ISO/IEC 27001 Lead Auditor:</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Zertifizierte Auditorenbefähigung für den Aufbau und die Auditierung von Managementsystemen.</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff' }}>BSI IT-Grundschutz Praktiker:</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Anerkannte Ausbildung für KRITIS, öffentliche Verwaltung und Landesbetriebe.</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff' }}>CISSP (Certified Information Systems Security Professional):</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Umfassende Governance-, Architektur- und Sicherheitsmanagement-Zertifizierung.</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/kontakt" className="btn btn-primary">
            {lang === 'de' ? 'Lernen Sie unser Team im Erstgespräch kennen' : 'Connect with our Team'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
