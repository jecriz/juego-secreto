function listaNumeros(lista){

    let nuevaLista = [];

    for(let i=0; i<lista.length;i++){

        nuevaLista.push(lista[i]*lista[i]);

    }
    return nuevaLista;
}


console.log(listaNumeros([3,4,9,8,7,5,6,2]));