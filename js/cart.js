let f;
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
cerrar.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function vCalle(){
    const calle = document.getElementById("calle");
    if (calle.value === ""){
        calle.className = "form-control is-invalid"
    }else{
        calle.className = "form-control is-valid"
        return true;
    }
}
function vPuerta(){
    const puerta = document.getElementById("puerta");
    if (puerta.value === ""){
        puerta.className = "form-control is-invalid"
    }else{
        puerta.className = "form-control is-valid"
        return true;
    }
}
function vEsquina(){
    const esquina = document.getElementById("esquina");
    if (esquina.value === ""){
        esquina.className = "form-control is-invalid"
    }else{
        esquina.className = "form-control is-valid"
        return true;
    }
}
function vPago(){
    const numerot = document.getElementById("numerot");
    const cvv = document.getElementById("cvv");
    const venci = document.getElementById("venci");
    const nconta = document.getElementById("nconta");
    const nameB = document.getElementById("nameB");
    if(document.getElementById("tarjeta").checked){
        if(numerot.value===""){
            numerot.className="form-control is-invalid"
        }else{
            numerot.className="form-control is-valid";
        }
        if(cvv.value===""){
            cvv.className="form-control is-invalid"
        }else{
            cvv.className="form-control is-valid";
        }
        if(venci.value===""){
            venci.className="form-control is-invalid"
        }else{
            venci.className="form-control is-valid";
        }

        if(numerot.value!=""&&cvv.value!=""&&venci.value!=""){
            numerot.className="form-control is-valid";
            cvv.className="form-control is-valid";
            venci.className="form-control is-valid";
            return true;
        }

        
    }else if(document.getElementById("conta").checked){
        if(nconta.value===""){
            nconta.className="form-control is-invalid"
        }else{
            nconta.className="form-control is-valid";
        }
        if(nameB.value===""){
            nameB.className="form-control is-invalid"
        }else{
            nameB.className="form-control is-valid";
        }
        if(nconta.value!=""&&nameB.value!=""){
            nconta.className="form-control is-valid";
            nameB.className="form-control is-valid";
            return true;
        }
    }
}
function validaciones(){
    vCalle();
    vPuerta();
    vEsquina();
    vPago();
    if(vCalle()&&vPuerta()&&vEsquina()&&vPago()){
        window.alert("¡Has comprado con exito!");
    }else if(vCalle()&&vPuerta()&&vEsquina()&&!vPago()){
        window.alert("Faltan datos de pago!");
    }  
}
function validarT(){
    document.getElementById("nconta").disabled=true;
    document.getElementById("nameB").disabled=true;
    document.getElementById("numerot").disabled=false;
    document.getElementById("cvv").disabled=false;
    document.getElementById("venci").disabled=false;
}
function validarC(){
    document.getElementById("nconta").disabled=false;
    document.getElementById("nameB").disabled=false;
    document.getElementById("numerot").disabled=true;
    document.getElementById("cvv").disabled=true;
    document.getElementById("venci").disabled=true;
}
document.getElementById("comprar").addEventListener("click",validaciones);
document.getElementById("tarjeta").addEventListener("click",validarT);
document.getElementById("conta").addEventListener("click",validarC);
function update(cantidad, precio, envio) {
    document.getElementById("teste").innerHTML = "USD- " + cantidad * precio;
    document.getElementById("subtotal").innerHTML = "USD- " + cantidad * precio;
    document.getElementById("envio").innerHTML = "USD- " + cantidad * precio * envio;
    document.getElementById("total").innerHTML = "USD- " + (cantidad * precio + (cantidad * precio * envio));
}
function cambiaso(monto, envio) {
    update(document.getElementById("selee").value, monto, envio)
}
function showCartItems(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.articles.length; i++) {
        htmlContentToAppend += `
            <div class="col-2">
                <p>${array.articles[i].name}</p>
            </div>
            <div class="col-2">
                <p>${array.articles[i].currency}${array.articles[i].unitCost}</p>
            </div>
            <div class="col-2">
                <select id="selee" name="select" onchange="update(this.value,${array.articles[i].unitCost}, 0.15)">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div id="teste" class="col-2">
                <p id="teste2">${array.articles[i].unitCost}</p>
                
            </div>
            <div class="col-4">
                <img src="${array.articles[i].image}" alt="..." style="width: 14rem;">
            </div>
        `
        document.getElementById("listado").innerHTML = htmlContentToAppend;
    }
    update(1, array.articles[0].unitCost)
    document.getElementById("enviando").innerHTML = `
    <select id="selena" name="select" onchange="cambiaso(${array.articles[0].unitCost}, this.value)">
            <option value="0.15" selected>Premiun 2 a 5 dias (15%).</option>
            <option value="0.07">Express 5 a 8 dias (7%).</option>
            <option value="0.05">Standard 12 a 15 dias (5%).</option>
        </select>
        `

}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("username").innerHTML = localStorage.getItem("user");
    getJSONData(CART_INFO_URL + "25801" + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showCartItems(resultObj.data)
            document.getElementById("envio").innerHTML = "USD- " + 15200 * 0.15;
            document.getElementById("total").innerHTML = "USD- " + ((15200 * 0.15) + 15200);
        }
    })
});