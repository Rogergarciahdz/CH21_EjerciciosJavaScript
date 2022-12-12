let numeros =  [1, 22, 5, 14, 24, 31, 27, 15, 105]
let aux=0,aux2=0,i=0;
function iguales() {
    for (let index = 0; index < numeros.length; index++) {
        //console.log(numeros[index])
        
        
        aux=numeros[index];
        //console.log(aux);
        
        for (let index1 = index+1; index1 < numeros.length; index1++) {
            aux2=numeros[index1];
            if (aux==aux2) {
                i=aux2
                
            }
            
        }   
    
    
    }

    if (i==0) {
        console.log("no se repiten numeros");
    }else
    console.log("el numero que se repite es:"+i);

}
