window.onload=()=>{
    let btnAnadir=document.getElementsByTagName("input")[0];
    let btnLimpiar=document.getElementsByTagName("input")[1];
    let contenedor=document.getElementById("contenedor");

    btnAnadir.onclick=()=>{
        btnLimpiar.disabled=false;
        let imagen=prompt("Ingrese el nombre de la imagen con su extencion;: ");

        let imagenDestino="";
        if (imagen=="") {
            imagenDestino="./img/terra.jpg";
        }
        else{
            imagenDestino="./img/"+imagen;
        }
        
        let image = document.createElement("img");
        image.className="foto";
        image.src=imagenDestino;
        
        contenedor.appendChild(image);

    }

    btnLimpiar.onclick=()=>{
        
        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
        }
        
    }

}