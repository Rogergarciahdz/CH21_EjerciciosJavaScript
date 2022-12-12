
let btnCom = document.getElementById("btnCom");
let resultado = document.getElementById("alertResultado");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let aleatorio;
  aleatorio=getRandomInt(100);


function adivina(num1){
    
    num1 = parseInt(document.getElementById("inputNum1").value);
    document.getElementById("inputNum1").focus();
    document.getElementById("inputNum1").select();

if(num1>=0 && num1<=100  ){

let num=0;

num=aleatorio;
console.log(num);
    while (num1!=num) {
    console.log("sigue intentando");
    

    if (num1>num) {
        console.log("prueba con un numero menor");
        return resultado.innerHTML = "prueba con un numero menor";   
    }

    if (num1<num) {
        console.log("prueba con un numero mayor");
        return resultado.innerHTML = "prueba con un numero mayor";
    }
    if (num1!=num) {
        break;
    } 
    
         
}
if (num1==num) {
    console.log("acertaste");
    return resultado.innerHTML = "¡Felicidades! Encontraste el numero escondido";
}



}
return resultado.innerHTML = "ingresa un numero valido";

}

   
   
btnCom.addEventListener("click",adivina );