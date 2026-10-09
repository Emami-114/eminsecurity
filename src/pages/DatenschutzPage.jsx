import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DatenschutzPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '860px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <span style={{ color: 'var(--accent-cyan)' }}>DATENSCHUTZ</span>
        </div>

        <span className="tech-badge emerald" style={{ marginBottom: '1rem' }}>
          DSGVO / GDPR // DATENSPARSAME INFRASTRUKTUR
        </span>
        <h1>Datenschutzerklärung</h1>

        <div className="cyber-card" style={{ padding: '2.5rem', marginBottom: '2.5rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
          {/* Privacy Ethos Box */}
          <div style={{
            backgroundColor: 'var(--accent-emerald-light)',
            borderLeft: '4px solid var(--accent-emerald)',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '2rem',
            fontSize: '0.95rem',
            color: '#065f46'
          }}>
            <strong style={{ color: '#064e3b' }}>Unser Datenschutz-Grundsatz als IT-Sicherheitsunternehmen:</strong><br />
            Wir setzen auf dieser Website bewusst KEINE Tracking-Pixel von Drittanbietern (kein Google Analytics, kein Meta Pixel) und keine zustimmungspflichtigen Werbe-Cookies ein. Ihre IP-Adresse wird ausschließlich zu technischen Betriebszwecken und zur Abwehr von Cyber-Angriffen verarbeitet.
          </div>

          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            1. Name und Kontaktdaten des Verantwortlichen
          </h2>
          <p>
            Verantwortlicher im Sinne der EU-Datenschutz-Grundverordnung (DSGVO):<br />
            <strong style={{ color: 'var(--text-main)' }}>EminSecurity GmbH &amp; Co. KG</strong><br />
            Carl-Zeiss-Promenade 10<br />
            07745 Jena, Deutschland<br />
            Telefon: +49 152 33513651<br />
            E-Mail: kontakt@eminsec.de
          </p>

          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            2. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website
          </h2>
          <p>
            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
          </ul>
          <p>
            Die genannten Daten werden durch uns verarbeitet, um einen reibungslosen Verbindungsaufbau und die Systemsicherheit (Erkennung von DDoS-Angriffen, Exploit-Versuchen) zu gewährleisten (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO). Die Logdaten werden nach 7 Tagen automatisiert gelöscht.
          </p>

          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            3. Kontaktaufnahme per Formular, E-Mail oder Telefon
          </h2>
          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen).
          </p>

          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            4. Ihre Rechte als betroffene Person
          </h2>
          <p>Sie haben das Recht:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger Daten zu verlangen;</li>
            <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 18 DSGVO die Einschränkung der Datenverarbeitung zu verlangen;</li>
            <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren (zuständig: Thüringer Landesbeauftragter für den Datenschutz und die Informationsfreiheit - TLfDI).</li>
          </ul>

          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            5. Datensicherheit
          </h2>
          <p>
            Wir verwenden innerhalb des Website-Besuchs das moderne TLS 1.3-Verfahren in Verbindung mit der jeweils höchsten Verschlüsselungsstufe. Wir sichern unsere Serverinfrastruktur in deutschen Rechenzentren durch modernste Härtungs- und Firewall-Technologien ab.
          </p>
        </div>
      </div>
    </div>
  );
}
