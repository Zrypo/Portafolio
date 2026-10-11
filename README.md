# Portafolio — David Rey (versión Bootstrap)

Mismo portafolio en HTML5, ahora con **Bootstrap 5.3.3** para el diseño (rejilla, tarjetas, formulario)
y clases propias en español (`tarjeta`, `boton-primario`, `seccion`, `etiqueta`...) para los colores.

## Cómo correrlo
Descomprime y abre `index.html` con doble clic. Bootstrap ya viene en `css/bootstrap.min.css`, no necesita internet
(solo las tipografías de Google lo necesitan; sin conexión se ve con Arial).

## Estructura
- `index.html` y `paginas/contacto.html`
- `css/bootstrap.min.css` (Bootstrap) y `css/estilos.css` (colores y clases en español)
- `js/bootstrap.bundle.min.js` (Bootstrap, solo para el menú) y `js/menu.js` (cierra el menú al tocar un enlace)
- `imagenes/` placeholders para reemplazar (mismo nombre de archivo)
- `videos/` y `documentos/` espacios pendientes (ver comentario en la sección `id="multimedia"`)
- `wireframe.png` / `wireframe.svg` y `mapa-navegacion.png` / `mapa-navegacion.svg`

## Nota
El menú desplegable del celular usa el JavaScript de Bootstrap (`js/`). El formulario y el resto de la página
siguen siendo HTML5 sin JavaScript. Desde 992px de ancho el menú se ve completo; por debajo se abre con el botón de las 3 rayitas.
