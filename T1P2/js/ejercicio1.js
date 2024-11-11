let btnAgregar = document.getElementById("btnAgregar");
let btnBorrar = document.getElementById("btnBorrar");
let lista = document.getElementById("listaDinamica");

btnAgregar.addEventListener("click", function(){
    let nombreElemento = prompt("¿Que nombre le quieres poner al elemento de la lista?","Nombre del elemento");
    let nombreEnlace = prompt("¿Que enlace quieres para el elemento?","https://www.as.com")
    let elemento = document.createElement("li");
    let enlace = document.createElement("a");

    enlace.textContent = nombreElemento;
    enlace.href = nombreEnlace;

    elemento.appendChild(enlace);
    lista.appendChild(elemento);
});

btnBorrar.addEventListener("click", function(){
    lista.innerHTML = "";
});