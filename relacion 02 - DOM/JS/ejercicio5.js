let color = document.getElementById("parrafo");

color.addEventListener("click", cambiarColor);

function cambiarColor(){
    if (color.classList.contains("uno")){
        color.classList.remove("uno");
        color.classList.add("dos");
    }
    else {
        color.classList.replace("dos","uno");
    }
}