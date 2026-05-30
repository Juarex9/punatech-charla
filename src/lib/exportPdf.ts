const PDF_WIDTH = 1920
const PDF_HEIGHT = 1080

export async function captureElement(el: HTMLElement): Promise<HTMLCanvasElement> {
  const { default: html2canvas } = await import('html2canvas')

  return html2canvas(el, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    width: PDF_WIDTH,
    height: PDF_HEIGHT,
    windowWidth: PDF_WIDTH,
    windowHeight: PDF_HEIGHT,
  })
}

export async function buildPdfFromCanvases(canvases: HTMLCanvasElement[]): Promise<void> {
  if (!canvases.length) {
    throw new Error('No hay slides para exportar')
  }

  const { jsPDF } = await import('jspdf')
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [PDF_WIDTH, PDF_HEIGHT],
    compress: true,
  })

  canvases.forEach((canvas, index) => {
    if (index > 0) {
      pdf.addPage([PDF_WIDTH, PDF_HEIGHT], 'landscape')
    }

    const image = canvas.toDataURL('image/jpeg', 0.92)
    pdf.addImage(image, 'JPEG', 0, 0, PDF_WIDTH, PDF_HEIGHT, undefined, 'FAST')
  })

  pdf.save('puna-tech-charla.pdf')
}
