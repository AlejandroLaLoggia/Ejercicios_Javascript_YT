/*
Este ejercicio, consta de 3 inputs, donde JS da 2 numeros aleatorios, el usuario debe hacer la cuenta y al hacer click en comprobar o presionar enter, se comprueba si el resultado es correcto mediante un mensaje. En el caso de no ser correcto, ademas, se entrega el correspondiente resultado.

Pasos:
-Generar un numero random
-Mostrarlo en el primer input
-Genera otro numero
-Mostrarlo en el segundo input
-Al hacer click en el boton de comprobar o presionar enter
-Recoger el valor ingresa por el usuario en el resultado
-Comparar el resultado con la suma de los 2 primeros numeros.
-Devuelve un msj con el resultado y si es correcto o no.
*/

const PRIMER_INPUT= document.querySelector("#num1");
const SEGUNDO_INPUT= document.querySelector("#num2");
const RESULTADO_USUARIO= document.querySelector("#resultado");
const BTN=document.querySelector("#btn");
const MENSAJE=document.querySelector("#mensaje");
let resultado;
let resultado_usuario;

function mostrarErroneo(){
    MENSAJE.insertAdjacentHTML("afterbegin", `
    <span class="error">El resultado es erroneo!</span>
    <span class="error">la suma de ${PRIMER_INPUT.value} + ${SEGUNDO_INPUT.value} es igual a ${resultado}</span>`)
    iniciar();
}

function mostrarCorrecto(){
    MENSAJE.insertAdjacentHTML("afterbegin", `<span class="correcto">El resultado es correcto!</span>`)
    iniciar();
}

function limpiar(){
    PRIMER_INPUT.value="";
    SEGUNDO_INPUT.value="";
    RESULTADO_USUARIO.value="";
    RESULTADO_USUARIO.focus();
}

function comprobar(e){
    resultado_usuario=Number(RESULTADO_USUARIO.value);
    resultado=Number(PRIMER_INPUT.value) + Number(SEGUNDO_INPUT.value);

    if(e.key=="Enter" || e.type=="click" && (RESULTADO_USUARIO.value)){
        (resultado_usuario==resultado)
        ?mostrarCorrecto()
        :mostrarErroneo();
        
    }
    else if (!RESULTADO_USUARIO.value)RESULTADO_USUARIO.focus();
    

}

const randomNumber=(max)=> Math.floor( Math.random() * (max + 1));


function iniciar(){
    limpiar();
    PRIMER_INPUT.value= randomNumber(10);
    SEGUNDO_INPUT.value= randomNumber(10);
}

iniciar();

BTN.addEventListener("click", comprobar);
RESULTADO_USUARIO.addEventListener("keydown", comprobar);