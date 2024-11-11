let img = document.querySelector("div");
let btnDerecha = document.getElementById("moverDerecha");
let btnIzquierda = document.getElementById("moverIzquierda");
let timer

btnDerecha.addEventListener("click", function(){
    if (img.style.left != "400px"){
        img.style.left = parseInt(img.style.left) + 10 +"px";
    }
})

btnIzquierda.addEventListener("click", function(){
    if (img.style.left != "0px"){
        img.style.left = parseInt(img.style.left) - 10 +"px";
    }
    
})

img.addEventListener("mouseover", function() {
    timer = setInterval(function(){
        if (img.style.left == "400px"){
            clearInterval(timer)
        }
        img.style.left = parseInt(img.style.left) + 2 +"px";
    },10)
    
})
img.addEventListener("mouseout", function() {
    clearInterval(timer)
    img.style.left = "0px";
})