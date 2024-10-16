function Convertir(){
    let opcion_res
    let importe
    let resultado

    do{
        opcion = prompt("¿A que quieres cambiar ? 1 a pesetas, 2 a dolares")
    }while(opcion != 1 && opcion != 2)
    
    do{
        importe = prompt("Introduce la cantidad de dinero a cambiar: ")
    }while(importe <= 0 || isNaN(importe))

    if(opcion == 1){
        opcion_res = "pesetas"
        resultado = importe*166
    } else{
        opcion_res = "dolares"
        resultado = importe*1.09
    }

    alert("El cambio de "+importe+" euros son "+resultado+" "+opcion_res)
}