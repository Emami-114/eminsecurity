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
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, complianceData, locationsData } from '../data/translations';

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

  // Lock background scrolling on mobile when menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
      <div className="container header-container">
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none',
            flexShrink: 0
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
            padding: '4px',
            flexShrink: 0
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
              lineHeight: 1.1,
              whiteSpace: 'nowrap'
            }}>
              Emin<span style={{ color: 'var(--accent-blue)' }}>Sec</span>
            </div>
            <div className="header-logo-sub" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap'
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
              padding: '0.4rem 0.7rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              flexShrink: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-strong)'}
          >
            <Globe size={14} color="#0062ff" />
            <span>{t('nav.langSwitch')}</span>
          </button>

          {/* Primary Action Button (Desktop/Tablet only; on mobile it lives in the menu) */}
          <Link
            to="/contact"
            className="btn btn-primary btn-sm header-cta-btn"
            style={{ fontWeight: 600, flexShrink: 0 }}
          >
            {t('nav.requestCta')}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="mobile-drawer">
            {/* 24/7 Incident Hotline Banner */}
            <a
              href="tel:+4915233513651"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-indicator crimson" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ef4444' }}>
                  24/7 Incident Hotline:
                </span>
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                +49 152 33513651
              </span>
            </a>

            {/* Core Services Section */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--accent-blue)',
                letterSpacing: '0.04em',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>
                IT-Systemhaus &amp; Managed Services
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                {servicesData.map((svc) => (
                  <Link
                    key={svc.id}
                    to={svc.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.55rem 0.5rem',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--text-main)',
                      fontSize: '0.94rem',
                      fontWeight: 500
                    }}
                  >
                    <span style={{ display: 'inline-flex', flexShrink: 0 }}>
                      {serviceIcons[svc.id]}
                    </span>
                    <span>{svc.title[lang]}</span>
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--accent-blue)',
                    fontWeight: 600,
                    padding: '0.35rem 0.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  &gt; {lang === 'de' ? 'Vollständige Leistungsübersicht' : 'Full Services Matrix'}
                </Link>
              </div>
            </div>

            {/* Compliance Section */}
            <div style={{ marginBottom: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
              <div style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--accent-blue)',
                letterSpacing: '0.04em',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>
                Regulatorik &amp; Compliance
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <Link
                  to="/compliance/nis-2"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', color: 'var(--text-main)', fontSize: '0.92rem' }}
                >
                  NIS-2 Richtlinie &amp; Betroffenheit
                </Link>
                <Link
                  to="/compliance/iso-27001"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', color: 'var(--text-main)', fontSize: '0.92rem' }}
                >
                  ISMS ISO/IEC 27001 Lead Audit
                </Link>
                <Link
                  to="/compliance"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: '0.84rem', color: 'var(--accent-blue)', fontWeight: 600, padding: '0.35rem 0.5rem' }}
                >
                  &gt; {lang === 'de' ? 'BSI Grundschutz, TISAX & PDSG' : 'BSI, TISAX & Healthcare'}
                </Link>
              </div>
            </div>

            {/* Regional Standorte Thüringen */}
            <div style={{ marginBottom: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
              <div style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--accent-blue)',
                letterSpacing: '0.04em',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>
                Standorte Thüringen
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', padding: '0.25rem 0.5rem 0.5rem' }}>
                {locationsData.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="tech-badge"
                    style={{ fontSize: '0.78rem', textDecoration: 'none' }}
                  >
                    <MapPin size={11} color="var(--accent-blue)" />
                    {loc.city}
                  </Link>
                ))}
              </div>
            </div>

            {/* Magazin & Company Links */}
            <div style={{ marginBottom: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
              <div style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--accent-blue)',
                letterSpacing: '0.04em',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>
                Wissen &amp; Unternehmen
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <Link
                  to="/magazine"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', color: 'var(--text-main)', fontSize: '0.92rem' }}
                >
                  {t('nav.magazine')} (Threat Intelligence)
                </Link>
                <Link
                  to="/knowledge"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', color: 'var(--text-main)', fontSize: '0.92rem' }}
                >
                  Knowledge Hub (Whitepapers &amp; Checklisten)
                </Link>
                <Link
                  to="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', color: 'var(--text-main)', fontSize: '0.92rem' }}
                >
                  {t('nav.about')} (Philosophie &amp; Team)
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', color: 'var(--text-main)', fontSize: '0.92rem' }}
                >
                  Karriere &amp; Initiativbewerbung
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', color: 'var(--text-main)', fontSize: '0.92rem' }}
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>

            {/* Full-width CTA Button */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', textAlign: 'center', padding: '0.85rem' }}
              >
                {t('nav.requestCta')}
              </Link>
            </div>
          </div>
        </>
      )}

      <style>{`
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 74px;
        }

        .mobile-toggle-btn {
          display: none;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          cursor: pointer;
          padding: 0;
          box-shadow: var(--shadow-sm);
          flex-shrink: 0;
          transition: background var(--transition-fast);
        }

        .mobile-toggle-btn:hover {
          background-color: var(--bg-subtle);
          border-color: var(--accent-blue);
        }

        .mobile-backdrop {
          position: fixed;
          top: 74px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 98;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #ffffff;
          border-bottom: 2px solid var(--accent-blue);
          padding: 1.25rem 1.25rem 2rem;
          max-height: calc(100vh - 74px);
          overflow-y: auto;
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.25);
          z-index: 99;
          animation: slideDownHeader 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDownHeader {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
        }

        @media (max-width: 720px) {
          .header-cta-btn {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .header-container {
            height: 64px;
          }
          .mobile-backdrop {
            top: 64px;
          }
          .mobile-drawer {
            max-height: calc(100vh - 64px);
            padding: 1rem 1rem 1.75rem;
          }
        }

        @media (max-width: 440px) {
          .header-logo-sub {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
