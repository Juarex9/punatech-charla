export interface Slide {
  n: number
  layout: string
  title: string
  subtitle?: string
  items?: ([string, string] | [string, string, string])[]
  cols?: string[][]
  colNames?: string[]
  benefits?: [string, string][]
  steps?: [string, string][]
  tools?: string[]
  quote?: string
  footer?: string
  tag?: string
  meta?: string
  speaker?: string
  role?: string
  note?: string
}

/** 14 slides de contenido — cover en intro con cerro.png */
export const slides: Slide[] = [
  {
    n: 2,
    layout: 'speaker',
    title: '¿Quién soy?',
    speaker: 'Agustín Juárez',
    role: 'Software Developer & AI Engineer',
    meta: 'SaltaDev · Comunidad tech de Salta',
    subtitle:
      'Especialista en desarrollo de software e implementación de soluciones con agentes de IA.',
  },
  {
    n: 3,
    layout: 'bridge',
    title: 'IA, BLOCKCHAIN?',
    subtitle:
      'Suenan futuristas. Pero pueden estar más cerca de nosotros de lo que pensamos.',
    tag: 'Tecnologías que ya escuchamos · aplicables al campo',
  },
  {
    n: 4,
    layout: 'why-today',
    title: '¿Por qué hablar de IA en el campo hoy?',
    subtitle:
      'El agro argentino enfrenta desafíos reales: costos crecientes, clima impredecible y márgenes cada vez más ajustados. La tecnología ya no es una promesa futura — está disponible hoy y a costos accesibles.',
    benefits: [
      ['Mayor precisión', 'Decisiones basadas en datos, no en intuición'],
      ['Menor costo operativo', 'Automatización de tareas repetitivas y monitoreo remoto'],
      ['Ventaja competitiva', 'Quien adopta primero, lidera el mercado'],
    ],
  },
  {
    n: 5,
    layout: 'comparison',
    title: '¿Qué es la IA y qué puede hacer por vos?',
    subtitle:
      'La diferencia clave no está solo en responder preguntas, sino en actuar. La IA tradicional entrega información; un agente de IA puede tomar iniciativa y ejecutar tareas.',
    colNames: ['IA tradicional', 'Agente de IA'],
    cols: [
      ['Es REACTIVO', 'Entrega de datos PASIVA', 'Alcance LIMITADO', 'Uso muy comercial'],
      ['PROACTIVO', 'Ejecución de tareas ACTIVA', 'Razonamiento', 'Tiene memoria'],
    ],
  },
  {
    n: 6,
    layout: 'flow',
    title: 'Entendiendo a un Agente',
    items: [
      ['01', '¿Cuál es el problema?'],
      ['02', '¿Qué datos necesito?'],
      ['03', 'El agente recibe esos datos'],
      ['04', '¿Qué hace con eso?'],
      ['05', '¿Cómo me avisa?'],
      ['06', 'El agente aprende'],
    ],
    note: 'No es magia. Es alguien que escucha, investiga, y te aconseja. Pensalo como un asistente digital que entiende tu campo, conecta información de distintas fuentes y te devuelve acciones claras.',
  },
  {
    n: 7,
    layout: 'grid',
    title: 'Casos de Uso Reales en el Agro',
    items: [
      [
        '01',
        'Monitoreo Automatizado y Alertas Tempranas',
        'Seguimiento continuo de lotes para detectar variaciones en el estado del cultivo y generar alertas tempranas ante cambios críticos.',
      ],
      [
        '02',
        'Optimización de Insumos',
        'Aplicación más eficiente de fertilizantes, agua y fitosanitarios, ajustando dosis y momentos de intervención según la necesidad real.',
      ],
      [
        '03',
        'Diagnóstico de Plagas y Enfermedades',
        'Identificación temprana de anomalías, focos de plagas y señales de enfermedades para actuar antes de que se extiendan.',
      ],
      [
        '04',
        'Centralización y procesamiento de Datos',
        'Integración de datos satelitales, climáticos y operativos en una sola plataforma para analizar, comparar y tomar decisiones más rápido.',
      ],
    ],
  },
  {
    n: 8,
    layout: 'versus',
    title: 'Satélites vs. Drones: La Alternativa Inteligente',
    colNames: ['Drones', 'Satélites'],
    cols: [
      [
        'Alto costo de adquisición y operación',
        'Requieren piloto habilitado',
        'Cobertura limitada por vuelo',
        'Dependen del clima local',
        'Permisos ANAC necesarios',
      ],
      [
        'Costo accesible o gratuito (Sentinel, Landsat)',
        'Sin operador ni permisos',
        'Cobertura total del lote automáticamente',
        'Imágenes cada 3 a 5 días',
        'Historial de años disponible',
      ],
    ],
  },
  {
    n: 9,
    layout: 'bullets',
    title: 'Blockchain: Trazabilidad y Confianza',
    subtitle:
      'La blockchain permite registrar de forma inmutable cada etapa del proceso productivo: desde la siembra hasta la exportación.',
    items: [
      [
        'Certificación de origen',
        'El comprador verifica de dónde viene el producto y cómo fue producido',
      ],
      [
        'Acceso a mercados premium',
        'Europa y EE.UU. exigen trazabilidad para productos sustentables',
      ],
      [
        'Contratos inteligentes',
        'Pagos automáticos al cumplir condiciones preestablecidas',
      ],
    ],
  },
  {
    n: 10,
    layout: 'region',
    title: 'El NOA: Una Región con Potencial Único',
    subtitle:
      'El Noroeste Argentino tiene características especiales que lo hacen ideal para adoptar tecnología satelital: grandes extensiones, diversidad de cultivos y conectividad creciente.',
    cols: [
      [
        'Cultivos extensivos',
        'Soja, maíz, girasol en grandes lotes monitoreables por satélite',
      ],
      [
        'Cultivos regionales',
        'Vid, caña de azúcar, tabaco con potencial de trazabilidad blockchain',
      ],
      [
        'Conectividad 4G',
        'Cobertura en expansión que habilita el uso de sensores y apps en campo',
      ],
    ],
  },
  {
    n: 11,
    layout: 'apps',
    title: 'apps reales',
    items: [
      ['Zafra AI', 'Asistente agronómico para el norte argentino'],
      ['VitisTrust', 'Trazabilidad blockchain para viñedos'],
    ],
  },
  {
    n: 12,
    layout: 'start',
    title: '¿Cómo Empezar? Tres Pasos Concretos',
    steps: [
      ['Explorar herramientas', 'Hay opciones gratuitas o de bajo costo disponibles hoy mismo'],
      ['Conectar con asesores', 'Acompañamiento para elegir la solución adecuada a tu lote'],
      ['Pilotar y medir', 'Probar en un lote chico, medir resultados y escalar con confianza'],
    ],
    footer:
      'No hace falta una inversión millonaria para empezar. Lo importante es dar el primer paso y aprender haciendo.',
    subtitle:
      'No se necesita ser programador. La clave es saber preguntar bien: describir el problema, el cultivo, la zona y el objetivo que querés lograr.',
    tools: [
      'Asistente de diagnóstico',
      'Consultor de clima',
      'Calculadora de insumos',
      'Buscador de precios',
    ],
  },
  {
    n: 13,
    layout: 'future',
    title: 'El futuro del agro',
    subtitle: 'La tecnología no reemplaza al productor — lo potencia. Quien aprende a usarla hoy, tendrá una ventaja enorme mañana.',
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
    note: 'El próximo salto productivo no depende de una sola herramienta, sino de combinar infraestructura digital sólida con inteligencia aplicada al día a día del campo.',
  },
  {
    n: 14,
    layout: 'closing',
    title: 'Gracias por ver',
    footer: 'www.agustinjz.dev',
    tag: '#PunaTech2026',
  },
]
