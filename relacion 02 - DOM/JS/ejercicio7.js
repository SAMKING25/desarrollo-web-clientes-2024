let celdas = document.querySelectorAll("td");
let contador = 0;

// define una lista de 4 colores y ahora cada vez que se pulsa sobre una celda,
//  esta va cambiando de color siguiendo la lista de colores definida 
// (si llega al final de la lista, vuelve al principio).

for (let i = 0; i < celdas.length; i++) {
    celdas[i].style.backgroundColor = "white";

    celdas[i].addEventListener("click", function () {
        let colores = ["red", "blue", "yellow", "orange"];

        celdas[i].style.backgroundColor = colores[contador];
        
        contador++;
        if(contador == 4){
            contador = 0;
        }
        
    });
    
}