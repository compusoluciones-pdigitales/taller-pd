# Taller PD — Sitio de práctica (MCP + Git + Jira)

Proyecto base para el taller práctico del equipo sobre cómo usar Claude conectado a MCP (Jira + GitHub) para hacer desarrollo end-to-end: crear un ticket, implementar, commit, push, PR y actualizar el ticket.

Es una sola página web en HTML/CSS/JS vanilla (sin frameworks ni build tools) con 15 áreas incompletas o rotas a propósito, marcadas con comentarios `TODO taller:`.

## Cómo levantarlo localmente

No requiere instalación. Dos opciones:

1. **Abrir directo:** doble click en `index.html` (o `Archivo > Abrir` en el navegador).
2. **Servidor local (recomendado):**
   ```bash
   python -m http.server 8000
   ```
   y abrir `http://localhost:8000` en el navegador.

## Áreas disponibles para el taller

Cada persona elige una y sigue el flujo completo (Jira → rama → implementación → commit → push → PR → actualizar ticket). Cada área vive en su propio archivo para evitar conflictos entre participantes.

| # | Área | Archivo(s) a tocar |
|---|------|---------------------|
| 1 | Nav responsive (menú hamburguesa en móvil) | `js/nav.js`, `styles.css` |
| 2 | CTA del hero (scroll suave a servicios) | `js/hero.js` |
| 3 | Validación del formulario de contacto | `js/contact-form.js` |
| 4 | Tarjetas de servicios dinámicas (desde array JS) | `js/cards.js`, `index.html` |
| 5 | Sección de testimonios (renderizado desde array JS) | `js/testimonials.js` |
| 6 | Toggle de modo oscuro con persistencia | `js/theme.js`, `styles.css` |
| 7 | Links del footer (anclas reales) | `index.html` |
| 8 | Página 404 | `404.html` |
| 9 | Barra de progreso de scroll en el header | `js/scroll-progress.js` |
| 10 | Botón "volver arriba" | `js/scroll-top.js` |
| 11 | Acordeón de preguntas frecuentes (FAQ) | `js/faq.js` |
| 12 | Formulario de newsletter con validación de email | `js/newsletter.js` |
| 13 | Modal de detalle al hacer click en una tarjeta de servicio | `js/service-modal.js` |
| 14 | Contador animado en la sección de estadísticas | `js/counter.js` |
| 15 | Selector de idioma ES/EN | `js/i18n.js`, `index.html` |

Busca el comentario `<!-- TODO taller: ... -->` o `// TODO taller: ...` en el archivo correspondiente para ver el detalle de qué falta implementar.

## 🚀 Desarrollos

Cada vez que alguien resuelve una feature, se agrega una fila aquí (ver regla en `CLAUDE.md`).

| Feature | Desarrollado por | Fecha | Commit |
|---------|-------------------|-------|--------|

