let btnCorrer = document.getElementById('btnCorrer');
btnCorrer.addEventListener('click',iniciarCarrera)

function calcularVelocidades(){
    let velocidades = []
    for (let i=0; i<=4; i++){
        velocidades.push(Math.random()*5 +1)
    }
    return velocidades
}

function iniciarCarrera(){
    let corredores = document.querySelectorAll("div");
    let timer;
    
    let div1 = corredores[0];
    let div2 = corredores[1];
    let div3 = corredores[2];
    let div4 = corredores[3];

    let velocidades = calcularVelocidades;
    let final = false

    timer = setInterval(function(){
        if(!final){
            div1.style.left = parseInt(div1.style.left) + velocidades[0]+"px"
            div2.style.left = parseInt(div2.style.left) + velocidades[1]+"px"
            div3.style.left = parseInt(div3.style.left) + velocidades[2]+"px"
            div4.style.left = parseInt(div4.style.left) + velocidades[3]+"px"
        
            if(div1.style.left >= 1080){
                final = true
                alert("Ha ganado el Cuadrado 1!!")
            }
            if(div2.style.left >= 1080){
                final = true
                alert("Ha ganado el Cuadrado 2!!")
            }
            if(div3.style.left >= 1080){
                final = true
                alert("Ha ganado el Cuadrado 3!!")
            }
            if(div4.style.left >= 1080){
                final = true
                alert("Ha ganado el Cuadrado 4!!")
            }
        }
        else{
            clearInterval(timer)
        }
    },100)
}