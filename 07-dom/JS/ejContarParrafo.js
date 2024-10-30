
// Opcion 1
// document.addEventListener("DOMContentLoaded", () => {
//     alert("DOM cargado");

//     let texto = "";

//     if(window.navigator.cookieEnabled)
//     if(navigator.cookieEnabled){
//         texto = "Cookies habilitadas";
//     } else{
//         texto = "Cookies deshabilitadas"
//     }
//     alert(texto);
//     alert(window.location); URL
//     alert(`Tamaño de ventana: Altura ${innerHeight}px, Anchura ${innerWidth}px`);
// });

window.addEventListener("load", contarEnlaces);


function contarEnlaces(){
    let info = document.getElementById("informacion");

    // a) Numero de enlaces 7
    let total_enlaces = document.getElementsByTagName("a");
    console.log(total_enlaces);
    info.innerHTML = "El numero de enlaces es: "+ total_enlaces.length;

    // b) Indicar a que enlace apunta el punltimo enlace  http://prueba4/
    info.innerHTML += "<br>" + "La direccion del penultmo enlace es: "+ total_enlaces[total_enlaces.length-2]

    // c) Cuantos enlaces apuntan a http://prueba 3
    let contador = 0;

    for(let i=0; i<total_enlaces.length-1; i++){
        if(total_enlaces[i].href == "http://prueba/"){
            contador++;
        }
    }
    info.innerHTML += "<br>"+"Hay "+contador+" enlaces  http://prueba/";

    // d) Numero de enlaces del tercer parrafo 3
    let total_parrafos = document.getElementsByTagName('p');
    console.log(total_parrafos);
    let numEnlaces = total_parrafos[2].getElementsByTagName('a');

    info.innerHTML += "<br>" + "Hay "+ numEnlaces.length +" enlaces en el parrafo 3";
}

