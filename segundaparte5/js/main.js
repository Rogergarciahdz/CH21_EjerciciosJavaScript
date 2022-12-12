
let btnCom = document.getElementById("btnCom");
let resultado = document.getElementById("alertResultado");

function compara(num1,num2,num3){
    
    num1 = parseInt(document.getElementById("inputNum1").value);
    document.getElementById("inputNum1").focus();
    document.getElementById("inputNum1").select();

    num2 = parseInt(document.getElementById("inputNum2").value);
    
    num3 = parseInt(document.getElementById("inputNum3").value);


   

    
    if (num1==num2+num3) {
       
        return resultado.innerHTML="el numero "+ num1 + " es la suma de "+ num2 +" y "+ num3;
        
    }
    if (num2==num1+num3) {
        
       
    
        return resultado.innerHTML="el numero "+ num2 + " es la suma de "+ num1 +" y "+ num3;

        
    }
    if(num3==num1+num2){
       
        return resultado.innerHTML="el numero "+ num3 + " es la suma de "+ num1 +" y "+ num2;
    }else return resultado.innerHTML="ningun numero es suma de los otros";
}

   
   
btnCom.addEventListener("click",compara); 



