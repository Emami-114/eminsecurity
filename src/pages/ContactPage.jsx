import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Mail, PhoneCall, MapPin, Key, Send, AlertTriangle, CheckCircle2, ShieldAlert, Clock, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { locationsData } from '../data/translations';

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();

  const isEmergency = searchParams.get('type') === 'emergency';
  const prefillSubject = searchParams.get('subject') || '';
  const prefillLocation = searchParams.get('location') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: isEmergency ? 'incident' : 'pentest',
    location: prefillLocation || 'Jena',
    urgency: isEmergency ? 'critical' : 'normal',
    message: prefillSubject ? `Anfrage bzgl. ${prefillSubject}` : '',
    encrypted: false
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isEmergency) {
      setFormData((prev) => ({
        ...prev,
        serviceType: 'incident',
        urgency: 'critical',
        message: prev.message || 'AKUTER VORFALL: Bitte um sofortige Kontaktaufnahme zur Vorfallseindämmung.'
      }));
    }
  }, [isEmergency]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1080px' }}>
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
          <span className="tech-badge cyan" style={{ marginBottom: '0.75rem' }}>
            DIREKTE VERBINDUNG // ENCRYPTED COMMUNICATIONS
          </span>
          <h1>
            {isEmergency 
              ? (lang === 'de' ? '24/7 Notfall-Einsatzleitung Thüringen' : '24/7 Emergency Incident Dispatch')
              : (lang === 'de' ? 'Sicherheitsberatung & Audit-Anfrage' : 'Security Consultation & Audit Inquiry')}
          </h1>
          <p className="lead">
            {lang === 'de'
              ? 'Sprechen Sie direkt mit zertifizierten Sicherheitsingenieuren (kein Callcenter, keine Verkäufer). Wir behandeln alle Anfragen unter strikter Verschwiegenheit.'
              : 'Direct communication with certified senior security engineers under strict confidentiality.'}
          </p>
        </div>

        {/* Emergency Alert Ribbon if emergency */}
        {isEmergency && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            border: '2px solid #ef4444',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ color: '#ef4444', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <AlertTriangle size={20} />
                SOFORT-MASSNAHME BEI LAUFENDEM RANSOMWARE-BEFALL
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#fca5a5' }}>
                1. Netzwerkkabel ziehen / WLAN abschalten. 2. Systeme NICHT neustarten (RAM-Inhalte bewahren). 3. Hotline wählen:
              </p>
            </div>
            <a href="tel:+4936419283911" className="btn btn-danger" style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}>
              <PhoneCall size={18} />
              +49 (0) 3641 9283-911
            </a>
          </div>
        )}

        <div className="grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
          {/* Left: Contact Form */}
          <div className="cyber-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#fff' }}>
                  {lang === 'de' ? 'Anfrage erfolgreich übermittelt' : 'Inquiry Dispatched Successfully'}
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  {formData.urgency === 'critical'
                    ? (lang === 'de' ? 'Ihr Notfallticket wurde mit höchster Priorität eingestuft. Ein Incident Responder ruft Sie innerhalb von 15 Minuten zurück.' : 'Critical priority assigned. An incident responder will call you within 15 minutes.')
                    : (lang === 'de' ? 'Vielen Dank. Ein Sicherheitsberater setzt sich innerhalb von 4 Arbeitsstunden mit Ihnen in Verbindung.' : 'Thank you. A security specialist will contact you within 4 business hours.')}
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-sm">
                  {lang === 'de' ? 'Weitere Nachricht senden' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: '#fff' }}>
                  {lang === 'de' ? 'Sicherheitsanfrage konfigurieren' : 'Configure Security Inquiry'}
                </h2>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">{lang === 'de' ? 'Ihr Name *' : 'Your Name *'}</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="z. B. Dr. Michael Weber"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{lang === 'de' ? 'Unternehmen / Einrichtung *' : 'Company / Facility *'}</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="z. B. Praxisgemeinschaft / Fertiger"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">{lang === 'de' ? 'Geschäftliche E-Mail *' : 'Business Email *'}</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="m.weber@unternehmen.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{lang === 'de' ? 'Telefonnummer für Rückruf *' : 'Phone for Callback *'}</label>
                    <input 
                      type="tel" 
                      required 
                      className="form-input" 
                      placeholder="+49 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">{lang === 'de' ? 'Gewünschte Leistung' : 'Required Capability'}</label>
                    <select 
                      className="form-select"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    >
                      <option value="incident">{lang === 'de' ? 'Notfall Incident Response / Forensik' : 'Emergency Incident Response'}</option>
                      <option value="pentest">{lang === 'de' ? 'Penetration Testing & Schwachstellenanalyse' : 'Penetration Testing & Audits'}</option>
                      <option value="soc">{lang === 'de' ? '24/7 SOC & Blue Teaming' : '24/7 SOC & Blue Teaming'}</option>
                      <option value="nis2">{lang === 'de' ? 'NIS-2 / ISO 27001 Compliance' : 'NIS-2 / ISO 27001 Compliance'}</option>
                      <option value="it-admin">{lang === 'de' ? 'IT-Administration & Härtung' : 'IT Administration & Hardening'}</option>
                      <option value="awareness">{lang === 'de' ? 'Awareness & Phishing-Schulung' : 'Awareness & Phishing Training'}</option>
                      <option value="software">{lang === 'de' ? 'Software Security & Code Audit' : 'Software Security & Code Audit'}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">{lang === 'de' ? 'Standort / Region' : 'Location / Regional Hub'}</label>
                    <select 
                      className="form-select"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    >
                      {locationsData.map((l) => (
                        <option key={l.slug} value={l.city}>{l.city} ({lang === 'de' ? `SLA < ${l.slaMinutes}m` : `< ${l.slaMinutes}m SLA`})</option>
                      ))}
                      <option value="Sonstige">{lang === 'de' ? 'Anderer Ort in Thüringen / Mitteldeutschland' : 'Other Regional Hub'}</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{lang === 'de' ? 'Ihre Nachricht / Kurzbeschreibung des Anliegens' : 'Message / Brief Description'}</label>
                  <textarea 
                    rows={4}
                    required
                    className="form-textarea"
                    placeholder={lang === 'de' ? 'Beschreiben Sie Ihre Systeme, den Umfang oder die Art des Vorfalls...' : 'Describe your environment, scope, or incident...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <input 
                    type="checkbox" 
                    id="pgp-check" 
                    checked={formData.encrypted} 
                    onChange={(e) => setFormData({ ...formData, encrypted: e.target.checked })} 
                  />
                  <label htmlFor="pgp-check" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    {lang === 'de' ? 'Antwort per verschlüsseltem PGP-Kanal anfordern' : 'Request reply via PGP-encrypted channel'}
                  </label>
                </div>

                <button 
                  type="submit" 
                  className={`btn ${formData.serviceType === 'incident' ? 'btn-danger' : 'btn-primary'}`} 
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <Send size={16} />
                  {formData.serviceType === 'incident'
                    ? (lang === 'de' ? 'Notfall-Meldung absenden (Priorität HOCH)' : 'Dispatch Emergency Alert')
                    : (lang === 'de' ? 'Vertrauliche Sicherheitsanfrage senden' : 'Send Confidential Inquiry')}
                </button>
              </form>
            )}
          </div>

          {/* Right: Regional Office Contacts & Security Specs */}
          <div>
            <div className="cyber-card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>
                {lang === 'de' ? 'Zentrale Erreichbarkeit Thüringen' : 'Central Dispatch Contacts'}
              </h3>
              
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>24/7 INCIDENT HOTLINE</div>
                <a href="tel:+4936419283911" style={{ fontSize: '1.15rem', color: '#fca5a5', fontWeight: 700 }}>
                  +49 (0) 3641 9283-911
                </a>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>SICHERE E-MAIL (ZENTRALE)</div>
                <a href="mailto:security@eminsecurity.de" style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)' }}>
                  security@eminsecurity.de
                </a>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>HAUPTSITZ JENA</div>
                <div style={{ color: '#fff', fontSize: '0.9rem' }}>
                  Carl-Zeiss-Promenade 10<br />07745 Jena, Thüringen
                </div>
              </div>

              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '0.3rem' }}>
                  <Lock size={14} />
                  Vertraulichkeitsgarantie (NDA)
                </div>
                Alle Beratungen erfolgen unter Verpflichtung zum Berufsgeheimnis (§ 203 StGB) und strenger Vertraulichkeit.
              </div>
            </div>

            {/* PGP Box */}
            <div className="cyber-card" style={{ backgroundColor: '#07090f' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Key size={16} color="var(--accent-cyan)" />
                <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#fff' }}>PGP Public Key Fingerprint</h4>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Für extrem sensible Vorfälle oder Whistleblower-Meldungen:
              </p>
              <code style={{
                display: 'block',
                fontSize: '0.75rem',
                color: 'var(--accent-cyan)',
                backgroundColor: '#040609',
                padding: '0.6rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                wordBreak: 'break-all'
              }}>
                4A7F 9B12 C884 10E3 E5F2 90D1 B842 7A1F 09E1 C4D2
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
