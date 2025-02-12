var mensaje = "Hola mundo";
console.log(mensaje);
var numero = 160;
console.log(numero);
var esViernes = false;
console.log(esViernes);
var real = 1.43;
var binario = 5;
console.log(typeof binario);
var suma = real + binario + numero;
console.log(suma);
var comparacion;
comparacion = real > 2;
console.log(comparacion);
var octal = 37;
console.log(octal);
var cadena1 = "Hola";
var cadena2 = 'Hola';
var cadena3 = "El numero es ".concat(suma);
var unioncadena = cadena1 + cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(unioncadena);
var arreglo1 = [1, 2, 3, 4, 5];
var arreglo2 = [6, 7, 8];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);
var arreglocadena = ["TS", "PHP", "JS"];
arreglocadena.push("23");
var tupla = ["Samuel", 10, true];
console.log(tupla[0]);
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Rojo"] = 0] = "Rojo";
    semaforo[semaforo["Naranja"] = 1] = "Naranja";
    semaforo[semaforo["Verde"] = 2] = "Verde";
})(semaforo || (semaforo = {}));
var valor = semaforo.Naranja;
console.log(semaforo);
var nose;
nose = "Hola";
nose = 30;
nose = null;
var Samking = {
    nombre: "Samuel",
    apellido: "Trujillo",
    edad: 19,
    estado: true
};
console.log(Samking);
console.log(Samking.edad);
