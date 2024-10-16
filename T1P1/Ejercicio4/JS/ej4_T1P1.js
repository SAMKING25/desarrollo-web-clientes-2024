function calcMatriz(){
    let media = 0
    tamMatriz = RecogerNum("Introduce el tamaño de la matriz NxN: ")

    let matriz = new Array(tamMatriz);
    let matrizRes = [[],[]]

    for (let i = 0; i < tamMatriz; i++) {
        matriz[i] = new Array(tamMatriz);
        for (let j = 0; j < tamMatriz; j++) {
            matriz[i][j] = Math.floor(Math.random()*100);
            media = media + matriz[i][j]
        }
    }
    console.log("La matriz generada es :")
    pintaMatriz(matriz)

    media = media / (tamMatriz*tamMatriz)
    console.log("La media de los valores es : "+media)

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < tamMatriz; j++) {
            if(matriz[i][j] >= media){
                matrizRes[0].push(matriz[i][j])
            } else {
                matrizRes[1].push(matriz[i][j])
            }
        }
    }

    console.log("La matriz resultado es :")
    pintaMatriz(matrizRes)

    ordenacion = prompt("Introduce 0 o 1 para ASC O DESC: ")

    if ( ordenacion == 0){
        console.log("El array resultada ordenado ASCENDENTE: ")
        pintaMatriz(matrizRes.sort());
    } else if(ordenacion == 1){
        console.log("El array resultada ordenado DESCENDENTE: ")
        pintaMatriz(matrizRes.rsort());
    }
}

function RecogerNum(msj){
    let valido = false
    
    do{
        num = prompt(msj)
        if (num == ""){
            alert("No es un numero o .")            
        } else{
            valido = true
        }
    }while(valido == false || num == "" || num <2 || num >5);
    
    return (Number(num))
}

function pintaMatriz(matriz) {
    let resultado = "";

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 10) {
                resultado += '0' + matriz[i][j] + ' '
            } else {
                resultado += matriz[i][j] + ' '
            }
        }
        console.log(resultado)
        resultado = ""
    }
}