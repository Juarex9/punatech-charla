'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slides, Slide } from '@/lib/slides'
import { assets } from '@/lib/assets'

// ── Tokens Puna Tech ──
const C = {
  base: '#060404',
  surface: '#111111',
  surface2: '#0A0404',
  primary: '#E61C1C',
  lava: '#FF5E00',
  amber: '#FF9D00',
  high: '#F2F2F2',
  subtitle: '#C8C8C8',
  muted: '#B3B3B3',
  dim: '#7D7D7D',
  border: '#1A1A1A',
  agro: '#4CAF50',     // verde agro
  agroDark: '#2E7D32',
}

const F = {
  display: "'Barlow Condensed', sans-serif",
  body: "'DM Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
}

// ── Layouts por tipo ──

function Cover({ s }: { s: Slide }) {
  return (
    <div className="slide cover">
      <div className="cover-bg" />
      <motion.div
        className="cover-inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="tag-line">PUNA TECH 2026</div>
        <h1>{s.title}</h1>
        <p className="subtitle">{s.subtitle}</p>
        <div className="cover-tag">{s.tag}</div>
      </motion.div>
      <div className="cover-decoration" />
    </div>
  )
}

function Bridge({ s }: { s: Slide }) {
  return (
    <div className="slide bridge">
      <div
        className="bridge-bg"
        style={{ backgroundImage: `url(${assets.bridge.background})` }}
      />
      <div className="bridge-bg-overlay" />
      <motion.div
        className="bridge-inner"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">// CONECTANDO IDEAS</div>
        <h1>
          <span className="bridge-ia">IA</span>
          <span className="bridge-comma">,</span>
          <span className="bridge-chain">BLOCKCHAIN</span>
          <span className="bridge-q">?</span>
        </h1>
        {s.subtitle && <p className="bridge-subtitle">{s.subtitle}</p>}
        {s.tag && <p className="bridge-tag">{s.tag}</p>}

        <div className="bridge-logos">
          <motion.div
            className="bridge-group bridge-group-ia"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <span className="bridge-group-label">Inteligencia Artificial</span>
            <div className="bridge-group-items">
              {assets.bridge.ia.map((img) => (
                <div key={img.src} className="bridge-logo-wrap">
                  <img src={img.src} alt={img.alt} className="bridge-logo" />
                </div>
              ))}
            </div>
          </motion.div>

          <div className="bridge-divider" aria-hidden>+</div>

          <motion.div
            className="bridge-group bridge-group-chain"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <span className="bridge-group-label">Blockchain</span>
            <div className="bridge-group-items">
              {assets.bridge.blockchain.map((img) => (
                <div key={img.src} className="bridge-logo-wrap">
                  <img src={img.src} alt={img.alt} className="bridge-logo" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function Speaker({ s }: { s: Slide }) {
  return (
    <div className="slide speaker">
      <div className="section-label">// QUIÉN SOY</div>
      <div className="speaker-content">
        <motion.div
          className="speaker-photo-wrap"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="speaker-photo-frame">
            <img
              src={assets.speaker}
              alt="Agustín Juárez"
              className="speaker-photo"
            />
          </div>
          <div className="agro-ring" />
        </motion.div>
        <motion.div
          className="speaker-text"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <h2>{s.speaker}</h2>
          <p className="role">{s.role}</p>
          {s.meta && <p className="speaker-meta">{s.meta}</p>}
          <p className="bio">{s.subtitle}</p>
        </motion.div>
      </div>
    </div>
  )
}

function Comparison({ s }: { s: Slide }) {
  const logos = [assets.comparison.chatbot, assets.comparison.agent]

  return (
    <div className="slide comparison">
      <div className="section-label">// IA VS AGENTE DE IA</div>
      <h2>{s.title}</h2>
      <div className="comparison-grid">
        {s.cols?.map((col, ci) => (
          <motion.div
            key={ci}
            className={`comparison-col col-${ci}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.2, duration: 0.5 }}
          >
            <div className="comparison-logo-wrap">
              <img
                src={logos[ci].src}
                alt={logos[ci].alt}
                className={`comparison-logo ${ci === 0 ? 'logo-chatbot' : 'logo-agent'}`}
              />
            </div>
            <div className="col-header">
              {ci === 0 ? 'CHATBOT CONVENCIONAL' : 'AGENTE DE IA'}
            </div>
            {ci === 0 && (
              <p className="col-example">ej. ChatGPT</p>
            )}
            {ci === 1 && (
              <p className="col-example col-example-agent">ej. OpenClaw</p>
            )}
            {col.map((item, i) => (
              <div key={i} className="col-item">
                <span className="check">→</span> {item}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function GridSlide({ s }: { s: Slide }) {
  return (
    <div className="slide grid-slide">
      <div className="section-label">// AGENTES EN EL CAMPO</div>
      <h2>{s.title}</h2>
      <div className="card-grid">
        {s.items?.map(([num, label], i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <span className="card-num">{num}</span>
            <p className="card-label">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Bullets({ s }: { s: Slide }) {
  return (
    <div className="slide bullets">
      <div className="section-label">// BLOCKCHAIN</div>
      <h2>{s.title}</h2>
      <div className="bullets-layout">
        <motion.div
          className="blockchain-hero-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={assets.blockchain.hero.src}
            alt={assets.blockchain.hero.alt}
            className="blockchain-hero"
          />
        </motion.div>
        <div className="bullet-list">
          {s.items?.map(([title, desc], i) => (
            <motion.div
              key={i}
              className="bullet-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
            >
              <div className="bullet-icon">⬡</div>
              <div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Flow({ s }: { s: Slide }) {
  return (
    <div className="slide flow">
      <div className="section-label">// ENTRENDIENDO UN AGENTE</div>
      <h2>{s.title}</h2>
      <div className="flow-steps">
        {s.items?.map(([num, label], i) => (
          <motion.div
            key={i}
            className="flow-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          >
            <div className="flow-num">{num}</div>
            <div className="flow-label">{label}</div>
            {i < (s.items?.length ?? 0) - 1 && <div className="flow-arrow">↓</div>}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flow-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        💡 {s.note}
      </motion.div>
    </div>
  )
}

function Apps({ s }: { s: Slide }) {
  return (
    <div className="slide apps">
      <div className="section-label">// PROYECTOS REALES</div>
      <h2>{s.title}</h2>
      <div className="apps-grid">
        {s.items?.map(([name, desc], i) => (
          <motion.div
            key={i}
            className="app-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <div className="app-icon">{i === 0 ? '🌾' : '🍇'}</div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <div className="app-badge">Proyecto real</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function NoCode({ s }: { s: Slide }) {
  return (
    <div className="slide no-code">
      <div className="section-label">// Y SI NO SÉ PROGRAMAR?</div>
      <h2>{s.title}</h2>
      <p className="no-code-subtitle">{s.subtitle}</p>
      <div className="chatbot-demo">
        <div className="chatbot-header">
          <div className="chatbot-dots"><span /><span /><span /></div>
          <span>Asistente del Campo</span>
        </div>
        <div className="chatbot-body">
          {s.items?.map(([icon, label], i) => (
            <motion.div
              key={i}
              className="chatbot-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="chatbot-icon">{icon}</span>
              <span>{label}</span>
              <div className="chatbot-status">usable hoy</div>
            </motion.div>
          ))}
        </div>
        <div className="chatbot-input">
          <span>Escribí tu pregunta...</span>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  )
}

function Future({ s }: { s: Slide }) {
  return (
    <div className="slide future">
      <div className="section-label">// EL FUTURO</div>
      <h2>{s.title}</h2>
      <div className="future-grid">
        {s.cols?.map((col, ci) => (
          <motion.div
            key={ci}
            className={`future-col col-${ci}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.2 }}
          >
            <div className="future-header">{col[0]}</div>
            {col.slice(1).map((item, i) => (
              <div key={i} className="future-item">
                <span className="future-dot" />
                {item}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Closing({ s }: { s: Slide }) {
  const [qrLoaded, setQrLoaded] = useState(false)

  return (
    <div className="slide closing">
      <motion.div
        className="closing-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {s.title}
        </motion.h1>

        <motion.div
          className="closing-qr-slot"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {!qrLoaded && (
            <div className="closing-qr-placeholder">
              <span className="closing-qr-icon" aria-hidden>⌗</span>
              <span className="closing-qr-label">Redes de contacto</span>
              <span className="closing-qr-hint">public/contacto-qr.png</span>
            </div>
          )}
          <img
            src={assets.closing.qr}
            alt="QR — redes de contacto"
            className="closing-qr"
            onLoad={() => setQrLoaded(true)}
            onError={() => setQrLoaded(false)}
            style={{ display: qrLoaded ? 'block' : 'none' }}
          />
        </motion.div>

        <motion.p
          className="closing-url"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          🌐 {s.footer}
        </motion.p>
        <motion.div
          className="closing-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {s.tag}
        </motion.div>

        <motion.footer
          className="closing-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="closing-logo-wrap">
            <img
              src={assets.closing.punatech.src}
              alt={assets.closing.punatech.alt}
              className="closing-logo closing-logo-puna"
            />
          </div>
          <div className="closing-logo-wrap">
            <img
              src={assets.closing.saltadev.src}
              alt={assets.closing.saltadev.alt}
              className="closing-logo closing-logo-salta"
            />
          </div>
        </motion.footer>
      </motion.div>
    </div>
  )
}

function LayoutRenderer({ slide }: { slide: Slide }) {
  switch (slide.layout) {
    case 'cover':    return <Cover s={slide} />
    case 'speaker':  return <Speaker s={slide} />
    case 'bridge':   return <Bridge s={slide} />
    case 'comparison': return <Comparison s={slide} />
    case 'grid':    return <GridSlide s={slide} />
    case 'bullets': return <Bullets s={slide} />
    case 'flow':    return <Flow s={slide} />
    case 'apps':    return <Apps s={slide} />
    case 'no-code': return <NoCode s={slide} />
    case 'future':  return <Future s={slide} />
    case 'closing': return <Closing s={slide} />
    default:        return <div className="slide"><h1>{slide.title}</h1></div>
  }
}

// ── Navegación ──
export default function CharlaPage() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const prev = useCallback(() => {
    if (current > 0) { setDir(-1); setCurrent(c => c - 1) }
  }, [current])

  const next = useCallback(() => {
    if (current < slides.length - 1) { setDir(1); setCurrent(c => c + 1) }
  }, [current])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }, [])

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp') { e.preventDefault(); prev() }
      if (e.key === 'f' || e.key === 'F') { e.preventDefault(); toggleFullscreen() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev, toggleFullscreen])

  const variant = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <main className="charla">
      {/* Ambiente agro — topografía + grain */}
      <div className="agro-ambient" aria-hidden>
        <div className="agro-topo" />
        <div className="agro-grain" />
      </div>

      {/* Branding */}
      <header className="charla-brand">
        <span className="brand-dot" />
        <span className="brand-name">PUNA TECH</span>
        <span className="brand-sep">·</span>
        <span className="brand-topic">IA en el agro</span>
      </header>

      {/* Nav */}
      <nav className="charla-nav">
        <button onClick={prev} disabled={current === 0} className="nav-btn" aria-label="Slide anterior">
          ←
        </button>
        <div className="nav-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} disabled={current === slides.length - 1} className="nav-btn" aria-label="Slide siguiente">
          →
        </button>
      </nav>

      {/* Fullscreen toggle */}
      <button
        className="fullscreen-btn"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
        title="Pantalla completa (F)"
      >
        {isFullscreen ? '⤡' : '⤢'}
      </button>

      {/* Keyboard hint */}
      <div className="keyboard-hint">← → navegar · F pantalla completa</div>

      {/* Slide counter */}
      <div className="slide-counter">
        <span className="counter-num">{String(current + 1).padStart(2, '0')}</span>
        <span className="counter-sep">/</span>
        <span className="counter-total">{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Slides */}
      <div className="slides-viewport">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={variant}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <LayoutRenderer slide={slides[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </main>
  )
}
