import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Headphones, ArrowRight, CheckCircle2, MessageSquare, PhoneForwarded, Radio, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function VoipCommunicationPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>KOMMUNIKATION &amp; VOIP-TELEFONIE</span>
        </div>

        <span className="tech-badge amber" style={{ marginBottom: '1rem' }}>
          UNIFIED COMMUNICATIONS // CLOUD-PBX &amp; MICROSOFT TEAMS
        </span>
        <h1>
          {lang === 'de'
            ? 'Kommunikation & Moderne VoIP-Telefonie'
            : 'Business Communication & Modern VoIP Telephony'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Kristallklare Sprachqualität, maximale Flexibilität und standortunabhängige Erreichbarkeit: Wir ersetzen veraltete, teure Telefonanlagen vor Ort durch moderne Cloud-PBX-Lösungen und nahtlose Microsoft Teams Telefonie – für Büro, Homeoffice und Außendienst.'
            : 'Crystal-clear voice quality and location-independent availability: We replace expensive on-premise PBX hardware with scalable cloud telephony systems and direct Microsoft Teams phone integration.'}
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Radio size={22} color="var(--accent-amber)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Cloud-Telefonanlagen (Cloud-PBX)' : 'Cloud PBX Telephony Systems'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Zukunftssichere, softwarebasierte Telefonielösungen (z. B. 3CX, Placetel). Keine teuren Wartungsverträge für Hardware im Serverraum. Nebenstellen lassen sich sekundenschnell per Mausklick hinzufügen oder abbestellen.'
                : 'Modern software-defined cloud PBX platforms eliminating local hardware appliances. Effortlessly scale extensions up or down on demand with zero long-term hardware lock-in.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <MessageSquare size={22} color="var(--accent-amber)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Microsoft Teams Telefonie-Integration' : 'Microsoft Teams Phone Integration'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Telefonieren Sie weltweit direkt aus Microsoft Teams über Ihre gewohnte geschäftliche Rufnummer. Ein einziges Tool für Chat, Videokonferenzen und klassische Festnetztelefonie.'
                : 'Direct Routing for Microsoft Teams: Consolidate internal team chat, video conferences, and public PSTN calling into a single unified client on PC and smartphone.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <PhoneForwarded size={22} color="var(--accent-amber)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'Intelligentes Anrufmanagement' : 'Intelligent Call Routing & Queues'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Professionelle Warteschleifen mit Musik, IVR-Sprachmenüs („Drücken Sie die 1 für Support“), intelligente Weiterleitungen nach Feierabend, Besetztlampenfelder und digitale Fax-to-Mail-Dienste.'
                : 'Professional greeting audio, multi-level IVR interactive voice menus, time-of-day overflow routing, hunt groups, and digital Fax-to-Mail integration.'}
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Headphones size={22} color="var(--accent-amber)" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                {lang === 'de' ? 'IP-Hardware, DECT & Konferenzsysteme' : 'IP Hardware, Multi-Cell DECT & Conference'}
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {lang === 'de'
                ? 'Ausstattung mit hochwertigen IP-Tischtelefonen (Yealink, Snom), nahtlosen DECT-Mehrzellensystemen für Arztpraxen, Werkstätten und Lager sowie professioneller Konferenzraum-Technik.'
                : 'Turnkey hardware provisioning: Ergonomic VoIP desk phones, roaming multi-cell DECT networks for clinics and warehouses, headsets, and conference speaker hubs.'}
            </p>
          </div>
        </div>

        {/* Security & Reliability Box */}
        <div className="cyber-card" style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent-amber)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <ShieldCheck size={22} color="var(--accent-amber)" />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>
              {lang === 'de' ? 'Abhörsicher & DSGVO-konform: Verschlüsselte Telefonie' : 'Eavesdrop-Proof & GDPR-Compliant Encrypted Telephony'}
            </h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {lang === 'de'
              ? 'Telefonate enthalten hochsensible Geschäfts- und Patientendaten. Wir sichern Ihre VoIP-Kommunikation mit TLS-Signalisierung und SRTP-Sprachverschlüsselung ab. Dadurch sind Ihre Gespräche im Netzwerk und über das Internet zuverlässig gegen Abhören geschützt.'
              : 'Voice calls carry confidential operational data. We mandate TLS cryptographic signaling and SRTP end-to-end voice encryption, insulating conversations against network eavesdropping.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <span className="tech-badge">SRTP Sprachverschlüsselung</span>
            <span className="tech-badge">SIP über TLS</span>
            <span className="tech-badge">Smartphone App Integration</span>
            <span className="tech-badge">Rufnummernmitnahme (Portierung)</span>
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
              {lang === 'de' ? 'Möchten Sie Ihre Telefonie modernisieren?' : 'Looking to Modernize Business Telephony?'}
            </h2>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem' }}>
              {lang === 'de' ? 'Wir prüfen Ihre bestehenden Leitungen und planen eine reibungslose Rufnummernportierung.' : 'Contact us for a tailored VoIP concept and seamless phone number porting.'}
            </p>
          </div>
          <Link to="/contact?service=voip" className="btn btn-primary">
            {lang === 'de' ? 'VoIP-Beratung anfragen' : 'Request VoIP Consultation'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
