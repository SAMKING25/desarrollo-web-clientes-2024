let cajas = document.querySelectorAll("div");

cajas[0].onmouseover = function() {
    cajas[1].style.visibility = "visible";
};

cajas[0].addEventListener("mouseout", function() {
    cajas[1].style.visibility = "hidden";
});
