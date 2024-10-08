//  Vamos a realizar una Calculadora
//  Solicitamos numero A y B y operacion (+, -, *,/)

function Calculadora(){
    let opcion
    let op_valida = false
    let a = RecogerNum("Dime el numero A: ")
    let b = RecogerNum("Dime el numero B: ")
    do{
        opcion = prompt("¿Qué quieres hacer? (+,-,*,/) ")
        switch (opcion){
            case "+":
                Suma(a,b)
                op_valida = true
                break    
            case "-":
                Resta(a,b)
                op_valida = true
                break;
            case "*":
                Mult(a,b)
                op_valida = true
                break
            case "/":
                Division(a,b)
                op_valida = true
                break
            default:
                alert ("No valido")
        }
    }while(op_valida == false);
}


function Suma(a,b){
    let c = Number(a)+Number(b)
    alert(`La suma es: ${c}`)
}
function Resta(a,b){
    let c = Number(a)-Number(b)
    alert(`La resta es: ${c}`)
}
function Mult(a,b){
    let c = Number(a)*Number(b)
    alert(`La multiplicaion es: ${c}`)
}
function Division(a,b){
    let c = Number(a)/Number(b)
    alert(`La division es: ${c}`)
}

function RecogerNum(msj){
    let valido = false
    
    do{
        num = prompt(msj)
        if (isNaN(num) || num == ""){
            alert("No es un numero cabezon")            
        } else{
            valido = true
        }
    }while(valido == false || num == "");
    
    return (num)
}

// Calculadora()

function SumarDOM(a,b){
    let c = Number(a)+Number(b)

    let element
    alert(`La suma es: ${c}`)
}

function sumarVentana(){
    let a = RecogerNum("Dime el numero A: ")
    let b = RecogerNum("Dime el numero B: ")

    Suma(a,b)
}