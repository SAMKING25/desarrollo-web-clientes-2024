let btnColor = document.querySelectorAll('button');
btnColor.addEventListener('click', function(){
    for(let i=0; i<btnColor.length-1; i++){
        switch (btnColor[i].value){
            case "red":
                document.body.style.backgroundColor = "red"
                break;
            case "yellow":
                document.body.style.backgroundColor = yellow
                break;
        }
    }
    
});
