let imag = document.querySelector("img");
let tipo = document.querySelector("img").getAttribute("src");

document.querySelectorAll("button")[1].onclick = function () {
	let imag = document.querySelector("img");
	let tipo = document.querySelector("img").getAttribute("src");
	switch (tipo) {
		case "img/foto1.jpg":
			imag.setAttribute("src", "img/foto2.jpg");
			document.querySelectorAll("button")[0].removeAttribute("disabled", "");
			break;
		case "img/foto2.jpg":
			imag.setAttribute("src", "img/foto3.jpg");
			break;
		case "img/foto3.jpg":
			imag.setAttribute("src", "img/foto4.jpg");
			break;
		case "img/foto4.jpg":
			imag.setAttribute("src", "img/foto5.jpg");
			document.querySelectorAll("button")[1].setAttribute("disabled", "");
			break;
		default:
			console.log("Boton deshabilitado");
	}
}

document.querySelectorAll("button")[0].onclick = function () {
	let imag = document.querySelector("img");
	let tipo = document.querySelector("img").getAttribute("src");
	switch (tipo) {
		case "img/foto5.jpg":
			imag.setAttribute("src", "img/foto4.jpg");
			document.querySelectorAll("button")[1].removeAttribute("disabled", "");
			break;
		case "img/foto4.jpg":
			imag.setAttribute("src", "img/foto3.jpg");
			break;
		case "img/foto3.jpg":
			imag.setAttribute("src", "img/foto2.jpg");
			break;
		case "img/foto2.jpg":
			imag.setAttribute("src", "img/foto1.jpg");
			document.querySelectorAll("button")[0].setAttribute("disabled", "");
			break;
		default:
			console.log("Boton deshabilitado");
	}
}