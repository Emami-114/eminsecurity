import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ShieldAlert, CheckCircle2, ArrowRight, Bug, Lock, Network, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function OffensiveSecurityPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>OFFENSIVE SECURITY</span>
        </div>

        <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
          OFFENSIVE SECURITY // ADVERSARY SIMULATION
        </span>
        <h1>
          {lang === 'de'
            ? 'Penetration Testing & Offensive Schwachstellenanalyse'
            : 'Penetration Testing & Offensive Vulnerability Assessment'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Automatisierte Scanner erfassen nur die Oberfläche. Unsere zertifizierten Offensive Security Spezialisten (OSCP/OSCE) testen Ihre Systeme mit den gleichen Werkzeugen, Taktiken und Denkweisen wie reale Angreifer – kontrolliert, dokumentiert und methodisch fundiert.'
            : 'Automated scanners only detect low-hanging fruit. Our certified penetration testers (OSCP/OSCE) evaluate your environment with the identical tools, exploits, and mindset of state-backed and criminal syndicates.'}
        </p>

        {/* Core Pillars */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Terminal size={20} color="#00e5ff" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Web- &amp; API-Penetrationstest</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Prüfung von Webanwendungen, Kundenportalen und Cloud-APIs nach OWASP Top 10 und ASVS 4.0. Wir decken Broken Object Level Authorization (BOLA), SQL-Injections, Server-Side Request Forgery (SSRF) und Logikfehler in Bezahl- oder Registrierungsprozessen auf.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Network size={20} color="#00e5ff" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Netzwerk- &amp; Active Directory Pentest</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Wir prüfen Ihre interne Domäneninfrastruktur auf Schwachstellen: Kerberoasting, AS-REP Roasting, ungesicherte SMB-Shares, fehlerhafte Delegation und Pfade zur Domänen-Übernahme. Inklusive Prüfung externer Firewalls und VPN-Endpunkte.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <ShieldAlert size={20} color="#00e5ff" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Red Teaming &amp; Realistische Simulation</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Ein unangekündigter, ganzheitlicher Test Ihrer Abwehrbereitschaft: Reagiert Ihr SOC? Schlagen EDR-Systeme an? Wir testen Ihre IT, Mitarbeiter (Social Engineering) und physische Barrieren im Zusammenspiel.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Bug size={20} color="#00e5ff" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Kontinuierliches Schwachstellen-Scanning</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Regelmäßiges, automatisiertes Abtasten Ihrer externen Angriffsfläche (Attack Surface Management) mit manueller Verifikation durch unsere Analysten zur Vermeidung von Fehlalarmen.
            </p>
          </div>
        </div>

        {/* Pentest Report & Deliverables */}
        <div className="cyber-card" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', padding: '2rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'Der EminSecurity Prüfbericht: Verständlich für Vorstand & Entwickler' : 'The EminSecurity Audit Report'}
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Kein automatisierter PDF-Dump: Jeder gefundene Befund wird von unseren Analysten manuell reproduziert, mit einem CVSS-Schweregrad bewertet und mit einer sofort umsetzbaren Handlungsempfehlung versehen.
          </p>
          <div className="grid-3">
            <div style={{ padding: '0.85rem', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
              <div style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>Management Summary</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Risikobewertung in Schulnoten und Priorisierung der Geschäftsrisiken für Geschäftsführung und Aufsichtsrat.</div>
            </div>
            <div style={{ padding: '0.85rem', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
              <div style={{ color: '#059669', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>Technical Proof-of-Concept</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Exakte HTTP-Requests, Payloads und Screenshots, mit denen Administratoren den Befund sofort nachvollziehen können.</div>
            </div>
            <div style={{ padding: '0.85rem', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
              <div style={{ color: '#d97706', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>Kostenloser Retest</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Nach Behebung der Schwachstellen prüfen wir innerhalb von 60 Tagen kostenlos nach und stellen ein Testat aus.</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            {lang === 'de' ? 'Pentest für Ihre Infrastruktur in Thüringen planen' : 'Scope Your Pentest in Thuringia'}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {lang === 'de' ? 'Vertrauliches Vorgespräch mit NDA direkt mit unseren leitenden Sicherheitsingenieuren.' : 'Confidential scoping call under mutual NDA with senior security consultants.'}
          </p>
          <Link to="/kontakt?subject=Pentest%20Anfrage" className="btn btn-primary">
            {lang === 'de' ? 'Unverbindliches Pentest-Angebot anfordern' : 'Request Pentest Proposal'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
