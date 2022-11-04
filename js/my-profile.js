function primerNombre() {
    const nombre = document.getElementById("primerNombre");
    if (nombre.value === "") {
        nombre.className = "form-control is-invalid"
    } else {
        nombre.className = "form-control is-valid"
        sessionStorage.setItem("pNombre", nombre.value);
        return true
    }
}
function segundoNombre() {
    const nombre = document.getElementById("segundoNombre");
    if (nombre.value === "") {
        nombre.className = "form-control is-invalid"
    } else {
        nombre.className = "form-control is-valid"
        sessionStorage.setItem("sNombre", nombre.value);
        return true
    }
}
function primerApellido() {
    const nombre = document.getElementById("primerApellido");
    if (nombre.value === "") {
        nombre.className = "form-control is-invalid"
    } else {
        nombre.className = "form-control is-valid"
        sessionStorage.setItem("pApel", nombre.value);
        return true
    }
}
function segundoApellido() {
    const nombre = document.getElementById("segundoApellido");
    if (nombre.value === "") {
        nombre.className = "form-control is-invalid"
    } else {
        nombre.className = "form-control is-valid"
        sessionStorage.setItem("sApel", nombre.value);
        return true
    }
}
function telefono() {
    const nombre = document.getElementById("telefono");
    if (nombre.value === "") {
        nombre.className = "form-control is-invalid"
    } else {
        nombre.className = "form-control is-valid"
        sessionStorage.setItem("tel", nombre.value);
        return true
    }
}
function validaciones() {
    primerNombre();
    segundoNombre();
    primerApellido();
    segundoApellido();
    telefono();

  
    if (!(primerNombre() && segundoNombre() && primerApellido() && segundoApellido() && telefono() )) {
  
      const form = document.getElementById('sellinfo')
  
      form.addEventListener('submit', (event) => {
        event.preventDefault()
  
      })
  
    } else {
      document.getElementById("sellinfo").submit()
    }
  
  }
  
  document.getElementById("submitForm").addEventListener("click", validaciones);
  


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("username").innerHTML = localStorage.getItem("user");
    document.getElementById("email").value = localStorage.getItem("user");
    document.getElementById("primerNombre").value = sessionStorage.getItem("pNombre");
    document.getElementById("segundoNombre").value= sessionStorage.getItem("sNombre");
    document.getElementById("primerApellido").value = sessionStorage.getItem("pApel");
    document.getElementById("segundoApellido").value= sessionStorage.getItem("sApel");
    document.getElementById("telefono").value = sessionStorage.getItem("tel"); 
});

