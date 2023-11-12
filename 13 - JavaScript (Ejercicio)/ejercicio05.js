// Crear un sistema que ayude a decidir cual app descargar.
// la info de los instaladores debe contener la cantidd de descargas
// y la puntuacion y peso.
// las apps deben poder instalar, abrir, cerrar y desistalar.


class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada == true;
            alert("App encendida");
        }    
    }


    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada == false;
            alert("App cerrada");
        }
    }

//       instalar(){
//           if (this.instalada == false){
//               this.instalada = true;
//               alert("App instalada correctamente")
//           
//           }
//       
//       }
//   
//       desisntalar (){
//           if (this.instalada == true){
//               this.instalada = false;
//               alert("App desinstalada correctamente")
//           
//           }
//       
//       }


    appInfo(){
        return `
        Descargar: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        
        
        `
    
    }
  } 

app = new App ("16.000", "5 Estrellas", "900mb");
app1 = new App ("20.000", "4 Estrellas", "900mb");
app2 = new App ("26.000", "3 Estrellas", "900mb");
app3 = new App ("36.000", "5 Estrellas", "900mb");
app4 = new App ("76.000", "7 Estrellas", "900mb");
app5 = new App ("46.000", "9 Estrellas", "900mb");
app6 = new App ("26.000", "10 Estrellas", "900mb");
app7 = new App ("16.000", "5 Estrellas", "900mb");



document.write( `
${app.appInfo()}<br>
${app1.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>

`
)

   
 

// app.instalar();
// app.abrir();
// app.cerrar();