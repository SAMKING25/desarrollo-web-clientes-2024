function comprobarCom(){
	do{
		numComensales = prompt("¿Cuantos comensales sois? ")
		if(numComensales > 4 || numComensales < 0){
			alert("Lo siento no admitimos grupos de "+numComensales+" haga grupos de maximo 4")
		}
	} while(numComensales > 4 || numComensales < 0)
	return Number(numComensales)
}

function crearMesas(){
	let mesas = []
	numMesas = prompt("¿Cuantas mesas hay en el restaurante?")
	
	for(i=0; i<numMesas;i++){
		mesas.push(Math.floor(Math.random() * (4 - 0 + 1) + 0))
	}
	console.log("Estado de las mesas: "+mesas)
	return mesas
}

function darMesa(){
	let mesas = crearMesas()
	let comensales = comprobarCom()
	let sentado = false

	for(let i = 0; i<mesas.length; i++){
		if(mesas[i] == 0){
			console.log("La mesa "+(i+1)+" esta vacia sientese ahi")
			mesas[i] = parseInt(comensales);
			sentado = true
			break;
		}
	}
	
	if(sentado == false){
		for(let i = 0; i<mesas.length; i++){
			if((mesas[i]+ comensales) <= 4){
				mesas[i] += Number(comensales);
				console.log("En la mesa "+(i+1)+" hay hueco sientese ahi")
				sentado = true
				break;
			}
		}
	}
	
	return mesas
}

console.log("Estado de las mesas: "+ darMesa())




