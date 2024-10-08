let autos = ['BMW','Audi','Volvo']

console.log(autos)
console.log(typeof autos)

let item = new Array(1,6)
console.log(item)
let items = new Array(6)
console.log(items)

// let pets = new Array('Perro','Gato','Periquito')
let pets = ['Perro','Gato','Periquito']
console.log(pets)

console.log(pets.length)
console.log(pets[0])

// Iterar en el Array
let len = pets.length
for(let i=0; i<len; i++){
    console.log(pets[i])
}

pets.push('Rana','Koala')

items[2]='toro'
console.log(items)

console.log(pets.pop()) //  Enseña y borra el ultimo elemento del array
console.log(pets.shift()) //  Enseña y borra el primero elemento del array
console.log(pets)
pets.unshift('Kangaroo')

function log(msj){
    console.log(msj)
}

const months = ['Jan','March','April','June']
months.splice(3,1,'May') // Reemplaza posicion 4
console.log(months)

months.splice(1,0,'Feb') // Inserta posicion 1
console.log(months)

months.splice(5,0,'July','Agost','Sept')
console.log(months)

let eliminados = months.splice(3)

console.log(eliminados)
console.log(months)

// Ordenación de arrays
console.log(months.reverse());
console.log(months.sort());

//  Partes de una palabra, frase , vectores... delimitados por un separador
let cadena = 'Javascript es un lenguaje de programacion';
let vector = '12,34,45,6,7,9'
console.log(cadena.replace('Java','ECHA'))

let palabras = cadena.split(' ')
let numeros = vector.split(',')

console.log(palabras)
console.log(numeros)

//  Busqueda de una posicion
let posicion = months.indexOf('Jan')
console.log(posicion)

months.push('Apr','Jun')
//  Slice
console.log(months.slice(2))
console.log(months)
console.log(months.slice(1))





