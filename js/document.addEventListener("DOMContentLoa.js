document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("login").onclick = function(e) {
        sessionStorage.setItem("username", document.getElementById("mostrar_usuario").value)
        
    };
});