import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, PhoneCall, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function EmergencyBanner() {
  const { t } = useLanguage();

  return (
    <aside aria-label="Emergency Hotline" style={{
      backgroundColor: '#0a0d14',
      borderBottom: '1px solid rgba(239, 68, 68, 0.3)',
      padding: '0.45rem 1rem',
      fontSize: '0.85rem',
      fontFamily: 'var(--font-mono)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="pulse-indicator crimson" />
          <span style={{
            color: '#ef4444',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}>
            {t('emergencyBanner.activeAlert')}
          </span>
          <span style={{ color: 'var(--text-muted)' }}>
            {t('emergencyBanner.text')}
          </span>
          <a 
            href="tel:+4936419283911"
            style={{
              color: '#fff',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(239, 68, 68, 0.4)'
            }}
          >
            <PhoneCall size={13} color="#ef4444" />
            {t('emergencyBanner.phone')}
          </a>
        </div>

        <Link
          to="/kontakt?type=emergency"
          style={{
            color: '#fca5a5',
            fontSize: '0.8rem',
            textDecoration: 'underline',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <ShieldAlert size={14} />
          {t('emergencyBanner.button')}
        </Link>
      </div>
    </aside>
  );
}
