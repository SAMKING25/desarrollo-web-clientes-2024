// Escriba una función que reciba dos arrays y devuelva un nuevo array con
// los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
// 	array). El orden debe ser: primero los que están en el primer array y luego los que están
// 	en el segundo

// function Unir(a,b){
// 	let c =[]
	
// 	for(let i=0; i<a.length;i++){
// 		for(j=0; j<b.length;j++){
// 			if(a[i] == b[j]){break}
// 		}
// 		if(j==b.length && c.indexOf(a[i]) == -1){
// 			c.push(a[i])
// 		}
// 	}

// 	for(let i=0; i<b.length;i++){
// 		for(j=0; j<a.length;j++){
// 			if(b[i] == a[j]){break}
// 		}
// 		if(j==a.length && c.indexOf(b[i]) == -1){
// 			c.push(b[i])
// 		}
// 	}

// 	return c
// }


function copiaUnicos(a,b){
	let c =[]
	
	for(let i=0; i<a.length;i++){
		if(b.indexOf(a[i]) === -1 && !repetidos(a,a[i])){
			c.push(a[i])
		}
	}

	for(let i=0; i<b.length;i++){
		if(a.indexOf(b[i]) === -1 && esUnico(b,b[i])){
			c.push(b[i])
		}
	}

	return c
}

function esUnico(array, elem){
	return array.indexOf(elem) === array.lastIndexOf(elem)

}

function repetidos(array, elem){
	let cont = 0
	for(let i = 0; i < array.length; i++){
		if(array[i] === elem){
			cont++
		}
	}

	if(cont < 2){
		return false;
	} else{
		return true
	}
}

console.log(copiaUnicos([1, 2, 3, 3],[3, 2, 1, 4, 5, 4]))