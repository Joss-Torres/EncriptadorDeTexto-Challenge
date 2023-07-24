const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.vale)
    mensaje.value = textoEncriptado
}

//esta funcion debe estar dentro de la variable encriptar
function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptado=stringEncriptado.toLowerCase()
    //iniciar de cero, debe ser menor que nestra matriz codigo y length es la matriz, para despues incrementar 
    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

