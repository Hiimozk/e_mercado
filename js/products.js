let currentProductsArray = [];
let cat = localStorage.getItem("catID");
let producto = PRODUCTS_URL+cat+ ".json";
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
let produ;
let a;
function showTitulo(titulo){
    document.getElementById("categoriaName").innerHTML=titulo.catName  
}

function showProductsList(produ){
    for(let i = 0; i < produ.length; i++){
        
        
            htmlContentToAppend = `
            
                <div class="row">
                    <div class="col-3">
                        <img src="${produ[i].image}" alt="" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${produ[i].name} - ${produ[i].currency} ${produ[i].cost}</h4>
                            <small class="text-muted">${produ[i].soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${produ[i].description}</p>
                    </div>
                </div>
            `
            
        document.getElementById("pro-list-container").innerHTML += htmlContentToAppend;
    }
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(producto).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data
            produ=currentProductsArray.products;
            //console.log(typeof(produ))
            //console.log(produ)
            showProductsList(produ);
            showTitulo(currentProductsArray);
        }
    });
    document.getElementById("username").innerHTML=localStorage.getItem("user");
    
})

document.getElementById("sortAsc").addEventListener("click", function(){
        produ.sort((o1, o2)=>{
            if(o1.name<o2.name){
                return -1;
            }else if(o1.name>o2.name){
                return 1;
            }else{
                return 0;
            }
        })
        document.getElementById("pro-list-container").innerHTML = "";
        showProductsList(produ);
        
});

document.getElementById("sortDesc").addEventListener("click", function(){
    produ.sort((o1, o2)=>{
        if(o1.name>o2.name){
            return -1;
        }else if(o1.name<o2.name){
            return 1;
        }else{
            return 0;
        }
    })
    document.getElementById("pro-list-container").innerHTML = "";
    showProductsList(produ);
    
});

document.getElementById("sortDesc").addEventListener("click", function(){
    produ.sort((o1, o2)=>{
        if(o1.name>o2.name){
            return -1;
        }else if(o1.name<o2.name){
            return 1;
        }else{
            return 0;
        }
    })
    document.getElementById("pro-list-container").innerHTML = "";
    showProductsList(produ);
    
});

document.getElementById("priceord").addEventListener("click", function(){
    produ.sort((o1, o2)=>{
        if(o1.cost>o2.cost){
            return -1;
        }else if(o1.cost<o2.cost){
            return 1;
        }else{
            return 0;
        }
    })
    document.getElementById("pro-list-container").innerHTML = "";
    showProductsList(produ);
    
});

document.getElementById("sortByCount").addEventListener("click", function(){
    produ.sort((o1, o2)=>{
        if(o1.soldCount>o2.soldCount){
            return -1;
        }else if(o1.soldCount<o2.soldCount){
            return 1;
        }else{
            return 0;
        }
    })
    document.getElementById("pro-list-container").innerHTML = "";
    showProductsList(produ);
    
});

document.getElementById("filter").addEventListener("click", function(){
    let min=document.getElementById("rangeFilterPriceMin").value;
    let max=document.getElementById("rangeFilterPriceMax").value;
    var newArray = [];
    
    
    for(let b=0; b <  produ.length; b++){
        if(!(min<=produ[b].cost && max>=produ[b].cost)){
    
        }else{
        newArray.push(produ[b]);
        }
    }
    document.getElementById("pro-list-container").innerHTML = "";
    showProductsList(newArray);
    
});

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("pro-list-container").innerHTML = "";
    document.getElementById("rangeFilterPriceMin").value = "";
    document.getElementById("rangeFilterPriceMax").value = "" ;
    showProductsList(produ);
});


