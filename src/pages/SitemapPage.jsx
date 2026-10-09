import React from 'react';
import { Link } from 'react-router-dom';
import { Network, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, complianceData, locationsData, magazineArticles } from '../data/translations';

export default function SitemapPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '980px' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>HOME</Link> / <span style={{ color: 'var(--accent-cyan)' }}>SITEMAP</span>
        </div>

        <span className="tech-badge cyan" style={{ marginBottom: '1rem' }}>
          STRUCTURED ARCHITECTURE // SEO &amp; CRAWLER SITEMAP
        </span>
        <h1>HTML Sitemap &amp; Seitenverzeichnis</h1>
        <p className="lead" style={{ marginBottom: '3rem' }}>
          {lang === 'de'
            ? 'Vollständige Übersicht aller Unterseiten, Leistungsbeschreibungen, regulatorischen Themen und regionalen Hubs von EminSecurity.'
            : 'Comprehensive index of all subpages, capabilities, compliance guides, and regional hubs.'}
        </p>

        <div className="grid-2" style={{ gap: '2rem' }}>
          {/* Main & Company */}
          <div className="cyber-card">
            <h2 style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
              Hauptseiten &amp; Unternehmen
            </h2>
            <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
              <li><Link to="/">Startseite (EminSecurity Home)</Link></li>
              <li><Link to="/ueber-uns">Über uns (Philosophie &amp; Team)</Link></li>
              <li><Link to="/karriere">Karriere &amp; Jobs (Initiativbewerbung)</Link></li>
              <li><Link to="/kontakt">Kontakt &amp; 24/7 Notfall-Hotline</Link></li>
              <li><Link to="/wissen">EminSec Knowledge Hub (Whitepaper &amp; Guides)</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="cyber-card">
            <h2 style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
              Sicherheitsleistungen (Services)
            </h2>
            <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
              <li><Link to="/services"><strong>Alle Leistungen Übersicht</strong></Link></li>
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link to={svc.path}>{svc.title[lang]}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div className="cyber-card">
            <h2 style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
              Compliance &amp; Regulierung
            </h2>
            <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
              <li><Link to="/compliance"><strong>Compliance Übersicht &amp; Frameworks</strong></Link></li>
              {complianceData.map((c) => (
                <li key={c.id}>
                  <Link to={c.path}>{c.title[lang]}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standorte */}
          <div className="cyber-card">
            <h2 style={{ fontSize: '1.25rem', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
              Regionale Standorte Thüringen
            </h2>
            <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
              <li><Link to="/locations"><strong>Übersicht Thüringen Hubs</strong></Link></li>
              {locationsData.map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/locations/${loc.slug}`}>
                    Standort {loc.city} (SLA &lt; {loc.slaMinutes}m)
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Magazin */}
          <div className="cyber-card">
            <h2 style={{ fontSize: '1.25rem', color: '#ef4444', marginBottom: '1rem' }}>
              Threat Intelligence &amp; Magazin
            </h2>
            <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
              <li><Link to="/magazine"><strong>Magazin Übersicht</strong></Link></li>
              {magazineArticles.map((art) => (
                <li key={art.slug}>
                  <Link to={`/magazine/${art.slug}`}>{art.title[lang]}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="cyber-card">
            <h2 style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Rechtliche Hinweise
            </h2>
            <ul style={{ listStyle: 'none', lineHeight: 1.8 }}>
              <li><Link to="/impressum">Impressum (§ 5 DDG)</Link></li>
              <li><Link to="/datenschutz">Datenschutzerklärung (DSGVO)</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
