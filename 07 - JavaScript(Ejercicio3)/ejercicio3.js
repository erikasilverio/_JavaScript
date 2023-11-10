



// ========== CALCULADORA EM JAVASCRIPT ==============



// FOI CRIADAS AS FUNCIONES FLECHA !!!!
// parseInt - é para transformar en un numero intero!



const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("Que Operación Deseas Realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicación");



if (operacion == 1 ) {
    let numero1 = prompt("Primero número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

if (operacion == 2 ) {
    let numero1 = prompt("Primero número para resta");
    let numero2 = prompt("Segundo número para resta");
    resultado = restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

if (operacion == 3 ) {
    let numero1 = prompt("Primero número para división");
    let numero2 = prompt("Segundo número para división");
    resultado = dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

if (operacion == 4 ) {
    let numero1 = prompt("Primero número para multiplicación");
    let numero2 = prompt("Segundo número para multiplicación");
    resultado = multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else {
    alert("No se ha encontrado la operación!")
}

