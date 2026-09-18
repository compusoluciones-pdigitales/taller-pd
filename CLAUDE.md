# CLAUDE.md — Taller PD

Instrucciones para Claude Code al trabajar en este repositorio (taller de práctica MCP + Git + Jira).

## Regla: registrar cada feature desarrollada en README.md

Cuando termines de implementar el TODO de una feature de este taller (cualquiera de las 15 listadas en `README.md`) y ya hayas hecho el commit correspondiente, debes agregar una fila a la tabla de la sección `## 🚀 Desarrollos` en `README.md`.

Pasos:

1. **No asumas quién es la persona.** No uses el nombre configurado en instrucciones globales del usuario ni el de sesiones anteriores. Obtén el autor real del commit que acaba de crearse, por ejemplo con:
   ```bash
   git log -1 --pretty=format:'%an <%ae>'
   ```
   o, si el commit todavía no existe, con `git config user.name` / `git config user.email` del entorno local de quien está desarrollando esa feature en ese momento.
2. Agrega una fila a la tabla con:
   - **Feature**: nombre de la feature tal como aparece en la tabla de "Áreas disponibles" (ej. `Acordeón de preguntas frecuentes (FAQ)`).
   - **Desarrollado por**: el nombre (y opcionalmente el usuario/email) obtenido del commit — nunca el usuario de las instrucciones globales de Claude.
   - **Fecha**: fecha del commit (`%ad` o la fecha actual si aplica).
   - **Commit**: hash corto del commit (`git log -1 --pretty=format:'%h'`).
3. Haz esto como parte del mismo flujo de trabajo de la feature (puede ir en el mismo commit de la implementación o en un commit separado tipo `docs: update desarrollos table`), pero siempre después de confirmar que el commit de la feature ya existe.
4. Si la fila para esa feature ya existe (alguien la repitió o la corrigió), actualiza esa fila en vez de duplicarla.

El objetivo es que la tabla final muestre a todo el equipo qué se desarrolló y quién lo hizo, usando la autoría real de cada commit — no el usuario propietario del repositorio.
