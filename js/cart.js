let f;
function update(cantidad, precio){
    console.log(cantidad*precio);
}
function showCartItems(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.articles.length; i++){
        console.log(this)
        let f=array.articles[i].count*array.articles[i].unitCost;
        htmlContentToAppend += `
            <div class="col-2">
                <p>${array.articles[i].name}</p>
            </div>
            <div class="col-2">
                <p>${array.articles[i].currency}${array.articles[i].unitCost}</p>
            </div>
            <div class="col-2">
                <select id="selee" name="select" onchange="update(this.value,${f})">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div id="teste" class="col-2">
                <p>`+f+`</p>
            </div>
            <div class="col-4">
                <img src="${array.articles[i].image}" alt="..." style="width: 14rem;">
            </div>
        `
        document.getElementById("listado").innerHTML = htmlContentToAppend;
    } 
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("username").innerHTML=localStorage.getItem("user");
    getJSONData(CART_INFO_URL+"25801"+EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showCartItems(resultObj.data)
        }
    })

    //document.getElementById("selee").addEventListener("change", function(){
        //productCount = this.value;
      //  console.log("a")
        //updateTotalCosts();  
    //});
    
});