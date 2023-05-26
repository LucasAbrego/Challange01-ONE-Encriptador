function encriptarTexto(){
    let textoIngresado = txtEntrada.value;
    let textoEncriptado = textoIngresado.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi, "ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    mostrarResultado(textoEncriptado);
}

function desencriptarTexto(){
    let textoIngresado = txtEntrada.value;
    let textoDesencriptado = textoIngresado.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto){
    if(!validarTexto(texto)){
        txtSalida.value = "";
        txtSalida.style.backgroundImage = "url(imagenes/munecoMensajeInvalido.png)";
        btnCopiar.style.display = "none";
    }
    else{
        if (texto != ""){
            txtSalida.style.backgroundImage = "none";
            btnCopiar.style.display = "block";
            txtSalida.value = texto;
            txtEntrada.value = "";
        }
        else{
            txtSalida.value = "";
            txtSalida.style.backgroundImage = "url(imagenes/munecoMensajeVacio.png)";
            btnCopiar.style.display = "none";
        }
    }
}

function validarCaracteres(e) {
    let codigoTecla = e.keyCode;
    let letraPresionada = String.fromCharCode(codigoTecla);
    let letras = "abcdefghijklmnñopqrstuvwxyz ";
    if (letras.indexOf(letraPresionada) == -1) {
      return false;
    }
  }

function validarTexto(texto){
    let letras = "abcdefghijklmnñopqrstuvwxyz ";
    let textoValido = true;
    for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto.charAt(i)) == -1) {
            textoValido = false;
        }
    }
    if(textoValido){
       return true; 
    }
    else{
        return false;
    }
}

function copiarTexto(){
    let textoCopiado = txtSalida.value;
    navigator.clipboard.writeText(textoCopiado);
}


