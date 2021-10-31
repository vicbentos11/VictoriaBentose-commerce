//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//entrega 6

document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("guardarCambios").onclick = function () {

        let nombres = document.getElementById("nombres").value;
        let apellidos = document.getElementById("apellidos").value;
        let edad = document.getElementById("edad").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;

        userData = { "nombres": nombres, "apellidos": apellidos, "edad": edad, "telefono": telefono, "email": email };

        localStorage.setItem('userData', JSON.stringify(userData))

    };

    let mostrarDatos = JSON.parse(localStorage.getItem('userData'))

    let nombresingresados = mostrarDatos.nombres
    let apellidosingresados = mostrarDatos.apellidos
    let edadingresada = mostrarDatos.edad
    let telefonoingresado = mostrarDatos.telefono
    let emailingresado = mostrarDatos.email

    document.getElementById("nombres").value = nombresingresados;
    document.getElementById("apellidos").value = apellidosingresados;
    document.getElementById("edad").value = edadingresada;
    document.getElementById("telefono").value = telefonoingresado;
    document.getElementById("email").value = emailingresado;

});

