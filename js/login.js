//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("login").onclick = function(e) {
            sessionStorage.setItem('username', document.getElementById('mostrar_usuario')).value;
        validarFormulario (e) ;
    };

});

function validarFormulario(){
    var usuario = document.getElementById('mostrar_usuario').value;
    if(usuario.lenght == 0){
        return;
    }
    var password = document.getElementById('password').value;
    if(password.lenght == 0){
        return;
    }
    else
    window.location.href = "./indexhome.html"; //Para indicarle al boton a que ventana ir
    
}


