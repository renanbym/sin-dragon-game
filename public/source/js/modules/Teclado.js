// Códigos de teclas - aqui vão todos os que forem necessários
const SETA_ESQUERDA = 37;
const SETA_CIMA = 38;
const SETA_DIREITA = 39;
const SETA_BAIXO = 40;
const ESPACO = 32;
const KEY_C = 67;

function Teclado(elemento){
   this.elemento = elemento;

   // Array de teclas pressionadas
   this.pressionadas = [];

   // Array de teclas disparadas
   this.disparadas = [];

   // Funções de disparo registradas
   this.funcoesDisparo = [];

   let teclado = this;

   elemento.addEventListener('keydown', (evento) => {
      let tecla = evento.keyCode;  // Tornando mais legível ;)
      teclado.pressionadas[tecla] = true;

      // Disparar somente se for o primeiro keydown da tecla
      if (teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]) {

         teclado.disparadas[tecla] = true;
         teclado.funcoesDisparo[tecla] () ;
      }
   });

   elemento.addEventListener('keyup', (evento) => {
      teclado.pressionadas[evento.keyCode] = false;
      teclado.disparadas[evento.keyCode] = false;
   });


}
Teclado.prototype.pressionada = function(tecla) {
   return this.pressionadas[tecla];
},
Teclado.prototype.disparou  = function(tecla, callback) {
   this.funcoesDisparo[tecla] = callback;
}
