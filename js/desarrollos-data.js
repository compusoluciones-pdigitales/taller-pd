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
    jiraUrl: null
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
  }
];
