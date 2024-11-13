window.onload=()=>{

    let boton=document.querySelector("input");
    let padre=document.getElementsByClassName("solucion")[0];
    
    boton.onclick=()=>{
        let pedidoFila;
        let pedidoCeldas;
        do {
            pedidoFila=parseInt(prompt("ingrese la cantidad de Filas: "));    
        } while (isNaN(pedidoFila)||pedidoFila>10||pedidoFila<1);
        do{
            pedidoCeldas=parseInt(prompt("ingrese la cantidad de Celdas: "));
        } while (isNaN(pedidoCeldas)||pedidoCeldas>10||pedidoCeldas<1);
        
        let tabla=document.createElement("table");
        for (let i = 0; i < pedidoFila; i++) {
            let fila=document.createElement("tr");
            tabla.appendChild(fila);
            for (let j = 0; j < pedidoCeldas; j++) {
                let texto=document.createTextNode(i+1);
                let celda=document.createElement("td");
                celda.appendChild(texto);
                fila.appendChild(celda);
            }    
            
        }
 
        tabla.className="tabla";
       
        
        padre.appendChild(tabla);
    }

}