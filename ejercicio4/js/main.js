let numeros=[1, 2, 5, 14, 24, 31, 50, 105];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function desorden() {
    console.log("el orden de los numeros es:")
    for (let index = 0; index < numeros.length; index++) {
        
        console.log(numeros[index])
        

        
    }

    console.log("el nuevo orden de los numeros es:")
    numeros.sort();
    for (let index = 0; index < numeros.length; index++) {
        console.log(numeros[index]);           
    }




}