# EminSecurity - Design Guide & UI Architecture System

> **Vision:** Minimalist, hochpräzise und vertrauensstiftende Cyber-Security-Ästhetik („Clean German Engineering“). Maximale Lesbarkeit, klare visuelle Hierarchie und garantierte Kontrast-Sicherheit (WCAG 2.1 AA / AAA).

---

## 1. Design-Philosophie & Grundregeln

1. **Klarheit vor Dekoration:** Als Cyber-Defense-Unternehmen stehen Zuverlässigkeit, technische Kompetenz und Seriosität im Mittelpunkt. Das Design verzichtet auf überladene Spielereien zugunsten hoher Lesbarkeit und strukturierter Information.
2. **Strikte Kontrast-Sicherheit:**
   * **VERBOTEN:** Weißer Text (`#ffffff` oder `#fff`) auf hellem Hintergrund (z. B. auf `.cyber-card` oder `--bg-canvas`).
   * **VERBOTEN:** Dunkler Text (`#0f172a`) auf dunklem Hintergrund (z. B. auf Containern mit dunkler Akzentfarbe).
   * **PFLICHT:** Jeder Text muss ein Kontrastverhältnis von mindestens **4.5:1** (bzw. **3:1** bei Überschriften $\ge$ 18pt) aufweisen.
3. **Komponentenbasierte Tokens:** Niemals Farben willkürlich hardcoden. Immer die CSS-Variablen (`var(--text-main)`, `var(--bg-surface)`, etc.) verwenden.

---

## 2. Farbsystem & Tokens (CSS Custom Properties)

Alle Tokens sind zentral in [`src/index.css`](file:///c:/Users/emami/Documents/EminSecurity/src/index.css) definiert.

### 2.1 Hintergründe (Backgrounds)
| Token | Hex-Wert | Verwendungszweck |
|---|---|---|
| `--bg-canvas` | `#ffffff` | Standard-Seitenhintergrund |
| `--bg-subtle` | `#f8fafc` | Dezent abgesetzte Sektionen, Tabellenköpfe, Callouts |
| `--bg-surface` | `#ffffff` | Karten-Hintergrund (`.cyber-card`), Formulare |
| `--bg-surface-elevated` | `#ffffff` | Popovers, Dropdowns, Dialoge |
| `--bg-surface-hover` | `#f1f5f9` | Hover-Zustände bei Klickflächen |
| `--bg-dark-accent` | `#0f172a` | Dark-Accent-Container (z. B. Footer, Hero-Terminal, Final CTA) |

### 2.2 Text-Hierarchie (Text Colors)
| Token | Hex-Wert | Verwendungszweck | Erlaubter Hintergrund |
|---|---|---|---|
| `--text-main` | `#0f172a` | Hauptüberschriften (h1–h6), Labels, wichtige Werte | Auf `#ffffff`, `#f8fafc`, `#f1f5f9` |
| `--text-muted` | `#475569` | Fließtext, Beschreibungen, Paragrafen | Auf `#ffffff`, `#f8fafc` |
| `--text-faint` | `#94a3b8` | Metadaten, technische Prefixe, Zeitstempel | Auf `#ffffff`, `#f8fafc` |
| `--text-on-accent` | `#ffffff` | Text auf dunklen Buttons und Dark-Accent-Boxen | Nur auf `#0f172a`, `#0062ff`, `#ef4444` |

### 2.3 Akzent- & Funktionsfarben
| Token | Primär | Hell-Hintergrund | Randfarbe | Bedeutung |
|---|---|---|---|---|
| **Royal Blue** | `--accent-blue` (`#0062ff`) | `--accent-blue-light` (`#eff6ff`) | `--accent-blue-border` (`#bfdbfe`) | Hauptmarkenfarbe, Primär-Buttons, aktive Navigation |
| **Cyan** | `--accent-cyan` (`#0284c7`) | `--accent-cyan-light` (`#f0f9ff`) | `#bae6fd` | Technische Telemetrie, Standorte, Standards |
| **Emerald** | `--accent-emerald` (`#10b981`) | `--accent-emerald-light` (`#ecfdf5`) | `--accent-emerald-border` (`#a7f3d0`) | SLAs, positive Prüfungsbefunde, Live-Status |
| **Crimson** | `--accent-crimson` (`#ef4444`) | `--accent-crimson-light` (`#fef2f2`) | `--accent-crimson-border` (`#fecaca`) | Notfall-Hotline, akuter Vorfall, Bedrohungen |
| **Amber** | `--accent-amber` (`#f59e0b`) | `--accent-amber-light` (`#fffbeb`) | `#fde68a` | Warnhinweise, mittlere Kritikalität |

---

## 3. Typografie

* **Display Font (Headings):** `'Space Grotesk'` (500, 600, 700) – technischer, moderner Charakter für Überschriften.
* **Body Font (Fließtext):** `'Inter'` (400, 500, 600, 700) – hochgradig lesbar und klar auch bei dichter Information.
* **Monospace Font (Code & Telemetrie):** `'JetBrains Mono'` – für Terminalausgaben, SLAs, IoC-Hashes und Kennziffern.

### Typografie-Skala
* `h1`: `clamp(2.3rem, 4.5vw + 0.8rem, 3.8rem)` – Letter-Spacing: `-0.03em`, Farbe: `var(--text-main)`
* `h2`: `clamp(1.8rem, 2.8vw + 0.6rem, 2.5rem)` – Letter-Spacing: `-0.02em`, Farbe: `var(--text-main)`
* `h3`: `clamp(1.2rem, 1.6vw + 0.4rem, 1.45rem)` – Farbe: `var(--text-main)`
* `p`: `font-size: 1.05rem`, `line-height: 1.6`, `max-width: 75ch`, Farbe: `var(--text-muted)`
* `p.lead`: `font-size: 1.25rem`, `color: #334155`, `line-height: 1.6`

---

## 4. Komponenten-Standards

### 4.1 Karten (`.cyber-card`)
Standard-Karte für alle Leistungsbeschreibungen, Standorte und Inhalte im White-Theme:
```jsx
// KORREKT (Hell-Modus):
<div className="cyber-card">
  <h2>Titel der Leistung</h2> {/* Automatisch var(--text-main) */}
  <p>Beschreibung...</p>      {/* Automatisch var(--text-muted) */}
</div>
```

### 4.2 Dark Accent Container (`.cyber-card-dark`)
Nur verwenden, wenn ein gezielter Dark-Kontrastblock (z. B. Live-SOC-Terminal oder Final CTA) erforderlich ist:
```jsx
// KORREKT (Dunkler Block):
<div className="cyber-card-dark">
  <h2>Titel</h2> {/* Automatisch #ffffff */}
  <p>Text...</p>  {/* Automatisch #94a3b8 */}
</div>
```

### 4.3 Pill Badges (`.tech-badge`)
```jsx
<span className="tech-badge">NEUTRAL</span>
<span className="tech-badge blue">OFFIZIELLER STANDARD</span>
<span className="tech-badge emerald">&lt; 30 MIN SLA</span>
<span className="tech-badge crimson">AKUTER VORFALL</span>
<span className="tech-badge amber">PRÜFPFLICHTIG</span>
```

### 4.4 Buttons (`.btn`)
* `.btn.btn-primary`: Blaue Hauptaktion (`#0062ff`, Text `#ffffff`)
* `.btn.btn-secondary`: Weißer Button mit Rahmen (`#ffffff`, Text `var(--text-main)`)
* `.btn.btn-danger`: Roter Notfall-Button (`#ef4444`, Text `#ffffff`)
* `.btn.btn-sm`: Kompakte Variante für Tabellen und Navigation

---

## 5. Do's and Don'ts (Häufige Fehler vermeiden)

| ❌ NIEMALS MACHEN | ✅ SO IST ES RICHTIG |
|---|---|
| `<h2 style={{ color: '#fff' }}>` auf weißer Karte | `<h2 style={{ color: 'var(--text-main)' }}>` |
| `<div style={{ backgroundColor: '#090c14' }}><h2>` ohne Textfarbe | `<div className="cyber-card" style={{ backgroundColor: 'var(--bg-subtle)' }}>` |
| `<p style={{ color: '#cbd5e1' }}>` auf weißem Hintergrund | `<p style={{ color: 'var(--text-muted)' }}>` |
| Helle Warnbox mit weißer Schrift (`#fff` auf hellrosa) | Dunkelrote Schrift (`#991b1b`) auf hellrosa Box (`var(--accent-crimson-light)`) |
| Grüne Box mit weißer Schrift (`#fff` auf hellgrün) | Dunkelgrüne Schrift (`#065f46`) auf hellgrün (`var(--accent-emerald-light)`) |

---

## 6. Kontakt- & Unternehmensangaben (Immer einheitlich halten)
* **Telefon / Notfall-Hotline:** `+49 152 33513651` (`tel:+4915233513651`)
* **Zentrale E-Mail:** `kontakt@eminsec.de` (`mailto:kontakt@eminsec.de`)
* **Hauptsitz:** Carl-Zeiss-Promenade 10, 07745 Jena
* **Standorte:** Jena, Erfurt, Weimar, Gera, Hermsdorf
