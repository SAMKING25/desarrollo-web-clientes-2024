let btnAgregarAlFinal= document.getElementById('btnAgregarAlFinal');
btnAgregarAlFinal.addEventListener('click', agregarFinal);

function agregarFinal(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem= document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = prompt("Introduce: ");

    primerElem.append(nuevoElem);

}