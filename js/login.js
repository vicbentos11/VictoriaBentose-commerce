//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

document.getElementsByTagName("button")[0].addEventListener("click", function()){

    const userInput = document.getElementById("user")
    const passwordInput = document.getElementById("password")

    if (userInput.value && passwordInput.value){
        window.location.href = "./index.html"
    }
}

