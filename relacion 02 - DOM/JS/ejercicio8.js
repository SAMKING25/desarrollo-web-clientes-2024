let imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", function(){
    imagen.src = "./img/doomethernal.avif";
});

imagen.addEventListener("mouseout", function(){
    imagen.src = "./img/bloodborne.jpg";
});