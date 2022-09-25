let pro = localStorage.getItem("ProID");
let objeto = PRODUCT_INFO_URL + pro + ".json";
let comentarios = PRODUCT_INFO_COMMENTS_URL + pro + ".json";
let arrayComentarios = [];

function showProduct(obj) {
    console.log(obj)
    htmlContentToAppend = `
                <div class="row">
                    <h1>${obj.name}</h1>
                    <h2>Precio</h2>
                    <span>${obj.currency}-${obj.cost}</span>
                    <h2>Descripcion</h2>
                    <span>${obj.description}</span>
                    <h2>Categoria</h2>
                    <span>${obj.category}</span>
                    <h2>Cantidad de vendidos</h2>
                    <span>${obj.soldCount}</span>
                    <h2>Imagenes ilustrativas</h2>
                    <img src="${obj.images[0]}" style="width: 20rem; height: 12rem;" alt="" class="img-thumbnail">
                    <img src="${obj.images[1]}" style="width: 20rem; height: 12rem;"alt="" class="img-thumbnail">
                    <img src="${obj.images[2]}" style="width: 20rem; height: 12rem;"alt="" class="img-thumbnail">
                    <img src="${obj.images[3]}" style="width: 20rem; height: 12rem;"alt="" class="img-thumbnail">
                    <hr> 
                    <h2>Comentarios</h2>
                </div>
            `

    document.getElementById("produ-info").innerHTML += htmlContentToAppend;

}
function showCom(array) {
    for (let o = 0; o < array.length; o++) {
        inner = `
       <div class="border">
       <span><strong>${array[o].user}</strong>-${array[o].dateTime}-${f(array[o].score)}</span>
       <br/>
       <span>${array[o].description}</span>
       <br/>
       </div>
       `
        document.getElementById("com-info").innerHTML += inner;
    }
}

function f(int) {
    if (int === 5) {
        return `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        `
    } else if (int === 4) {
        return `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        `
    } else if (int === 3) {
        return `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        `
    } else if (int === 2) {
        return `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        `
    } else if (int === 1) {
        return `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        `
    }
}
function setProID(id) {
    localStorage.setItem("ProID", id);
    window.location = "product-info.html"
    console.log(id)
}
function showRelacionados(array) {
    console.log(array)
    for(let f=0; f<array.length; f++){
    inner2 = `
    <div class="card" style="width: 18rem;" onclick="setProID(${array[f].id})">
        <img class="card-img-top" src="${array[f].image}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title text-center">${array[f].name}</h5>
        </div>
    </div>`
    document.getElementById("relatedProdu").innerHTML += inner2;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("username").innerHTML = localStorage.getItem("user");
    getJSONData(objeto).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showProduct(resultObj.data)
            showRelacionados(resultObj.data.relatedProducts)
        }
    })
    getJSONData(comentarios).then(function (resultObj) {
        if (resultObj.status === "ok") {
            arrayComentarios = resultObj.data;
            showCom(arrayComentarios)
        }
    })

})

