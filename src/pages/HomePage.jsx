import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Terminal,
  Server,
  Users,
  Code2,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Clock,
  ShieldCheck,
  Stethoscope,
  Briefcase,
  Activity,
  Lock,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, locationsData, magazineArticles } from '../data/translations';
import Nis2QuickCheck from '../components/Nis2QuickCheck';

export default function HomePage() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('offensive');

  const serviceIcons = {
    'offensive-security': <Terminal size={22} color="#0062ff" />,
    'defensive-security': <Shield size={22} color="#10b981" />,
    'it-administration': <Server size={22} color="#0284c7" />,
    'awareness-training': <Users size={22} color="#f59e0b" />,
    'software-testing': <Code2 size={22} color="#8b5cf6" />
  };

  return (
    <div>
      {/* =========================================================================
          HERO SECTION (Enginsight-Inspired Minimalist & Clean)
         ========================================================================= */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            {/* Trust Pill Badges */}
            {/*            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="tech-badge blue">
                MADE IN THÜRINGEN // CYBER DEFENSE
              </span>
              <span className="tech-badge emerald">
                <CheckCircle2 size={13} />
                BSI &amp; ISO 27001 AUDITORIERT
              </span>
              <span className="tech-badge">
                100% DSGVO-KONFORM
              </span>
            </div> */}

            <h1 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>
              {t('hero.title')}
            </h1>

            <p className="lead" style={{ margin: '0 auto 2.5rem', maxWidth: '780px' }}>
              {t('hero.description')}
            </p>

            {/* Hero CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 1.85rem', fontSize: '1rem' }}>
                {t('hero.ctaPrimary')}
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn btn-secondary" style={{ padding: '0.85rem 1.85rem', fontSize: '1rem' }}>
                {lang === 'de' ? 'Leistungsübersicht' : 'Explore Capabilities'}
              </Link>
            </div>

            {/* SLA Badge */}
            {/*  <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#1e40af'
            }}>
              <Clock size={15} color="#0062ff" />
              <span>{t('hero.slaNotice')}</span>
              <span style={{ color: '#16a34a', fontWeight: 700 }}>• AKTIV</span>
            </div> */}
            <div style={{ padding: '2rem' }}></div>
          </div>

          {/* Interactive Enginsight-style Capability Dashboard (replaces raw terminal) */}
          <div style={{ marginTop: '4rem' }}>
            <div className="cyber-card" style={{
              padding: 0,
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {/* Dashboard Nav Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.5rem',
                backgroundColor: '#f8fafc',
                borderBottom: '1px solid var(--border-subtle)',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <ShieldCheck size={20} color="#0062ff" />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                    EminSec Cyber Defense Matrix
                  </span>
                  <span className="tech-badge blue" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                    LIVE ARCHITEKTUR
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => setActiveTab('offensive')}
                    className={`btn btn-sm ${activeTab === 'offensive' ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    Offensive Testing
                  </button>
                  <button
                    onClick={() => setActiveTab('defensive')}
                    className={`btn btn-sm ${activeTab === 'defensive' ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    24/7 SOC &amp; Forensik
                  </button>
                  <button
                    onClick={() => setActiveTab('compliance')}
                    className={`btn btn-sm ${activeTab === 'compliance' ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    NIS-2 &amp; ISO 27001
                  </button>
                </div>
              </div>

              {/* Dashboard Content Panel */}
              <div style={{ padding: '2rem 2.5rem', backgroundColor: '#ffffff' }}>
                {activeTab === 'offensive' && (
                  <div className="grid-3" style={{ gap: '1.75rem' }}>
                    <div>
                      <div style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        WEB &amp; API PENTESTING
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Manuelle Prüfung nach OWASP ASVS 4.0</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Identifikation von Logikfehlern, Authentifizierungs-Bypasses und API-Schwachstellen durch zertifizierte OSCP-Engineers.
                      </p>
                    </div>
                    <div>
                      <div style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        ACTIVE DIRECTORY AUDITS
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Angriffspfade zur Domänenübernahme</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Systematisches Aufdecken von Kerberoasting, schwachen ACLs und NTLM-Schwachstellen vor realen Erpressern.
                      </p>
                    </div>
                    <div>
                      <div style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        PROOF-OF-CONCEPT BERICHT
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Verständlich für Vorstand &amp; IT-Team</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Exakte Nachweise, CVSS v4.0 Risikobewertung, konkrete Code-Fixes und kostenloser Retest innerhalb von 60 Tagen.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'defensive' && (
                  <div className="grid-3" style={{ gap: '1.75rem' }}>
                    <div>
                      <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        24/7 SOC-AS-A-SERVICE
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Permanente Telemetrie-Überwachung</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Deutsche Analysten überwachen Ihre Endpoints, Server und Netzwerke rund um die Uhr ohne Alarm-Müdigkeit.
                      </p>
                    </div>
                    <div>
                      <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        INCIDENT FORENSIK
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Beweissicherung &amp; Eindämmung</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        RAM-Forensik, Triage, Isolation infizierter Systeme und gerichtsverwertbare Berichte für BSI und Cyberversicherer.
                      </p>
                    </div>
                    <div>
                      <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        VOR-ORT-EINSATZGARANTIE
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Unter 90 Minuten in Thüringen</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Unsere Forensiker rücken bei aktiven Vorfällen direkt an Ihr Rechenzentrum in Jena, Erfurt, Weimar, Gera oder Hermsdorf aus.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'compliance' && (
                  <div className="grid-3" style={{ gap: '1.75rem' }}>
                    <div>
                      <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        NIS-2 UMSETZUNGSGESETZ
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Haftungsvermeidung für Geschäftsführer</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Umsetzung der 10 technischen Mindestkontrollen, Etablierung des 24h-Frühwarnprozesses und Supply-Chain-Audits.
                      </p>
                    </div>
                    <div>
                      <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        ISO/IEC 27001:2022
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Zertifizierungsvorbereitung</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Pragmatischer Aufbau eines schlanken ISMS nach den 93 Annex A Kontrollen inklusive Begleitung durch Lead Auditoren.
                      </p>
                    </div>
                    <div>
                      <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                        PRAXEN &amp; KLINIKEN (§ 75b SGB V)
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Telematik &amp; Patientenschutz</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Sichere Segmentierung von Praxisnetzen, Schutz vor Datenabfluss nach § 203 StGB und Erfüllung der KBV-Richtlinien.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY NUMBERS / METRICS (Enginsight-Inspired Clean Slate Band)
         ========================================================================= */}
      <section style={{
        paddingTop: '3rem',
        paddingBottom: '3rem',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div style={{ padding: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
                {t('metrics.responseTime')}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem', fontWeight: 500 }}>
                {t('metrics.responseTimeLabel')}
              </div>
            </div>

            <div style={{ padding: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 700, color: '#10b981' }}>
                {t('metrics.pentesters')}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem', fontWeight: 500 }}>
                {t('metrics.pentestersLabel')}
              </div>
            </div>

            <div style={{ padding: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 700, color: '#0f172a' }}>
                {t('metrics.incidentsHandled')}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem', fontWeight: 500 }}>
                {t('metrics.incidentsHandledLabel')}
              </div>
            </div>

            <div style={{ padding: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 700, color: '#0284c7' }}>
                {t('metrics.satisfaction')}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem', fontWeight: 500 }}>
                {t('metrics.satisfactionLabel')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE CAPABILITIES (LEISTUNGEN)
         ========================================================================= */}
      <section className="section-spacing" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="tech-badge blue" style={{ marginBottom: '0.6rem' }}>
                LEISTUNGSSPEKTRUM
              </span>
              <h2>{t('servicesOverview.heading')}</h2>
              <p style={{ margin: 0 }}>{t('servicesOverview.subheading')}</p>
            </div>
            <Link to="/services" className="btn btn-secondary btn-sm">
              {t('servicesOverview.viewAll')}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3">
            {servicesData.map((svc) => (
              <div key={svc.id} className="cyber-card accented-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: '8px',
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

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>
                  <Link to={svc.path} style={{ color: '#0f172a' }}>
                    {svc.title[lang]}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', flex: 1, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {svc.shortDesc[lang]}
                </p>

                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                  marginTop: 'auto'
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                    {svc.standards.slice(0, 2).map((std, i) => (
                      <span key={i} className="tech-badge" style={{ fontSize: '0.7rem' }}>
                        {std}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={svc.path}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--accent-blue)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    {lang === 'de' ? 'Details ansehen' : 'View Scope'}
                    <ChevronRight size={14} />
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
      <section className="section-spacing" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
            <span className="tech-badge blue" style={{ marginBottom: '0.6rem' }}>
              REGIONALES EINSATZNETZWERK
            </span>
            <h2>{t('regionalSection.heading')}</h2>
            <p>{t('regionalSection.subheading')}</p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {locationsData.map((loc) => (
              <div key={loc.slug} className="cyber-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} color="#0062ff" />
                    <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>
                      {loc.city}
                    </h3>
                  </div>
                  <span className="tech-badge emerald">
                    &lt; {loc.slaMinutes} Min SLA
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '0.75rem' }}>
                  {loc.focusArea[lang]}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {loc.description[lang].slice(0, 145)}...
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-faint)' }}>
                    {loc.phone}
                  </span>
                  <Link
                    to={`/locations/${loc.slug}`}
                    style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600 }}
                  >
                    {lang === 'de' ? 'Standort-Details' : 'Hub Details'} &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 size={20} color="#10b981" />
              <span style={{ fontSize: '0.95rem', color: '#1e293b' }}>
                <strong>Garantierte Thüringen-SLA:</strong> Für Vertragspartner rückt unser forensisches Emergency-Team innerhalb von 90 Minuten an jedes Rechenzentrum in ganz Thüringen aus.
              </span>
            </div>
            <Link to="/locations" className="btn btn-secondary btn-sm">
              {lang === 'de' ? 'Alle Standorte ansehen' : 'View Hubs'}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE NIS-2 QUICK CHECK TOOL
         ========================================================================= */}
      <section className="section-spacing" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
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
          THREAT INTELLIGENCE & MAGAZINE
          Featuring Stadt Berlin Hack Sept 2026
         ========================================================================= */}
      <section className="section-spacing" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="tech-badge crimson" style={{ marginBottom: '0.6rem' }}>
                MAGAZIN &amp; ANALYSEN
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
                  <span className="tech-badge crimson" style={{ fontSize: '0.72rem' }}>
                    {article.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-faint)' }}>
                    {article.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.18rem', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                  <Link to={`/magazin/${article.slug}`} style={{ color: '#0f172a' }}>
                    {article.title[lang]}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', flex: 1, marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {article.summary[lang]}
                </p>

                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.85rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-faint)' }}>
                    {article.readTime}
                  </span>
                  <Link
                    to={`/magazin/${article.slug}`}
                    style={{ fontSize: '0.88rem', color: 'var(--accent-blue)', fontWeight: 600 }}
                  >
                    {lang === 'de' ? 'Bericht lesen' : 'Read Article'} &gt;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TARGET SECTORS (BRAN格外XPERTISE)
         ========================================================================= */}
      <section className="section-spacing" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
            <span className="tech-badge blue" style={{ marginBottom: '0.6rem' }}>
              ZIELGRUPPEN
            </span>
            <h2>{t('targetAudience.heading')}</h2>
            <p>{t('targetAudience.subheading')}</p>
          </div>

          <div className="grid-3">
            <div className="cyber-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Server size={22} color="#0062ff" />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>
                  {lang === 'de' ? 'Mittelstand & Fertigung' : 'Manufacturing & Industry'}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                {lang === 'de'
                  ? 'Schutz von vernetzten CNC-Maschinen, SPS-Steuerungen und Konstruktionsplänen vor Wirtschaftsspionage und Krypto-Trojanern.'
                  : 'Protecting interconnected OT/SCADA systems, CNC production lines, and CAD designs against espionage and ransomware.'}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: '#334155' }}>
                <li style={{ marginBottom: '0.4rem' }}>✓ OT/SCADA Mikrosegmentierung</li>
                <li style={{ marginBottom: '0.4rem' }}>✓ Immutable Backups gegen Erpresser</li>
                <li>✓ NIS-2 Lieferketten-Auditierung</li>
              </ul>
            </div>

            <div className="cyber-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Stethoscope size={22} color="#10b981" />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>
                  {lang === 'de' ? 'Praxen & Kliniken' : 'Medical Clinics & Hospitals'}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                {lang === 'de'
                  ? 'Konformität nach § 75b SGB V, Schutz der Telematikinfrastruktur und Einhaltung ärztlicher Schweigepflicht (§ 203 StGB).'
                  : 'Compliance with German healthcare telematics directives, safeguarding patient confidentiality, and isolating medical imaging.'}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: '#334155' }}>
                <li style={{ marginBottom: '0.4rem' }}>✓ Telematik-Konnektor Härtung</li>
                <li style={{ marginBottom: '0.4rem' }}>✓ Medizintechnik-VLAN Isolierung</li>
                <li>✓ Notfall-Wiederanlaufpläne für Praxen</li>
              </ul>
            </div>

            <div className="cyber-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Briefcase size={22} color="#f59e0b" />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>
                  {lang === 'de' ? 'Kanzleien & Notare' : 'Law Firms & Notaries'}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                {lang === 'de'
                  ? 'Höchste Diskretion für Mandantendaten. Schutz vor gezielten Spear-Phishing-Attacken und Abhören digitaler Akten.'
                  : 'Highest confidentiality for legal deal rooms and client records, defended against targeted spear-phishing.'}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: '#334155' }}>
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
        backgroundColor: '#0f172a',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="tech-badge blue" style={{ marginBottom: '1rem', backgroundColor: 'rgba(0, 98, 255, 0.2)', borderColor: 'rgba(0, 98, 255, 0.4)', color: '#60a5fa' }}>
            DIREKTER DRAHT ZU DEN ENGINEERS
          </span>
          <h2 style={{ color: '#ffffff', fontSize: '2.4rem' }}>
            {lang === 'de'
              ? 'Warten Sie nicht auf den ersten Sicherheitsvorfall.'
              : 'Do Not Await Your First Severe Intrusion.'}
          </h2>
          <p className="lead" style={{ margin: '0 auto 2rem', color: '#94a3b8' }}>
            {lang === 'de'
              ? 'Vereinbaren Sie einen vertraulichen Sicherheits-Check mit unseren Senior-Analysten in Jena, Erfurt, Weimar, Gera oder Hermsdorf.'
              : 'Schedule a confidential security assessment with our senior defense engineers across Thuringia.'}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 1.85rem' }}>
              {lang === 'de' ? 'Sicherheitsaudit unverbindlich anfragen' : 'Request Security Audit'}
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+4915233513651" className="btn btn-secondary" style={{ padding: '0.85rem 1.85rem', backgroundColor: '#1e293b', color: '#fff', borderColor: '#334155' }}>
              <Clock size={16} />
              {lang === 'de' ? '+49 152 33513651 anrufen' : 'Call Dispatcher'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
