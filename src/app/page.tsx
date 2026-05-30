'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slides, Slide } from '@/lib/slides'
import { assets } from '@/lib/assets'

function SlideTitle({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`canva-title-wrap${center ? ' canva-title-wrap--center' : ''}`}>
      <h2 className="canva-title">{children}</h2>
    </div>
  )
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.button
      type="button"
      className="intro-screen"
      onClick={onStart}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Comenzar presentación"
    >
      <img src={assets.cerro} alt="" className="intro-bg" draggable={false} />
      <div className="intro-overlay" />
      <div className="intro-content">
        <div className="intro-brand">
          <span className="brand-dot" />
          <span>PUNA TECH 2026</span>
        </div>
        <h1 className="intro-title">{assets.intro.title}</h1>
        <p className="intro-subtitle">{assets.intro.subtitle}</p>
        <span className="intro-cta">Click o espacio para comenzar</span>
      </div>
    </motion.button>
  )
}

function Speaker({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva speaker">
      <div className="canva-split">
        <motion.div
          className="canva-split-text"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <SlideTitle>{s.title}</SlideTitle>
          <p className="speaker-byline">
            <strong>{s.speaker}</strong>
            <span className="speaker-sep">|</span>
            {s.role}
          </p>
          {s.meta && <p className="speaker-meta">{s.meta}</p>}
          <p className="speaker-bio">{s.subtitle}</p>
        </motion.div>
        <motion.div
          className="canva-split-media"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <img src={assets.speaker} alt={s.speaker ?? ''} className="speaker-photo-canva" />
        </motion.div>
      </div>
    </div>
  )
}

function Bridge({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva bridge">
      <motion.div
        className="bridge-canva-inner"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <SlideTitle center>{s.title}</SlideTitle>
        {s.subtitle && <p className="bridge-canva-sub">{s.subtitle}</p>}
        {s.tag && <p className="bridge-canva-tag">{s.tag}</p>}
        <div className="bridge-logos-grid">
          <div className="bridge-logos-group">
            <span className="bridge-logos-label">Inteligencia artificial</span>
            <div className="bridge-logos-row">
              {assets.bridge.ia.map((img) => (
                <div key={img.src} className="bridge-logo-cell">
                  <img src={img.src} alt={img.alt} className="bridge-logo-img" />
                </div>
              ))}
            </div>
          </div>
          <div className="bridge-logos-group">
            <span className="bridge-logos-label">Blockchain</span>
            <div className="bridge-logos-row">
              {assets.bridge.blockchain.map((img) => (
                <div key={img.src} className="bridge-logo-cell">
                  <img src={img.src} alt={img.alt} className="bridge-logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Comparison({ s }: { s: Slide }) {
  const logos = [assets.comparison.chatbot, assets.comparison.agent]
  const names = s.colNames ?? ['IA tradicional', 'Agente de IA']

  return (
    <div className="slide slide-canva comparison">
      <SlideTitle>{s.title}</SlideTitle>
      {s.subtitle && <p className="comparison-subtitle">{s.subtitle}</p>}
      <div className="comparison-grid">
        {s.cols?.map((col, ci) => (
          <motion.div
            key={ci}
            className="comparison-col-canva"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.12, duration: 0.45 }}
          >
            <div className="comparison-logo-slot">
              <img
                src={logos[ci].src}
                alt={logos[ci].alt}
                className={`comparison-logo-canva ${ci === 1 ? 'logo-agent' : ''}`}
              />
            </div>
            <p className="comparison-name">{names[ci]}</p>
            <ul className="comparison-list">
              {col.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function WhyToday({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva why-today">
      <motion.div
        className="why-today-inner"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="canva-split canva-split--media-left">
          <div className="canva-split-media canva-split-media--tall">
            <img src="/ia-en-agro" alt="" className="canva-side-photo canva-side-photo--contain" />
          </div>
          <div className="canva-split-text">
            <SlideTitle>{s.title}</SlideTitle>
            {s.subtitle && <p className="why-today-lead">{s.subtitle}</p>}
          </div>
        </div>
        <div className="benefit-cards">
          {s.benefits?.map(([title, desc], i) => (
            <motion.div
              key={title}
              className="benefit-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            >
              <h3 className="benefit-card-title">{title}</h3>
              <p className="benefit-card-desc">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function GridSlide({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva grid-slide">
      <div className="canva-split canva-split--media-left">
        <div className="canva-split-media canva-split-media--tall">
          <img src={assets.agrotech} alt="" className="canva-side-photo canva-side-photo--contain" />
        </div>
        <div className="canva-split-text">
          <SlideTitle>{s.title}</SlideTitle>
          <ul className="canva-numbered-list">
            {s.items?.map(([num, label, desc]) => (
              <li key={num}>
                <span className="canva-num">{num}</span>
                <span className="canva-list-body">
                  <span className="canva-list-label">{label}</span>
                  {desc && <span className="canva-list-desc">{desc}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Versus({ s }: { s: Slide }) {
  const names = s.colNames ?? ['Drones', 'Satélites']

  return (
    <div className="slide slide-canva versus">
      <div className="canva-split canva-split--media-left">
        <div className="canva-split-media canva-split-media--tall">
          <img src={assets.satellite} alt="" className="canva-side-photo canva-side-photo--contain" />
        </div>
        <div className="canva-split-text">
          <SlideTitle>{s.title}</SlideTitle>
          <div className="versus-grid">
            {s.cols?.map((col, ci) => (
              <motion.div
                key={ci}
                className={`versus-col ${ci === 0 ? 'versus-col--muted' : 'versus-col--highlight'}`}
                initial={{ opacity: 0, x: ci === 0 ? -16 : 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: ci * 0.12, duration: 0.45 }}
              >
                <h3 className="versus-col-title">{names[ci]}</h3>
                <ul className="versus-list">
                  {col.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <span className="versus-badge" aria-hidden>VS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Bullets({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva bullets">
      <div className="canva-split canva-split--media-left">
        <div className="canva-split-media canva-spalit-media--tall canva-split-media--illustration">
          <img
            src={assets.blockchain.hero.src}
            alt={assets.blockchain.hero.alt}
            className="canva-side-photo canva-side-photo--contain"
          />
        </div>
        <div className="canva-split-text">
          <SlideTitle>{s.title}</SlideTitle>
          {s.subtitle && <p className="bullets-lead">{s.subtitle}</p>}
          <ul className="canva-numbered-list">
            {s.items?.map(([title, desc], i) => (
              <li key={title}>
                <span className="canva-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="canva-list-body">
                  <span className="canva-list-label">{title}</span>
                  {desc && <span className="canva-list-desc">{desc}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Flow({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva flow">
      <div className="canva-split">
        <div className="canva-split-text">
          <SlideTitle>{s.title}</SlideTitle>
          <div className="flow-grid">
            {s.items?.map(([num, label]) => (
              <div key={num} className="flow-grid-item">
                <span className="canva-num">{num}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
          {s.note && <p className="flow-note-canva">{s.note}</p>}
        </div>
        <div className="canva-split-media canva-split-media--tall">
          <img src={assets.agent} alt="" className="canva-side-photo canva-side-photo--contain" />
        </div>
      </div>
    </div>
  )
}

function Apps({ s }: { s: Slide }) {
  const appImages = ['/Zafra.png', '/VitistTrust.png']

  return (
    <div className="slide slide-canva apps">
      <div className="apps-inner">
        <SlideTitle center>{s.title}</SlideTitle>
        <div className="apps-showcase">
          {s.items?.map(([name, desc], i) => (
            <figure key={name} className="apps-showcase-item">
              <div className="apps-showcase-frame">
                <img src={appImages[i]} alt={name} className="apps-showcase-img" />
              </div>
              <figcaption className="apps-showcase-caption">
                <span className="canva-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="apps-showcase-copy">
                  <span className="apps-showcase-name">{name}</span>
                  {desc && <span className="apps-showcase-desc">{desc}</span>}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

function Region({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva region">
      <motion.div
        className="region-inner"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <SlideTitle center>{s.title}</SlideTitle>
        {s.subtitle && <p className="region-lead">{s.subtitle}</p>}
        <div className="region-pillars">
          {s.cols?.map(([title, desc], i) => (
            <motion.div
              key={title}
              className="region-pillar"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.45 }}
            >
              <span className="region-pillar-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="region-pillar-title">{title}</h3>
              <p className="region-pillar-desc">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function Start({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva start">
      <motion.div
        className="start-inner"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <SlideTitle center>{s.title}</SlideTitle>
        <div className="start-timeline">
          {s.steps?.map(([title, desc], i) => (
            <motion.div
              key={title}
              className="start-step"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.45 }}
            >
              <span className="canva-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="start-step-body">
                <h3 className="start-step-title">{title}</h3>
                <p className="start-step-desc">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {s.footer && <p className="start-footer">{s.footer}</p>}
        <div className="start-no-code">
          <h3 className="start-no-code-title">¿Y si no sé programar?</h3>
          {s.subtitle && <p className="start-no-code-lead">{s.subtitle}</p>}
          <div className="start-tools">
            {s.tools?.map((tool) => (
              <span key={tool} className="start-tool-chip">{tool}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Future({ s }: { s: Slide }) {
  return (
    <div className="slide slide-canva future">
      <div className="canva-split canva-split--media-left">
        <div className="canva-split-media canva-split-media--tall">
          <img src={assets.futureAgro} alt="" className="canva-side-photo canva-side-photo--contain" />
        </div>
        <div className="canva-split-text">
          <SlideTitle>{s.title}</SlideTitle>
          {s.subtitle && <p className="future-subtitle">{s.subtitle}</p>}
          <div className="future-cols">
            {s.cols?.map((col) => (
              <div key={col[0]} className="future-col-canva">
                <h3>{col[0]}</h3>
                <ul>
                  {col.slice(1).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {s.note && <p className="future-note">{s.note}</p>}
        </div>
      </div>
    </div>
  )
}

function Closing({ s }: { s: Slide }) {
  const [qrLoaded, setQrLoaded] = useState(false)

  return (
    <div className="slide closing closing-hero">
      <img src={assets.cerro} alt="" className="intro-bg" draggable={false} />
      <div className="intro-overlay" />
      <motion.div
        className="intro-content closing-hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="intro-brand">
          <span className="brand-dot" />
          <span>PUNA TECH 2026</span>
        </div>

        <h1 className="intro-title">{s.title}</h1>

        <div className="closing-qr-slot closing-qr-slot--hero">
          {!qrLoaded && (
            <div className="closing-qr-placeholder">
              <span className="closing-qr-icon" aria-hidden>⌗</span>
              <span className="closing-qr-label">Tu QR de contacto</span>
              <span className="closing-qr-hint">public/contacto.png</span>
            </div>
          )}
          <img
            src={assets.closing.qr}
            alt="QR — contacto"
            className="closing-qr"
            onLoad={() => setQrLoaded(true)}
            onError={() => setQrLoaded(false)}
            style={{ display: qrLoaded ? 'block' : 'none' }}
          />
        </div>

        {s.footer && (
          <p className="intro-subtitle closing-hero-url">{s.footer}</p>
        )}
      </motion.div>
    </div>
  )
}

function LayoutRenderer({ slide }: { slide: Slide }) {
  switch (slide.layout) {
    case 'speaker': return <Speaker s={slide} />
    case 'bridge': return <Bridge s={slide} />
    case 'why-today': return <WhyToday s={slide} />
    case 'comparison': return <Comparison s={slide} />
    case 'grid': return <GridSlide s={slide} />
    case 'versus': return <Versus s={slide} />
    case 'bullets': return <Bullets s={slide} />
    case 'flow': return <Flow s={slide} />
    case 'region': return <Region s={slide} />
    case 'apps': return <Apps s={slide} />
    case 'start': return <Start s={slide} />
    case 'future': return <Future s={slide} />
    case 'closing': return <Closing s={slide} />
    default: return <div className="slide slide-canva"><h2>{slide.title}</h2></div>
  }
}

export default function CharlaPage() {
  const mainRef = useRef<HTMLElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const [showIntro, setShowIntro] = useState(true)
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showUi, setShowUi] = useState(true)

  const startPresentation = useCallback(() => setShowIntro(false), [])

  const prev = useCallback(() => {
    if (showIntro) return
    if (current > 0) {
      setDir(-1)
      setCurrent(c => c - 1)
    } else {
      setShowIntro(true)
    }
  }, [current, showIntro])

  const next = useCallback(() => {
    if (showIntro) {
      startPresentation()
      return
    }
    if (current < slides.length - 1) {
      setDir(1)
      setCurrent(c => c + 1)
    }
  }, [current, showIntro, startPresentation])

  const toggleFullscreen = useCallback(async () => {
    const el = mainRef.current
    if (!el) return
    try {
      if (!document.fullscreenElement) await el.requestFullscreen()
      else await document.exitFullscreen()
    } catch { /* noop */ }
  }, [])

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === mainRef.current)
      setShowUi(true)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    if (!isFullscreen || showIntro) return
    const hide = window.setTimeout(() => setShowUi(false), 2800)
    return () => window.clearTimeout(hide)
  }, [isFullscreen, current, showUi, showIntro])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showIntro) {
        if ([' ', 'Enter', 'ArrowRight', 'ArrowDown'].includes(e.key)) {
          e.preventDefault()
          startPresentation()
        }
        return
      }
      if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); next() }
      if (['ArrowLeft', 'ArrowUp'].includes(e.key)) { e.preventDefault(); prev() }
      if (e.key === 'f' || e.key === 'F') { e.preventDefault(); toggleFullscreen() }
      if (e.key === 'Escape' && isFullscreen) setShowUi(true)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev, toggleFullscreen, isFullscreen, showIntro, startPresentation])

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    if (showIntro) {
      if (Math.abs(dx) < 24 && Math.abs(dy) < 24) startPresentation()
      return
    }
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) next()
    else prev()
  }

  const variant = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -32 : 32 }),
  }

  return (
    <main
      ref={mainRef}
      className={`charla charla--slides${showIntro ? ' charla--intro' : ''}${isFullscreen ? ' charla--fullscreen' : ''}${showUi ? ' charla--show-ui' : ''}`}
      onMouseMove={() => isFullscreen && setShowUi(true)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence>
        {showIntro && <IntroScreen onStart={startPresentation} key="intro" />}
      </AnimatePresence>

      {!showIntro && (
        <div className="charla-ui">
          <header className="charla-brand">
            <span className="brand-dot" />
            <span className="brand-name">PUNA TECH</span>
            <span className="brand-sep">·</span>
            <span className="brand-topic">IA en el agro</span>
          </header>

          <a href={assets.gammaPdf} target="_blank" rel="noopener noreferrer" className="pdf-link" title="Abrir PDF Gamma">
            PDF
          </a>

          <button
            className="fullscreen-btn"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
            title="Pantalla completa (F)"
          >
            {isFullscreen ? '⤡' : '⤢'}
          </button>

          <div className="slide-counter">
            <span className="counter-num">{String(current + 1).padStart(2, '0')}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{String(slides.length).padStart(2, '0')}</span>
          </div>

          <div className="keyboard-hint">← → navegar · F pantalla completa · swipe en móvil</div>

          <nav className="charla-nav">
            <button onClick={prev} className="nav-btn" aria-label="Slide anterior">←</button>
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
            <button onClick={next} disabled={current === slides.length - 1} className="nav-btn" aria-label="Slide siguiente">→</button>
          </nav>

          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      )}

      <div className={`slides-viewport${showIntro ? ' slides-viewport--hidden' : ''}`}>
        <button type="button" className="tap-zone tap-zone-prev" onClick={prev} aria-label="Slide anterior" />
        <button
          type="button"
          className="tap-zone tap-zone-next"
          onClick={next}
          aria-label="Slide siguiente"
          disabled={current === slides.length - 1}
        />

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={variant}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="slide-motion-wrap"
          >
            {!showIntro && <LayoutRenderer slide={slides[current]} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
