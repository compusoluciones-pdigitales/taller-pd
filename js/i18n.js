// TODO taller: el selector de idioma (#lang-toggle) no traduce nada, solo cambia el texto del botón.
// Falta:
// 1. Definir un diccionario de traducciones ES/EN, ej:
//    const textos = {
//      es: { inicio: 'Inicio', servicios: 'Servicios', ... },
//      en: { inicio: 'Home', servicios: 'Services', ... }
//    };
// 2. Marcar los elementos traducibles con un atributo data-i18n="clave" en index.html
//    (nav, hero, etc.).
// 3. Al hacer click en #lang-toggle, alternar entre "es"/"en", actualizar el texto
//    del botón y aplicar la traducción a todos los [data-i18n].
