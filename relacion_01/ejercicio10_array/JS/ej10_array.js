// Lista de nombres de ejemplo
// const nombres = [
// 	"Juan",
// 	"Ana",
// 	"Sara",
// 	"David",
// 	"Pablo",
// 	"Luz",
// 	"Mark",
// 	"Irene",
// 	"Nina",
// 	"Alba",
// ];


function filtrarNombres(nombres){
	let nombre = nombres.split(',')
	console.log("Nombres: "+nombre)
	return filtrarAmigos(nombre)
}

function filtrarAmigos(nombres) {
	let salida = []
	for(i=0;i< nombres.length;i++){
	    if(nombres[i].length == 4){
	        salida.push(nombres[i])
	    }
	}
	return salida
}

let nombres = prompt("Dime los nombres por comas:")
amigosSamu = filtrarNombres(nombres)

console.log("Amigos: "+amigosSamu)