
function validateMessage() {

    let arrayForm = document.getElementsByClassName("form-control");
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    
    if (arrayForm[0].value.length < 4) {
        console.log("el nombre debe tener mas de 4 caracteres");
    } 
    else if(!expresion.test(arrayForm[1].value))
    {
       console.log("no es el formato correcto");
    }
    else if(arrayForm[2].value.length < 20)
    {
        console.log("el mensaje debe tener mas de 20 caracteres");
    }
    else
    {
        Swal.fire(
            'Gracias por contactarte',
            'Te responderé a la brevedad',
            'success'
        )
    }
    
}


document.getElementById("enviar").addEventListener("click", () => validateMessage());