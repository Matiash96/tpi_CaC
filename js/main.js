// Escuchamos el botón de navegación
const navbarToggler = document.querySelector('.navbar-toggler');
// Obtenemos la barra de navegación
const navbar = document.querySelector('.navbar');

// Agregamos un evento de clic al botón de navegación
navbarToggler.addEventListener('click', () => {
    // Verificamos si la ventana tiene un ancho menor o igual a 768px
    if (window.innerWidth <= 991) {
        // Obtenemos el estado del menú
        const isCollapsed = navbarToggler.getAttribute('aria-expanded') === 'true';

        // Ajustamos la altura de la barra de navegación dependiendo del estado del menú
        if (!isCollapsed) {
            navbar.style.height = '7vh'; // Menú colapsado
        } else {
            navbar.style.height = '33vh'; // Menú expandido
        }
    }
});

// Restablecemos la altura de la barra de navegación cuando la ventana es más ancha que 768px
window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        navbar.style.height = '10vh';
    }
});



//Validacion de formulario de la pagina de registro

document.getElementById("myForm").addEventListener('botonIniciarSesion', Function(event)) {
    event.preventDefault();
    console.log(this);
    if (validar(this)){
this.Submit();
    }
};

function limpiarError() {
var errores = document.getElementsByClassName('error');
for (let i=0; i<errores.length; i++) {
    errores[i].innerHTML = '';
}
}

function validar(formulario) {
limpiarError();

    if ( formulario.nombre.value.length == 0 ) {
    document.getElementById('errorNombre').innerText = "Completar Campo";
    formulario.nombre.focus();
    return false;
}
if ( formulario.apellido.value.length == 0 ) {
    document.getElementById('errorApellido').innerText = "Completar Campo";
    formulario.apellido.focus();
    return false;
}

var exReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
if (!expReg.test(formulario.email.value)){
    document.getElementById('errorEmail').innerText = "Completar Campo";
    formulario.email.focus();
    return false;
}

if(formulario.password.value.trim().length  == 0){
    document.getElementById('errorPassword').innerText = "Completar Campo";
    formulario.contraseña.focus();
    return false;
}
if(formulario.password2.value.length != formulario.password.value.length){
    document.getElementById('errorPassword').innerText = "Las contraseñas son distintas";
    formulario.contraseña2.focus();
    return false;
}
if(formulario.pais.value == '' ){
    document.getElementById('errorPais').innerText = "Seleccione un pais";
    formulario.pais.focus();
    return false
}
if(formulario.terminos.checked){
    document.getElementById('errorTerminos').innerText = "Debe aceptar terminos y condiciones";
    formulario.terminos.focus();
    return false
}

alert ("Se generó registro correctamente");
return true;
}