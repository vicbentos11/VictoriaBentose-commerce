//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {

    document.getElementById("sendBtn").onclick = function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
            sessionStorage.setItem('mostrar_usuario', username);
    
    };

});



