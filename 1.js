let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;

}

function verificarIntento(){

    let numeroDeUsuario  = document.getElementById("numeroUsuario").value;

    console.log("Intentos" + intentos);
    
    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${intentos==1?"vez":"veces"}`);

        document.getElementById("reiniciar").removeAttribute("disabled")

    }else{

        if(numeroDeUsuario>numeroSecreto){

            asignarTextoElemento("p","El numero Secreto es menor")

        }else{
            asignarTextoElemento("p","El numero Secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){

    document.querySelector('#numeroUsuario').value='';

}

function condicionesIniciales(){

    asignarTextoElemento("h1", "juego del calamar");
    asignarTextoElemento("p","adivina el numero del 1 al 10")
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);


}

function generarNumeroSecreto(){

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")


    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }
}

function reiniciarJuego(){

    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    console.log(numeroSecreto);
}

condicionesIniciales();