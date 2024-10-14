let numeros = []
// funcion principal

function main(){
	//pedir 10 numeros
	for (let i = 0; i < 10; i++) {
		let numero;
		do {
		  numero = prompt(`Introduce el número ${i + 1}:`);
		} while (isNaN(numero) || numero === null || numero.trim() === "");
		numeros.push(Number(numero));
	}

	// Mostrar el array con índices
	console.log("Contenido del array:");
	pintarArray(numeros);
}

function Rotar(){
	let pos_inicial, pos_final;
	do {
	  pos_inicial = parseInt(prompt("Introduce la posición inicial (0-9):"));
	  pos_final = parseInt(prompt("Introduce la posición final (0-9):"));
	} while (
	  pos_inicial < 0 ||
	  pos_inicial > 9 ||
	  pos_final< 0 ||
	  pos_final> 9 ||
	  pos_inicial >= pos_final
	);

	const valorARotar = numeros[pos_inicial]
	console.log("Se mueve el numero: "+ valorARotar +" de la posicion "+ pos_inicial +" a la posicion final "+ pos_final)
	numeros.splice(pos_final,0,valorARotar)
	
	if(pos_final != numeros.length){
		let valorAMover = numeros.shift()
	}
}

function pintarArray(array){
	for (let i=0; i<array.length;i++){
		console.log(`Indice ${i}: ${array[i]}`)
	}
}