<<<<<<< HEAD
const leer = require("prompt-sync")();

const SALIDA_CALABOZO = true;


const ATAQUE_BASE_USER = 50;
const ATAQUE_CRITICO_USER= 90;
const DEFENDERSE = 50;

const ATAQUE_BASE_MONSTRUO = 30;
const ATAQUE_CRITICO_MONSTRUO = 90;

const CUARTO_A = 1;
const CUARTO_B = 2;
const CUARTO_C = 3;

console.log("Hola bienvenido a la mazmorra");



function main(){

let nombreUser = "def nombre";

let dentroCalabozo = true; 
let vidasUser = 200;
let pasosUser = 0;

console.log("Ingrese su nombre");
nombreUser = String(leer());

console.log("Bienvenido, hoy tendras que pasar por diferentes puertas hasta encontrar la salida");
console.log(`Tendras ${vidasUser} de vida, y tus ataques seran de ${ATAQUE_BASE_USER} y tus criticos ${ATAQUE_CRITICO_USER}`)

    while(dentroCalabozo == true){

        console.log("Hay tres cuartos, cuarto A[1], cuarto B[2], cuarto C[3]");
        pasosUser = Number(leer());

        if (pasosUser == CUARTO_A){
            console.log(`[${nombreUser} ENTRO AL CUARTO A]`);
            dentroCuarto();
        } else if (pasosUser == CUARTO_B){
        console.log(`[${nombreUser} ENTRO AL CUARTO B]`);
            dentroCuarto()
            dentroCalabozo = !SALIDA_CALABOZO;
        }else if (pasosUser == CUARTO_A){
            console.log(`[${nombreUser} ENTRO AL CUARTO C]`);
            dentroCalabozo();
        }

    }
}

function caminar(direccionNumerica){
    if (direccionNumerica == 1){

    }

}

function dentroCuarto(){
    let mosntruo = Math.floor((Math.random()*10)+1);
    let existeMonstruo = false

    if (mosntruo >= 7){
        console.log("[APARECE MONSTRUO]");
        console.log("Desea pelear? SI[1] O NO [2]");
        existeMonstruo = true;
    } else if(mosntruo <7){
        console.log("[NO HAY MONSTRUO]");
        existeMonstruo = false;
    }
    return existeMonstruo;
}

// function pelear(){


    

//     // si dese pelear atacar 
//     // ataque base o critico
//     // defenderse
// }


// function ataqueBaseCritico (){
//     let baseCriticoUser = Math.floor((Math.random()*10)+1);
//     let poderAtaqueUser = 0;

//     if (baseCriticoUser >= 7){
//         console.log(`[ATAQUE CRITICO, EL MONSTRUO RECIBIO ${ATAQUE_CRITICO_MONSTRUO}]`);
//         poderAtaqueUser = ATAQUE_CRITICO;
//     } else if(baseCriticoUser < 7){
//         console.log(`[ATAQUE COMUN, EL MONSTRUO RECIBIO ${ATAQUE_BASE_MONSTRUO}]`);
//         poderAtaqueUser = ATAQUE_BASE;
//     }
//     return poderAtaqueUser
// }

// function dañoRecibido(){
//     let baseCriticoMonstruo = Math.floor((Math.random()*10)+1);
//     let poderAtaqueMonstruo = 0;

//     if (baseCriticoMonstruo >= 8){
//         console.log(`[ATAQUE DEL MONSTRUO, RECIBIO ${ATAQUE_CRITICO_USER}]`);
//         poderAtaqueMonstruo = ATAQUE_CRITICO;
//     } else if(baseCriticoMonstruo < 8){
//         console.log(`[ATAQUE DEL MONSTRUO, RECIBIO ${ATAQUE_BASE_USER}]`);
//         poderAtaqueMonstruo = ATAQUE_BASE;
//     }
//     return poderAtaqueMonstruo
// }

// function defenderseUser(){
//     let defendido = (ATAQUE_BASE_MONSTRUO || ATAQUE_CRITICO_MONSTRUO) - DEFENDERSE;
//     return defendido;
// }

=======
const leer = require("prompt-sync")();

const SALIDA_CALABOZO = true;


const ATAQUE_BASE_USER = 50;
const ATAQUE_CRITICO_USER= 90;
const DEFENDERSE = 50;

const ATAQUE_BASE_MONSTRUO = 30;
const ATAQUE_CRITICO_MONSTRUO = 90;

const CUARTO_A = 1;
const CUARTO_B = 2;
const CUARTO_C = 3;

console.log("Hola bienvenido a la mazmorra");



function main(){

let nombreUser = "def nombre";

let dentroCalabozo = true; 
let vidasUser = 200;
let pasosUser = 0;

console.log("Ingrese su nombre");
nombreUser = String(leer());

console.log("Bienvenido, hoy tendras que pasar por diferentes puertas hasta encontrar la salida");
console.log(`Tendras ${vidasUser} de vida, y tus ataques seran de ${ATAQUE_BASE_USER} y tus criticos ${ATAQUE_CRITICO_USER}`)

    while(dentroCalabozo == true){

        console.log("Hay tres cuartos, cuarto A[1], cuarto B[2], cuarto C[3]");
        pasosUser = Number(leer());

        if (pasosUser == CUARTO_A){
            console.log(`[${nombreUser} ENTRO AL CUARTO A]`);
            dentroCuarto();
        } else if (pasosUser == CUARTO_B){
        console.log(`[${nombreUser} ENTRO AL CUARTO B]`);
            dentroCuarto()
            dentroCalabozo = !SALIDA_CALABOZO;
        }else if (pasosUser == CUARTO_A){
            console.log(`[${nombreUser} ENTRO AL CUARTO C]`);
            dentroCalabozo();
        }

    }
}

// function caminar(direccionNumerica){
//     if (direccionNumerica == 1){

//     }

// }

function dentroCuarto(){
    let mosntruo = Math.floor((Math.random()*10)+1);
    let existeMonstruo = false

    if (mosntruo >= 7){
        console.log("[APARECE MONSTRUO]");
        console.log("Desea pelear? SI[1] O NO [2]");
        existeMonstruo = true;
    } else if(mosntruo <7){
        console.log("[NO HAY MONSTRUO]");
        existeMonstruo = false;
    }
    return existeMonstruo;
}

// function pelear(){


    

//     // si dese pelear atacar 
//     // ataque base o critico
//     // defenderse
// }


// function ataqueBaseCritico (){
//     let baseCriticoUser = Math.floor((Math.random()*10)+1);
//     let poderAtaqueUser = 0;

//     if (baseCriticoUser >= 7){
//         console.log(`[ATAQUE CRITICO, EL MONSTRUO RECIBIO ${ATAQUE_CRITICO_MONSTRUO}]`);
//         poderAtaqueUser = ATAQUE_CRITICO;
//     } else if(baseCriticoUser < 7){
//         console.log(`[ATAQUE COMUN, EL MONSTRUO RECIBIO ${ATAQUE_BASE_MONSTRUO}]`);
//         poderAtaqueUser = ATAQUE_BASE;
//     }
//     return poderAtaqueUser
// }

// function dañoRecibido(){
//     let baseCriticoMonstruo = Math.floor((Math.random()*10)+1);
//     let poderAtaqueMonstruo = 0;

//     if (baseCriticoMonstruo >= 8){
//         console.log(`[ATAQUE DEL MONSTRUO, RECIBIO ${ATAQUE_CRITICO_USER}]`);
//         poderAtaqueMonstruo = ATAQUE_CRITICO;
//     } else if(baseCriticoMonstruo < 8){
//         console.log(`[ATAQUE DEL MONSTRUO, RECIBIO ${ATAQUE_BASE_USER}]`);
//         poderAtaqueMonstruo = ATAQUE_BASE;
//     }
//     return poderAtaqueMonstruo
// }

// function defenderseUser(){
//     let defendido = (ATAQUE_BASE_MONSTRUO || ATAQUE_CRITICO_MONSTRUO) - DEFENDERSE;
//     return defendido;
// }

>>>>>>> 66aa46372a9b6fbabf44a85aabd8f9d07a423bb3
main ();