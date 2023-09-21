/*
    Este ejercicio consta de una brujula con una flecha, al hacer click en la brujula, se incrementan de a 20º y se muestra con la flecha y de forma numerica.

    btn
    flecha
    porcentaje
    */


    const BTN=document.querySelector("#btn");
    const FLECHA=document.querySelector("#flecha");
    const PORCENTAJE=document.querySelector("#porcentaje");
    let valor=0;

    function mostrar(){
        PORCENTAJE.innerHTML=`${valor}º`;
        FLECHA.style.transform=`rotate(${valor}deg)`;
    }

    function girar(){
        valor+=20;
        if (valor>=360) valor=0;
        mostrar();
    }

    BTN.addEventListener("click", girar);

    mostrar();
