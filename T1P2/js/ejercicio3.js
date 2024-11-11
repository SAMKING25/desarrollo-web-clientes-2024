let btnAgregar = document.getElementById("btnAgregarDivImagen");
let btnResetear = document.getElementById("btnResetearSeccion");
let seccion = document.getElementById("seccionDinamica");

btnAgregar.addEventListener("click",function() {
    btnResetear.disabled = false;
    let nombreTitulo = prompt("Introduce el titulo de la imagen: ","Nombre Foto")
    let nombreRuta = prompt("Ingrese la ruta de la imagen: ","img/foto1.jpg");
    let nombreEnlace = prompt("Ingrese un link para el elemento: ","https://www.as.com");

    let contenedor = document.createElement("div")
    let titulo = document.createElement("h2");
    let img = document.createElement("img");
    let enlace = document.createElement("a");

    titulo.textContent = nombreTitulo;
    img.src = nombreRuta;
    enlace.textContent= "Ver mas";
    enlace.href = nombreEnlace;
    
    contenedor.appendChild(titulo);
    contenedor.appendChild(img);
    contenedor.appendChild(enlace);
    seccion.appendChild(contenedor);
});

btnResetear.addEventListener("click", function(){   
    while(seccion.firstChild){
        seccion.removeChild(seccion.firstChild);
    }
})
