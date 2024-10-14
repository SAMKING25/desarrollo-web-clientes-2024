let numeros = [];
// Función principal
function main() {
	// Pedir 10 números
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

function Rotar() {
	let pos_inicial, pos_final;
	// Pedir posiciones inicial y final
	do {
		pos_inicial = parseInt(prompt("Introduce la posición inicial (0-9):"));
		pos_final = parseInt(prompt("Introduce la posición final (0-9):"));
	} while (
		pos_inicial < 0 ||
		pos_inicial > 9 ||
		pos_final < 0 ||
		pos_final > 9 ||
		pos_inicial >= pos_final
	);

	// Rotar el número de la posición inicial a la posición final
	const valorARotar = numeros[pos_inicial];
	if (pos_inicial === pos_final) {
		alert("No se realizarán cambios");
	}
	else {
		console.log("Se mueve el número: " + valorARotar + " de la posición " + pos_inicial + " a la posición final:" + pos_final);
		console.log("Rotamos el resto de elementos");
		numeros.splice(pos_final, 0, valorARotar); // remplazamos el valorARotar por la posicion final
		//param1: posicion, param2: num de elementos a borrar (deleteCount),param3: elementos
		
		if (pos_final != numeros.length) {
			let valorAMover = numeros.shift();
			numeros.unshift(numeros.pop());
			let valorTemporal;
			for (let i = 1; i <= pos_inicial; i++) {
				valorTemporal = numeros[i];
				numeros[i] = valorAMover;
				valorAMover = valorTemporal;
			}
		}
		// Mostrar el array resultante
		console.log("Array resultante:");
		// numeros.forEach((num, index) => {console.log(`Índice ${index}: ${num}`);});
		pintarArray(numeros);
	}
}
function pintarArray(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`Índice ${i}: ${array[i]}`);
	}
}

main()