let tabla = document.getElementById('generaTabla');

tabla.addEventListener('click',creoTabla);

function creoTabla(){
    let tam = RecogerNum("Dime tamaño de la matriz");

    let seccionTabla = document.getElementById('seccionTabla');

    let nuevaTabla = document.createElement('table');
    let tablaBody = document.createElement('tbody');

    nuevaTabla.style.width = '100%';
    nuevaTabla.setAttribute('border',1)

    for(let i=0; i<tam; i++){
        let fila = document.createElement('tr');
        for(let j=0; j<tam; j++){
            let celda = document.createElement('td');
            let textoCelda = document.createTextNode(`Fila : ${i+1}, Columna: ${j+1}`);

            celda.appendChild(textoCelda);

            // Añadimos un manejador de eventos para cambiar el color
            //  al hacer clic en la celda oportuna

            celda.onclick = function (){
                cambiarColorCelda(this);
            };
            fila.appendChild(celda);
            // añado la celda que acabo de crear a la fila que estoy construyendo
        }
        tablaBody.appendChild(fila)
    }
    nuevaTabla.appendChild(tablaBody);
    seccionTabla.appendChild(nuevaTabla)
}

function cambiarColorCelda(celda){
    celda.style.backgroundColor = (celda.style.backgroundColor) === 'blue' ? 'green' : 'blue'
}

function RecogerNum(msj) {
    let valido = false

    do {
        num = prompt(msj)
        if (isNaN(num) || num == "") {
            alert("No es un numero")
        } else {
            valido = true
        }
    } while (valido == false || num == "");

    return (num)
}   