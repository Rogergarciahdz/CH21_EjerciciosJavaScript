
function mayor(num1,num2,num3){
    let aux=0;
        if (num1<num2) {
            aux=num2;
            if (num2<num3) {
                aux=num3;
            }
        
        }else if (num1<num3) {
            aux=num3;
        }else aux=num1;


       
        return aux;
    }

   
   
    let btnCom=document.getElementById("btnCom");
    btnCom.addEventListener("click", function(event) {
    event.preventDefault();
        let n1 = parseInt(document.getElementById("inputNum1").value);
        let n2 = parseInt (document.getElementById("inputNum2").value);
        let n3 = parseInt (document.getElementById("inputNum3").value);
        let resultado = document.getElementById("alertResultado");
    
    resultado.innerHTML="El número mayor de los 3 es: "+mayor(n1,n2,n3);
    document.getElementById("inputNum1").focus();
    document.getElementById("inputNum1").select();

});