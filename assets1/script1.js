document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

let nombre = document.getElementById('txtNombre').value.trim();
let asunto = document.getElementById ('txtAsunto').value.trim();
let mensaje = document.getElementById ('txtMensaje').value.trim(); 

//mostrar resultados
let resultado = document.getElementById('resultado');       


let regexNombreApellido = /^[a-zA-Z]+$/;
let regexAsunto = /^[a-zA\s]+$/;
let regexMensaje = /^[a-zA\s]+$/; 

if(nombre === '' || asunto === ''|| mensaje === '' ){
    resultado.innerHTML = '<p class = "error"> Todos los campos son obligatorios.</p>';
} else if (!regexNombreApellido.test(nombre)){
    resultado.innerHTML = '<p class="error">El nombre deben contener solo letras.</p>';
} else if (!regexAsunto.test(asunto)){
    resultado.innerHTML = '<p class="error">El mensaje debe contener solo letras y espacios.</p>';
} else if (!regexMensaje.test(mensaje)){
    resultado.innerHTML = '<p class="error">El mensaje debe contener solo letras y espacios.</p>';
} else {
    resultado.innerHTML = '<p class= "exito">Formulario enviado exitosamente!</p>';
    document.getElementById('formulario').reset();
}

});
