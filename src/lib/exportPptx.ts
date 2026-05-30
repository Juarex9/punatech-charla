import { slides, type Slide } from '@/lib/slides'
import { assets } from '@/lib/assets'

const SLIDE_IMAGES: Partial<Record<Slide['layout'], string | string[]>> = {
  speaker: assets.speaker,
  'why-today': '/ia-en-agro',
  flow: assets.agent,
  grid: assets.agrotech,
  versus: assets.satellite,
  bullets: assets.blockchain.hero.src,
  apps: ['/Zafra.png', '/VitistTrust.png'],
  future: assets.futureAgro,
}

async function imageToDataUrl(url: string): Promise<string | null> {
  try {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = url

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`No se pudo cargar ${url}`))
    })

    const canvas = document.createElement('canvas')
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    canvas.getContext('2d')?.drawImage(img, 0, 0)
    return canvas.toDataURL('image/png')
  } catch {
    return null
  }
}

function addTitle(slide: import('pptxgenjs').default.Slide, title: string, y = 0.35) {
  slide.addText(title, {
    x: 0.5,
    y,
    w: 9,
    h: 0.8,
    fontSize: 28,
    bold: true,
    color: '1A1A1A',
    fontFace: 'Arial',
  })
}

function addBody(slide: import('pptxgenjs').default.Slide, lines: string[], y = 1.3, w = 5.8) {
  if (!lines.length) return
  slide.addText(
    lines.map((line) => ({ text: line, options: { breakLine: true, fontSize: 14, color: '333333' } })),
    { x: 0.5, y, w, h: 5, valign: 'top', fontFace: 'Arial' },
  )
}

function addBullets(slide: import('pptxgenjs').default.Slide, items: string[], y = 1.3, w = 5.8) {
  if (!items.length) return
  slide.addText(
    items.map((item) => ({
      text: item,
      options: { bullet: true, breakLine: true, fontSize: 14, color: '333333', paraSpaceAfter: 6 },
    })),
    { x: 0.5, y, w, h: 5, valign: 'top', fontFace: 'Arial' },
  )
}

async function addSideImage(
  slide: import('pptxgenjs').default.Slide,
  url: string,
  x = 6.6,
  y = 1.1,
  w = 3.2,
  h = 4.8,
) {
  const data = await imageToDataUrl(url)
  if (!data) return
  slide.addImage({ data, x, y, w, h, sizing: { type: 'contain', w, h } })
}

function buildSlideContent(slide: Slide): { subtitle?: string; bullets: string[] } {
  const bullets: string[] = []

  switch (slide.layout) {
    case 'speaker':
      if (slide.speaker) bullets.push(slide.speaker)
      if (slide.role) bullets.push(slide.role)
      if (slide.meta) bullets.push(slide.meta)
      if (slide.subtitle) bullets.push(slide.subtitle)
      break
    case 'bridge':
      if (slide.tag) bullets.push(slide.tag)
      break
    case 'why-today':
      slide.benefits?.forEach(([title, desc]) => bullets.push(`${title}: ${desc}`))
      break
    case 'comparison':
      slide.colNames?.forEach((name, i) => {
        bullets.push(name)
        slide.cols?.[i]?.forEach((item) => bullets.push(`  • ${item}`))
      })
      break
    case 'flow':
      slide.items?.forEach(([num, label]) => bullets.push(`${num}. ${label}`))
      if (slide.note) bullets.push('', slide.note)
      break
    case 'grid':
      slide.items?.forEach(([num, label, desc]) => {
        bullets.push(`${num}. ${label}`)
        if (desc) bullets.push(`   ${desc}`)
      })
      break
    case 'versus':
      slide.colNames?.forEach((name, i) => {
        bullets.push(name)
        slide.cols?.[i]?.forEach((item) => bullets.push(`  • ${item}`))
      })
      break
    case 'bullets':
      slide.items?.forEach(([title, desc]) => bullets.push(`${title}: ${desc}`))
      break
    case 'region':
      slide.cols?.forEach(([title, desc], i) => bullets.push(`${i + 1}. ${title}: ${desc}`))
      break
    case 'apps':
      slide.items?.forEach(([name, desc], i) => bullets.push(`${i + 1}. ${name}: ${desc}`))
      break
    case 'start':
      slide.steps?.forEach(([title, desc], i) => bullets.push(`${i + 1}. ${title}: ${desc}`))
      slide.tools?.forEach((tool) => bullets.push(`• ${tool}`))
      if (slide.footer) bullets.push('', slide.footer)
      break
    case 'future':
      slide.cols?.forEach((col) => {
        bullets.push(col[0])
        col.slice(1).forEach((item) => bullets.push(`  • ${item}`))
      })
      if (slide.note) bullets.push('', slide.note)
      break
    case 'closing':
      if (slide.footer) bullets.push(slide.footer)
      if (slide.tag) bullets.push(slide.tag)
      break
    default:
      break
  }

  return { subtitle: slide.subtitle, bullets }
}

async function addContentSlide(pptx: import('pptxgenjs').default, slide: Slide) {
  const s = pptx.addSlide()
  s.background = { color: 'FFFFFF' }
  addTitle(s, slide.title)

  const { subtitle, bullets } = buildSlideContent(slide)

  if (subtitle && slide.layout !== 'speaker') {
    addBody(s, [subtitle], 1.15, 5.8)
    addBullets(s, bullets, 2.0, 5.8)
  } else {
    addBullets(s, bullets, 1.2, 5.8)
  }

  const imageRef = SLIDE_IMAGES[slide.layout]
  if (typeof imageRef === 'string') {
    await addSideImage(s, imageRef)
  } else if (Array.isArray(imageRef)) {
    await addSideImage(s, imageRef[0], 5.2, 1.1, 2.1, 4.8)
    await addSideImage(s, imageRef[1], 7.5, 1.1, 2.1, 4.8)
  }

  if (slide.layout === 'closing') {
    await addSideImage(s, assets.closing.qr, 6.6, 1.5, 2.5, 2.5)
  }
}

export async function exportPresentationAsPptx(): Promise<void> {
  const { default: pptxgen } = await import('pptxgenjs')
  const pptx = new pptxgen()
  pptx.layout = 'LAYOUT_16x9'
  pptx.author = 'Agustín Juárez'
  pptx.title = assets.intro.title
  pptx.subject = 'Puna Tech 2026 — IA en el agro'

  const intro = pptx.addSlide()
  intro.background = { color: '060404' }

  const cerro = await imageToDataUrl(assets.cerro)
  if (cerro) {
    intro.addImage({ data: cerro, x: 0, y: 0, w: 10, h: 5.625, sizing: { type: 'cover', w: 10, h: 5.625 } })
    intro.addShape(pptxgen.ShapeType.rect, {
      x: 0,
      y: 0,
      w: 10,
      h: 5.625,
      fill: { color: '060404', transparency: 45 },
      line: { color: '060404', transparency: 100 },
    })
  }

  intro.addText('PUNA TECH 2026', {
    x: 0.6,
    y: 0.5,
    w: 8.8,
    h: 0.4,
    fontSize: 11,
    color: '7D7D7D',
    align: 'center',
    fontFace: 'Courier New',
  })
  intro.addText(assets.intro.title, {
    x: 0.6,
    y: 2.2,
    w: 8.8,
    h: 1.2,
    fontSize: 34,
    bold: true,
    color: 'F2F2F2',
    align: 'center',
    fontFace: 'Arial',
  })
  intro.addText(assets.intro.subtitle, {
    x: 1.2,
    y: 3.5,
    w: 7.6,
    h: 0.8,
    fontSize: 18,
    color: 'C8C8C8',
    align: 'center',
    fontFace: 'Arial',
  })

  for (const slide of slides) {
    await addContentSlide(pptx, slide)
  }

  await pptx.writeFile({ fileName: 'puna-tech-charla.pptx' })
}
