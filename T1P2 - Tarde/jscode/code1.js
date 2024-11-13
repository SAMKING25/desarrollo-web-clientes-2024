let timer;
window.onload=()=>{
    let btnGenerar = document.getElementsByTagName("input")[0];
    let btnCompara=document.getElementsByTagName("input")[1];
    let caja1=document.getElementById("ladoIzq");
    let caja2=document.getElementById("ladoDer");
    let caja3=document.getElementById("salida");
    
    /** --------------FUSION DE A Y B----------------- */
    btnGenerar.onclick=()=>{
        timer=setInterval(function(){
            caja1.innerText="";
            caja2.innerText="";
            let num1 =(parseInt(Math.random()*(1+49)+1));
            let num2 =(parseInt(Math.random()*(1+49)+1));
            
            let texto1 = document.createTextNode(num1);
            let texto2 = document.createTextNode(num2);

            caja1.appendChild(texto1);
            caja2.appendChild(texto2);
            
        },1000);
        caja3.innerText="";
        btnGenerar.disabled=true;
        btnCompara.disabled=false;
    }

    btnCompara.onclick=()=>{

        clearInterval(timer);
        
        let texto1=parseInt(caja1.innerText);
        
        let texto2=parseInt(caja2.innerText);
        let aux=0;
        if (texto1>texto2) {
            aux=texto1;
        }else if (texto2>texto1){
            aux=texto2;
        }else{
            aux=texto1;
        }

        let text = document.createTextNode(aux);
        caja3.appendChild(text);
        btnGenerar.disabled=false;
        btnCompara.disabled=true;
    }


}