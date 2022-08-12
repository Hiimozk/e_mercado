function mostrarAlerta1() {
    document.getElementById("alerta1").innerHTML = "Ingresa tu e-mail.";
}

function mostrarAlerta2() {
    document.getElementById("alerta2").innerHTML = "Ingresa tu contraseña.";
}
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    window.location.href = "index2.html";
}
function otro(){
    window.location.href = "index2.html";
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

