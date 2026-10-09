import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, PhoneCall, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { locationsData, servicesData } from '../data/translations';

export default function StandortDetailPage() {
  const { city } = useParams();
  const { lang } = useLanguage();

  const loc = locationsData.find((l) => l.slug.toLowerCase() === city?.toLowerCase());

  if (!loc) {
    return <Navigate to="/locations" replace />;
  }

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/locations" style={{ color: 'var(--text-muted)' }}>{lang === 'de' ? 'STANDORTE' : 'LOCATIONS'}</Link> / <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{loc.city.toUpperCase()}</span>
        </div>

        {/* Location Banner */}
        <div className="cyber-card" style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-sm)',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: '1 1 520px' }}>
              <span className="tech-badge emerald" style={{ marginBottom: '0.85rem' }}>
                <Clock size={13} />
                {lang === 'de' ? 'VOR-ORT EINSATZBEREITSCHAFT: DIREKT & PERSÖNLICH' : 'ON-SITE READINESS: DIRECT & RAPID'}
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', margin: '0.5rem 0', color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {loc.title[lang]}
              </h1>
              <div style={{ fontSize: '1.05rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                {loc.focusArea[lang]}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-subtle)',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-sm)',
              minWidth: '270px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-faint)', fontSize: '0.78rem', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                <MapPin size={14} color="var(--accent-blue)" />
                STANDORTBÜRO // THÜRINGEN
              </div>
              <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                {loc.address}
              </div>
              <a
                href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                style={{
                  color: 'var(--accent-blue)',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.95rem'
                }}
              >
                <PhoneCall size={14} />
                {loc.phone}
              </a>
            </div>
          </div>

          <p className="lead" style={{ color: 'var(--text-muted)', marginBottom: 0, lineHeight: 1.6 }}>
            {loc.description[lang]}
          </p>
        </div>

        {/* Localized Highlights */}
        <div className="cyber-card" style={{ marginBottom: '3rem', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? `Sicherheitsfokus für Unternehmen in ${loc.city}` : `Security Focus for ${loc.city}`}
          </h2>
          <div className="grid-3" style={{ gap: '1rem' }}>
            {loc.regionalHighlights.map((hl, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.6rem', padding: '0.85rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.45 }}>{hl[lang]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Services Offered */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? `Verfügbare Leistungen am Standort ${loc.city}` : `Services Available in ${loc.city}`}
          </h2>
          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {servicesData.map((svc) => (
              <div key={svc.id} className="cyber-card" style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                  <Link to={svc.path} style={{ color: 'var(--text-main)' }}>
                    {svc.title[lang]}
                  </Link>
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem', flex: 1 }}>
                  {svc.shortDesc[lang]}
                </p>
                <Link to={svc.path} style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  {lang === 'de' ? 'Mehr erfahren' : 'Learn more'}
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          textAlign: 'center',
          backgroundColor: 'var(--bg-subtle)',
          padding: '2.5rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? `Sicherheitsberatung in ${loc.city} vereinbaren` : `Schedule an Audit in ${loc.city}`}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
            {lang === 'de' ? 'Direkter Termin vor Ort an Ihrem Standort oder vertrauliche Remote-Erstberatung.' : 'Direct on-site scoping session at your facility or confidential remote consultation.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to={`/contact?location=${loc.city}`} className="btn btn-primary">
              {lang === 'de' ? `Anfrage für ${loc.city} senden` : `Send Inquiry for ${loc.city}`}
              <ArrowRight size={15} />
            </Link>
            <a href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-secondary">
              <PhoneCall size={15} />
              {loc.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
