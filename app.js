let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextosElemento(elemento, texto) { 
     let elementoHTML  = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
     return;
}

function verificarintento() {
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
  
     if (numeroDeUsuario === numeroSecreto){
          asignarTextosElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'} `);
          document.getElementById('reiniciar').removeAttribute('disabled');
          
     } else {
          if (numeroDeUsuario > numeroSecreto){
               asignarTextosElemento('p','El numero secreto es menor');
          }else {
               asignarTextosElemento('p','El numero secreto es mayor');
          }
          limpiarCaja();
     } 
     intentos ++;
     return;
}

function limpiarCaja(){
    document.querySelector( `#valorUsuario` ).value = ``;
}

function condicionesIniciales(){
     asignarTextosElemento('h1','Juego del numero secreto');
     asignarTextosElemento('p',`Indicame un numero del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;
}

function reiniciarJuego(){
     //limpiar caja
     limpiarCaja();
     //indicar mensaje de intervalo de numero 1/10
     //generar numero aleatorio
     //inicializar el numero de intentos
     condicionesIniciales();
     //deshabilitar el boton de nuevo juego
     document.querySelector(`#reiniciar`).setAttribute('disabled','true');


}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;

      console.log(numeroGenerado);
      console.log(listaNumerosSorteados);
     // si ya sorteamos todos los numeros 
     if ( listaNumerosSorteados.length== numeroMaximo){
          asignarTextosElemento('p', 'Ya se sortearon todos los numeros posibles')

     } else {  
          // Sio el numero generado esta en la lista 
          if (listaNumerosSorteados.includes(numeroGenerado)){
     return generarNumeroSecreto();

          } else {
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
          }

     }

}

condicionesIniciales();
