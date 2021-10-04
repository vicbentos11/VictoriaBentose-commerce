var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            products = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCategoryHTML = document.getElementById("productCategory");
            let productsoldCountHTML = document.getElementById("productSoldCount");
        
            productNameHTML.innerHTML = products.name;
            productDescriptionHTML.innerHTML = products.description;
            productCurrencyHTML.innerHTML = products.currency + " " + products.cost;
            productCategoryHTML.innerHTML = products.category;
            productsoldCountHTML.innerHTML = products.soldCount;
        
            //Muestro las imagenes en forma de galería
            showImagesGallery(products.images);
        }
    });
});


fetch(PRODUCT_INFO_COMMENTS_URL)
.then(data => data.json())
.then(info => {
 
    for(let i=0; i < info.length; i++){
        let comments = info[i];

        let score = comments.score;
        let description = comments.description;
        let user = comments.user
        let date = comments.dateTime;

        var stars = ""; //Poniendo las estrellas en comentarios

        for(var estrellas = 0; estrellas < score; estrellas++)
            stars += '<span class ="fa fa-star" style="color: orange"/>';
        

        let comentarios = "" ;
        comentarios += `
        <a class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ stars +`</h4>
                        <small class="text-muted">` + user + `</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1"></h4>
                    <small class="text-muted">` + date + `</small>
                    </div>
                    <small class="text-muted">` + description + `</small>
                </div>
            </div>
        </a>
        `;
        document.getElementById("comments-list-container").innerHTML += comentarios;
     
    }
    });

//Entrega 4 - Productos Relacionados
fetch(PRODUCT_INFO_URL)
.then(data => data.json())
.then(info => {
 
    for(let i=0; i < info.relatedProducts.length; i++){
        let relatedProducts = info.relatedProducts[i];

        fetch(PRODUCTS_URL)
        .then(data => data.json())
        .then(info => {

        let namerelatedProducts = info[relatedProducts].name;
        let descriptionrelatedProducts = info[relatedProducts].description;
        let pricerelatedProducts = info[relatedProducts].cost;
        let currencyrelatedProducts = info[relatedProducts].currency;
        let imgrelatedProducts = info[relatedProducts].imgSrc;
        
        let productsrelated = "" ;
        productsrelated += `
        <div class="col-lg-3 col-md-4 col-6">
        <div class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="` + imgrelatedProducts + `" alt="">
            <h5 class="mb-1">`+ namerelatedProducts + `</h5>
            <div><small class="text-muted">` + descriptionrelatedProducts + `</small></div>
        <div><small class="text-muted">` + currencyrelatedProducts + " " + pricerelatedProducts + `</small></div>
        </div>
    </div>
        `;
        document.getElementById("relatedProducts").innerHTML += productsrelated;
     
    })
}
});



