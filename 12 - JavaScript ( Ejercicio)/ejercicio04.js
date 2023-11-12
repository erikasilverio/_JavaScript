

// Crear un sistema que pueda comparar 3 celulares distintos,
// cadea celular debe tener, color, peso, resolucion de pantalla,
// resolucion de camera y memoria ram.
// Cada celular debe poder prender, reiniciar, tomar fotos
// y grabar.  



class Celular {
        constructor(color,peso,tamaño,camera,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamera = camera;
        this.memoriaRam = ram;
        this.encendido = false;

        }

        presionarBotonEncendido(){
            if (this.encendido == false){
                alert("celular Prendido");
                this.encendido = true;
            } else { 
                alert("Celular Apagado");
                this.encendido = false;
            }
                    
        }

        reiniciar(){
            if (this.encendido == true) {
                alert("reiniciando celular");
            } else {
                alert("el celular esta apagado")
            }
        
        }
        tomarFotos(){
            alert(`foto tomada en una resolucion de: ${this.resolucionDeCamera}`)
        }

        gravarVideo(){
            alert(`grabando video en ${this.resolucionDeCamera}`)
        }

        mobileInfo(){
            return `
            Color: <b>${this.color} </b><br>
            Peso: <b>${this.peso} </b><br>
            Tamaño: <b>${this.tamaño} </b><br>
            Resolución de Video: <b>${this.resolucionDeCamera} </b><br>
            Memoria RAM: <b>${this.memoriaRam} </b><br>`;
        }
        
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCameraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camera lenta");
    }
    reconocimientoFacial(){
        alert("vamos iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() +  `Resolucion de Camera Trasera: ${this.resolucionDeCameraExtra} `    
    
    }
}




// celular1 = new Celular("Rojo", "150g","5'","HD", "1GB");
// celular2 = new Celular("Negro", "155g","5.4'","FULL HD", "2GB");
// celular3 = new Celular("Blanco", "146g","5.9'","FULL HD", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.gravarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();


celular1 = new CelularAltaGama("Rojo", "130g","5.2", "4k", "3GB", "Full HD");
celular2 = new CelularAltaGama("Negro", "142g","6", "4k", "4GB", " HD");


document.write(`

    ${celular1.infoAltaGama()}<br><br><br>
    ${celular2.infoAltaGama()}<br><br><br>
    

` )
