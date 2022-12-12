
let btnCom = document.getElementById("btnCom");
let resultado = document.getElementById("alertResultado");

function adivina(num1){
    
    num1 = parseInt(document.getElementById("inputNum1").value);
    document.getElementById("inputNum1").focus();
    document.getElementById("inputNum1").select();



if (num1%2==0) {
    return resultado.innerHTML="es un número par";
}else return resultado.innerHTML="no es un número par";




}

   
   
btnCom.addEventListener("click",adivina );