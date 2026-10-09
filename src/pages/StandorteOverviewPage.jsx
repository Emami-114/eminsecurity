import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, PhoneCall, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { locationsData } from '../data/translations';

export default function StandorteOverviewPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
          <span className="tech-badge cyan" style={{ marginBottom: '0.75rem' }}>
            REGIONALES EINSATZNETZWERK // THÜRINGEN
          </span>
          <h1>
            {lang === 'de'
              ? 'Cyber Security vor Ort in Thüringen: Jena, Erfurt, Weimar, Gera & Hermsdorf'
              : 'On-Site Cyber Defense Across Thuringia: Jena, Erfurt, Weimar, Gera & Hermsdorf'}
          </h1>
          <p className="lead">
            {lang === 'de'
              ? 'Im Ernstfall eines Ransomware-Angriffs oder bei physischen Einbruchstests nützt kein Support-Callcenter am anderen Ende der Welt. Wir sind direkt vor Ort bei unseren Kunden in Thüringen verankert – mit persönlicher Vor-Ort-Präsenz und direkter Einsatzbereitschaft.'
              : 'During an active cyber disaster or on-site physical infiltration audit, remote ticketing centers fall short. We maintain direct physical proximity throughout Thuringia with guaranteed on-site response readiness.'}
          </p>
        </div>

        {/* 5 City Hubs Grid */}
        <div className="grid-3" style={{ gap: '2rem', marginBottom: '4rem' }}>
          {locationsData.map((loc) => (
            <div key={loc.slug} className="cyber-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={22} color="var(--accent-blue)" />
                  <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-main)' }}>
                    {loc.city}
                  </h2>
                </div>
                <span className="tech-badge emerald">
                  &lt; {loc.slaMinutes} Min SLA
                </span>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                {loc.focusArea[lang]}
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', flex: 1, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {loc.description[lang]}
              </p>

              <div style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1.25rem',
                fontSize: '0.82rem'
              }}>
                <div style={{ color: 'var(--text-faint)', marginBottom: '0.2rem' }}>STANDORT-KONTAKT:</div>
                <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>{loc.address}</div>
                <div style={{ color: 'var(--accent-cyan)' }}>{loc.phone}</div>
              </div>

              <Link to={`/locations/${loc.slug}`} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                {lang === 'de' ? `Sicherheitsleistungen ${loc.city}` : `View ${loc.city} Hub`}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Regional Commitment */}
        <div className="cyber-card" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            {lang === 'de' ? 'Warum Vor-Ort-Präsenz für IT-Sicherheit in Thüringen unverzichtbar ist' : 'Why Local Presence Matters'}
          </h2>
          <div className="grid-3" style={{ gap: '1.5rem', marginTop: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>1. Unmittelbare Forensik</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Flüchtige Spuren im RAM und auf infizierten Switches verflüchtigen sich bei Neustart. Unsere Experten sichern Beweise direkt am Rack.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>2. Physische Pentests</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Prüfung von Serverräumen, Ausweiskartenlesern und Werkstoren gegen Social-Engineering-Einbrüche vor Ort.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>3. Regionale Betreuung</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Feste Ansprechpartner, die Ihre Betriebsbedingungen und lokalen Anforderungen im Thüringer Mittelstand genau kennen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
