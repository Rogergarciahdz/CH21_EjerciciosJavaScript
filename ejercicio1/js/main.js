let nuemros = [15,22,144,46,55];

function mayor(){
let comp=0,pila=0;
for (let index = 0; index < nuemros.length; index++) {
    //console.log(index);
    if(comp<nuemros[index]){
        
        comp=nuemros[index];
       
    } 
    //console.log(nuemros[index]);

}

console.log("el numero mas alto del arreglo es:"+comp);
}