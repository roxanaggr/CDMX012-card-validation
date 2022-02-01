const validator = {
  
  
  isValid: (digitos) => {

    
    let numerosArray = digitos.split('');
    let invertirNum = numerosArray.reverse();
    let suma = 0;

    for (let i=0; i < invertirNum.length; i++){
      invertirNum[i] = parseInt(invertirNum[i]);
      if (i%2===1){
        invertirNum[i] = (invertirNum[i] *2).toString().split("").map(Number).reduce((prev, curr) => prev + curr, 0);
        }
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