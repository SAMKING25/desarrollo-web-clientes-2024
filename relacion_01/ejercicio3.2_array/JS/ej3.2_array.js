let a = prompt("Introduce enteros separados por comas(Lista A): ")
let b = prompt("Introduce enteros separados por comas(Lista B): ")
let c = []
let mayor

a = a.split(',')
b = b.split(',')

let maxLength = (a.length > b.length) ? a.length : b.length

for(let i=0; i<maxLength;i++){
	if (i<a.length){ c.push(a[i])}
	if (i<b.length){ c.push(b[i])}
}

console.log("Concatenados: "+c)