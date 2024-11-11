document.addEventListener('DOMContentLoaded', (event) => {
    const botones = document.querySelectorAll('button');
    const generarBtn = botones[0];
    const borrarViejoBtn = botones[1];
    const borrarNuevosBtn = botones[2];
    const sustituirBtn = botones[3];

    generarBtn.addEventListener('click', generar);
    borrarViejoBtn.addEventListener('click', borrarViejo);
    borrarNuevosBtn.addEventListener('click', borrarNuevos);
    sustituirBtn.addEventListener('click', sustituir);

    function generar() {
        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.className = 'estilo2';
        nuevoParrafo.textContent = 'Este es un nuevo párrafo generado con la segunda clase de estilo.';
        document.body.appendChild(nuevoParrafo);

        borrarNuevosBtn.disabled = false;
    }

    function borrarViejo() {
        const parrafoViejo = document.querySelector('.estilo1');
        if (parrafoViejo) {
            parrafoViejo.remove();
        }

        borrarViejoBtn.disabled = true;
        sustituirBtn.disabled = true;
    }

    function borrarNuevos() {
        const nuevosParrafos = document.querySelectorAll('.estilo2');
        nuevosParrafos.forEach(parrafo => parrafo.remove());

        borrarNuevosBtn.disabled = true;
    }

    function sustituir() {
        const parrafoViejo = document.querySelector('.estilo1');
        if (parrafoViejo) {
            const tabla = document.createElement('table');
            const fila1 = tabla.insertRow();
            const celda1 = fila1.insertCell(0);
            const celda2 = fila1.insertCell(1);
            celda1.textContent = '1';
            celda2.textContent = '2';

            const fila2 = tabla.insertRow();
            const celda3 = fila2.insertCell(0);
            const celda4 = fila2.insertCell(1);
            celda3.textContent = '3';
            celda4.textContent = '4';

            parrafoViejo.replaceWith(tabla);
        }
    }
});