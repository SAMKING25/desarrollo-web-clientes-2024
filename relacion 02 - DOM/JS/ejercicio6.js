let btnColor = document.querySelectorAll('button');
btnColor.addEventListener('click', cambiarColor);

switch (btnColor.value){
    case "red":
        btnColor.style.color = "red"
}