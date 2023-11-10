// PROGRAMACION ORIENTADA A OBJECTOS

class animal {
    constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad}
   años y soy color ${this.color}`

    
    }

    verInfo (){
        document.write(this.info + "<br>");
    }

}

let perro = new animal ("perro", 5, "marron");
let gato = new animal ("gato", 2, "blanco");
let pajaro = new animal ("pajaro", 1, "negro");

// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();