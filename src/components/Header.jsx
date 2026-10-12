import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Shield,
  ChevronDown,
  Globe,
  Menu,
  X,
  Terminal,
  Lock,
  Server,
  Users,
  Code2,
  FileCheck2,
  Flame,
  ArrowRight,
  Cloud,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, complianceData } from '../data/translations';

export default function Header() {
  const { lang, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setServicesOpen(false);
    setComplianceOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setServicesOpen(false);
        setComplianceOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceIcons = {
    'systemintegration': <Server size={17} color="#0062ff" />,
    'cloud-services': <Cloud size={17} color="#0284c7" />,
    'softwareentwicklung': <Code2 size={17} color="#8b5cf6" />,
    'voip-telefonie': <PhoneCall size={17} color="#f59e0b" />,
    'security-ueberwachung': <ShieldCheck size={17} color="#10b981" />
  };

  return (
    <header
      ref={navRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(241, 245, 249, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none'
          }}
        >
          <div style={{
            position: 'relative',
            width: '42px',
            height: '42px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 98, 255, 0.08)',
            padding: '4px'
          }}>
            <img
              src={`${import.meta.env.BASE_URL}logo-brand.png`}
              alt="EminSecurity Logo"
              style={{ width: '35px', height: '35px', objectFit: 'contain', display: 'block' }}
            />

          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.28rem',
              color: '#0f172a',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              Emin<span style={{ color: 'var(--accent-blue)' }}>Sec</span>
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em'
            }}>
              IT-Systemhaus & Security
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem'
          }}
          className="desktop-nav"
        >
          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setComplianceOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'none',
                border: 'none',
                color: servicesOpen ? 'var(--accent-blue)' : 'var(--text-main)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.94rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '0.5rem 0',
                transition: 'color var(--transition-fast)'
              }}
            >
              {t('nav.services')}
              <ChevronDown
                size={15}
                style={{
                  transform: servicesOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform var(--transition-fast)'
                }}
              />
            </button>

            {servicesOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 14px)',
                left: '-80px',
                width: '420px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 110
              }}>
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--text-faint)',
                  padding: '0.4rem 0.6rem 0.6rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.05em'
                }}>
                  IT-SYSTEMHAUS &amp; SECURITY // MANAGED SERVICES
                </div>
                {servicesData.map((svc) => (
                  <Link
                    key={svc.id}
                    to={svc.path}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'background var(--transition-fast)',
                      color: 'var(--text-main)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{ marginTop: '2px' }}>
                      {serviceIcons[svc.id]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#0f172a' }}>
                        {svc.title[lang]}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                        {svc.shortDesc[lang]}
                      </div>
                    </div>
                  </Link>
                ))}
                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.6rem',
                  marginTop: '0.4rem',
                  textAlign: 'center'
                }}>
                  <Link
                    to="/services"
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--accent-blue)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    {lang === 'de' ? 'Vollständige Leistungsübersicht' : 'Full Services Matrix'}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Compliance Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                setComplianceOpen(!complianceOpen);
                setServicesOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'none',
                border: 'none',
                color: complianceOpen ? 'var(--accent-blue)' : 'var(--text-main)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.94rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '0.5rem 0',
                transition: 'color var(--transition-fast)'
              }}
            >
              {t('nav.compliance')}
              <ChevronDown
                size={15}
                style={{
                  transform: complianceOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform var(--transition-fast)'
                }}
              />
            </button>

            {complianceOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 14px)',
                left: '-50px',
                width: '380px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 110
              }}>
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--text-faint)',
                  padding: '0.4rem 0.6rem 0.6rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.05em'
                }}>
                  REGULATORIK &amp; COMPLIANCE
                </div>
                {complianceData.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    style={{
                      display: 'block',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'background var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.2rem'
                    }}>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#0f172a' }}>
                        {item.title[lang]}
                      </div>
                      <span className="tech-badge blue" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                        {item.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {item.lead[lang]}
                    </div>
                  </Link>
                ))}
                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.6rem',
                  marginTop: '0.4rem',
                  textAlign: 'center'
                }}>
                  <Link
                    to="/compliance"
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--accent-blue)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    {lang === 'de' ? 'Alle Standards (BSI, ISO, TISAX, PDSG)' : 'All Frameworks (BSI, ISO, TISAX)'}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Magazine & News */}
          <NavLink
            to="/magazine"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: isActive ? 'var(--accent-blue)' : 'var(--text-main)',
              fontSize: '0.94rem',
              fontWeight: 600,
              padding: '0.5rem 0',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)'
            })}
          >
            {t('nav.magazine')}
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: isActive ? 'var(--accent-blue)' : 'var(--text-main)',
              fontSize: '0.94rem',
              fontWeight: 600,
              padding: '0.5rem 0',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)'
            })}
          >
            {t('nav.contact')}
          </NavLink>
        </nav>

        {/* Right CTA & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch umschalten'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#f8fafc',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-pill)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 600,
              padding: '0.45rem 0.75rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-strong)'}
          >
            <Globe size={14} color="#0062ff" />
            <span>{t('nav.langSwitch')}</span>
          </button>

          {/* Primary Action Button */}
          <Link
            to="/contact"
            className="btn btn-primary btn-sm"
            style={{ fontWeight: 600 }}
          >
            {t('nav.requestCta')}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer',
              display: 'none',
              padding: '0.4rem'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-strong)',
          padding: '1.25rem',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              IT-SYSTEMHAUS &amp; SERVICES
            </div>
            {servicesData.map((svc) => (
              <Link
                key={svc.id}
                to={svc.path}
                style={{
                  display: 'block',
                  padding: '0.5rem 0',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem'
                }}
              >
                {svc.title[lang]}
              </Link>
            ))}
          </div>

          <div style={{ marginBottom: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              COMPLIANCE
            </div>
            <Link to="/compliance/nis-2" style={{ display: 'block', padding: '0.45rem 0', color: 'var(--text-main)' }}>
              NIS-2 Richtlinie
            </Link>
            <Link to="/compliance/iso-27001" style={{ display: 'block', padding: '0.45rem 0', color: 'var(--text-main)' }}>
              ISMS ISO 27001
            </Link>
          </div>

          <div style={{ marginBottom: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              MAGAZIN &amp; KONTAKT
            </div>
            <Link to="/magazine" style={{ display: 'block', padding: '0.45rem 0', color: 'var(--text-main)' }}>
              {t('nav.magazine')} (Threat Intelligence)
            </Link>
            <Link to="/contact" style={{ display: 'block', padding: '0.45rem 0', color: 'var(--text-main)' }}>
              {t('nav.contact')} (Anfrage &amp; Notfall)
            </Link>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              {t('nav.requestCta')}
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
