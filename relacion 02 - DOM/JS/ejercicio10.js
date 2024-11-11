let cajas = document.querySelectorAll("div");

for(let i=0; i<cajas.length; i++){
    cajas[i].addEventListener("mouseover", function() {
        document.body.style.backgroundColor= cajas[i].style.backgroundColor;
    });
    cajas[i].addEventListener("mouseout", function() {
        document.body.style.backgroundColor= "white";
    });
}
