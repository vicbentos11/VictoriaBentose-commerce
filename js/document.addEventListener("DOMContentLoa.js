document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("logButton").onclick = function(e) {
        sessionStorage.setItem("usuario", document.getElementById("SU ID DEL IMPUT USUARIO").value)
        
    };
});