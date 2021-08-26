//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("log.Button").onclick = function(e) {
            sessionStorage.setItem('user', document.getElementById('mostrar_user').value); // Entrega 2
        validarFormulario (e) ;
    };

});

function validarFormulario(){
    var usuario = document.getElementById('mostrar_user').value;
    if(usuario.lenght == 0){
        return;
    }
    var password = document.getElementById('password').value;
    if(password.lenght == 0){
        return;
    }
    else
    window.location.href = "./indexhome.html";
    
}


