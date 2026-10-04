import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, GitBranch, ShieldCheck, Cpu, ArrowRight, CheckCircle2, FileCode } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SoftwareTestingPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/leistungen" style={{ color: 'var(--text-muted)' }}>LEISTUNGEN</Link> / <span style={{ color: '#c084fc' }}>SOFTWARE TESTING &amp; DEVSECOPS</span>
        </div>

        <span className="tech-badge" style={{ color: '#c084fc', borderColor: 'rgba(192, 132, 252, 0.3)', backgroundColor: 'rgba(192, 132, 252, 0.1)', marginBottom: '1rem' }}>
          APPLICATION SECURITY // DEVSECOPS &amp; CODE AUDIT
        </span>
        <h1>
          {lang === 'de'
            ? 'Software Security Testing & Secure Code Audits'
            : 'Software Security Testing & Secure Code Audits'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Sicherheitslücken in eigener oder eingekaufter Software können fatal sein. Wir analysieren Quellcode manuell und automatisiert, härten CI/CD-Pipelines und auditieren Firmware sowie vernetzte Medizingeräte nach strengen Industriestandards.'
            : 'Vulnerabilities inside application logic and software dependencies are high-value entry points. We perform expert manual source code reviews, engineer DevSecOps pipelines, and test embedded systems against rigorous standards.'}
        </p>

        {/* 3 Main Pillars */}
        <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <FileCode size={20} color="#c084fc" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Manueller Source Code Review</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Zeile für Zeile durch erfahrene Senior-Engineers in C/C++, Rust, Go, Python, Java, C# und TypeScript. Wir finden komplexe Race Conditions, Deserialisierungsfehler und Krypto-Schwächen, die kein Scanner erkennt.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <GitBranch size={20} color="#c084fc" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>DevSecOps &amp; CI/CD Pipelines</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Verankerung von Sicherheit direkt in GitHub Actions, GitLab CI oder Jenkins: Automatisierte SAST/DAST-Tests, Software Bill of Materials (SBOM) zur Vermeidung von Log4j-ähnlichen Supply-Chain-Katastrophen und Secret Scanning.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Cpu size={20} color="#c084fc" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Medizintechnik (IoMT) &amp; IoT</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Sicherheitsprüfungen vernetzter Geräte nach IEC 81001-5-1 und EU MDR (Medical Device Regulation). Firmware-Extraktion, Hardware-Debugging (JTAG/UART) und Prüfung von Funk- und Bluetooth-Protokollen.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', backgroundColor: '#090c14', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-strong)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            {lang === 'de' ? 'Code-Audit oder Software-Sicherheitsprüfung anfragen' : 'Scope Your Application Security Audit'}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {lang === 'de' ? 'Wir unterzeichnen standardmäßig vorab eine umfassende Vertraulichkeitsvereinbarung (NDA).' : 'We execute standard bilateral NDAs prior to any code or architectural disclosures.'}
          </p>
          <Link to="/kontakt?subject=Code%20Audit%20Anfrage" className="btn btn-primary">
            {lang === 'de' ? 'Software-Audit unverbindlich anfragen' : 'Request Software Audit'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
