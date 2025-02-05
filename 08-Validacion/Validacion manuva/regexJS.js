document.getElementById("contrasenia").addEventListener("focusout", (e) => {
    let patron = '/^[\w.*-]{8,}$/';
    let regExrPassword = patron.test(e.target.value);

    if(regExrPassword){
        alert("Contraseña Correcta");
    }else{
        alert("Contraseña Incorrecta")
    }
});


document.getElementById("ip").addEventListener("focusout", (e) => {
    let patron = '/^[0-255].[0-255].[0-255].[0-255]$/';
    let regExrIP=patron.test(e.target.value);

    if(regExrIP){
        alert("Contraseña Correcta");
    }else{
        alert("Contraseña Incorrecta")
    }
});

document.getElementById("n_serie").addEventListener("focusout", (e) => {
    let patron = '/^[N/S][a-zA-Z]{10,}$/';
    let regExrn_serie=patron.test(e.target.value);

    if(regExrn_serie){
        alert("Contraseña Correcta");
    }else{
        alert("Contraseña Incorrecta")
    }
});

document.getElementById("dominio").addEventListener("focusout", (e) => {
    let patron = '/^([a-z0-9\-]+\.){1,2}[a,z]{2,6}$/';
    let regExrdominio =patron.test(e.target.value);

    if(regExrdominio){
        alert("Contraseña Correcta");
    }else{
        alert("Contraseña Incorrecta")
    }
});