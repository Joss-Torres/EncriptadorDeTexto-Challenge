function encriptar(){
    let texto = document.getElementById("texto").value;
    // // obtener el titulo del mensaje en una variable
    let tituloMensaje = document.getElementById("titulo-mensaje");
    // // Obtener el parrafo encriptado 
    let parrafo = document.getElementById("parrafo");
    // // Colocar imagen
    let pensando = document.getElementById("pensando");

    let textoCifrado = texto
            
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

    if(texto.length !=0){
        document.getElementById("texto").value = textoCifrado; 
        tituloMensaje.textContent = "Texto encriptado con exito"
        parrafo.textContent = "";
        pensando.src = "./Images/listo.png";

    }
    else{
        pensando.src = "./Images/noencontrado.png"; 
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que se desea encriptar o desencriptar";
        swal("Debes ingresar un texto", "warning");
    }
    
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    // // obtener el titulo del mensaje en una variable
    let tituloMensaje = document.getElementById("titulo-mensaje");
    // // Obtener el parrafo encriptado 
    let parrafo = document.getElementById("parrafo");
    // // Colocar imagen
    let pensando = document.getElementById("pensando");


    let textoCifrado = texto
            
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

    if(texto.length !=0){
        document.getElementById("texto").value = textoCifrado; 
        tituloMensaje.textContent = "Texto desencriptado con exito"
        parrafo.textContent = "";
        pensando.src = "./Images/listo.png";

    }
    else{
        pensando.src = "./Images/noencontrado.png"; 
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que se desea encriptar o desencriptar";
        swal("Debes ingresar un texto", "warning");
    }
}