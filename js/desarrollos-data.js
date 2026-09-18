// Fuente de datos del tracker "Progreso del taller" (sección #progreso).
// Cada Claude, al terminar de implementar una feature y hacer commit, agrega
// un objeto a este array (ver regla en CLAUDE.md). No es un TODO del taller,
// es la data que alimenta el tablero en vivo.
//
// Forma de cada entrada:
// {
//   feature: 'Nombre de la feature tal como aparece en el README',
//   autor: 'Nombre del autor del commit',
//   commit: 'hash corto del commit',
//   jiraUrl: 'https://tu-dominio.atlassian.net/browse/ABC-123' // opcional, null si no aplica
// }
const desarrollos = [];
