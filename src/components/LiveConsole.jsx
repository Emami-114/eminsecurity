import React, { useState, useEffect } from 'react';
import { Terminal, Shield, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LiveConsole() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('telemetry');
  const [logs, setLogs] = useState([
    { id: 1, time: '12:04:12', level: 'INFO', msg: 'EDR Agent v4.8 active across Thüringen perimeter nodes [Jena / Erfurt]' },
    { id: 2, time: '12:04:18', level: 'WARN', msg: 'Anomalous NTLM authentication burst detected on VLAN-40 (Medical IoT)' },
    { id: 3, time: '12:04:22', level: 'CRIT', msg: 'IoC Match: Berlin Incident SHA-256 hash flagged in quarantined attachment' },
    { id: 4, time: '12:04:25', level: 'SUCCESS', msg: 'Zero-Trust gateway revoked token. Host automatically segmented. SOC notified.' },
    { id: 5, time: '12:04:31', level: 'INFO', msg: 'NIS-2 continuous posture check: 94/100 technical controls verified' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toTimeString().split(' ')[0];
      const sampleEvents = [
        { level: 'INFO', msg: 'SOC Level-2 Analyst verified clean egress traffic for Klinikum subnet [Jena]' },
        { level: 'WARN', msg: 'Unusual Kerberos ticket request (SPN: MSSQLSvc/db01.prod) - inspection active' },
        { level: 'SUCCESS', msg: 'Encrypted backup snapshot finalized to immutable WORM vault (Hermsdorf DC)' },
        { level: 'INFO', msg: 'Vulnerability scan cycle finished: 0 critical perimeter exposures' },
        { level: 'WARN', msg: 'VPN authentication attempt from unexpected geo-IP blocked by Conditional Access' }
      ];
      const randomEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
      setLogs((prev) => [...prev.slice(-6), { id: Date.now(), time: now, ...randomEvent }]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-window">
      {/* Terminal Title Bar */}
      <div className="terminal-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div className="terminal-dots">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
          </div>
          <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Terminal size={14} color="#00e5ff" />
            eminsec-telemetry-engine // live-soc-feed
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="pulse-indicator" />
          <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>
            LIVE STREAM
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        backgroundColor: '#0a0d14',
        borderBottom: '1px solid var(--border-subtle)',
        fontSize: '0.78rem',
        padding: '0 0.5rem'
      }}>
        <button
          onClick={() => setActiveTab('telemetry')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'telemetry' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
            color: activeTab === 'telemetry' ? '#fff' : 'var(--text-muted)',
            padding: '0.5rem 0.85rem',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer'
          }}
        >
          $ soc_events.log
        </button>
        <button
          onClick={() => setActiveTab('threat-radar')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'threat-radar' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
            color: activeTab === 'threat-radar' ? '#fff' : 'var(--text-muted)',
            padding: '0.5rem 0.85rem',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer'
          }}
        >
          $ threat_intel_092026.json
        </button>
        <button
          onClick={() => setActiveTab('thueringen-mesh')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'thueringen-mesh' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
            color: activeTab === 'thueringen-mesh' ? '#fff' : 'var(--text-muted)',
            padding: '0.5rem 0.85rem',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer'
          }}
        >
          $ response_mesh_status
        </button>
      </div>

      {/* Body */}
      <div className="terminal-body" style={{ minHeight: '190px' }}>
        {activeTab === 'telemetry' && (
          <div>
            {logs.map((log) => (
              <div key={log.id} style={{ marginBottom: '0.35rem', display: 'flex', gap: '0.65rem' }}>
                <span style={{ color: '#64748b' }}>[{log.time}]</span>
                <span style={{
                  color: 
                    log.level === 'CRIT' ? '#ef4444' :
                    log.level === 'WARN' ? '#f59e0b' :
                    log.level === 'SUCCESS' ? '#10b981' : '#38bdf8',
                  fontWeight: 600,
                  minWidth: '55px'
                }}>
                  {log.level}
                </span>
                <span style={{ color: '#cbd5e1' }}>{log.msg}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'threat-radar' && (
          <div style={{ color: '#94a3b8' }}>
            <div style={{ color: '#fca5a5', marginBottom: '0.5rem' }}>
              &gt; MATCHING SIGNATURES FROM RECENT INCIDENT RECONSTRUCTION:
            </div>
            <div>[TARGET]: Stadt Berlin Landesverwaltung (Sept 2026 Incident)</div>
            <div>[VECTOR]: AiTM Session Hijacking on Vendor Remote Access Appliance</div>
            <div>[TTPs]: T1078 (Valid Accounts), T1558.003 (Kerberoasting), T1021.002 (SMB/Windows Admin Shares)</div>
            <div style={{ color: '#10b981', marginTop: '0.5rem' }}>
              [EMINSEC DEFENSE]: Active Directory Tiering + Phishing-Resistant FIDO2 enforced for all client endpoints.
            </div>
          </div>
        )}

        {activeTab === 'thueringen-mesh' && (
          <div>
            <div style={{ color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
              &gt; EMERGENCY DISPATCH SLA RADII // CENTRAL THURINGIA:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem', color: '#cbd5e1' }}>
              <div>[JENA] Hub Carl-Zeiss-Promenade: <strong>&lt; 30 MIN ON-SITE</strong> (Status: STANDBY)</div>
              <div>[ERFURT] Hub Anger: <strong>&lt; 45 MIN ON-SITE</strong> (Status: STANDBY)</div>
              <div>[WEIMAR] Hub Theaterplatz: <strong>&lt; 35 MIN ON-SITE</strong> (Status: STANDBY)</div>
              <div>[GERA] Hub Heinrichstraße: <strong>&lt; 40 MIN ON-SITE</strong> (Status: STANDBY)</div>
              <div>[HERMSDORF] Hub Tridelta / A4: <strong>&lt; 20 MIN ON-SITE</strong> (Status: STANDBY)</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
