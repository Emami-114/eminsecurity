import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Flame, Award, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function AwarenessTrainingPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/services" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'LEISTUNGEN' : 'SERVICES'}</Link> / <span style={{ color: '#f59e0b', fontWeight: 600 }}>AWARENESS SCHULUNG</span>
        </div>

        <span className="tech-badge amber" style={{ marginBottom: '1rem' }}>
          HUMAN FACTOR DEFENSE // SECURITY AWARENESS
        </span>
        <h1>
          {lang === 'de'
            ? 'Security Awareness Schulungen & Phishing-Simulation'
            : 'Security Awareness Training & Phishing Drills'}
        </h1>
        <p className="lead" style={{ marginBottom: '2.5rem' }}>
          {lang === 'de'
            ? 'Über 85% aller erfolgreichen Cyber-Angriffe beginnen mit einer manipulativen E-Mail oder einem Telefonanruf (Social Engineering). Standard-Webinare verpuffen wirkungslos: Wir begeistern Ihre Teams mit packenden Live-Hacking-Demos, realistischen Phishing-Drills und greifbaren Verhaltensregeln.'
            : 'Over 85% of successful intrusions originate from social engineering tactics. Generic compliance videos fail to engage: we train your workforce with live-hacking demonstrations, realistic phishing simulations, and positive habit engineering.'}
        </p>

        {/* Modules */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Mail size={20} color="#f59e0b" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Praxisnahe Phishing-Simulationen</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Keine plumpen Fake-Mails, sondern täuschend echte Kampagnen: Gefälschte Lieferantenrechnungen, HR-Gehaltsbenachrichtigungen oder TI-Systemmeldungen für Arztpraxen. Wer klickt, wird nicht bestraft, sondern erhält sofort ein 60-sekündiges interaktives Erklär-Tutorial.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Flame size={20} color="#f59e0b" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Live-Hacking Sessions (Vor-Ort &amp; Virtuell)</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Ein erfahrener Pentester demonstriert live, wie er in wenigen Minuten ein WLAN knackt, RFID-Mitarbeiterausweise am Empfang kopiert oder Passwörter ausgelesen werden. Ein echter Aha-Moment für Geschäftsführung und Mitarbeiter.
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <ShieldCheck size={20} color="#f59e0b" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Spezialmodul: Praxis- &amp; Klinikpersonal</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Fokussiert auf den sensiblen Alltag in Praxen und Kliniken: Umgang mit USB-Sticks von Patienten, Telematik-Ausfällen, Betrugsversuchen am Telefon (Social Engineering) und Einhaltung der ärztlichen Schweigepflicht (§ 203 StGB).
            </p>
          </div>

          <div className="cyber-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Award size={20} color="#f59e0b" />
              <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Audit-Nachweise für ISO 27001 &amp; NIS-2</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Lückenlose Dokumentation: Zertifikate für alle Teilnehmer, anonymisierte Auswertungen der Klick- und Meldequoten sowie Compliance-Berichte für Wirtschaftsprüfer und Cyber-Versicherungen.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-subtle)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'Awareness-Workshop für Ihr Unternehmen anfragen' : 'Book a Security Awareness Workshop'}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {lang === 'de' ? 'Verfügbar als Vor-Ort-Seminar in Thüringen (Jena, Erfurt, Weimar, Gera, Hermsdorf) oder interaktives Live-Webinar.' : 'Available on-site across Thuringia or as an interactive remote session.'}
          </p>
          <Link to="/kontakt?subject=Awareness%20Schulung%20Anfrage" className="btn btn-primary">
            {lang === 'de' ? 'Schulungs-Konzept anfordern' : 'Request Training Curriculum'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
