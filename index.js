// Realizar las 4 operaciones aritmeticas, debe recibir 3 parametros

function ejercicioUno(a = 0, b = 0, operation = "suma") {
    switch (operation) {
        case "suma":
            return console.log(a + b);
        case "resta":
            return console.log(a - b);
        case "multiplicacion":
            return console.log(a * b);
        case "division":
            return console.log(a / b);
        default:
            console.error(`La operacion ${operation} no es valida`);
    }
}

//EJECUCION DE FUNCIONES
//ejercicioUno();


function ejercicioDos(a = 0, b = 0){
    let numeros = [];
    //console.log(numeros);

    for(let i = a; i <=b; i++){

        if (i % 2 === 0){
            numeros.push(i);
        }
    }
    console.log(numeros);
}

//ejercicioDos(1,20);

function ejercicioTres(a=0,x=12){
    for(let i = 1; i<=x; i++){
        if (i !== 5){
            result = a * i
            console.log(`el numero ${a} * ${i} es igual a: ${result}`)
        }
    }
}

//ejercicioTres(2,10)