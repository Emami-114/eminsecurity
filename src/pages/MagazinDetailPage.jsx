import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, User, ArrowLeft, Shield, AlertTriangle, CheckCircle2, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { magazineArticles } from '../data/translations';

export default function MagazinDetailPage() {
  const { slug } = useParams();
  const { lang } = useLanguage();

  const article = magazineArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/magazin" replace />;
  }

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            to="/magazin" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.85rem', 
              color: 'var(--text-muted)' 
            }}
          >
            <ArrowLeft size={15} />
            {lang === 'de' ? 'Zurück zum Magazin & Lageberichten' : 'Back to Magazine & Reports'}
          </Link>
        </div>

        {/* Article Meta Header */}
        <header style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="tech-badge crimson">{article.badge}</span>
            <span className="tech-badge">{article.category}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {article.title[lang]}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={15} color="var(--accent-cyan)" />
              {article.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={15} color="var(--accent-cyan)" />
              {article.date} ({article.readTime})
            </span>
          </div>
        </header>

        {/* Executive Summary Box */}
        <div style={{
          backgroundColor: 'var(--accent-blue-light)',
          borderLeft: '4px solid var(--accent-blue)',
          padding: '1.25rem 1.5rem',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '2.5rem',
          fontSize: '1.05rem',
          color: '#1e3a8a',
          lineHeight: 1.6
        }}>
          <strong>Executive Summary:</strong> {article.summary[lang]}
        </div>

        {/* Main Article Content (Markdown style rendered) */}
        <article className="article-body" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
          {article.content[lang].split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('### ')) {
              return (
                <h2 key={index} style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem' }}>
                  {trimmed.replace('### ', '')}
                </h2>
              );
            }

            if (trimmed.startsWith('1. ') || trimmed.startsWith('- ')) {
              const lines = trimmed.split('\n');
              return (
                <ul key={index} style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                  {lines.map((li, lIndex) => {
                    const cleanLi = li.replace(/^[0-9]+\.\s+/, '').replace(/^-\s+/, '');
                    return (
                      <li key={lIndex} style={{ marginBottom: '0.5rem' }}>
                        {cleanLi}
                      </li>
                    );
                  })}
                </ul>
              );
            }

            return (
              <p key={index} style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                {trimmed}
              </p>
            );
          })}
        </article>

        {/* Author / Threat Intel Box */}
        <div style={{
          marginTop: '3.5rem',
          backgroundColor: 'var(--bg-subtle)',
          padding: '1.75rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Shield size={22} color="var(--accent-blue)" />
            <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-main)' }}>
              EminSecurity Threat Intelligence &amp; Forensik Cell
            </h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            {lang === 'de'
              ? 'Haben Sie Fragen zu den Indikatoren (IoCs) dieses Vorfalls oder befürchten Sie, dass Ihre eigene Infrastruktur über ähnliche Schnittstellen angreifbar ist? Unsere Spezialisten stehen für ein vertrauliches Lagegespräch bereit.'
              : 'Concerned that your infrastructure exhibits parallel vulnerabilities? Contact our senior defense cell for confidential threat verification.'}
          </p>
          <Link to="/kontakt" className="btn btn-primary btn-sm">
            {lang === 'de' ? 'Vertrauliches Lagegespräch anfragen' : 'Request Threat Consultation'}
          </Link>
        </div>
      </div>
    </div>
  );
}
