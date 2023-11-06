// string = "cadena de texto"
// number = 19
// booleano = false


// ----------- VARIABLES ----- var, let, const

// var numero = 15
// let numero = 15



// -------------  a CONST nao pode mudar, é sempre a mesma.------------

// const nombre = "Erika"

// alert(nombre)



// ---------- let e var , sim pode modificar!!!! -----------

// let numero
// numero = 29
// alert(numero)


// ---------------- MULTIPLES VARIABLE ------------


// UMA FORMA DE DECLARAR ----  let numero, numero2, numero3;

// OUTRA FORMA DE DECLARAR ------ let numero = 19, numero2 = 20

// OUTRA MANEIRA DE DECLARAR ----- 
// let numero1 = 19;
// let numero2 = 20;



// ------------ NULL --- VALOR VACIO.

// let numero = null;



// ============== NaN -- NAO SE PODE REALIZAR A OPERACAO =============


// let numero = 5;
// let numero2 = "erika"

// alert(numero * numero2)


// ===================  PROMPT =================


// let nombre = prompt("decime tu nombre");

// alert("Hola " + nombre)


// ============= OPERADORES DE ASIGNACION ==============


// let numero = 10;

// numero %= 5;

// document.write(numero)


// ========= OPERADORES ARITMETICOS  =========

// =========== SUMA ( + )

// numero1 = 10;

// numero2 = 5;

// resultado = numero1 + numero2

// alert(resultado)

// =====

// ========= DECREMENTO ( -- )

// numero1 = 10;
// numero2 = 5;

// numero1 -- ;

// resultado =  numero1;
// alert(resultado)


// ======== DIVISION ( / )


// numero1 = 10;
// numero2 = 5;


// resultado =  numero1/ numero2;
// alert(resultado)


// ======== EXPONENCIALIZACAO ( ** )


// numero1 = 10;
// numero2 = 5;


// resultado =  numero1 ** numero2 ;
// alert(resultado)




// ======== INCREMENTO ( ++ )


// numero1 = 10;
// numero2 = 5;

// numero1 ++ ;

// resultado =  numero1;
// alert(resultado)




// ======== REMAINDER , O RESTO  ( & )


// numero1 = 10;
// numero2 = 5;



// resultado =  numero1&numero2;
// alert(resultado)



// ======== SUBTRACAO  ( - )


// numero1 = 10;
// numero2 = 5;



// resultado =  numero1-numero2;
// alert(resultado)


// ======== NEGACION UNARIA  ( - )


// numero1 = 10;
// numero2 = 5;

// resultado =  -numero1;
// alert(resultado)



//=============================================

// ==============  CONCATENACION =============  //


// ejemplo :


// saludo = "Hola Erika!!! ";
// pregunta = "Como estas? ";

// frase = saludo + pregunta

// document.write(frase)



//======= outro exemplo , quando coloca " " se entende que tudo é texto.


// numero1 = 53;
// numero2 = 8;

// frases = " " + numero1 + numero2
// document.write(frases)


// PARA USAR CONCAT, HAY QUE TENER UN STRING

// numero1 = "53";
// numero2 = 8;

// frases =  numero1.concat(numero2)
// document.write(frases)



// ================== OUTRO PARA CONCATENAR ============


//nombre = "Erika Silver";
//
//frase = "Soy " + nombre + " y estoy caminando"
//
//document.write(frase)


// ========= la mas recomentable !!!!!!!!!!!!!!


// nombre = "Erika Silver";

// frase = `Soy  ${nombre}  y 
// 
// estoy caminando`;



// ====!!!!!!!!!!!!!  COMCATENAR COM BACKTICKS !!!! ===

// frase = `<div>
// 
// <h1> Com esse simbolo de inicio ,
// consigo escrever codigo "HTML"</h1>
// 
// </div> `;
// 
// document.write(frase)


// ===== OUTRA

// nombre = "Erika Silverio";
// 
// frase = " mi nombre es 'erika' silver";
// 
// document.write(frase)


// --- OPERADORES ( INTERMEDIO ) ----


// OPERADOR DE COMPARACION 
// (TRUE OU FALSE) ( == )



// let numero = 23;
// let numero2 = 13;
// 
// document.write(numero == numero2)




// OPERADOR DE INEGUALDAD
// ( É DISTINTO ?) ( TRUE OU FALSE ) ( != )

// let numero = 23;
// let numero2 = 13;
// let texto = " Texto 1 ";
// let texto2 = " Texto 2 ";
// 
// document.write(texto != texto2)



// OPERADOR DE IDENTIDAD
// ( É TOTALMENT IDENTICO? É O MESMO TIPO DE DATO ?  ) ( === )

// let numero = 23;
// let numero2 = 13;
// let texto = " Texto 1 ";
// let texto2 = " Texto 2 ";

// document.write(texto === texto2)



// OPERADOR DE NÃO IDENTIDAD
// ( NÃO É TOTALMENT IDENTICO ? NÃO É O MESMO TIPO DE DATO ?  ) ( !== )

// let numero = 23;
// let numero2 = 13;
// let texto = " Texto 1 ";
// let texto2 = " Texto 2 ";
// 
// document.write(texto !== texto2)


// OPERADOR DE COMPARACAO

// ( > ) MAYOR
// ( >= ) MAYOR O IGUAL
// ( < ) MENOR
// ( <= ) MENOR O IGUAL

// let numero = 23;
// let numero2 = 13;
// 
// resultado = numero > numero2
// 
// 
// document.write(resultado)



// ================== OPERADORES LOGICOS !!!!!!!!!

// let valor = true;
// let valor2 = true;


// let resultado = valor && valor2; 

// COMO FUNCIONA ( AND ) = &&
// se las 2 condiciones se cumplem es true.
// so aceita booleanos (true y false)
// (true && true) = true
// (false && true) = false


//let resultado2 = valor || valor2; 

// COMO FUNCIONA ( OR ) = ||
// SE QUALQUER DE LAS 2 ES VERDADEIRA ES TRUE.
// ( TRUE || TRUE ) = TRUE
// ( TRUE || FALSE ) = TRUE
// ( FALSE || FALSE ) = FALSE


// let resultado3 = !valor;

// COMO FUNCIONA O ( NOT (LOGICO)) = !
// REGRESSA O CONTRARIO 
// ( ! TRUE ) = FALSE
// ( ! FALSE ) = TRUE


// ======== TAMBEM PODEMOS MESCLAR OPERACOES =========

// EJERCICIO 

// num1 = 12;
// num2 = 24;
// num3 = 25;
// num4 = 92;
// num5 = 91;
// 
// 
// 
// operacion = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

// PRIMEIRO SE RESOLVE O QUE ESTA ADENTRO DOS ( PARENTESES ) E DEPOIS O QUE ESTA AFURA.
// ==== EXPLICACION
// (num1 < num2 || num2 < num3)
// num1 es menor a num2 ( true ) num2 es menor que num3 (true) 
//( TRUE || TRUE )

// (!(num1 != num2) && num5 != num3);
// el contrario de num1  es distindo a num2 ( true , porque nao sao iguais)
// (!(true) && num5 != num3);
// (!true && num5 != num3);
// O CONTRARIO (!) DE TRUE ES FALSE === com o (!) te muda ao oposto
// (false && num5 != num3);
// (false && num5 != num3); === NUM5 ES DISTINTO DE NUM3 ???
// (FALSE && TRUE);


// ===== COMO FICOU A OPERACAO!???

// operacion = ( true || true ) && (false && true)
// ( || ) em ( OR ) SE QUALQUER UMA É TRUE, FICA TRUE.
// ( && ) EM ( AND ) OS DOIS TEM QUE SER IGUAL PARA SER TRUE, SE TEM UM FALSE , TODO FICA FALSE

// ==================

// operacion = ( true ) && (false)

// operacion = ( true ) && (false) 
//
//=== LEMBRE-SE !!!!

// ( && ) EM ( AND ) OS DOIS TEM QUE SER IGUAL PARA SER TRUE, SE TEM UM FALSE , TODO FICA FALSE


// OPERACION = FALSE



// EJERCICO 2

//num1 = 12;
//num2 = 24;
//num3 = 25;
//num4 = 92;
//num5 = 91;
//
//
//
//operacion = (num5 > num2 && num4 < num3 ) || (!(num1 === num2) || num3 != num3);


// operacion = (true && true) || (!(num1 === num2) || num3 != num3); 
// operacion = (true) || (!(num1 === num2) || num3 != num3); 
// operacion = true || (!(false) || num3 != num3); 
// operacion = true || (true || num3 != num3); 
// operacion = true || (true || false); 
// operacion = true || true; 
// operacion = true; 




//document.write(operacion)

// ============  camelCase   =========

// Primer palabra menuscula y despues las otras em mayuscula!!!!





// ================  CONDICIONALES !!! 
// ===========       ( IF , Else If , Else)

// { } = BLOQUE se ejecuta si es true

// IF - SOLAMENTE PONEMOS 1X ( PRIMEIRO )
// ELSE IF - QUANTAS VEZES QUERAS PODE POR
// ELSE - SOLAMENTE 1X ( ULTIMO )



// nombre = "Erika Silver"
// 
// 
// if (nombre == "Erika"){
//     alert("Tu nombre es " + nombre);
// }
// 
// else if ( nombre == "Silver"){
//     alert("Tu nombre es  " + nombre);
// 
// }
// 
// else{
//     alert("tu nombre es otro...");
// }















