# CLAUDE.md — Taller PD

Instrucciones para Claude Code al trabajar en este repositorio (taller de práctica MCP + Git + Jira).

## Regla: registrar cada feature desarrollada en el tracker del sitio

El sitio tiene una sección visible **"Progreso del taller"** (`#progreso` en `index.html`) que muestra en vivo qué feature se desarrolló, quién y el link al ticket de Jira si existe. Se alimenta de `js/desarrollos-data.js`.

Cuando termines de implementar el TODO de una feature de este taller (cualquiera de las 15 listadas en `README.md`) y ya hayas hecho el commit correspondiente, debes agregar un objeto al array `desarrollos` en `js/desarrollos-data.js`.

Pasos:

1. **No asumas quién es la persona.** No uses el nombre configurado en instrucciones globales del usuario ni el de sesiones anteriores. Obtén el autor real del commit que acaba de crearse, por ejemplo con:
   ```bash
   git log -1 --pretty=format:'%an'
   ```
2. Agrega un objeto al final del array `desarrollos` en `js/desarrollos-data.js` con esta forma:
   ```js
   {
     feature: 'Nombre de la feature tal como aparece en el README', // ej. 'Acordeón de preguntas frecuentes (FAQ)'
     autor: 'Nombre obtenido del commit',
     commit: 'hash corto', // git log -1 --pretty=format:'%h'
     jiraUrl: 'https://tu-dominio.atlassian.net/browse/ABC-123' // o null si no se creó ticket
   }
   ```
3. Haz commit de este cambio (puede ir en el mismo commit de la implementación o en uno separado tipo `docs: update progreso tracker`), siempre después de confirmar que el commit de la feature ya existe.
4. Si la entrada para esa feature ya existe (alguien la repitió o la corrigió), actualiza ese objeto en vez de duplicarlo.
5. Push del cambio para que al hacer `git pull` + refrescar el navegador, la sección `#progreso` del sitio se actualice en vivo.

El objetivo es que el sitio mismo (no un doc externo) muestre a todo el equipo, en vivo durante el taller, qué se desarrolló y quién lo hizo — usando la autoría real de cada commit, no el usuario propietario del repositorio.
