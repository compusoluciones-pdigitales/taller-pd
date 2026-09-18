// Fuente de datos del tracker "Progreso del taller" (sección #progreso).
// Cada Claude, al terminar de implementar una feature y hacer commit, agrega
// un objeto a este array (ver regla en CLAUDE.md). No es un TODO del taller,
// es la data que alimenta el tablero en vivo.

// Base para armar el link al commit en GitHub (repo owner/name).
const GITHUB_REPO_URL = 'https://github.com/compusoluciones-pdigitales/taller-pd';

// Forma de cada entrada:
// {
//   feature: 'Nombre de la feature tal como aparece en el README',
//   autor: 'Nombre del autor del commit',
//   commit: 'hash corto del commit',
//   jiraUrl: 'https://tu-dominio.atlassian.net/browse/ABC-123' // opcional, null si no aplica
// }
const desarrollos = [
  {
    feature: 'Ejemplo: año dinámico en el footer (demo, fuera de la lista del taller)',
    autor: 'cap-hector',
    commit: '6983cda',
    jiraUrl: 'https://siclikcomercio.atlassian.net/browse/SC2026-1380'
  },
  // Ejemplos de las áreas mencionadas en la presentación del taller
  // (slide "El mini-proyecto: sitio con huecos") — solo para mostrar cómo
  // se ve el tracker antes de que el equipo empiece a registrar las suyas.
  {
    feature: 'Ejemplo: Header / nav',
    autor: 'Ejemplo demo',
    commit: null,
    jiraUrl: null
  },
  {
    feature: 'Ejemplo: Hero CTA',
    autor: 'Ejemplo demo',
    commit: null,
    jiraUrl: null
  },
  {
    feature: 'Ejemplo: Toggle de modo oscuro (en el demo de la presentación sería el ticket TALLER-14)',
    autor: 'Ejemplo demo',
    commit: null,
    jiraUrl: null
  },
  {
    feature: 'Ejemplo: Página 404',
    autor: 'Ejemplo demo',
    commit: null,
    jiraUrl: null
  },
  {
    feature: 'Acordeón de preguntas frecuentes (FAQ)',
    autor: 'David Barajas',
    commit: 'cecb040',
    jiraUrl: 'https://siclikcomercio.atlassian.net/browse/SC2026-1383'
  },
  {
    feature: 'Nav responsive (menú hamburguesa en móvil)',
    autor: 'Fernando Espinosa [MIC]',
    commit: 'c69be37',
    jiraUrl: 'https://nuevoclik.atlassian.net/browse/SS2026-565'
  },
  {
    feature: 'Banner principal y footer del sitio (incluye área #7: links del footer)',
    autor: 'arturoGodinez',
    commit: '388dba9',
    jiraUrl: 'https://tesselar.atlassian.net/browse/SSC-1369'
  },
  {
    feature: 'Toggle de modo oscuro con persistencia',
    autor: 'Jesús Arreola [GDL]',
    commit: 'ccc4ff0',
    jiraUrl: 'https://nuevoclik.atlassian.net/browse/SS2026-564'
  },
  {
    feature: 'Sección de testimonios (renderizado desde array JS)',
    autor: 'Rodrigo Loy [GDL]',
    commit: 'c14c301',
    jiraUrl: 'https://tesselar.atlassian.net/browse/SSC-1366'
  },
  {
    feature: 'Formulario de newsletter con validación',
    autor: 'Clara Villarreal [GDL]',
    commit: 'c8c4c2a',
    jiraUrl: 'https://tesselar.atlassian.net/browse/SSC-1367'
  },
  {
    feature: 'Botón "volver arriba"',
    autor: 'Marco Hernandez',
    commit: '6631096',
    jiraUrl: null
  },
  {
    feature: 'Página 404',
    autor: 'Joel Valtierra',
    commit: 'c47f0cd',
    jiraUrl: 'https://nuevoclik.atlassian.net/browse/SS2026-566'
  },
  {
    feature: 'Página 404 (título y copy)',
    autor: 'OrlandoTaf',
    commit: '2f45256',
    jiraUrl: 'https://siclikcomercio.atlassian.net/browse/SC2026-1386'
  }
];
