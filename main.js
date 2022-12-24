// Creacion de variables de selector para la entrada de texto
const textIn = document.querySelector("#InputText");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesEncriptar = document.querySelector("#btn-desencriptar");
const btnCopy = document.getElementById("btn-copy");
textIn.focus();

const diccionario = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encriptar() {
  let textEncrip = "";
  let text = textIn.value;
  if (textIn.value !== "") {
    for (let i = 0; i <= text.length - 1; i++) {
      const letter = text[i];
      if (letter in diccionario) {
        textEncrip += diccionario[letter];
      } else {
        textEncrip += letter;
      }
    }
    return mostrarMensaje(textEncrip);
  } else {
    return mostrarMensaje(
      "Error: campo vacio, llene el campo para Encriptarlo"
    );
  }
}

function desencriptar() {
  let mensajeInDesencrip = "";
  let text = textIn.value;
  if (text !== "") {
    mensajeInDesencrip += text
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
      return mostrarMensaje(mensajeInDesencrip);
  }else{
    return mostrarMensaje("Error: campo vacio, llene el campo para Desencriptarlo");
  }
}

function mostrarMensaje(texOut) {
  let out = document.getElementById('salida');
  out.innerHTML ='<p id="out">'+ texOut+'</p>'+
  "<div id='cajaCopy'><button type='submit' class='btn' id='btn-copy'>Copiar</button></div>";
}

btnEncriptar.onclick = encriptar;
btnDesEncriptar.onclick = desencriptar;
btnCopy.addEventListener('click',()=>{
    let textToCopy = document.getElementById('out').innerText;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Copied to clipboard')
        })
    } else {
        console.log('Browser Not compatible')
    }
});