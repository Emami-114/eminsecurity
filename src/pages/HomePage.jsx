import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Terminal, 
  Server, 
  Users, 
  Code2, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  FileText, 
  Activity, 
  Flame, 
  Lock,
  Clock,
  ShieldCheck,
  Stethoscope,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, complianceData, locationsData, magazineArticles } from '../data/translations';
import LiveConsole from '../components/LiveConsole';
import Nis2QuickCheck from '../components/Nis2QuickCheck';

export default function HomePage() {
  const { lang, t } = useLanguage();

  const serviceIcons = {
    'offensive-security': <Terminal size={22} color="#00e5ff" />,
    'defensive-security': <Shield size={22} color="#10b981" />,
    'it-administration': <Server size={22} color="#38bdf8" />,
    'awareness-training': <Users size={22} color="#f59e0b" />,
    'software-testing': <Code2 size={22} color="#c084fc" />
  };

  return (
    <div>
      {/* =========================================================================
          HERO SECTION
          Engineering-focused, deliberate, high-contrast, no generic SaaS cliché
         ========================================================================= */}
      <section style={{
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '980px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <span className="pulse-indicator" />
              <span className="tech-badge cyan">
                {t('hero.tag')}
              </span>
              <span className="tech-badge">
                ISO 27001 &amp; BSI ALIGNED
              </span>
            </div>

            <h1>
              {t('hero.title')}
            </h1>

            <p className="lead" style={{ marginBottom: '2rem' }}>
              {t('hero.description')}
            </p>

            {/* Hero CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              <Link to="/kontakt" className="btn btn-primary">
                {t('hero.ctaPrimary')}
                <ArrowRight size={16} />
              </Link>
              <Link to="/leistungen" className="btn btn-secondary">
                {lang === 'de' ? 'Leistungsportfolio ansehen' : 'Explore Capabilities'}
              </Link>
              <Link to="/kontakt?type=emergency" className="btn btn-outline-danger">
                <AlertTriangle size={15} color="#ef4444" />
                {lang === 'de' ? 'Akuter Notfall? 24/7 Hotline' : 'Active Breach? 24/7 Hotline'}
              </Link>
            </div>

            {/* SLA Badge Ribbon */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)'
            }}>
              <Clock size={14} color="#00e5ff" />
              <span>{t('hero.slaNotice')}</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>[AKTIV]</span>
            </div>
          </div>

          {/* Real-time Telemetry Console directly on Hero */}
          <div style={{ marginTop: '3.5rem' }}>
            <LiveConsole />
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY NUMBERS / METRICS
         ========================================================================= */}
      <section style={{
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        backgroundColor: '#0a0d14',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div style={{ padding: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                {t('metrics.responseTime')}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {t('metrics.responseTimeLabel')}
              </div>
            </div>

            <div style={{ padding: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                {t('metrics.pentesters')}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {t('metrics.pentestersLabel')}
              </div>
            </div>

            <div style={{ padding: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: '#f8fafc' }}>
                {t('metrics.incidentsHandled')}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {t('metrics.incidentsHandledLabel')}
              </div>
            </div>

            <div style={{ padding: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: '#38bdf8' }}>
                {t('metrics.satisfaction')}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {t('metrics.satisfactionLabel')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE CAPABILITIES (LEISTUNGEN)
         ========================================================================= */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="tech-badge cyan" style={{ marginBottom: '0.6rem' }}>
                MODULARE ARCHITEKTUR
              </span>
              <h2>{t('servicesOverview.heading')}</h2>
              <p style={{ margin: 0 }}>{t('servicesOverview.subheading')}</p>
            </div>
            <Link to="/leistungen" className="btn btn-secondary btn-sm">
              {t('servicesOverview.viewAll')}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3">
            {servicesData.map((svc) => (
              <div key={svc.id} className="cyber-card accented-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {serviceIcons[svc.id]}
                  </div>
                  <span className="tech-badge" style={{ fontSize: '0.72rem' }}>
                    {svc.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  <Link to={svc.path} style={{ color: '#fff' }}>
                    {svc.title[lang]}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', flex: 1, marginBottom: '1.25rem' }}>
                  {svc.shortDesc[lang]}
                </p>

                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                  marginTop: 'auto'
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                    {svc.standards.slice(0, 2).map((std, i) => (
                      <span key={i} className="tech-badge" style={{ fontSize: '0.68rem' }}>
                        {std}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={svc.path} 
                    style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--accent-cyan)', 
                      fontWeight: 600, 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.3rem' 
                    }}
                  >
                    {lang === 'de' ? 'Methodik & Details' : 'Methodology & Scope'}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          REGIONAL THÜRINGEN HUBS
          Jena, Erfurt, Weimar, Gera, Hermsdorf
         ========================================================================= */}
      <section className="section-spacing" style={{ backgroundColor: '#090c13', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
            <span className="tech-badge cyan" style={{ marginBottom: '0.6rem' }}>
              EINSATZNETZWERK THÜRINGEN
            </span>
            <h2>{t('regionalSection.heading')}</h2>
            <p>{t('regionalSection.subheading')}</p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            {locationsData.map((loc) => (
              <div key={loc.slug} className="cyber-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} color="#00e5ff" />
                    <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>
                      {loc.city}
                    </h3>
                  </div>
                  <span className="tech-badge emerald">
                    SLA &lt; {loc.slaMinutes} Min
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                  {loc.focusArea[lang]}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                  {loc.description[lang].slice(0, 140)}...
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-faint)' }}>
                    {loc.phone}
                  </span>
                  <Link 
                    to={`/standorte/${loc.slug}`} 
                    style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}
                  >
                    {lang === 'de' ? 'Standort-Details' : 'Hub Details'} &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-strong)',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="#10b981" />
              <span style={{ fontSize: '0.92rem', color: '#e2e8f0' }}>
                <strong>Vor-Ort Notfall-Garantie:</strong> Bei vertraglich vereinbarten Incident-Retainern ist unser forensisches Team garantiert innerhalb von 90 Minuten an Ihrem Rechenzentrum in ganz Thüringen.
              </span>
            </div>
            <Link to="/standorte" className="btn btn-secondary btn-sm">
              {lang === 'de' ? 'Alle Standorte vergleichen' : 'Compare Hubs'}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE NIS-2 QUICK CHECK TOOL
         ========================================================================= */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '2rem' }}>
            <span className="tech-badge amber" style={{ marginBottom: '0.6rem' }}>
              {t('complianceSection.badge')}
            </span>
            <h2>{t('complianceSection.heading')}</h2>
            <p>{t('complianceSection.subheading')}</p>
          </div>

          <Nis2QuickCheck />
        </div>
      </section>

      {/* =========================================================================
          URGENT THREAT INTELLIGENCE & MAGAZINE
          Featuring Stadt Berlin Hack Sept 2026
         ========================================================================= */}
      <section className="section-spacing" style={{ backgroundColor: '#07090f', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="tech-badge crimson" style={{ marginBottom: '0.6rem' }}>
                THREAT INTELLIGENCE &amp; ANALYSEN
              </span>
              <h2>{t('recentThreats.heading')}</h2>
              <p style={{ margin: 0 }}>{t('recentThreats.subheading')}</p>
            </div>
            <Link to="/magazin" className="btn btn-secondary btn-sm">
              {t('recentThreats.viewArchive')}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3">
            {magazineArticles.map((article) => (
              <article key={article.slug} className="cyber-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className="tech-badge crimson" style={{ fontSize: '0.7rem' }}>
                    {article.badge}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
                    {article.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                  <Link to={`/magazin/${article.slug}`} style={{ color: '#fff' }}>
                    {article.title[lang]}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', flex: 1, marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {article.summary[lang]}
                </p>

                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
                    {article.readTime} Lesezeit
                  </span>
                  <Link 
                    to={`/magazin/${article.slug}`} 
                    style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}
                  >
                    {lang === 'de' ? 'Vollständigen Bericht lesen' : 'Read Full Briefing'} &gt;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TARGET SECTORS (BRAN格外XPERTISE)
          KMU, Praxen & Kliniken, Kanzleien
         ========================================================================= */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
            <span className="tech-badge cyan" style={{ marginBottom: '0.6rem' }}>
              ZIELGRUPPEN
            </span>
            <h2>{t('targetAudience.heading')}</h2>
            <p>{t('targetAudience.subheading')}</p>
          </div>

          <div className="grid-3">
            {/* Sector 1: KMU & Fertigung */}
            <div className="cyber-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Server size={22} color="#00e5ff" />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>
                  {lang === 'de' ? 'Mittelstand & Fertigung' : 'Manufacturing & Industry'}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {lang === 'de'
                  ? 'Schutz von vernetzten CNC-Maschinen, SPS-Steuerungen und Konstruktionsplänen vor Wirtschaftsspionage und Krypto-Trojanern.'
                  : 'Protecting interconnected OT/SCADA systems, CNC production lines, and CAD designs against espionage and ransomware.'}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.4rem' }}>✓ OT/SCADA Mikrosegmentierung</li>
                <li style={{ marginBottom: '0.4rem' }}>✓ Immutable Backups gegen Erpresser</li>
                <li>✓ NIS-2 Lieferketten-Auditierung</li>
              </ul>
            </div>

            {/* Sector 2: Praxen & Kliniken */}
            <div className="cyber-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Stethoscope size={22} color="#10b981" />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>
                  {lang === 'de' ? 'Praxen & Kliniken' : 'Medical Clinics & Hospitals'}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {lang === 'de'
                  ? 'Konformität nach § 75b SGB V, Schutz der Telematikinfrastruktur und Einhaltung ärztlicher Schweigepflicht (§ 203 StGB).'
                  : 'Compliance with German healthcare telematics directives, safeguarding patient confidentiality, and isolating medical imaging.'}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.4rem' }}>✓ Telematik-Konnektor Härtung</li>
                <li style={{ marginBottom: '0.4rem' }}>✓ Medizintechnik-VLAN Isolierung</li>
                <li>✓ Notfall-Wiederanlaufpläne für Praxen</li>
              </ul>
            </div>

            {/* Sector 3: Kanzleien & Berufsgeheimnisträger */}
            <div className="cyber-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Briefcase size={22} color="#f59e0b" />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>
                  {lang === 'de' ? 'Kanzleien & Notare' : 'Law Firms & Notaries'}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {lang === 'de'
                  ? 'Höchste Diskretion für Mandantendaten. Schutz vor gezielten Spear-Phishing-Attacken und Abhören digitaler Akten.'
                  : 'Highest confidentiality for legal deal rooms and client records, defended against targeted spear-phishing.'}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.4rem' }}>✓ Ende-zu-Ende verschlüsselte E-Mails</li>
                <li style={{ marginBottom: '0.4rem' }}>✓ Phishing-resistente FIDO2 Hardware-Tokens</li>
                <li>✓ Forensische Datenlöschung nach DSGVO</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL AUDIT INQUIRY CTA SECTION
         ========================================================================= */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: '#0a0d16',
        position: 'relative',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
            DIREKTER DRAHT ZU DEN ENGINEERS
          </span>
          <h2>
            {lang === 'de'
              ? 'Warten Sie nicht auf den ersten Sicherheitsvorfall.'
              : 'Do Not Await Your First Severe Intrusion.'}
          </h2>
          <p className="lead" style={{ margin: '0 auto 2rem' }}>
            {lang === 'de'
              ? 'Vereinbaren Sie einen vertraulichen Sicherheits-Check mit unseren Senior-Analysten in Jena, Erfurt, Weimar, Gera oder Hermsdorf.'
              : 'Schedule a confidential security assessment with our senior defense engineers across Thuringia.'}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="btn btn-primary" style={{ padding: '0.85rem 1.8rem' }}>
              {lang === 'de' ? 'Sicherheitsaudit unverbindlich anfragen' : 'Request Security Audit'}
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+4936419283911" className="btn btn-secondary" style={{ padding: '0.85rem 1.8rem' }}>
              <Clock size={16} />
              {lang === 'de' ? 'Notfall-Hotline anrufen' : 'Call 24/7 Hotline'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
