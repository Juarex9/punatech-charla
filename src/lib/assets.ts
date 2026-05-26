export const assets = {
  speaker: '/mirando-al-horizonte.jpg',
  bridge: {
    background: '/cerro.png',
    ia: [
      { src: '/chatgpt.png', alt: 'ChatGPT' },
      { src: '/claude.png', alt: 'Claude' },
      { src: '/gemini.png', alt: 'Gemini' },
    ],
    blockchain: [
      { src: '/bitcoin.png', alt: 'Bitcoin' },
      { src: '/ethereum.png', alt: 'Ethereum' },
    ],
  },
  blockchain: {
    hero: { src: '/blockchain.png', alt: 'Blockchain' },
  },
  comparison: {
    chatbot: { src: '/chatgpt.png', alt: 'ChatGPT — chatbot convencional' },
    agent: { src: '/openclaw.png', alt: 'OpenClaw — agente de IA' },
  },
  closing: {
    punatech: { src: '/punatech.jpg', alt: 'Puna Tech' },
    saltadev: { src: '/saltadev.webp', alt: 'SaltaDev' },
    /** Drop your QR image at public/contacto-qr.png */
    qr: '/contacto-qr.png',
  },
} as const
