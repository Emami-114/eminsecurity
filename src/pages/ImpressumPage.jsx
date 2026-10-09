import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, PhoneCall, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ImpressumPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '860px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <span style={{ color: 'var(--accent-cyan)' }}>IMPRESSUM</span>
        </div>

        <span className="tech-badge" style={{ marginBottom: '1rem' }}>
          RECHTLICHE ANGABEN // § 5 DDG
        </span>
        <h1>Impressum</h1>

        <div className="cyber-card" style={{ padding: '2.5rem', marginBottom: '2.5rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </h2>
          <p>
            <strong style={{ color: 'var(--text-main)' }}>EminSecurity GmbH &amp; Co. KG</strong><br />
            Carl-Zeiss-Promenade 10<br />
            07745 Jena<br />
            Deutschland
          </p>

          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Vertreten durch:
          </h3>
          <p>
            Persönlich haftende Gesellschafterin: EminSecurity Verwaltungs GmbH<br />
            Geschäftsführung: Senior Cyber Security Engineer Emin (Lead Auditor ISO 27001, OSCP)
          </p>

          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Kontakt
          </h3>
          <p>
            Telefon: +49 152 33513651<br />
            24/7 Incident Hotline: +49 152 33513651<br />
            E-Mail: kontakt@eminsec.de
          </p>

          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Registereintrag
          </h3>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Jena<br />
            Registernummer: HRA 512984
          </p>

          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Umsatzsteuer-ID
          </h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 384 912 401
          </p>

          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Berufshaftpflichtversicherung für IT-Sicherheit &amp; Forensik
          </h3>
          <p>
            Hiscox SA, Niederlassung für Deutschland, Arnulfstraße 31, 80636 München.<br />
            Räumlicher Geltungsbereich: Weltweit (inkl. USA/Kanada).
          </p>

          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
