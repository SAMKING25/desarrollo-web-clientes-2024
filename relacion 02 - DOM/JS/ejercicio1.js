boton1 = document.getElementById("uno");
boton2 = document.getElementById("dos");
enlace = document.querySelector("a");

boton1.addEventListener("click", function(){
    
    console.log(enlace.href);
    console.log(enlace.innerHTML);

});
boton2.addEventListener("click", function(){
    enlace.href = "https://www.marca.com/";
    enlace.innerHTML = "He cambiado";

    console.log(enlace.href);
    console.log(enlace.innerHTML);

});