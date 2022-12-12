
let btnCom = document.getElementById("btnCom");
let resultado = document.getElementById("alertResultado");

function adivina(num1){
    
    num1 = parseInt(document.getElementById("inputNum1").value);
    document.getElementById("inputNum1").focus();
    document.getElementById("inputNum1").select();

if(num1>=100 && num1<=200  ){

if (num1%3==0) {
    return resultado.innerHTML="es múltiplo de 3";
}else return resultado.innerHTML="no es múltiplo de 3";


}
return resultado.innerHTML="ingresa un numero valido"
}

   
   
btnCom.addEventListener("click",adivina );