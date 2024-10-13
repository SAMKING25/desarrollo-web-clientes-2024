// Escriba una función que reciba dos arrays y devuelva un nuevo array con
// los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
// 	array). El orden debe ser: primero los que están en el primer array y luego los que están
// 	en el segundo

function Unir(a,b){
	let c = []
	let cont

	for(let i=0; i<a.length;i++){
		for(j=0; j<b.length;j++){
			if(a[i] == b[j]){break}
		}
		if(j==b.length){
			c.push(a[i])
		}
	}

	for(let i=0; i<b.length;i++){
		for(j=0; j<a.length;j++){
			if(b[i] == a[j]){break}
		}
		if(j==a.length){
			c.push(b[i])
		}
	}

	return c
}

console.log(Unir([77, "ciao"],[78, 42, "ciao"]))