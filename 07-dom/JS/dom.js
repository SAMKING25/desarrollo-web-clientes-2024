function inicioDOM(){
    console.log("cacatua")

    document.body.style.background = 'cyan'

    // document.getElementById
    let titulo = document.getElementById("title")
    console.log(titulo)
    console.log(titulo.innerHTML)
    console.log(titulo.textContent)
    console.log(titulo.textContent.length)

    //getElementByName
    let up_name = document.getElementsByName("up");
    console.log(up_name[0]);
    console.log(up_name[1]);
    console.log(up_name[0].tagName);
    console.log(up_name[1].tagName);

    // getElementByTagName
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos)

    // Document.getElementByClassName()
    parrafos = document.getElementsByClassName("parrafos1")
    console.log(parrafos)

    console.log(`Numero de parrafos que tengo ${parrafos.length}`)

    for(let i=0; i<parrafos.length;i++){
        if(i == 3){
            parrafos[i].innerHTML = "Parrafo cambiado"
        }
        console.log(`Parrafo ${i+1}: ${parrafos[i].innerHTML}`)
    }

    // querySelector()
    let parrafo1 = document.querySelector("p.parrafos1")
    console.log(parrafo1)

    parrafo1 = document.querySelector(".projects p")
    console.log(parrafo1)

    // querySelectorAll()
    let elementos = document.querySelectorAll("p.parrafos1")
    console.log(`Numero de elementos que tengo ${parrafos.length}`)

    for(let i=0; i<elementos.length;i++){
        console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`)
    }



}

let estado = false

function cambioCabecera(cabecera){
    // if(estado){
    //     cabecera.style.color='black'
    //     estado = false
    // } else{
    //     cabecera.style.color='red'
    //     estado = true
    // }

    cabecera.style.color = cabecera.style.color === 'red' ? 'black' : 'red';
}


let title2 = document.getElementById('subtitle');
title2.addEventListener('click',cambioSubtitulo2);

// Vamos a modificar el titulo 2
function cambioSubtitulo2(){
    let elemento = document.getElementById('subtitle')
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}

let title3 = document.getElementById('h3title');
title3.addEventListener('dblclick', cambioSubtitulo3);

function cambioSubtitulo3(){
    let elemento = document.getElementById('h3title')
    elemento.style.color = (elemento.style.color) === 'purple' ? 'green' : 'purple';
}

let c1 = document.getElementById('caja1');
c1.addEventListener('click', cambioClase);

let c2 = document.getElementById('caja2');
c2.addEventListener('click', cambioClase2);

function cambioClase(){
    if(c1.classList.contains('caja--negra')){
        c1.classList.remove('caja--negra');
        c1.classList.add('caja--roja');
    } else{
        c1.classList.replace('caja--roja','caja--negra');
    }
}

function cambioClase2(){
    if(c2.classList.contains('caja--negra')){
        c2.classList.remove('caja--negra');
        c2.classList.add('caja--roja');
    } else{
        c2.classList.replace('caja--roja','caja--negra');
    }
}
