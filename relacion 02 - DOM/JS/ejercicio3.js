let elemento = document.getElementById("contador");
let botonSumar = document.getElementById("sumar");
let botonRestar = document.getElementById("restar");

botonSumar.addEventListener("click", incrementarNumero);

function incrementarNumero(){
    elemento.textContent = parseInt(elemento.textContent) + 1;
}

botonRestar.addEventListener("click", decrementarNumero);

function decrementarNumero(){
    elemento.textContent = parseInt(elemento.textContent) - 1;
}