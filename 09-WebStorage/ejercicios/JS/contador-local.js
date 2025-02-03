document.getElementById("incrementar").addEventListener("click",incrementar);
document.getElementById("decrementar").addEventListener("click",decrementar);
document.getElementById("consultar").addEventListener("click",consultar);
let contador = document.getElementById("contador");

localStorage.setItem("contador", "1")

function incrementar(){
    localStorage.setItem("contador" ,Number(localStorage.getItem("contador"))+1);
    contador.innerHTML = localStorage.getItem("contador");
}
function decrementar(){
    localStorage.setItem("contador" ,Number(localStorage.getItem("contador"))-1);
    contador.innerHTML = localStorage.getItem("contador");
}
