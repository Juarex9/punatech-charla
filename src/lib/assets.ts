export const assets = {
  pdf: '/punatech-presentation.pdf',
  cerro: '/cerro.png',
  intro: {
    title: 'Transformando el agro con agentes de IA',
    subtitle: 'AI & Blockchain en el agro',
  },
  speaker: '/mirando-al-horizonte.jpg',
  bridge: {
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
    chatbot: { src: '/chatgpt.png', alt: 'ChatGPT' },
    agent: { src: '/openclaw.png', alt: 'OpenClaw' },
  },
  closing: {
    background: '/cerro.png',
    punatech: { src: '/punatech.jpg', alt: 'Puna Tech' },
    saltadev: { src: '/saltadev.webp', alt: 'SaltaDev' },
    qr: '/contacto-qr.png',
  },
} as const
