function calcMedia(){
    cont = 0
    let media = 0

    numero1 = RecogerNum("Introduce el numero 1 (o '.' para finalizar): ")
    if(!isNaN(numero1)){
        cont++
        media += numero1
        numero2 = RecogerNum("Introduce el numero 2 (o '.' para finalizar): ")
        if(!isNaN(numero2)){
            cont++
            media += numero2
            numero3 = RecogerNum("Introduce el numero 3 (o '.' para finalizar): ")
            if(!isNaN(numero3)){
                cont++
                media += numero3
                numero4 = RecogerNum("Introduce el numero 4 (o '.' para finalizar): ")
                if(!isNaN(numero4)){
                    cont++
                    media += numero4 
                    numero5 = RecogerNum("Introduce el numero 5 (o '.' para finalizar): ")
                    if(!isNaN(numero5)){
                        cont++
                        media += numero5
                        numero6 = RecogerNum("Introduce el numero 6 (o '.' para finalizar): ")
                        if(!isNaN(numero6)){
                            cont++
                            media += numero6
                            numero7 = RecogerNum("Introduce el numero 7 (o '.' para finalizar): ")
                            if(!isNaN(numero7)){
                                cont++
                                media += numero7
                                numero8 = RecogerNum("Introduce el numero 8 (o '.' para finalizar): ")
                                if(!isNaN(numero8)){
                                    cont++
                                    media += numero8
                                    numero9 = RecogerNum("Introduce el numero 9 (o '.' para finalizar): ")
                                    if(!isNaN(numero9)){
                                        cont++
                                        media += numero9
                                        numero10 = RecogerNum("Introduce el numero 10 (o '.' para finalizar): ")
                                        if(!isNaN(numero10)){
                                            cont++
                                            media += numero10
                                        } 
                                    }    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    media = media / cont

    let listaMayores = ""
    let listaMayDoble = ""

    if (media < numero1 && !isNaN(numero1)){
        listaMayores += numero1+" "
    }
    if(media < numero2  && !isNaN(numero2)){
        listaMayores += numero2+" "
    } 
    if(media < numero3  && !isNaN(numero3)){
        listaMayores += numero3+" "
    } 
    if(media < numero4  && !isNaN(numero4)){
        listaMayores += numero4+" "
    } 
    if(media < numero5  && !isNaN(numero5)){
        listaMayores += numero5+" "
    } 
    if(media < numero6  && !isNaN(numero6)){
        listaMayores += numero6+" "
    } 
    if(media < numero7  && !isNaN(numero7)){
        listaMayores += numero7+" "
    } 
    if(media < numero8  && !isNaN(numero8)){
        listaMayores += numero8+" "
    } 
    if(media < numero9  && !isNaN(numero9)){
        listaMayores += numero9+" "
    } 
    if(media < numero10  && !isNaN(numero10)){
        listaMayores += numero10+" "
    }
            

    dobleMedia = media*2

    if (dobleMedia < numero1  && !isNaN(numero1)){
        listaMayDoble += numero1+" "
    }
    if(dobleMedia < numero2 && !isNaN(numero2)){
        listaMayDoble += numero2+" "
    } 
    if(dobleMedia < numero3 && !isNaN(numero3)){
        listaMayDoble += numero3+" "
    } 
    if(dobleMedia < numero4 && !isNaN(numero4)){
        listaMayDoble += numero4+" "
    } 
    if(dobleMedia < numero5 && !isNaN(numero5)){
        listaMayDoble += numero5+" "
    } 
    if(dobleMedia < numero6 && !isNaN(numero6)){
        listaMayDoble += numero6+" "
    } 
    if(dobleMedia < numero7 && !isNaN(numero7)){
        listaMayDoble += numero7+" "
    } 
    if(dobleMedia < numero8 && !isNaN(numero8)){
        listaMayDoble += numero8+" "
    } 
    if(dobleMedia < numero9 && !isNaN(numero8)){
        listaMayDoble += numero9+" "
    } 
    if(dobleMedia < numero10 && !isNaN(numero10)){
        listaMayDoble += numero10+" "
    }

    alert("Supera la media: "+listaMayores+" Supera el doble de la media: "+listaMayDoble)
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
    }while(valido == false || num == "");
    
    return (Number(num))
}