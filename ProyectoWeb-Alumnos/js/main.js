console.log("javascript");

let creaAnuncio = document.getElementById("incluyeAnuncio");

creaAnuncio.addEventListener('click', incluirAnuncio);

function incluirAnuncio(){
    // Pedir usuario la direccion de la imagen y el enlace
    let pathImg = prompt("Direccion de la imagen","./img/foto1.jpg");
    let urlEnlace = prompt("URL del enlace ","https://www.marca.es");

    // Crear un div
    let nuevoHijo = document.createElement("div");

    // Creo el enlace
    let enlace = document.createElement("a");
    enlace.href = urlEnlace;
    enlace.textContent = prompt("Dime el texto del enlace: ");

    // Crear la imagen
    let imagen = document.createElement("img");
    imagen.src = pathImg;
    imagen.alt = "Imagen alternativo";
    imagen.style.width = "100px";
    imagen.style.height = "100px";

    // Agregar al hijo (div)
    nuevoHijo.appendChild(imagen);
    nuevoHijo.appendChild(enlace);
    
    // Añadimos el hijo al padre
    let seccion = document.getElementById("seccionArticulos");
    seccion.appendChild(nuevoHijo);
}