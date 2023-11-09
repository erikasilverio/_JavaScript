
// ===================== ARRAYS =======================







// ARRAYS =  sao objetos, podemos guardar muitos dados.

// let arrays = ["Erika" , 36, " Silver"]


// posicion  let variable = [0,1,2,3,4,5]


//let frutas = ["banana","manzana","pera", 5 , 9 , "Erika"];

// document.write(frutas[2]); 
// mostra un elemento especifico [ aqui vai o numero da posicao]











// ========== ARRAYS ASOCIATIVOS ============


// let pc1 = {
//     nombre: "ErikaPC",
//     procesador: "Intel Core I7",
//     ram: "16GB",
//     espacio: "1TB"
// };


//============
//  let pc2 = ["ErikaPC", "Intel Core I7", "16GB", "1TB"];
// 
//  document.write(pc1["ram"]); 
//=================== 



// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];
// 
// frase =`el nombre de mi PC es: <b>${nombre}</b> <br>
//         el procesador es: <b>${procesador}</b> <br>
//         la memoria ram es: <b>${ram}</b> <br>
//         el espacio en disco es: <b>${espacio}</b>`;
// 
// 
// document.write(frase); 










// ========== BUCLES E INTERACIÓN ============







// ============================ IF ==================



// let numero = 0

// if (numero < 10) {


//     numero ++; // QUANDO COLOCAMOS ++ AUMENTAMOS 1 !

//     document.write(numero)

// }










// ====================== WHILE ================


//let numero = 0

// while (numero < 6) {

//    numero++;
//    document.write(numero + "<br>")

// }








 // ====================== DO WHILE ===================

// let numero = 0

// do {
    
//     numero++;
//     document.write(numero + "<br>")
// }

// while (numero > 6) 








 // ====================== BREACK ===================

// let numero = 0
 
// while(numero < 1000){
//     numero ++;
//     document.write(numero);
 
//     if(numero == 10){
//         break;
     
//     }
// }
 
// document.write(" Terminou el Bucle")











// ====================== FOR  ===================

// DECLARAMOS, INICIALIZAMOS, ITERAMOS 

// EM ( FOR ) DEFINIMOS A VARIABLE, LE DAMOS LA CONDICION Y AUMENTAMOS.
// AQUI VEMOS QUE DENTRO DE FOR A VARIABLE ES UN VALOR, AFURA OTRO.



// for (let i = 0; i < 6 ; i++) {
//     document.write( i + "<br>");

// }




// for (let i = 0; i < 15 ; i++ ) {
// 
//     
//     if ( i == 12) {
//     continue;  
//     }

// ===== COM O "CONTINUE" ELE SALTOU O NUMERO 12
// ===== COM "BREAK" ELE PARA NO NUMERO 12

//    document.write( i + "<br>");

// }


// ====================== FOR IN ( DEVUELVE EL INDICE) ================





// let animales = ["gato", "perro", "rata"];
// 
// for (animal in animales){
//     document.write(animal + "<br>");
//     EJEMPLO
 //     document.write(animales[0] + "<br> ") mostra a posicao solicitada
// 
// }
// 
//     document.write("<br>");
// 
// 
// 
// 
// ====================== FOR OF ( DEVUELVE EL VALOR) ================




// 
// for (animal of animales){
//     document.write(animal + "<br>");
//     
// 
// }


// ====================== LABEL ================


// array1 = ["maria", "josefa","sofia"]
// array2 = [ "pedro","marcelo", array1, "joana"]
// 
// 
// for (let array in array2) {
//     if (array == 2) {
//         for (let array of array1){
//             document.write(array + "<br>");
//             continue;
//         }
//     } else {
//         document.write(array2[array] + "<br>")
//     }
// 
// }

// = ============================================================ = =
// ==================================================================




// ==============================  FUNCIONES ==========================



// function saludar(){
// 
//     respuesta = prompt("Hola Erika! Como fue tu dia?");
// if (respuesta == "bien"){
//     alert("Me Alegro!")
// } else {
//     alert("Que Pena!")
// }
// 
// 
// }
// 
// 
// saludar()
// saludar()



// =======  RETURN !!! ============

// function saludar () {
//         alert("Hola!!!");
//         return "La function se ejecuto correctamente"
// }
// 
// let saludo = saludar();
// 
// document.write(saludo)



// =======  PARAMETROS !!! ============





// function suma(num1,num2){
//     
//     let res = num1 + num2;
//     
//     document.write(res);
//     document.write("<br>");
// 
// }
// 
// suma(12,32)
// 
// suma(22,34)
// 
// suma(1,1)



// OTRO EJEMPLO

// function saludar(nombre){
//     let frase = `Hola! ${nombre} ! Como Estas??? `;
//     document.write(frase)
// }
// 
// saludar("Erika")


// OTRO EJEMPLO

// const saludar = function(nombre){
//     let frase = `Hola ${nombre}!!! Como estas?`;
//     document.write(frase)
// }


//saludar("Erika")





// ======= FUNCIONES FLECHA  !!! ============>>>>>>>>>>>>>>>






// const saludar = nombre=>{
//     let frase = `Hola ${nombre}!!! Como estas?`;
//     document.write(frase)
// }
// 
// saludar("Erika")


// OTRO EJEMPLO DE FLECHA





// const saludar = (nombre) => {
//     
//     document.write("Hola Como estas? " + nombre);
//     
//     
// }
// 
// saludar("Erika")












