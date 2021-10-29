//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//Entrega 5 - Armado del Carrito

     document.addEventListener("DOMContentLoaded", function (e) {

        fetch(CART_INFO_URL)
            .then(data => data.json())
            .then(info => {
                let nombre = info.articles[0].name;
                let cantidad = info.articles[0].count;
                let moneda = info.articles[0].currency;
                let unitCost = info.articles[0].unitCost;
                let imagen = info.articles[0].src;
                let subtotal = info.articles[0].unitCost * info.articles[0].count;

                document.getElementById("articleName").innerHTML = nombre;
                document.getElementById("articleImage").innerHTML = `<img src="` + imagen + `" alt="` + nombre + `" class="img-thumbnail">`;
                document.getElementById("articleCost").innerHTML = moneda + " " + unitCost;
                document.getElementById("articleCount").innerHTML = cantidad;
                document.getElementById("subtotal").innerHTML = subtotal;
    
                let costoenvio = document.getElementById("costoDeEnvio").value;

                // Selecciona por defecto el envio Premium.
                let porcentaje = 0.15;
                actualizarCostoenvio();
                actualizarSubtotal();
    
                // Actualiza la función actualizarCostoenvio() al cambiar el tipo de envio
                document.getElementById("goldradio").onchange = function () {
                    porcentaje = this.value;
                    actualizarCostoenvio()
                }
    
                document.getElementById("premiumradio").onchange = function () {
                    porcentaje = this.value;
                    actualizarCostoenvio()
                }
    
                document.getElementById("standardradio").onchange = function () {
                    porcentaje = this.value;
                    actualizarCostoenvio()
                }
                
                // Actualiza el subtotal al cambiar las cantidades
                function actualizarSubtotal() {
                    subtotal = unitCost * cantidad
                    document.getElementById("articleCount").value = cantidad;
                    document.getElementById("articleCount").innerHTML = cantidad;
                    document.getElementById("subtotal").innerHTML = moneda + " " + subtotal;
                    document.getElementById("subtotalDos").innerHTML = moneda + " " + subtotal;
                }
    
                // Actualiza el costo de envío y costo total.
                function actualizarCostoenvio() {
                    costoenvio = Math.round(subtotal * porcentaje)
                    document.getElementById("costoDeEnvio").innerHTML = moneda + " " + costoenvio;
                    let totalCost = subtotal + costoenvio;
                    document.getElementById("totalCost").innerHTML = moneda + " " + totalCost;
                }
    
                 // Actualizar el resto de las funciones al modificar las cantidades
                 document.getElementById("articleCount").onchange = function () {
                    cantidad = this.value;
                    actualizarSubtotal()
                    actualizarCostoenvio()
                }
            })
    });



