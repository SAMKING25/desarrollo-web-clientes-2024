// Ejercicio: Administrador de Lista de Tareas Objetivo 1. Crear una lista de
// tareas con opciones para añadir elementos en diferentes posiciones, reemplazar,
// y eliminar. 2. Cada botón realizará una acción específica usando uno de los
// métodos de manipulación del DOM. -->

// <!-- Api de elementos
// elemento.before(); Añade el nuevo elemento justo antes.
// elemento.after(); Añade el nuevo elemento justo después.
// elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
// elemento.append(); Añade el nuevo elemento justo después del último hijo
// elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
// elemento.replaceWith(); se sustituye el elemento por el nuevo.
// elemento.remove(); elimina el propio elemento.

console.log("Estoy");

let btnAgregarAntes = document.getElementById('btnAgregarAntes');
btnAgregarAntes.addEventListener('click', agregarAntes);

function agregarAntes() {
    let primerElem = document.getElementById('primerElemento');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea delante del 1er elemento";
    primerElem.before(nuevoElem);
}

function agregarDespues() {
    const primerElemento = document.getElementById("primerElemento");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add('tarea');
    nuevoElemento.textContent = "Nueva Tarea después del primer elemento";
    primerElemento.after(nuevoElemento); // Agrega después del primer elemento
}

function agregarAlInicio() {
    const lista = document.getElementById("listaTareas");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add('tarea');
    nuevoElemento.textContent = "Nueva Tarea al inicio";
    lista.prepend(nuevoElemento); // Agrega al inicio de la lista
}

function agregarAlFinal() {
    const lista = document.getElementById("listaTareas");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add('tarea');
    nuevoElemento.textContent = "Nueva Tarea al final";
    lista.append(nuevoElemento); // Agrega al final de la lista
}

function reemplazarElementos() {
    const lista = document.getElementById("listaTareas");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add('tarea');
    nuevoElemento.textContent = "Elemento reemplazado en la lista";
    lista.replaceChildren(nuevoElemento); // Reemplaza todos los hijos por el nuevo elemento
}

function reemplazarElemento() {
    const primerElemento = document.getElementById("primerElemento");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add('tarea');
    nuevoElemento.textContent = "Este es un elemento reemplazado";
    primerElemento.replaceWith(nuevoElemento); // Reemplaza el primer elemento
}

function eliminarElemento() {
    const primerElemento = document.getElementById("primerElemento");
    primerElemento.remove(); // Elimina el primer elemento
}
// Nuevas funciones usando querySelector

function reemplazarElemento1() {
    const primerElemento = document.querySelector(".tarea");
    if (primerElemento) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.classList.add('tarea');
        nuevoElemento.textContent = "Este es un reemplazo de la 1ra tarea";
        primerElemento.replaceWith(nuevoElemento);
    }
}

function eliminarElemento1() {
    const primerElemento = document.querySelector(".tarea");
    if (primerElemento) {
        primerElemento.remove();
    }
}