// Ejercicio: Administrador de Lista de Tareas Objetivo 1. Crear una lista de
// tareas con opciones para añadir elementos en diferentes posiciones, reemplazar,
// y eliminar. 2. Cada botón realizará una acción específica usando uno de los
// métodos de manipulación del DOM.

// Api de elementos
// elemento.before(); Añade el nuevo elemento justo antes.
// elemento.after(); Añade el nuevo elemento justo después.
// elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
// elemento.append(); Añade el nuevo elemento justo después del último hijo
// elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
// elemento.replaceWith(); se sustituye el elemento por el nuevo.
// elemento.remove(); elimina el propio elemento. 

let btnAgregarAntes = document.getElementById("btnAgregarAntes");
btnAgregarAntes.addEventListener('click',agregarAntes);

let btnAgregarDespues = document.getElementById("btnAgregarDespues");
btnAgregarDespues.addEventListener('click',agregarDespues);

let btnAgregarInicio = document.getElementById("btnAgregarInicio");
btnAgregarInicio.addEventListener('click',agregarInicio);

let btnAgregarFinal = document.getElementById("btnAgregarFinal");
btnAgregarFinal.addEventListener('click',agregarFinal);

let btnReemplazarTodo = document.getElementById("btnReemplazarTodo");
btnReemplazarTodo.addEventListener('click',ReemplazarTodo)

let btnReemplazarPrimero = document.getElementById("btnReemplazarPrimero");
btnReemplazarPrimero.addEventListener('click',ReemplazarPrimero)

let btnEliminaPrimero = document.getElementById("btnEliminaPrimero");
btnEliminaPrimero = addEventListener('click',EliminaPrimero)

function agregarAntes(){
    let primerElem = document.getElementById("primerElemento");
    let nuevoElem = document.createElement('li');

    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea delante del 1er elemento";
    primerElem.before(nuevoElem);
}

function agregarDespues(){
    let primerElem = document.getElementById("primerElemento");
    let nuevoElem = document.createElement('li');

    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea detras del 1er elemento";
    primerElem.after(nuevoElem);
}

function agregarInicio(){
    let elementos = document.getElementById("listaTareas");
    let nuevoElem = document.createElement('li');

    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea al principio";
    elementos.prepend(nuevoElem);
}

function agregarFinal(){
    let elementos = document.getElementById("listaTareas");
    let nuevoElem = document.createElement('li');

    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea al final";
    elementos.append(nuevoElem);
}

function ReemplazarTodo(){
    let elementos = document.getElementById("listaTareas");
    let primerElem = document.getElementById("primerElemento");
    
    elementos.replaceChildren(primerElem);
}

function ReemplazarPrimero() {
    let primerElem = document.querySelector(".tarea");
    let nuevoElem = document.createElement('li');

    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "REMPLAZAOO";
    if(primerElem.id == "primerElemento"){
        nuevoElem.id = "primerElemento";
    }
    primerElem.replaceWith(nuevoElem); 
}

function EliminaPrimero(){
    // let elementos = document.getElementById("listaTareas");
    // let primerElem = document.querySelector(".tarea");

    // elementos.remove(primerElem);
}