//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    fetch(PRODUCTS_URL)
    .then(data => data.json())
    .then(info => {
        for(let i=0; i < info.length; i++){
            let listado = info[i];
            let nombre = listado.name;
            let descripcion = listado.description;
            let costo = listado.cost;
            let moneda = listado.currency;
            let imagen = listado.imgSrc;
            let cantidadesVendidas = listado.soldCount;

            document.getElementById("products-list-container").innerHTML += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + imagen + `" alt="` +  `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ nombre +`</h4>
                            <small class="text-muted">` + moneda + costo + `</small>
                        </div>
                        <p class="mb-1">` + descripcion + `</p>
                    </div>
                </div>
            </a>
            `

        }
    });  

});
