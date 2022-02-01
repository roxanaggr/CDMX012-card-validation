//Ingresar numero de 16 digitos sin espacios
//Si el número ingresado es de 16 digitos, desbloquear el botón continuar
//Guardar los 16 digitos ingresados
//Si se ingresa un número menor a 16 digitos, bloquear el botón y mostrar una alerta.(Ingresa tu número de 16 digitos para continuar)
//Si no se ingresa ningun número, bloquear el botón y mostrar una alerta. (Ingresa tu número de 16 digitos para continuar)
//Esconder con un # los primeros 12 digitos
//Mostrar los últimos 4 digitos

import validator from './validator.js';


let btnGuardarInput=document.getElementById("botonValidar");
let input=document.getElementById("numInput");


btnGuardarInput.addEventListener("click", function (){
   let mask = (validator.maskify(input.value));
   if (validator.isValid(input.value)===true){
      document.getElementById("msgExito").innerHTML = "Tu tarjeta es válida.";
      input.value = mask;
   }else
   document.getElementById("msgError").innerHTML = "Tu tarjeta es inválida.";
   input.value = mask;

   //console.log (validator.isValid(input.value))
   //console.log (validator.maskify(input.value));

});



   
   


