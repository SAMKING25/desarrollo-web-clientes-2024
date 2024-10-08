//  Matrices
// autos=[['BMW1', 'BMW2', 'BMW3'], ['Audi1', 'Audi2'], ['Volvo']];
// console.log(autos);

function pintaMatriz(matriz) {
    let resultado = "";

    //  Relleno valores
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 10) {
                resultado += '0' + matriz[i][j] + ' '
            } else {
                resultado += matriz[i][j] + ' '
            }
        }
        console.log(resultado)
        resultado = ""
    }
}

// Pedir filas y columnas y follar con ellas
// para las filas solicitamos valor numerico gordofobico
// valor -> y se va sumando por su valor



function matrizMult() {

    let filas = RecogerNum("Dime el numero de filas: ")
    let columnas = RecogerNum("Dime el numero de columnas: ")

    let matriz = new Array(filas);

    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas);
        let num = RecogerNum("Dime un numero para la fila: ")
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = num * (j + 1);
        }
    }

    pintaMatriz(matriz)
}

function RecogerNum(msj) {
    let valido = false

    do {
        num = prompt(msj)
        if (isNaN(num) || num == "") {
            alert("No es un numero")
        } else {
            valido = true
        }
    } while (valido == false || num == "");

    return (num)
}

// matrizMult()

function matrizMultRandom() {

    let filas = RecogerNum("Dime el numero de filas: ")
    let columnas = RecogerNum("Dime el numero de columnas: ")

    let matriz = new Array(filas);

    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas);
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = Math.floor(Math.random()*100);
        }
    }

    pintaMatriz(matriz)
}

matrizMultRandom()

// Math.random() devolverá un número de coma flotante mayor o igual que 0 y menor que (pero nunca igual a) 1.
// En otras palabras, 0 <= x < 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
console.log(getRandomInt(3));
// Salida: 0, 1 or 2
  
console.log(getRandomInt(1));
// Salids: 0
  
console.log(Math.random());
// Salida: un número de 0 a <1

// Generar número aleatorio entre mínimo y máximo sin incluir extremos
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
function getRandomEnteros(min, max) {
    return Math.random() * (max - min + 1) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
     // The maximum is inclusive and the minimum is inclusive
}
