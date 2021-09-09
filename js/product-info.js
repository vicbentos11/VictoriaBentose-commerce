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
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCategoryHTML = document.getElementById("productCategory");
            let productsoldCountHTML = document.getElementById("productSoldCount");
        
            productNameHTML.innerHTML = products.name;
            productDescriptionHTML.innerHTML = products.description;
            productCostHTML.innerHTML = products.cost;
            productCurrencyHTML.innerHTML = products.currency;
            productCategoryHTML.innerHTML = products.category;
            productsoldCountHTML.innerHTML = products.soldCount;

            //Muestro las imagenes en forma de galería
            showImagesGallery(products.images);
        }
    });
});