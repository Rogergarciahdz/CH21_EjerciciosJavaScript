let nuemros = [-1, 3, 4, 2, 6];

function menor(){
let comp=0;
for (let index = 0; index < nuemros.length; index++) {
    //console.log(index);
    if(comp>nuemros[index]){
        
        comp=nuemros[index];
       
    } 
    //console.log(nuemros[index]);

}

console.log("el numero mas bajo del arreglo es:"+comp);
}