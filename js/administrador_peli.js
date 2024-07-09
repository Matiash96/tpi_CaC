Document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validar(this)) {
this.Submit();
    }
});

function limpiarError() {
var errores = document.getElementsByClassName('error');
for (let i=0; i<errores.length; i++) {
    errores[i].innerHTML = '';
}
};

function validar(formulario) {
limpiarError();

if ( formulario.titulo.value.length == 0){
    document.getElementById('errorTitulo').innerText= "Debe ingresar el nombre de una película.";
    formulario.titulo.focus();
    return false;
}

if ( formulario.genero.value.length == 0 ) {
    document.getElementById('errorGenero').innerText= "Debe ingresar el genero de la película.";
    formulario.genero.focus();
    return false;
}
if ( formulario.duracion.value.length == 0 ) {
    document.getElementById('errorDuracion').innerText= "Debe ingresar cuanto dura la película.";
    formulario.duracion.focus();
    return false;
}

}