import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Cpu, ArrowRight, CheckCircle2, GitBranch, Terminal, Layers, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SoftwareDevelopmentPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: '#8b5cf6', fontWeight: 600 }}>INDIVIDUELLE SOFTWAREENTWICKLUNG</span>
        </div>

        <span className="tech-badge" style={{ color: '#8b5cf6', borderColor: 'rgba(139, 92, 246, 0.3)', backgroundColor: 'rgba(139, 92, 246, 0.1)', marginBottom: '1rem' }}>
          SOFTWARE ENGINEERING // APIS &amp; PROZESSAUTOMATISIERUNG
        </span>
        <h1>
          {lang === 'de'
            ? 'Individuelle Softwareentwicklung & Schnittstellen'
            : 'Custom Software Development & API Integration'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Standardsoftware stößt oft an ihre Grenzen. Wir entwickeln maßgeschneiderte Geschäftsanwendungen, integrieren disparate Systeme über robuste APIs und automatisieren manuelle Arbeitsabläufe – modern, wartungsfreundlich und von Grund auf sicher (Security by Design).'
            : 'Off-the-shelf software rarely fits bespoke business processes. We engineer custom enterprise web applications, integrate disparate IT systems via robust APIs, and automate time-consuming manual workflows.'}
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Code2 size={22} color="#8b5cf6" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Individuelle Web- & Fachanwendungen' : 'Custom Web & Business Applications'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Entwicklung schlanker, reaktionsschneller Webanwendungen und interner Portale, die exakt zu Ihren betrieblichen Anforderungen passen. Intuitive Benutzeroberflächen und saubere Clean Architecture.'
                : 'Development of responsive web applications and internal tools tailored to your operational workflows, built with modern reactive frameworks and clean architectures.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <GitBranch size={22} color="#8b5cf6" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'API- & Systemintegration (ERP / CRM)' : 'API & System Integration (ERP / CRM)'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Verbinden Sie Ihre Softwareinseln: Automatisierter, fehlerfreier Datenaustausch zwischen ERP, CRM, Warenwirtschaft, Zeiterfassung, DMS und Buchhaltung über REST- und GraphQL-Schnittstellen.'
                : 'Bridge isolated data silos: Real-time, reliable synchronization across ERP, CRM, inventory, HR, and accounting systems through robust REST and GraphQL APIs.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Zap size={22} color="#8b5cf6" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Prozessautomatisierung & Workflows' : 'Process & Workflow Automation'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Schluss mit lästigem Copy-Paste: Automatisierte Workflows, Event-Trigger und Skripte übernehmen wiederkehrende Routinetätigkeiten – für weniger menschliche Fehler und enorme Zeiteinsparung.'
                : 'Eliminate manual copy-paste errors: Event-driven background tasks, automated data ingestion pipelines, and bots taking care of repetitive admin routines.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Terminal size={22} color="#8b5cf6" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Modernisierung von Altsystemen' : 'Legacy Modernization & Refactoring'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Ablösung unübersichtlicher Excel-Monolithen, Migration veralteter Microsoft Access Datenbanken und schrittweises Refactoring historisch gewachsener Software in zukunftssichere Systeme.'
                : 'Deconstructing brittle Excel sheets, migrating obsolete Access databases, and refactoring historical monolithic tools into modular, cloud-ready architectures.'}
            </p>
          </div>
        </div>

        {/* Security by Design Box */}
        <div className="cyber-card" style={{ marginBottom: '3rem', borderLeft: '4px solid #8b5cf6' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <ShieldCheck size={22} color="#8b5cf6" />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>
              {lang === 'de' ? 'Security by Design: Entwickelt nach OWASP Standards' : 'Security by Design: Engineered to OWASP Standards'}
            </h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {lang === 'de'
              ? 'Als Security-First IT-Systemhaus achten wir bei jeder Code-Zeile auf maximale Sicherheit: Schutz gegen SQL-Injection, Cross-Site Scripting (XSS), rollenbasierte Zugriffskontrollen (RBAC) und automatisierte Dependency-Sicherheitsprüfungen in der CI/CD-Pipeline.'
              : 'Our security heritage ensures resilience: Built-in protection against OWASP Top 10 vulnerabilities, strict RBAC permissions, secret management, and continuous CI/CD pipeline scans.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <span className="tech-badge">OWASP ASVS Konform</span>
            <span className="tech-badge">TypeScript &amp; React</span>
            <span className="tech-badge">Node.js &amp; Python</span>
            <span className="tech-badge">PostgreSQL &amp; Redis</span>
            <span className="tech-badge">Docker Containerisierung</span>
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
              {lang === 'de' ? 'Haben Sie ein konkretes Software- oder API-Vorhaben?' : 'Have a Custom Software or API Integration Project?'}
            </h2>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem' }}>
              {lang === 'de' ? 'Wir besprechen Ihre Anforderungen und entwickeln eine schlanke, wirtschaftliche Lösung.' : 'Let us scope your technical requirements and architect an efficient solution.'}
            </p>
          </div>
          <Link to="/contact?service=software" className="btn btn-primary">
            {lang === 'de' ? 'Software-Projekt anfragen' : 'Request Software Consultation'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
