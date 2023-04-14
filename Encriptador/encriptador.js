// Obtener los botones.

var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
      var mensaje = document.querySelector("input.mensaje").value;
      mensaje = mensaje.toLowerCase();
      var resultado = "";
      for(var i = 0; i < mensaje.length; i++){
            switch (mensaje.charAt(i)) {
                  case 'a':
                        resultado += "ai";
                        break;
                  case 'e':
                        resultado += "enter";
                        break;
                  case 'i':
                        resultado += "imes";
                        break;
                  case 'o':
                        resultado += "ober";
                        break;
                  case 'u':
                        resultado += "ufat";
                        break;
                  default:
                        resultado += mensaje.charAt(i);
            }
      }
      var final = document.querySelector(".texto-encriptado");
      final.textContent = "La encriptación del mensajes es: \n" + resultado;
}

function desencriptar(){
      var mensaje = document.querySelector("input.mensaje").value;
      mensaje = mensaje.toLowerCase();
      while(mensaje.includes("ai")){
            mensaje = mensaje.replace("ai", "a");
      }
      while(mensaje.includes("enter")){
            mensaje = mensaje.replace("enter", "e");
      }

      while(mensaje.includes("imes")){
            mensaje = mensaje.replace("imes", "i");
      }
      while(mensaje.includes("ober")){
            mensaje = mensaje.replace("ober", "o");
      }
      while(mensaje.includes("ufat")){
            mensaje = mensaje.replace("ufat", "u");
      }
      var final = document.querySelector(".texto-encriptado");
      final.textContent = "La desencriptación del mensajes es: \n" + mensaje;
}
