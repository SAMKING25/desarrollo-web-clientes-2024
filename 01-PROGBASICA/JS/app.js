// alert("Hola mundo")

console.log("Hola Mundo")

let nombre = "Samuel Trujillo"
console.log(nombre)

var nombrenull
let aaa = 2
let bbb = "3"
let c = a + b
console.log(c)
console.log(typeof a)
console.log(typeof b)

let ok = true
console.log(typeof ok)
console.log(a + nombre)
console.log(typeof nombre)
console.log(a + nombrenull)

if (a>b){
    console.log("")
} else{
    console.log("")
}

let objeto1 = Symbol(1)
console.log(typeof objeto1);
console.log(objeto1)

let objeto2 = Symbol(2)
console.log(typeof objeto2);
console.log(objeto2)

let horaDia = 11
let mensaje="Actualmente son las "+horaDia

if (horaDia >= 6 && horaDia < 12){
    console.log("Buenos dias mi amor ,"+mensaje)
} else if(horaDia >= 12 && horaDia < 18){
     console.log("Buenas tardes guapo ,"+mensaje)
} else if(horaDia >= 18 && horaDia < 24 || horaDia >= 0 && horaDia < 6){
    console.log("Buenas noche mi princesa ,"+mensaje)
}

let z= 2
let y='2'

if (z==y){
    console.log("son iguales")
}
if (z===y){
    console.log("son iguales")
} else{
    console.log("no son iguales")
}

/*
    Operador Ternario
    El opeador ternario de Javascript es un operador condicional que tiene tres operados
    Se usa para tomar una decision basasda en una
    expresion que evalua como true o false
    Es una forma abreviada de la sentencia if else que crea codigo masw limpio ,
    facil de enteros y rapido
*/

let resultado = (z===y) ? 1 : 2
console.log(resultado)

let miNumero="18"
console.log(miNumero)

if (isNaN(miNumero)){
    console.log("no es un numero")
}

miNumero=Number(miNumero)
console.log(miNumero)

let contador = 0;
while (contador < 3){
    console.log(contador);
    contador++;
}

let cont=0
do{
    console.log(cont)
    cont++
} while(cont < 3);

for(let i=0;i < 5;i++){
    console.log(i)
}

let mes=11
let estacion = ""
switch (mes){
    case 1: case 12: case 2:
        estacion = "Invierno"
        break
    case 3: case 4: case 5:
        estacion = "Primavera"
        break
    case 6: case 7: case 8:
        estacion = "Verano"
        break
    case 9: case 10: case 11:
        estacion = "Otoño"
        break
    default:
        estacion = "ERROR"
}
console.log(estacion)

for(let i=0; i<=2; i++){
    for(let j=0; j<=3;j++){
        console.log("c1:"+i+ " c2:"+j)
        if(j==2){
            j=4
            i=3
        }
            
    }
}

let objeto={
    nombre: "SAMKING",
    apellidos: "Trujillo"
}

const objeto3 = {nombre: "jose",apellido:"cabesuelo", edad: 47}
console.log(typeof objeto3)

let marcaCoches = ['BMW','Audi','Renault', 'Ford']
console.log(typeof marcaCoches)

for (i=0 ;i<marcaCoches.length ;i++){
    console.log(marcaCoches[i])
}

//  Definir Clases
class Persona{
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    toString(){
        return `${this._nombre} ${this._apellido}, edad ${this._edad}`;
    }
}

console.log(Persona);
console.log(typeof Persona);

let persona1 = new Persona('Juan','Perez',23);


console.log(persona1)
console.log(persona1.toString())

let persona2 =  new Persona(objeto3.nombre,objeto3.apellido,objeto3.edad)
console.log(persona2.toString())

var aa = 4
var bb = 5

//  Funciones
// function miFuncion(xx,yy){
//     let aa = 8
//     let bb = 10
//     console.log("Suma: "+(xx + yy))
//     console.log("Suma: "+(aa + bb))
//     console.log(`Suma: ${aa + bb}.`)
//     return (xx+yy)
// }SS

// let result = miFuncion(aa,bb)
// console.log(result)

// console.log(typeof miFuncion)




