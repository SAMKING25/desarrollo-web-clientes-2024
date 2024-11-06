let btnCorrer = document.getElementById('correr');
btnCorrer.addEventListener('click', iniciarCarreraOptima);

function calcularVelocidades(){
    let velocidades = [];
    for (let i=1; i<=4; i++){
        velocidades.push(parseInt(Math.random()*5 +1));
    }
    console.log(velocidades);
    return velocidades;
}

// OPCION 1
function iniciarCarrera(){
    // console.log("Estoy aquí");
    let corredores = document.querySelectorAll("div");
    let timer;

    let div1 = corredores[0];
    let div2 = corredores[1];
    let div3 = corredores[2];
    let div4 = corredores[3];

    let velocidades = calcularVelocidades();
    let final = false;

    let estilo1 = window.getComputedStyle(div1);
    let estilo2 = window.getComputedStyle(div2);
    let estilo3 = window.getComputedStyle(div3);
    let estilo4 = window.getComputedStyle(div4);

    timer = setInterval(function(){
        // opción 1 velocidad estática de cada div en el tiempo
        // let velocidad1 = parseInt(estilo1.getPropertyValue("left")) + velocidades[0];
        // let velocidad2 = parseInt(estilo2.getPropertyValue("left")) + velocidades[1];
        // let velocidad3 = parseInt(estilo3.getPropertyValue("left")) + velocidades[3];
        // let velocidad4 = parseInt(estilo4.getPropertyValue("left")) + velocidades[4];
        // console.log(velocidad1);

        // opción 2 velocidad variable en cada momento
        let velocidad1 = parseInt(estilo1.getPropertyValue("left")) + parseInt(Math.random()*5 +1);
        let velocidad2 = parseInt(estilo2.getPropertyValue("left")) + parseInt(Math.random()*5 +1);
        let velocidad3 = parseInt(estilo3.getPropertyValue("left")) + parseInt(Math.random()*5 +1);
        let velocidad4 = parseInt(estilo4.getPropertyValue("left")) + parseInt(Math.random()*5 +1);

        if (!final){
            // opción 1
            div1.style.setProperty("left", velocidad1 + "px");          
            if (parseInt(estilo1.getPropertyValue("left"))>=1080){
                final = true;
                alert("ha ganado div 1");
            }
            div2.style.setProperty("left", velocidad2 + "px");
            if (parseInt(estilo2.getPropertyValue("left"))>=1080){
                final = true;
                alert("ha ganado div 2");
            }
            div3.style.setProperty("left", velocidad3 + "px");
            if (parseInt(estilo3.getPropertyValue("left"))>=1080){
                final = true;
                alert("ha ganado div 3");
            }
            div4.style.setProperty("left", velocidad4 + "px");
            if (parseInt(estilo4.getPropertyValue("left"))>=1080){
                final = true;
                alert("ha ganado div 4");
            }
        }
        else{
            clearInterval(timer);
        }
    }, 100);

}

// OPCION 1
// document.getElementById('reiniciar').onclick = function () {
//     div1.style.setProperty("left", "0px");
//     div2.style.setProperty("left", "0px");
//     div3.style.setProperty("left", "0px");
//     div4.style.setProperty("left", "0px");
//     clearInterval(timer);
// };


// OPCION 2
document.getElementById('reiniciar').onclick = function () {
    let corredores = document.querySelectorAll("div");
    corredores[0].style.left = "0px";
    corredores[1].style.left = "0px";
    corredores[2].style.left = "0px";
    corredores[3].style.left = "0px";
    clearInterval(timer);
};


function iniciarCarreraOptima(){
    // console.log("Estoy aquí");
    let corredores = document.querySelectorAll("div");
    corredores[0].style.left = "0px";
    corredores[1].style.left = "0px";
    corredores[2].style.left = "0px";
    corredores[3].style.left = "0px";

    let velocidades = [];
    let timer;

    let final = false;

    timer = setInterval(function(){
        // opción 2 velocidad variable en cada momento
        velocidades = calcularVelocidades();
        if (!final){
            for (let i=0; i<4; i++){
                corredores[i].style.left = parseInt(corredores[i].style.left) + velocidades[i] + "px";

                if (parseInt(corredores[i].style.left)>=1080){
                    final=true;
                    alert("Ha ganado el corredor: " + (i+1));
                }
            }
        }
        else{
            clearInterval(timer);
        }
    }, 100);
}