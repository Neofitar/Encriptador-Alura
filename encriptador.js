const textoIngresado = document.querySelector(".textoIngresado");
const textoSalida = document.querySelector(".textoSalida");
const copiar = document.querySelector(".btn-copiar")


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//let diccionario = [["a","ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

//console.table(diccionario) ver diccionario en formato tabla desde la consola


//Encriptar texto

function btnEncriptador() {
    const mensajeEncriptado = encriptador(textoIngresado.value)
    textoSalida.value = mensajeEncriptado
}

function encriptador(mensajeEncriptar) {
    let diccionario = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    mensajeEncriptar = mensajeEncriptar.toLowerCase();

    for (let i = 0; i < diccionario.length; i++) {
        if (mensajeEncriptar.includes(diccionario[i][0])) {
            mensajeEncriptar = mensajeEncriptar.replaceAll(diccionario[i][0], diccionario[i][1])
        }

    }
    return mensajeEncriptar
}

//desencriptartexto

function btnDesencriptar(){
    const mensajeDesencriptado = desencriptar(textoIngresado.value)
    textoSalida.value = mensajeDesencriptado
}

function desencriptar(mensajeDesencriptar) {
    let diccionario = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    mensajeDesencriptar = mensajeDesencriptar.toLowerCase();
    for (let i = 0; i < diccionario.length; i++) {
        if (mensajeDesencriptar.includes(diccionario[i][0])){
            mensajeDesencriptar = mensajeDesencriptar.replaceAll(diccionario[i][1], diccionario[i][0])
        }
    }
    return mensajeDesencriptar
}

// copiar texto

function btnCopiarTexto() {
    let texto = document.getElementById('textoSalida');
    texto.select(texto.length);
    document.execCommand("copy");
    alert("Texto copiado")
}
