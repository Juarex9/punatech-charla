export interface Slide {
  n: number
  layout: string
  title: string
  subtitle?: string
  items?: [string, string][]
  cols?: string[][]
  quote?: string
  footer?: string
  tag?: string
  meta?: string
  speaker?: string
  role?: string
  note?: string
}

export const slides: Slide[] = [
  {
    n: 1,
    layout: 'cover',
    title: 'Transformando el agro con agentes de IA',
    subtitle: 'AI & Blockchain en el agro',
    tag: 'Puna Tech 2026 · Salta',
  },
  {
    n: 2,
    layout: 'speaker',
    title: '¿Quién soy?',
    speaker: 'Agustín Juárez',
    role: 'Software Developer & AI Engineer',
    meta: 'SaltaDev · Comunidad tech de Salta',
    subtitle: 'Me dedico a desarrollar software e implementar soluciones con agentes de IA. En SaltaDev ayudo a organizar Puna Tech y a conectar a quienes quieren construir con tecnología en la provincia.',
  },
  {
    n: 3,
    layout: 'bridge',
    title: 'IA, BLOCKCHAIN?',
    subtitle: 'Suenan futuristas. Pero pueden estar más cerca de nosotros de lo que pensamos.',
    tag: 'Tecnologías que ya escuchamos · aplicables al campo',
  },
  {
    n: 4,
    layout: 'comparison',
    title: 'IA vs Agente de IA',
    cols: [
      [
        'Es REACTIVO',
        'Entrega de datos PASIVA',
        'Alcance LIMITADO',
        'Uso muy comercial',
      ],
      [
        'PROACTIVO',
        'Ejecución de tareas ACTIVA',
        'Razonamiento',
        'Tiene memoria',
      ],
    ],
  },
  {
    n: 5,
    layout: 'grid',
    title: 'Los agentes de IA en el campo',
    items: [
      ['01', 'Monitoreo Automatizado y Alertas Tempranas'],
      ['02', 'Optimización de Insumos'],
      ['03', 'Diagnóstico de Plagas y Enfermedades'],
      ['04', 'Centralización y procesamiento de Datos'],
    ],
  },
  {
    n: 6,
    layout: 'bullets',
    title: 'Blockchain',
    items: [
      ['Registro inmutable', 'Ninguna modificación posible después de que se grabó'],
      ['Trazabilidad y Confiabilidad', 'El consumidor sabe de dónde viene lo que compra'],
      ['Contratos Inteligentes', 'Pagos sin intermediarios cuando se cumplen las condiciones'],
    ],
  },
  {
    n: 7,
    layout: 'flow',
    title: 'Entendiendo a un agente',
    items: [
      ['01', '¿Cuál es el problema?'],
      ['02', '¿Qué datos necesito?'],
      ['03', 'El agente recibe esos datos'],
      ['04', '¿Qué hace con eso?'],
      ['05', '¿Cómo me avisa?'],
      ['06', 'El agente aprende'],
    ],
    note: 'No es magia. Es alguien que escucha, investiga, y te aconseja.',
  },
  {
    n: 8,
    layout: 'apps',
    title: 'Apps reales',
    items: [
      ['Zafra AI', 'Asistente agronómico para el norte argentino'],
      ['VitisTrust', 'Trazabilidad blockchain para viñedos'],
    ],
  },
  {
    n: 9,
    layout: 'no-code',
    title: '¿Y si no sé programar?',
    subtitle: 'No se necesita ser programador. La clave es saber preguntar bien.',
    items: [
      ['🌿', 'Asistente de diagnóstico'],
      ['🌤️', 'Consultor de clima'],
      ['💧', 'Calculadora de insumos'],
      ['💰', 'Buscador de precios'],
    ],
  },
  {
    n: 10,
    layout: 'future',
    title: 'El futuro del agro',
    cols: [
      [
        'Infraestructura',
        'Conectividad rural',
        'Sensores IoT',
        'Drones y maquinaria autónoma',
        'Análisis satelital',
        'Datos en la nube',
      ],
      [
        'Inteligencia',
        'Agentes predictivos',
        'Diagnóstico automático',
        'Decisiones automatizadas',
        'IA generativa como consultor agronómico',
      ],
    ],
  },
  {
    n: 11,
    layout: 'closing',
    title: 'Gracias por ver',
    footer: 'www.agustinjz.dev',
    tag: '#PunaTech2026',
  },
]
