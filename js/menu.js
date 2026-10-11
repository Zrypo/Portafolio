// Cierra el menú desplegable cuando se toca un enlace (en celular).
// Sin esto, el menú se quedaría abierto tapando la sección a la que se navegó.
var menu = document.getElementById('menu-principal');

document.querySelectorAll('#menu-principal .enlace').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
