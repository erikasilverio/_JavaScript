//inicio

console.log("Hola, JavaScript ! ")

//variables

var myString = "Esto es una cadena de texto"
console.log(myString)



let myString2 = "Esto es una cadena de texto"
myString2 = "Aqui cambio el valor de la cadena de texto"
console.log(typeof myString2) // operacion del sistema que nos mostra o tipo de dato que esta asociado a la variable.

myString2 = 6
console.log(myString2)
console.log(typeof myString2)

let myNumber = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(myNumber - 1)
console.log(myNumber)

console.log(myString + " " + myNumber)

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

let myBool = false
myBool = true
console.log(myBool)
console.log(typeof myBool)


myBool = null
console.log(myBool + myNumber2)

myBool = undefined
console.log(myBool)

let myUndefined
console.log(myUndefined)


// Constantes

const MY_CONST = "Mi propriedad constante"
// MY_CONST = "Otro valor" - "ERROR!!!" No se puede dar otro valor a una constante.
console.log(MY_CONST)

// Control de flujo



if (myNumber == 10 && myString == "Hola") {
    console.log("El valor es 10")  

} else if (myNumber == 11 || myString == "Hola" ) {
    console.log("El valor es 11") 
} else {
    console.log("El valor no es 10")   
    
}



myBool = null

if (myBool){
    console.log("null") 
}


// Funciones


function myFunction() {
    return "Mi funcion"

}

console.log(myFunction()) 


// Listas

let myList = ["Erika", "Silverio", "@erikasilverio", 36]
console.log(myList) 
console.log(myList[0]) 


// Set

let mySet = new Set(["Erika", "Silverio", "@erikasilverio", 36, "Erika"])
mySet.add("Silverio")
console.log(mySet) 

// Mapas ou Dicionarios

let myMap = new Map([["Erika", 14], ["Silverio",12 ], ["Erikinha", 86]])
myMap.set("Eri", 1234)
console.log(myMap)
console.log(myMap.get("Erika"))

// Bucles

for (const value of myList){
    console.log(value)
}

let myCounter = 0

while (myCounter <= myList.length){
    console.log(myList[myCounter])
    myCounter++ // tbm se pode colocar ( myCounter +=1 ) ou ( myCounter = myCounter + 1)
}


// Clases


class MyClass{
    constructor(name,age) {
        this.name = name
        this.age = age 
    }
}

let myClass = new MyClass(" Erika " , 37)
console.log(myClass)
console.log(myClass.name)

// Enum

const MyEnum = { 
    DART: "dart" ,
    PHYTON: "python",
    SWIFT: "swift",
    JAVA: "java",
    KOTLIN: "kotlin",
    JAVASCRIPT: "javascript"
}

const myEnum = MyEnum.JAVASCRIPT
console.log(myEnum)








