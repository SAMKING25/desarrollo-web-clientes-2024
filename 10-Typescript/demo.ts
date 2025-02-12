let mensaje:string = "Hola mundo";
console.log(mensaje);
let numero:number = 160;
console.log(numero);
let esViernes:boolean = false;
console.log(esViernes);
let real:number = 1.43;
let binario:number = 0b101;
console.log(typeof binario);
let suma:number = real + binario + numero;
console.log(suma);
let comparacion:boolean;
comparacion = real>2;
console.log(comparacion);
let octal:number = 0o45;
console.log(octal)
let cadena1:string = "Hola";
let cadena2:string = 'Hola';
let cadena3:string = `El numero es ${suma}`;
let unioncadena:string = cadena1+cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(unioncadena);
let arreglo1:number[]=[1,2,3,4,5];
let arreglo2:Array<number>=[6,7,8];
console.log(arreglo1)
console.log(arreglo2)
console.log(typeof arreglo1)
console.log(typeof arreglo2)
let arreglocadena:string[]=["TS","PHP","JS"]
arreglocadena.push("23");
let tupla:[string,number,boolean]=["Samuel",10,true];
console.log(tupla[0])
enum semaforo{"Rojo","Naranja","Verde"}
let valor = semaforo.Naranja;
console.log(semaforo);
let nose:any;
nose ="Hola";
nose=30;
nose = null;
interface Persona{
    nombre:string,
    apellido:string,
    edad:number,
    estado:boolean
}

let Samking:Persona = {
    nombre: "Samuel",
    apellido: "Trujillo",
    edad: 19,
    estado: true
}
console.log(Samking)
console.log(Samking.edad)
