// Definicion de funciones

let func = new Function("a","b","return a * b");
let resultado = func(10,10);
console.log(resultado);

// Funcion auto invocadas
(function(){
    let msg = "hola!"
    console.log(msg)
})()

//  Funcion anonima
resultado = function(a,b){return a*b}
console.log(resultado(10,10))

// Notacion flecha -- arrow functions
const arrowF = (a,b) => a*b
console.log(arrowF(10,10))

