document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("logButton").onclick = function(e) {
        localStorage.setItem("user_id", document.getElementById("SU ID DEL IMPUT USUARIO").value)
        
    };
});