
// PROGRAMACION ORIENTADA A OBJECTOS

// =========== EJEMPLO DE METODOS !!! =========

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
        this.raza = null;
    }


    // static ladrar(){   ---- METODO STATICO ----
    //     alert("AuAu!");
    // }

    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza() {
        return this.raza;
    }




}




const perro = new Perro ("Perro", 5, "Marron", "Vira-Lata");
const gato = new Animal ("gato", 2, "blanco");
const pajaro = new Animal ("pajaro", 1, "negro");



perro.setRaza= "Erika";

document.write(perro.getRaza)
