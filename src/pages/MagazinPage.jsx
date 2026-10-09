import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Clock, ArrowRight, User, ShieldAlert, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { magazineArticles } from '../data/translations';

export default function MagazinPage() {
  const { lang } = useLanguage();

  return (
    <div className="section-spacing">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="pulse-indicator crimson" />
            <span className="tech-badge crimson">
              THREAT INTELLIGENCE &amp; ADVISORIES
            </span>
          </div>
          <h1>
            {lang === 'de'
              ? 'EminSecurity Magazin: Reale Cyber-Vorfälle & Forensik'
              : 'EminSecurity Magazine: Forensic Investigations & Threat Intel'}
          </h1>
          <p className="lead">
            {lang === 'de'
              ? 'Fundierte Lageberichte, technische Post-Mortem-Analysen und Sicherheits-Updates direkt aus den Einsätzen unseres Incident Response Teams in Thüringen und Mitteldeutschland.'
              : 'Authoritative post-mortem teardowns, zero-day threat advisories, and forensic takeaways straight from our active defense engineers.'}
          </p>
        </div>

        {/* Featured Article: Stadt Berlin Hack */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="cyber-card" style={{
            border: '1px solid rgba(239, 68, 68, 0.4)',
            backgroundColor: '#ffffff54',
            padding: '2.5rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="tech-badge crimson">
                  LEITARTIKEL // SEPTEMBER 2026
                </span>
                <span className="tech-badge">
                  KRITIS &amp; ÖFFENTLICHE VERWALTUNG
                </span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
                {magazineArticles[0].date}
              </span>
            </div>

            <h2 style={{ fontSize: '1.8rem', lineHeight: 1.25, marginBottom: '1rem' }}>
              <Link to={`/magazin/${magazineArticles[0].slug}`} style={{ color: 'var(--text-main)' }}>
                {magazineArticles[0].title[lang]}
              </Link>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {magazineArticles[0].summary[lang]}
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <User size={15} />
                  {magazineArticles[0].author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={15} />
                  {magazineArticles[0].readTime} Lesezeit
                </span>
              </div>

              <Link to={`/magazin/${magazineArticles[0].slug}`} className="btn btn-primary btn-sm">
                {lang === 'de' ? 'Komplette Forensik-Analyse lesen' : 'Read Full Forensic Breakdown'}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* All Articles Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {magazineArticles.slice(1).map((article) => (
            <article key={article.slug} className="cyber-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="tech-badge" style={{ fontSize: '0.75rem' }}>
                  {article.badge}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
                  {article.date}
                </span>
              </div>

              <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                <Link to={`/magazin/${article.slug}`} style={{ color: 'var(--text-main)' }}>
                  {article.title[lang]}
                </Link>
              </h2>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', flex: 1, marginBottom: '1.25rem', lineHeight: 1.5 }}>
                {article.summary[lang]}
              </p>

              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-faint)' }}>
                  {article.readTime}
                </span>
                <Link to={`/magazin/${article.slug}`} style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                  {lang === 'de' ? 'Artikel lesen' : 'Read Briefing'} &gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
