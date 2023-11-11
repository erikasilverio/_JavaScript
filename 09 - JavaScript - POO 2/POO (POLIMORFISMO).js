





// PROGRAMACION ORIENTADA A OBJECTOS

// =========== EJEMPLO DE POLIMORFISMO !!!

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
    ladrar(){
        if (this.especie == "perro") {
            document.write("Auau! <br>");
        } else {
            document.write("No puede ladrar, ya que es un " + this.especie + "<br>" )
        }
    }

}

let perro = new animal ("perro", 5, "marron");
let gato = new animal ("gato", 2, "blanco");
let pajaro = new animal ("pajaro", 1, "negro");



perro.ladrar();
gato.ladrar();
pajaro.ladrar();