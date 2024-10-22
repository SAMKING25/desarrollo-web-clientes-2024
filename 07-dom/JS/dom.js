function inicioDOM(){
    console.log("cacatua")

    document.body.style.background = 'red'

    // document.getElementById
    let titulo = document.getElementById("title")
    console.log(titulo)
    console.log(titulo.innerHTML)
    console.log(titulo.textContent)
    console.log(titulo.textContent.length)
}