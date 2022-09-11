let pro = localStorage.getItem("ProID");
let objeto = PRODUCT_INFO_URL + pro + ".json";
let comentarios = PRODUCT_INFO_COMMENTS_URL + pro + ".json";
let arrayComentarios = [];

function showProduct(obj) {
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
       console.log(array[o])
       inner=`
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
    if(int===5){
        return`
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        `
    }else if(int===4){
        return`
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        `
    }else if(int===3){
        return`
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        `
    }else if(int===2){
        return`
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        `
    }else if(int===1){
        return`
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        `
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("username").innerHTML=localStorage.getItem("user");
    getJSONData(objeto).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showProduct(resultObj.data)
        }
    })
    getJSONData(comentarios).then(function (resultObj) {
        if (resultObj.status === "ok") {
            arrayComentarios = resultObj.data;
            showCom(arrayComentarios)
        }
    })
    
})

