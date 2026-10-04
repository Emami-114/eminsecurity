import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Key, 
  CheckCircle2, 
  Lock, 
  FileText
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, complianceData, locationsData } from '../data/translations';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer style={{
      backgroundColor: '#0b1120',
      color: '#f8fafc',
      borderTop: '1px solid #1e293b',
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
          paddingBottom: '2.5rem',
          marginBottom: '3rem',
          borderBottom: '1px solid #1e293b'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.4rem'
            }}>
              <Shield size={22} color="#38bdf8" />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#fff'
              }}>
                Emin<span style={{ color: '#38bdf8' }}>Security</span>
              </span>
              <span className="tech-badge" style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
                MADE IN THÜRINGEN
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8', maxWidth: '580px' }}>
              {t('footer.tagline')}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <span className="tech-badge" style={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#e2e8f0' }}>
              <CheckCircle2 size={13} color="#10b981" />
              BSI IT-Grundschutz
            </span>
            <span className="tech-badge" style={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#e2e8f0' }}>
              <CheckCircle2 size={13} color="#10b981" />
              ISO/IEC 27001 Lead Auditor
            </span>
            <span className="tech-badge" style={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#e2e8f0' }}>
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
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#38bdf8',
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
                    style={{ fontSize: '0.9rem', color: '#94a3b8' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    {svc.title[lang]}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '0.75rem' }}>
                <Link to="/leistungen" style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 600 }}>
                  &gt; {lang === 'de' ? 'Alle Leistungen' : 'All Services'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Compliance */}
          <div>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#38bdf8',
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
                    style={{ fontSize: '0.9rem', color: '#94a3b8' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    {item.title[lang]}
                  </Link>
                </li>
              ))}
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/compliance" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  BSI IT-Grundschutz
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/compliance" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  TISAX &amp; VDA-ISA
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/compliance" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  Patientendaten-Schutzgesetz (PDSG)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Standorte */}
          <div>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#38bdf8',
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
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    <span>{loc.city}</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      &lt; {loc.slaMinutes}m
                    </span>
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '0.75rem' }}>
                <Link to="/standorte" style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 600 }}>
                  &gt; {lang === 'de' ? 'Übersicht Thüringen Hubs' : 'Thuringia Hub Overview'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Knowledge */}
          <div>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#38bdf8',
              marginBottom: '1rem',
              letterSpacing: '0.04em'
            }}>
              KNOWLEDGE &amp; NEWS
            </div>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/magazin" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  {lang === 'de' ? 'Magazin & News Feed' : 'Magazine & Threat Intel'}
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/magazin/stadt-berlin-hack-september-2026" style={{ fontSize: '0.9rem', color: '#fca5a5' }}>
                  Stadt Berlin Hack (09/2026)
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/wissen" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  EminSec Knowledge Hub
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/wissen" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  Whitepaper &amp; Checklisten
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Career */}
          <div>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#38bdf8',
              marginBottom: '1rem',
              letterSpacing: '0.04em'
            }}>
              {t('footer.companyCol').toUpperCase()}
            </div>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/ueber-uns" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  {t('nav.about')}
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/karriere" style={{ fontSize: '0.9rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Karriere &amp; Jobs</span>
                  <span style={{ fontSize: '0.65rem', backgroundColor: '#1e293b', color: '#94a3b8', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                    Initiativ
                  </span>
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/kontakt" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  {t('nav.contact')}
                </Link>
              </li>
              <li style={{ marginBottom: '0.65rem' }}>
                <Link to="/sitemap" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* PGP Encryption & Dispatch box */}
        <div style={{
          backgroundColor: '#111827',
          border: '1px solid #1f2937',
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
              <Key size={15} color="#38bdf8" />
              <span style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>
                {t('footer.pgpLabel')}
              </span>
            </div>
            <code style={{
              fontSize: '0.78rem',
              color: '#38bdf8',
              backgroundColor: '#030712',
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid #1f2937'
            }}>
              4A7F 9B12 C884 10E3 E5F2 90D1 B842 7A1F 09E1 C4D2
            </code>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a 
              href="mailto:security@eminsecurity.de" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: '#cbd5e1'
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
          color: '#64748b',
          borderTop: '1px solid #1e293b',
          paddingTop: '1.5rem'
        }}>
          <div>
            &copy; {new Date().getFullYear()} EminSecurity GmbH &amp; Co. KG. {t('footer.rights')}
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/impressum" style={{ color: '#94a3b8' }}>
              Impressum (§ 5 DDG)
            </Link>
            <Link to="/datenschutz" style={{ color: '#94a3b8' }}>
              Datenschutz (DSGVO)
            </Link>
            <Link to="/sitemap" style={{ color: '#94a3b8' }}>
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
