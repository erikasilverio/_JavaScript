
// PROGRAMACION ORIENTADA A OBJECTOS

// =========== EJEMPLO DE HERENCIA !!! =========

class Animal{
    constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad}
   años y soy color ${this.color}`    
    }

    verInfo(){
        document.write(this.info + "<br>");
    }
    
}


class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert("AuAu!")
    }
}




const perro = new Perro ("perro", 5, "marron", "Vira-lata");
const gato = new Animal ("gato", 2, "blanco");
const pajaro = new Animal ("pajaro", 1, "negro");



perro.verInfo();
gato.verInfo();
pajaro.verInfo();