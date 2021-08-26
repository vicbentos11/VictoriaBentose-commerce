document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("logButton").onclick = function(e) {
        sessionStorage.setItem("user_id", document.getElementById("mostrar_usuario").value)
        
    };
});