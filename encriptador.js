const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensajeencriptado')

const matrizCodigo = [['e','enter'],['i', 'imes'],['a', 'ai'],['o', 'ober'],['u', 'ufat']]


function encriptarTexto() {
  let datosTextArea = textArea.value;
  datosTextArea = datosTextArea.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    // condicion para validar si los datosTextArea estan dentro del array
    if (datosTextArea.includes(matrizCodigo[i][0])) {
      datosTextArea = valorTextArea.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  mensaje.value = datosTextArea;
}


function desencriptarTexto() {
  let datosTextArea = textArea.value;
    datosTextArea = datosTextArea.toLowerCase();
  
  for(let i = 0; i < matrizCodigo.length; i++){
    // condicion para validar si el datosTextArea estan dentro del array
    if (datosTextArea.includes(matrizCodigo[i][1])) {
      datosTextArea = datosTextArea.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  mensaje.value = datosTextArea;
}


function Encriptarbtn{
    const textoEncriptado = encriptarTexto(textArea.value)
    mensaje.value = textoEncriptado
}