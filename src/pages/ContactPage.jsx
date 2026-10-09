import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  Send, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Lock, 
  ShieldCheck, 
  Building2, 
  User, 
  LoaderCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { locationsData } from '../data/translations';

export default function ContactPage() {
  const { lang } = useLanguage();
  const [searchParams] = useSearchParams();

  const isEmergencyParam = searchParams.get('type') === 'emergency';
  const prefillSubject = searchParams.get('subject') || '';
  const prefillLocation = searchParams.get('location') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: isEmergencyParam ? 'incident' : 'pentest',
    location: prefillLocation || 'Jena',
    urgency: isEmergencyParam ? 'critical' : 'normal',
    message: prefillSubject ? `Anfrage bzgl. ${prefillSubject}` : '',
    consent: true
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isEmergencyParam) {
      setFormData((prev) => ({
        ...prev,
        serviceType: 'incident',
        urgency: 'critical',
        message: prev.message || (lang === 'de' 
          ? 'AKUTER VORFALL: Bitte um sofortige Kontaktaufnahme zur Vorfallseindämmung.' 
          : 'CRITICAL INCIDENT: Immediate contact requested for containment.')
      }));
    }
  }, [isEmergencyParam, lang]);

  const handleUrgencyChange = (newUrgency) => {
    setFormData((prev) => ({
      ...prev,
      urgency: newUrgency,
      serviceType: newUrgency === 'critical' && prev.serviceType === 'pentest' ? 'incident' : prev.serviceType
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const subjectText = formData.urgency === 'critical' || formData.serviceType === 'incident'
        ? `[NOTFALL] EminSecurity Meldung: ${formData.name} (${formData.company})`
        : `[ANFRAGE] EminSecurity Kontakt: ${formData.serviceType} von ${formData.name} (${formData.company})`;

      const response = await fetch('https://formspree.io/f/mpqvdbnd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          location: formData.location,
          urgency: formData.urgency,
          message: formData.message,
          _subject: subjectText
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map(err => err.message).join(', '));
        } else {
          setErrorMessage(
            lang === 'de'
              ? 'Übertragungsfehler beim Senden des Formulars. Bitte rufen Sie uns direkt an.'
              : 'Transmission error while sending the form. Please call our hotline directly.'
          );
        }
        setStatus('error');
      }
    } catch (err) {
      console.error('Formspree submit error:', err);
      setErrorMessage(
        lang === 'de'
          ? 'Verbindung zum Server fehlgeschlagen. Bitte nutzen Sie unsere Notfall-Hotline oder E-Mail.'
          : 'Server connection failed. Please call our hotline or reach us via email.'
      );
      setStatus('error');
    }
  };

  const isEmergency = formData.urgency === 'critical' || formData.serviceType === 'incident';

  return (
    <div className="section-spacing">
      <div className="container" style={{ maxWidth: '1120px' }}>
        
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <span className="tech-badge cyan" style={{ marginBottom: '0.75rem' }}>
            DIREKTE VERBINDUNG // ENCRYPTED COMMUNICATIONS
          </span>
          <h1>
            {isEmergency 
              ? (lang === 'de' ? '24/7 Notfall-Einsatzleitung Thüringen' : '24/7 Emergency Incident Dispatch')
              : (lang === 'de' ? 'Sicherheitsberatung & Vorfallmeldung' : 'Security Consultation & Incident Response')}
          </h1>
          <p className="lead">
            {lang === 'de'
              ? 'Sprechen Sie direkt mit zertifizierten Sicherheitsingenieuren (kein Callcenter, keine Verkäufer). Wir behandeln alle Anfragen unter strikter Verschwiegenheit.'
              : 'Direct communication with certified senior security engineers under strict confidentiality.'}
          </p>
        </div>

        {/* Emergency Alert Ribbon if acute incident */}
        {isEmergency && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '2px solid #ef4444',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ color: '#ef4444', fontWeight: 700, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <AlertTriangle size={20} />
                {lang === 'de' ? 'SOFORT-MASSNAHMEN BEI LAUFENDEM CYBER-ANGRIFF' : 'IMMEDIATE ACTIONS DURING ACTIVE CYBER ATTACK'}
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                {lang === 'de' 
                  ? '1. Netzwerkkabel ziehen / WLAN deaktivieren. 2. Systeme NICHT ausschalten oder neustarten (RAM-Beweise sichern). 3. Hotline kontaktieren:'
                  : '1. Disconnect Ethernet / disable Wi-Fi. 2. DO NOT reboot or power off systems (preserve RAM). 3. Call hotline:'}
              </p>
            </div>
            <a 
              href="tel:+4915233513651" 
              className="btn btn-danger" 
              style={{ fontSize: '1.05rem', padding: '0.75rem 1.35rem' }}
            >
              <PhoneCall size={18} />
              +49 152 33513651
            </a>
          </div>
        )}

        {/* TOP ROW: Quick Contact Cards (Die ehemalige rechte Spalte, jetzt übersichtlich oben platziert) */}
        <div className="grid-4" style={{ marginBottom: '3rem' }}>
          
          {/* Card 1: 24/7 Hotline */}
          <div className="cyber-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: 'var(--radius-sm)', 
                  backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-crimson)'
                }}>
                  <PhoneCall size={20} />
                </div>
                <span className="tech-badge crimson">RÜCKRUF &lt; 15M</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                24/7 INCIDENT HOTLINE
              </div>
              <a 
                href="tel:+4915233513651" 
                style={{ fontSize: '1.12rem', color: 'var(--accent-crimson)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}
              >
                +49 152 33513651
              </a>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem' }}>
              {lang === 'de' ? 'Rund um die Uhr besetzte Notfall-Einsatzleitung' : '24/7/365 active emergency dispatch'}
            </div>
          </div>

          {/* Card 2: Sichere E-Mail */}
          <div className="cyber-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: 'var(--radius-sm)', 
                  backgroundColor: 'rgba(0, 98, 255, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-blue)'
                }}>
                  <Mail size={20} />
                </div>
                <span className="tech-badge cyan">ENCRYPTED</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                SICHERE E-MAIL
              </div>
              <a 
                href="mailto:kontakt@eminsec.de" 
                style={{ fontSize: '1.02rem', color: 'var(--accent-blue)', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}
              >
                kontakt@eminsec.de
              </a>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem' }}>
              {lang === 'de' ? 'PGP / S-MIME Verschlüsselung auf Anfrage' : 'PGP / S-MIME encryption supported'}
            </div>
          </div>

          {/* Card 3: Hauptsitz Jena */}
          <div className="cyber-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: 'var(--radius-sm)', 
                  backgroundColor: 'rgba(2, 132, 199, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}>
                  <MapPin size={20} />
                </div>
                <span className="tech-badge blue">VOR ORT</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                HAUPTSITZ THÜRINGEN
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.35rem', lineHeight: 1.35 }}>
                Carl-Zeiss-Promenade 10<br />07745 Jena
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem' }}>
              {lang === 'de' ? 'SLA < 30–90 Min in ganz Thüringen' : 'On-site SLA < 30–90m across Thuringia'}
            </div>
          </div>

          {/* Card 4: NDA & Vertraulichkeit */}
          <div className="cyber-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: 'var(--radius-sm)', 
                  backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-emerald)'
                }}>
                  <Lock size={20} />
                </div>
                <span className="tech-badge emerald">§ 203 StGB</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                VERTRAULICHKEIT
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '0.35rem' }}>
                {lang === 'de' ? 'NDA & Berufsgeheimnis' : 'Strict NDA & Privacy'}
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem' }}>
              {lang === 'de' ? 'Verpflichtet zur Verschwiegenheit' : 'Under strict non-disclosure obligations'}
            </div>
          </div>

        </div>

        {/* MAIN SECTION: Full-Width Contact Form */}
        <div style={{ maxWidth: '940px', margin: '0 auto' }}>
          <div className="cyber-card" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}>
            
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--accent-emerald)'
                }}>
                  <CheckCircle2 size={44} />
                </div>

                <span className="tech-badge emerald" style={{ marginBottom: '0.85rem' }}>
                  {lang === 'de' ? 'ÜBERTRAGUNG ERFOLGREICH BESTÄTIGT' : 'TRANSMISSION CONFIRMED'}
                </span>
                
                <h2 style={{ fontSize: '1.65rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  {lang === 'de' ? 'Vielen Dank für Ihre Anfrage' : 'Thank You for Your Inquiry'}
                </h2>
                
                <p style={{ maxWidth: '620px', margin: '0 auto 2rem', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  {formData.urgency === 'critical'
                    ? (lang === 'de' 
                        ? 'Ihr Notfallticket wurde mit höchster Priorität (P1) im Incident-Dispatch eingesteuert. Ein Senior Incident Responder ruft Sie schnellstmöglich unter Ihrer angegebenen Telefonnummer an.' 
                        : 'Your incident dispatch ticket has been assigned highest priority (P1). A senior responder will call you immediately.')
                    : (lang === 'de' 
                        ? 'Ihre Daten wurden verschlüsselt an unser Engineering-Team übermittelt. Ein zertifizierter Sicherheitsberater prüft Ihr Anliegen und meldet sich innerhalb von 4 Arbeitsstunden bei Ihnen.' 
                        : 'Your inquiry has been securely transmitted. A certified engineer will analyze your request and follow up within 4 business hours.')}
                </p>

                {/* Submitted overview card */}
                <div style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem 1.5rem',
                  maxWidth: '520px',
                  margin: '0 auto 2rem',
                  textAlign: 'left',
                  fontSize: '0.9rem'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '0.5rem', color: 'var(--text-muted)' }}>
                    <div>{lang === 'de' ? 'Kontaktperson:' : 'Contact:'}</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{formData.name} ({formData.company})</div>
                    <div>{lang === 'de' ? 'Rückrufnummer:' : 'Callback:'}</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{formData.phone}</div>
                    <div>{lang === 'de' ? 'Bereich:' : 'Service:'}</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{formData.serviceType} / {formData.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        serviceType: 'pentest',
                        location: 'Jena',
                        urgency: 'normal',
                        message: '',
                        consent: true
                      });
                    }} 
                    className="btn btn-secondary"
                  >
                    {lang === 'de' ? 'Weitere Nachricht senden' : 'Send Another Message'}
                  </button>
                  <a href="tel:+4915233513651" className="btn btn-danger">
                    <PhoneCall size={16} />
                    {lang === 'de' ? 'Hotline anrufen' : 'Call Hotline'}
                  </a>
                </div>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/mpqvdbnd" 
                method="POST" 
                onSubmit={handleSubmit}
              >
                {/* Form Heading & Mode Selector */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  flexWrap: 'wrap', 
                  gap: '1.25rem',
                  marginBottom: '2rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '1.5rem'
                }}>
                  <div>
                    <h2 style={{ fontSize: '1.45rem', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      {lang === 'de' ? 'Sicherheitsanfrage konfigurieren' : 'Configure Security Inquiry'}
                    </h2>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                      {lang === 'de'
                        ? 'Wählen Sie die Priorität und füllen Sie die Kontaktdaten aus. Schnelle, diskrete Rückmeldung garantiert.'
                        : 'Select urgency level and provide details. Direct, confidential follow-up guaranteed.'}
                    </p>
                  </div>

                  {/* Urgency selector pills */}
                  <div style={{ 
                    display: 'inline-flex', 
                    padding: '4px', 
                    backgroundColor: 'var(--bg-subtle)', 
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <button
                      type="button"
                      onClick={() => handleUrgencyChange('normal')}
                      style={{
                        padding: '0.45rem 1rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        backgroundColor: formData.urgency === 'normal' ? 'var(--accent-blue)' : 'transparent',
                        color: formData.urgency === 'normal' ? '#ffffff' : 'var(--text-muted)'
                      }}
                    >
                      🛡️ {lang === 'de' ? 'Reguläre Beratung' : 'Standard Inquiry'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUrgencyChange('critical')}
                      style={{
                        padding: '0.45rem 1rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        backgroundColor: formData.urgency === 'critical' ? 'var(--accent-crimson)' : 'transparent',
                        color: formData.urgency === 'critical' ? '#ffffff' : 'var(--text-muted)'
                      }}
                    >
                      🚨 {lang === 'de' ? 'Akuter Notfall' : 'Acute Incident'}
                    </button>
                  </div>
                </div>

                {/* Grid Row 1: Name & Company */}
                <div className="grid-2" style={{ gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      {lang === 'de' ? 'Ihr Name / Ansprechpartner *' : 'Your Name / Contact Person *'}
                    </label>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder={lang === 'de' ? 'z. B. Dr. Michael Weber' : 'e.g., Dr. Michael Weber'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">
                      {lang === 'de' ? 'Unternehmen / Einrichtung / Praxis *' : 'Company / Organization *'}
                    </label>
                    <input 
                      id="contact-company"
                      name="company"
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder={lang === 'de' ? 'z. B. Praxisgemeinschaft / Fertiger Jena' : 'e.g., Healthcare Practice / Tech Org'}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                {/* Grid Row 2: Email & Phone */}
                <div className="grid-2" style={{ gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      {lang === 'de' ? 'Geschäftliche E-Mail *' : 'Business Email Address *'}
                    </label>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="m.weber@organisation.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">
                      {lang === 'de' ? 'Telefonnummer für Rückruf *' : 'Direct Phone for Callback *'}
                    </label>
                    <input 
                      id="contact-phone"
                      name="phone"
                      type="tel" 
                      required 
                      className="form-input" 
                      placeholder="+49 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Grid Row 3: Service Type & Location */}
                <div className="grid-2" style={{ gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">
                      {lang === 'de' ? 'Gewünschte Sicherheitsleistung' : 'Required Capability'}
                    </label>
                    <select 
                      id="contact-service"
                      name="serviceType"
                      className="form-select"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    >
                      <option value="incident">{lang === 'de' ? '🚨 Notfall Incident Response / Forensik' : '🚨 Emergency Incident Response'}</option>
                      <option value="pentest">{lang === 'de' ? '🛡️ Penetration Testing & Schwachstellenanalyse' : '🛡️ Penetration Testing & Audits'}</option>
                      <option value="soc">{lang === 'de' ? '👁️ 24/7 SOC & Blue Teaming' : '👁️ 24/7 SOC & Blue Teaming'}</option>
                      <option value="nis2">{lang === 'de' ? '📋 NIS-2 / ISO 27001 Compliance' : '📋 NIS-2 / ISO 27001 Compliance'}</option>
                      <option value="it-admin">{lang === 'de' ? '⚙️ IT-Administration & Systemhärtung' : '⚙️ IT Administration & Hardening'}</option>
                      <option value="awareness">{lang === 'de' ? '🎓 Awareness & Phishing-Schulung' : '🎓 Awareness & Phishing Training'}</option>
                      <option value="software">{lang === 'de' ? '💻 Software Security & Code Audit' : '💻 Software Security & Code Audit'}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-location">
                      {lang === 'de' ? 'Standort / Region' : 'Location / Regional Hub'}
                    </label>
                    <select 
                      id="contact-location"
                      name="location"
                      className="form-select"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    >
                      {locationsData.map((l) => (
                        <option key={l.slug} value={l.city}>
                          {l.city} ({lang === 'de' ? `SLA < ${l.slaMinutes}m` : `< ${l.slaMinutes}m SLA`})
                        </option>
                      ))}
                      <option value="Sonstige">{lang === 'de' ? 'Anderer Ort in Thüringen / Mitteldeutschland' : 'Other Regional Hub'}</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    {lang === 'de' 
                      ? 'Ihre Nachricht / Kurzbeschreibung des Anliegens *' 
                      : 'Message / Brief Description of Inquiry *'}
                  </label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="form-textarea"
                    placeholder={lang === 'de' 
                      ? 'Beschreiben Sie Ihre Infrastruktur, den Umfang (z. B. IP-Bereiche, Web-Applikation) oder die Symptome des Vorfalls...' 
                      : 'Describe your infrastructure, scope, or symptoms of the incident...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Hidden Fields for Formspree */}
                <input type="hidden" name="urgency" value={formData.urgency} />
                <input 
                  type="hidden" 
                  name="_subject" 
                  value={
                    formData.urgency === 'critical' || formData.serviceType === 'incident'
                      ? `[NOTFALL] EminSecurity Meldung: ${formData.name || 'Unbekannt'} (${formData.company || 'Ohne Angabe'})`
                      : `[ANFRAGE] EminSecurity Kontakt: ${formData.serviceType} von ${formData.name || 'Unbekannt'}`
                  } 
                />

                {/* Consent Checkbox */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <input 
                      type="checkbox" 
                      required 
                      className="form-checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <span>
                      {lang === 'de' ? (
                        <>
                          Ich willige ein, dass meine Angaben zur Bearbeitung der Anfrage vertraulich verarbeitet werden. Alle Daten unterliegen dem Berufsgeheimnis (§ 203 StGB) und der <Link to="/privacy" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>Datenschutzerklärung</Link>.
                        </>
                      ) : (
                        <>
                          I agree that my information will be handled confidentially according to the <Link to="/privacy" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>privacy policy</Link> and professional non-disclosure standards (§ 203 German Criminal Code).
                        </>
                      )}
                    </span>
                  </label>
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div style={{
                    backgroundColor: 'var(--accent-crimson-light)',
                    border: '1px solid var(--accent-crimson-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.9rem 1.25rem',
                    marginBottom: '1.5rem',
                    color: '#991b1b',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem'
                  }}>
                    <AlertTriangle size={18} style={{ flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>{errorMessage}</div>
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`btn ${isEmergency ? 'btn-danger' : 'btn-primary'}`} 
                  style={{ 
                    width: '100%', 
                    padding: '0.95rem 1.5rem', 
                    fontSize: '1.02rem',
                    opacity: status === 'submitting' ? 0.75 : 1
                  }}
                >
                  {status === 'submitting' ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
                      {lang === 'de' ? 'Wird verschlüsselt übertragen...' : 'Transmitting securely...'}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {isEmergency
                        ? (lang === 'de' ? 'Notfall-Meldung absenden (Priorität HOCH – Rückruf < 15 Min)' : 'Dispatch Emergency Alert (Highest Priority)')
                        : (lang === 'de' ? 'Vertrauliche Sicherheitsanfrage senden' : 'Send Confidential Security Inquiry')}
                    </>
                  )}
                </button>

                {/* Trust Footer Note */}
                <div style={{ 
                  marginTop: '1.25rem', 
                  textAlign: 'center', 
                  fontSize: '0.8rem', 
                  color: 'var(--text-faint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  flexWrap: 'wrap'
                }}>
                  <ShieldCheck size={15} color="var(--accent-emerald)" />
                  <span>
                    {lang === 'de' 
                      ? 'TLS 1.3 verschlüsselt • Keine Weitergabe an Dritte • Deutsche Serverstandorte'
                      : 'TLS 1.3 encrypted • Strictly confidential • German hosting & legal compliance'}
                  </span>
                </div>
              </form>
            )}

          </div>
        </div>

        {/* Regional Coverage Strip */}
        <div style={{
          marginTop: '3.5rem',
          padding: '1.75rem 2rem',
          backgroundColor: 'var(--bg-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
              REGIONALER EINSATZRADIUS // VOR-ORT-BEREITSCHAFT
            </div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.98rem' }}>
              {lang === 'de'
                ? 'Garantierte Vor-Ort-Reaktionszeiten in Thüringen & Mitteldeutschland'
                : 'Guaranteed on-site SLA response times across Thuringia'}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            {locationsData.slice(0, 4).map((loc) => (
              <Link 
                key={loc.slug} 
                to={`/locations/${loc.slug}`}
                className="tech-badge"
                style={{ textDecoration: 'none' }}
              >
                <MapPin size={12} color="var(--accent-blue)" />
                {loc.city} (&lt; {loc.slaMinutes}m)
              </Link>
            ))}
            <Link 
              to="/locations" 
              style={{ 
                fontSize: '0.85rem', 
                color: 'var(--accent-blue)', 
                fontWeight: 600, 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.3rem',
                marginLeft: '0.5rem'
              }}
            >
              {lang === 'de' ? 'Alle Standorte' : 'All hubs'} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
