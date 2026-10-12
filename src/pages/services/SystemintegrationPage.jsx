import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Lock, HardDrive, Network, CheckCircle2, ArrowRight, ShieldCheck, Wrench, RefreshCw, Cpu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SystemintegrationPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>SYSTEMINTEGRATION &amp; IT-ADMINISTRATION</span>
        </div>

        <span className="tech-badge blue" style={{ marginBottom: '1rem' }}>
          IT-SYSTEMHAUS // INFRASTRUKTUR &amp; SUPPORT
        </span>
        <h1>
          {lang === 'de'
            ? 'Systemintegration & IT-Administration in Thüringen'
            : 'System Integration & IT Administration in Thuringia'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Stabile IT ist das Fundament jedes erfolgreichen Unternehmens. Als modernes IT-Systemhaus planen, implementieren und betreuen wir Ihre komplette Infrastruktur: Von hochverfügbaren Firmennetzwerken und Server-Architekturen bis hin zu proaktiver Wartung und schnellem Vor-Ort-Support in Jena, Erfurt, Weimar und Umgebung.'
            : 'Stable IT is the backbone of every modern enterprise. As a specialized systems integrator, we engineer, deploy, and administer robust infrastructure: From enterprise networks and virtualization clusters to proactive maintenance and direct on-site support across Central Germany.'}
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Network size={22} color="var(--accent-blue)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Netzwerkarchitektur & Segmentierung' : 'Network Architecture & Segmentation'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Ausfallsichere LAN- und WLAN-Netzwerke, VLAN-Segmentierung zur Trennung sensibler Datenbereiche, Next-Gen Firewalls und sichere Standort-Kopplungen via Site-to-Site VPN.'
                : 'High-availability enterprise LAN and Wi-Fi networks, VLAN micro-segmentation, Next-Gen firewall implementations, and hardened multi-site VPN interconnects.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Server size={22} color="var(--accent-blue)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Server- & Client-Management' : 'Server & Endpoint Management'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Einrichtung, Virtualisierung (Hyper-V, Proxmox) und laufende Betreuung von Windows Server und Linux. Strukturierte Arbeitsplatz-Rollouts und Hardware-Lifecycle-Management.'
                : 'Deployment, virtualization (Hyper-V, Proxmox), and operations for Windows and Linux servers. Standardized workstation provisioning and hardware lifecycle governance.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Lock size={22} color="var(--accent-blue)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Active Directory & Identity Management' : 'Active Directory & Identity Governance'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Sichere Benutzer- und Gruppenrichtlinienverwaltung (GPOs), Bereinigung historischer Berechtigungs-Wildwüchse, Entra ID (Azure AD) Hybrid-Sync und Tiered Administration Modelle.'
                : 'Centralized identity administration, Group Policy enforcement, Entra ID hybrid synchronization, privilege auditing, and tiered administrative architectures.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Wrench size={22} color="var(--accent-blue)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Proaktive Wartung & IT-Helpdesk' : 'Proactive Care & IT Helpdesk'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? '24/7 Sensor-Monitoring Ihrer Kernsysteme, automatisiertes Patchmanagement von Betriebssystemen und Drittanbieter-Software sowie persönlicher Remote- und Vor-Ort-Helpdesk.'
                : 'Round-the-clock telemetry monitoring, automated security patch cycles for OS and third-party tools, backed by dedicated remote and on-site support in Thuringia.'}
            </p>
          </div>
        </div>

        {/* Backup & Resilience Box */}
        <div className="cyber-card" style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent-blue)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <HardDrive size={22} color="var(--accent-blue)" />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>
              {lang === 'de' ? 'Ransomware-sichere 3-2-1 Datensicherung' : 'Ransomware-Resilient 3-2-1 Backup Strategy'}
            </h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {lang === 'de'
              ? 'Ein Backup ist nur so viel wert wie seine erfolgreiche Wiederherstellung. Wir implementieren unveränderliche Backups (WORM/Air-Gap), die von Krypto-Trojanern weder gelöscht noch verschlüsselt werden können – inklusive regelmäßiger, protokollierter Wiederanlauftests.'
              : 'Backups are only as reliable as verified restores. We enforce immutable WORM storage repositories isolated against ransomware encryption, complemented by automated restore testing.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <span className="tech-badge">Veeam Backup &amp; Replication</span>
            <span className="tech-badge">Synology NAS</span>
            <span className="tech-badge">Air-Gapped Repositories</span>
            <span className="tech-badge">Disaster Recovery Drill</span>
          </div>
        </div>

        {/* Why EminSecurity Systemhaus */}
        <div className="cyber-card" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', padding: '2.5rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'Warum EminSecurity als Ihr IT-Systemhaus?' : 'Why Choose EminSecurity as Your Systems Integrator?'}
          </h2>
          <div className="grid-2" style={{ gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>
                  {lang === 'de' ? 'Security-First DNA' : 'Security-First DNA'}
                </strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {lang === 'de' ? 'Wir konfigurieren Systeme von Anfang an gehärtet und resilient – nicht als nachträgliches Add-on.' : 'Systems configured securely from day one with enterprise hardening standards.'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>
                  {lang === 'de' ? 'Vor Ort in Thüringen' : 'Direct On-Site Presence'}
                </strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {lang === 'de' ? 'Feste persönliche Ansprechpartner in Jena, Erfurt, Weimar, Gera und Hermsdorf.' : 'Local senior technicians available for immediate on-site dispatch when seconds count.'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>
                  {lang === 'de' ? 'Transparente Serviceverträge' : 'Transparent SLA Contracts'}
                </strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {lang === 'de' ? 'Klare Reaktionszeiten, planbare monatliche Kosten und keine versteckten Abrechnungsfallen.' : 'Clear guaranteed response times, predictable monthly rates without hidden fees.'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>
                  {lang === 'de' ? 'Ganzheitliche Betreuung' : 'End-to-End Governance'}
                </strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {lang === 'de' ? 'Infrastruktur, Cloud, VoIP, Software und SIEM-Überwachung aus einer Hand.' : 'Infrastructure, cloud services, VoIP, software, and SIEM monitoring from a single source.'}
                </span>
              </div>
            </div>
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
              {lang === 'de' ? 'Bereit für eine stabile IT-Infrastruktur?' : 'Ready for Resilient IT Infrastructure?'}
            </h2>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem' }}>
              {lang === 'de' ? 'Lassen Sie uns Ihre IT-Umgebung unverbindlich prüfen und ein maßgeschneidertes Konzept erstellen.' : 'Get in touch for an initial infrastructure assessment and tailored roadmap.'}
            </p>
          </div>
          <Link to="/contact?service=systemintegration" className="btn btn-primary">
            {lang === 'de' ? 'Unverbindliche IT-Beratung anfragen' : 'Request Consultation'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
