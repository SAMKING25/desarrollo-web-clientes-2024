function calcArray(){
    let array = []
    let mayores = []
    let media = 0
    tamArray = RecogerNum("Introduce un numero entre 5 y 10 (incluidos): ")
    
    for(i = 0; i<tamArray; i++){
        array[i] = Math.floor((Math.random() * 100)*tamArray)
        media = media + array[i]
    }
    console.log("Array: "+pintaArray(array))

    media = media/tamArray
    console.log("La media es: "+media)

    for(i = 0; i<tamArray; i++){
        if(array[i] > media){
            mayores.push(array[i])
        }
    }
    
    console.log("Array mayor de la media: "+pintaArray(mayores))
}

function RecogerNum(msj){
    let valido = false
    
    do{
        num = prompt(msj)
        if (isNaN(num) || num == ""){
            alert("No es un numero")            
        } else{
            valido = true
        }
    }while(valido == false || num == "" || num < 5 || num > 10);
    
    return (num)
}

function pintaArray(array) {
    let resultado = "";

    for (let i = 0; i < array.length; i++) {
        resultado +=array[i] + ' '
    }
    return(resultado)
}