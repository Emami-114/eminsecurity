import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Terminal, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Key, 
  CheckCircle2, 
  Lock, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, complianceData, locationsData } from '../data/translations';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer style={{
      backgroundColor: '#05070a',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative'
    }}>
      <div className="container">
        {/* Top Trust & Certifications Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingBottom: '3rem',
          marginBottom: '3rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.4rem'
            }}>
              <Shield size={22} color="#00e5ff" />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: '#fff'
              }}>
                EminSecurity
              </span>
              <span className="tech-badge cyan">
                THÜRINGEN OPERATIONAL
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '580px' }}>
              {t('footer.tagline')}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            <span className="tech-badge" style={{ backgroundColor: '#0d1117' }}>
              <CheckCircle2 size={13} color="#10b981" />
              BSI IT-Grundschutz Praktiker
            </span>
            <span className="tech-badge" style={{ backgroundColor: '#0d1117' }}>
              <CheckCircle2 size={13} color="#10b981" />
              ISO/IEC 27001 Lead Auditor
            </span>
            <span className="tech-badge" style={{ backgroundColor: '#0d1117' }}>
              <CheckCircle2 size={13} color="#10b981" />
              OSCP / OffSec Certified
            </span>
          </div>
        </div>

        {/* Multi-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '2rem',
          marginBottom: '3.5rem'
        }} className="footer-links-grid">
          {/* Col 1: Services */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
              letterSpacing: '0.04em'
            }}>
              {t('footer.servicesCol').toUpperCase()}
            </div>
            <ul style={{ listStyle: 'none' }}>
              {servicesData.map((svc) => (
                <li key={svc.id} style={{ marginBottom: '0.65rem' }}>
                  <Link 
                    to={svc.path} 
                    style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {svc.title[lang]}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '0.75rem' }}>
                <Link to="/leistungen" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  &gt; {lang === 'de' ? 'Alle Leistungen' : 'All Services'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Compliance */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
              letterSpacing: '0.04em'
            }}>
              {t('footer.complianceCol').toUpperCase()}
            </div>
            <ul style={{ listStyle: 'none' }}>
              {complianceData.map((item) => (
                <li key={item.id} style={{ marginBottom: '0.65rem' }}>
                  <Link 
                    to={item.path} 
                    style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {item.title[lang]}
                  </Link>
                </li>
              ))}
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/compliance" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  BSI IT-Grundschutz
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/compliance" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  TISAX & VDA-ISA
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/compliance" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Patientendaten-Schutzgesetz (PDSG)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Standorte */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
              letterSpacing: '0.04em'
            }}>
              {t('footer.locationsCol').toUpperCase()}
            </div>
            <ul style={{ listStyle: 'none' }}>
              {locationsData.map((loc) => (
                <li key={loc.slug} style={{ marginBottom: '0.65rem' }}>
                  <Link 
                    to={`/standorte/${loc.slug}`} 
                    style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <span>{loc.city}</span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-faint)' }}>
                      &lt; {loc.slaMinutes}m
                    </span>
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '0.75rem' }}>
                <Link to="/standorte" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  &gt; {lang === 'de' ? 'Übersicht Thüringen Hubs' : 'Thuringia Hub Overview'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Knowledge */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
              letterSpacing: '0.04em'
            }}>
              KNOWLEDGE & NEWS
            </div>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/magazin" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {lang === 'de' ? 'Magazin & News Feed' : 'Magazine & Threat Intel'}
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/magazin/stadt-berlin-hack-september-2026" style={{ fontSize: '0.9rem', color: '#fca5a5' }}>
                  Stadt Berlin Hack (09/2026)
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/wissen" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  EminSec Knowledge Hub
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/wissen" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Whitepaper & Checklisten
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Career */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
              letterSpacing: '0.04em'
            }}>
              {t('footer.companyCol').toUpperCase()}
            </div>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/ueber-uns" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {t('nav.about')}
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/karriere" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Karriere & Jobs</span>
                  <span style={{ fontSize: '0.65rem', backgroundColor: 'rgba(255,255,255,0.08)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                    Initiativ
                  </span>
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/kontakt" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {t('nav.contact')}
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/sitemap" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* PGP Encryption & Emergency Dispatch box */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Key size={15} color="#00e5ff" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: 600 }}>
                {t('footer.pgpLabel')}
              </span>
            </div>
            <code style={{
              fontSize: '0.78rem',
              color: 'var(--accent-cyan)',
              backgroundColor: '#06080c',
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(0, 229, 255, 0.2)'
            }}>
              4A7F 9B12 C884 10E3 E5F2 90D1 B842 7A1F 09E1 C4D2
            </code>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href="mailto:security@eminsecurity.de" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
              }}
            >
              <Mail size={14} />
              security@eminsecurity.de
            </a>
            <a 
              href="tel:+4936419283911" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: '#fca5a5',
                fontWeight: 600
              }}
            >
              <PhoneCall size={14} color="#ef4444" />
              +49 (0) 3641 9283-911
            </a>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-faint)',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.5rem'
        }}>
          <div>
            &copy; {new Date().getFullYear()} EminSecurity GmbH &amp; Co. KG. {t('footer.rights')}
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/impressum" style={{ color: 'var(--text-muted)' }}>
              Impressum (§ 5 DDG)
            </Link>
            <Link to="/datenschutz" style={{ color: 'var(--text-muted)' }}>
              Datenschutz (DSGVO)
            </Link>
            <Link to="/sitemap" style={{ color: 'var(--text-muted)' }}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-links-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
