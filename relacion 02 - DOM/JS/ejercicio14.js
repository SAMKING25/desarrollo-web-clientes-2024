let listadoPrincipal = document.querySelectorAll("li");

let pulsado1 = false;
let pulsado2 = false;
let pulsado3 = false;

listadoPrincipal[0].onclick = function(){
    if(!pulsado1){
        pulsado1 = true;

        // 💀💀💀
        if(pulsado2){
            listadoPrincipal[1].lastChild.remove();
            pulsado2 = false;
        }
        if(pulsado3){
            listadoPrincipal[2].lastChild.remove();
            pulsado3 = false;
        }
        
        
        let datosInicio = ["Portada","Acerca de mi", "Mis fotos"];
        let listaInicio = document.createElement('ul');
        for(let i=0; i<datosInicio.length; i++){
            let item = document.createElement('li');
            item.innerHTML = datosInicio[i];
            listaInicio.appendChild(item);
        }   
        
        listadoPrincipal[0].appendChild(listaInicio);

    } else {
        listadoPrincipal[0].lastChild.remove();
        pulsado1 = false;
    }
}

listadoPrincipal[1].onclick = function() {
    if(!pulsado2){
        pulsado2 = true;

        // 💀💀💀
        if(pulsado1){
            listadoPrincipal[0].lastChild.remove();
            pulsado1 = false;
        }
        if(pulsado3){
            listadoPrincipal[2].lastChild.remove();
            pulsado3 = false;
        }
        
        
        let datosProyecto = ["Web Apps","Mobile Apps", "Juegos"];
        let listaProyecto = document.createElement('ul');
        for(let i=0; i<datosProyecto.length; i++){
            let item = document.createElement('li');
            item.innerHTML = datosProyecto[i];
            listaProyecto.appendChild(item);
        }   

        listadoPrincipal[1].appendChild(listaProyecto);

    } else {
        listadoPrincipal[1].lastChild.remove();
        pulsado2 = false;
    }

}

listadoPrincipal[2].onclick = function() {
    if(!pulsado3){
        pulsado3 = true;

        // 💀💀💀
        if(pulsado1){
            listadoPrincipal[0].lastChild.remove();
            pulsado1 = false;
        }
        if(pulsado2){
            listadoPrincipal[1].lastChild.remove();
            pulsado2 = false;
        }
        
        
        let datosPortfolio = ["Software","Paginas Webs"];
        let listaPortfolio = document.createElement('ul');
        for(let i=0; i<datosPortfolio.length; i++){
            let item = document.createElement('li');
            item.innerHTML = datosPortfolio[i];
            listaPortfolio.appendChild(item);
        }   
        
        
        listadoPrincipal[2].appendChild(listaPortfolio);

    } else {
        listadoPrincipal[2].lastChild.remove();
        pulsado3 = false;
    }

}