let btnGenerarTabla = document.getElementById("btnGenerarTabla");
let seccion = document.getElementById("seccionTabla");

btnGenerarTabla.addEventListener("click",function() {
    let cantidadFilas;
    let cantidadCeldas;

    do {
        cantidadFilas = parseInt(prompt("¿Cuantas filas quieres en la tabla?"));
    } while (cantidadFilas > 10 || cantidadFilas < 1 || isNaN(cantidadFilas));
    
    do {
        cantidadCeldas = parseInt(prompt("¿Cuantas celdas quieres en la tabla?"));
    } while (cantidadCeldas > 10 || cantidadCeldas < 1 || isNaN(cantidadCeldas));

    let tabla = document.createElement("table");
    tabla.className = "tabla";

    for (let i = 0; i < cantidadFilas; i++) {
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        for (let j = 0; j < cantidadCeldas; j++) {
            let celda = document.createElement("td");
            fila.appendChild(celda);
        }

    }
    seccion.appendChild(tabla);

    let celdas = document.querySelectorAll("td");
    let contador = 0;
    for (let i = 0; i < celdas.length; i++) {

        celdas[i].addEventListener("click", function () {
            let imagen = document.createElement("img");
            
            let imagenes = ["img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg"];

            imagen.src = imagenes[contador];
            celdas[i].replaceChildren(imagen)
            contador++;
            if(contador == 4){
                contador = 0;
            }
            
        });
        
    }
})

    


