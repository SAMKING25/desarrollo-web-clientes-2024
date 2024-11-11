

function modificacion(elemento){
    let btnC = document.getElementsByClassName("limpiar")[0];
    btnC.style.backgroundColor = "rgb(202, 60, 60)";
}

function marcaDeNumeros(){
    let numeros = document.getElementsByClassName("numero");

    for(let i=0; i<numeros.length;i++){
        numeros[i].style.backgroundColor = "black"
        numeros[i].style.color = "white"
    }
}

function marcaDeOperadores(){
    let operadores = document.getElementsByClassName("operador");
    let igual = document.getElementsByClassName("igual")[0];

    for(let i=0; i<operadores.length;i++){
        operadores[i].style.backgroundColor = "yellow"
    }

    igual.style.backgroundColor = "yellow";
}

let btnReseteo = document.getElementById("resetear");

btnReseteo.addEventListener("click", function(){
    let operadores = document.getElementsByClassName("operador");
    let igual = document.getElementsByClassName("igual")[0];
    let numeros = document.getElementsByClassName("numero");
    let btnC = document.getElementsByClassName("limpiar")[0];

    btnC.style.backgroundColor = "#FF7C87";

    for(let i=0; i<numeros.length;i++){
        numeros[i].style.backgroundColor = "#FFFFFF"
        numeros[i].style.color = "#888888"
    }

    for(let i=0; i<operadores.length;i++){
        operadores[i].style.backgroundColor = "#FFDAB9"
    }

    igual.style.backgroundColor = "#F1FF92";
})