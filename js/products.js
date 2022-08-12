let currentProductsArray = [];
let cat = localStorage.getItem("catID");
let producto = PRODUCTS_URL+cat+ ".json";

function showProductsList(array){
    let htmlContentToAppend = "";
    htmlContentToAppend +=
    `<div class="text-center p-4">
        <h2>Productos</h2>
        <p class="lead">Verás aqui todos los productos de la categoría <strong>${array.catName}</strong></p>
    </div>
    `
    for(let i = 0; i < array.products.length; i++){
        
            htmlContentToAppend += `
            
                <div class="row">
                    <div class="col-3">
                        <img src="${array.products[i].image}" alt="" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${array.products[i].name} - ${array.products[i].currency} ${array.products[i].cost}</h4>
                            <small class="text-muted">${array.products[i].soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${array.products[i].description}</p>
                    </div>
                </div>
            `
        document.getElementById("pro-list-container").innerHTML = htmlContentToAppend;
    }
}



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(producto).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data
            showProductsList(currentProductsArray);
            console.log(currentProductsArray);
        }
    });
});
