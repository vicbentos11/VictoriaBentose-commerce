//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    fetch(PRODUCTS_URL)
    .then(data => data.json())
    .then(info => {
       mostrarListadoProductos(info);   //entrega 2 - para lograr reducir código

    });  
    var array = [];
    function mostrarListadoProductos(info){
        document.getElementById("products-list-container").innerHTML="";
    
    for(let i=0; i < info.length; i++){
        let listado = info[i];
        let nombre = listado.name;
        let descripcion = listado.description;
        let costo = listado.cost;
        let moneda = listado.currency;
        let imagen = listado.imgSrc;
        let cantidadesVendidas = listado.soldCount;

        //Modificación de Entrega 6 para visualizar en cuadrícula los Productos
         let Productos = "";
         Productos += `
                  <div class="col-md-4">
                    <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                      <img class="bd-placeholder-img card-img-top"  src="` + imagen + `">
                      <div class="card-body">
                      <h3 class="m-0">`+ nombre + `</h3>
                      <p class="card-text">`+ descripcion +`</p>
                      <div><small class="text-muted">` + "Cant. vendidas: " + cantidadesVendidas + `</small></div>   
                        <small class="text-muted">` + moneda +`  `+ costo + `</small>
                      </div>
                    </a>
                  </div>
               `

        document.getElementById("products-list-container").innerHTML += Productos;
        array.push(listado);
        
    }
   }
    document.getElementById("precioAscendente").onclick = function() {
        fetch(PRODUCTS_URL)
            .then(data => data.json())         
            .then(info => {   
            info.sort(function(previous,next) {
                return parseInt(previous.cost) - parseInt(next.cost);
            })
            mostrarListadoProductos(info);
        })
    }
    
    document.getElementById("precioDescendente").onclick = function() {
        fetch(PRODUCTS_URL)
            .then(data => data.json())         
            .then(info => {   
            info.sort(function(previous,next) {
                return parseInt(next.cost) - parseInt(previous.cost);
            })
            mostrarListadoProductos(info);
        })
    }

    document.getElementById("sortByRelevancia").onclick = function() {
        fetch(PRODUCTS_URL)
            .then(data => data.json())         
            .then(info => {   
            info.sort(function(previous,next) {
                return parseInt(next.soldCount) - parseInt(previous.soldCount);
            })
            mostrarListadoProductos(info);
        })
    }
  
    document.getElementById("rangeFilterPrecio").onclick = function() {
        let precioMin = document.getElementById("rangeFilterPrecioMin").value;
        let precioMax = document.getElementById("rangeFilterPrecioMax").value;

        fetch(PRODUCTS_URL)
            .then(data => data.json())         
            .then(info => {   

            Filtro = [];    

            for (let i = 0; i < info.length; i++) {
                let costo = info[i].cost;                    
                if (costo >= precioMin && costo <= precioMax) {      
                    Filtro.push(info[i]);
                }
            }
            mostrarListadoProductos(Filtro); 
        })
    }

    document.getElementById("clearRangeFilter").onclick = function() {
        document.getElementById("rangeFilterPrecioMin").value = "";
        document.getElementById("rangeFilterPrecioMax").value = "";
        fetch(PRODUCTS_URL)
            .then(data => data.json())         
            .then(info => { 
            mostrarListadoProductos(info);              
            })
    }
});
