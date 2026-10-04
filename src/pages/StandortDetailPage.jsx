import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, PhoneCall, Clock, CheckCircle2, ArrowRight, Shield, Building, Stethoscope, Factory } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { locationsData, servicesData } from '../data/translations';

export default function StandortDetailPage() {
  const { city } = useParams();
  const { lang } = useLanguage();

  const loc = locationsData.find((l) => l.slug.toLowerCase() === city?.toLowerCase());

  if (!loc) {
    return <Navigate to="/standorte" replace />;
  }

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <Link to="/standorte" style={{ color: 'var(--text-muted)' }}>STANDORTE</Link> / <span style={{ color: 'var(--accent-cyan)' }}>{loc.city.toUpperCase()}</span>
        </div>

        {/* Location Banner */}
        <div style={{
          backgroundColor: '#0a0d14',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          marginBottom: '3rem',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span className="tech-badge emerald" style={{ marginBottom: '0.75rem' }}>
                VOR-ORT REAKTIONSZEIT: UNTER {loc.slaMinutes} MINUTEN
              </span>
              <h1 style={{ fontSize: '2.4rem', margin: '0.5rem 0' }}>
                {loc.title[lang]}
              </h1>
              <div style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {loc.focusArea[lang]}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-sm)',
              minWidth: '260px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-faint)', fontSize: '0.78rem', marginBottom: '0.4rem' }}>
                <MapPin size={14} color="#00e5ff" />
                STANDORTBÜRO // THÜRINGEN
              </div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                {loc.address}
              </div>
              <a 
                href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`} 
                style={{ 
                  color: 'var(--accent-cyan)', 
                  fontWeight: 700, 
                  display: 'flex', 
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

          <p className="lead" style={{ color: '#cbd5e1', marginBottom: 0 }}>
            {loc.description[lang]}
          </p>
        </div>

        {/* Localized Highlights */}
        <div className="cyber-card" style={{ marginBottom: '3rem', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
            {lang === 'de' ? `Sicherheitsfokus für Unternehmen in ${loc.city}` : `Security Focus for ${loc.city}`}
          </h2>
          <div className="grid-3" style={{ gap: '1rem' }}>
            {loc.regionalHighlights.map((hl, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.6rem', padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{hl[lang]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Services Offered */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>
            {lang === 'de' ? `Verfügbare Leistungen am Standort ${loc.city}` : `Services Available in ${loc.city}`}
          </h2>
          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {servicesData.map((svc) => (
              <div key={svc.id} className="cyber-card" style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                  <Link to={svc.path} style={{ color: '#fff' }}>
                    {svc.title[lang]}
                  </Link>
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  {svc.shortDesc[lang]}
                </p>
                <Link to={svc.path} style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  {lang === 'de' ? 'Mehr erfahren' : 'Learn more'} &gt;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          textAlign: 'center',
          backgroundColor: '#090c14',
          padding: '2.5rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-strong)'
        }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            {lang === 'de' ? `Sicherheitsberatung in ${loc.city} vereinbaren` : `Schedule an Audit in ${loc.city}`}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {lang === 'de' ? 'Direkter Termin vor Ort an Ihrem Standort oder vertrauliche Remote-Erstberatung.' : 'Direct on-site scoping session at your facility or confidential remote consultation.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to={`/kontakt?location=${loc.city}`} className="btn btn-primary">
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
