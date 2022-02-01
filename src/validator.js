const validator = {
  
  
  isValid: (digitos) => {

    //convertir string en Array
    let numerosArray = digitos.split('');
    //invertir Array
    let invertirNum = numerosArray.reverse();
    //declara la suma de todos los elementos del array comenzando en 0
    let suma = 0;

    //identificar la longitud del array
    for (let i=0; i < invertirNum.length; i++){
      //convierte a numeros el array
      invertirNum[i] = parseInt(invertirNum[i]);
      //Si el resto de dividir i entre dos es cero significa que i es par,
      if (i%2===1){
        //entonces multiplica el numero de i x 2, conviertelo a string, conviertelo a numeros, separa los numeros de dos digitos y sumalos
        invertirNum[i] = (invertirNum[i] *2).toString().split("").map(Number).reduce((prev, curr) => prev + curr, 0);
        }
      //suma todos
      suma += invertirNum[i]
    }

    if (suma % 10 === 0){
      return true;
      } else
      return false;
  },
  
  maskify: function (digitos) {

    let ultimosCuatro = digitos.slice(-4);
    const valorArray = digitos.split('');
    for (let i = 0; i < valorArray.length; i++) {
      valorArray[i] = valorArray[i].replace(/[0-9]/, '#');
    }
    let arrayString = valorArray.join('');
    let masked = arrayString.slice(0, -4) + ultimosCuatro;
    return masked; 
    } 

}

export default validator