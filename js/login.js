function mostrarAlerta1() {
    document.getElementById("alerta1").innerHTML = "Ingresa tu e-mail.";
}

function mostrarAlerta2() {
    document.getElementById("alerta2").innerHTML = "Ingresa tu contraseña.";
}



function valido() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;


    if (user.length > 0 && pass.length > 0) {
        document.getElementById("alerta1").innerHTML = "";
        document.getElementById("alerta2").innerHTML = "";
    }else if (user.length > 0 && pass.length===0) {
        mostrarAlerta2();
        document.getElementById("alerta1").innerHTML = "";
    }else if (user.length === 0 && pass.length>0){
        mostrarAlerta1();
        document.getElementById("alerta2").innerHTML = "";
    }else{
        mostrarAlerta1();
        mostrarAlerta2();
    }
    if(user.length > 0 && pass.length > 0){
        window.location.href = "index2.html";
    }
}

