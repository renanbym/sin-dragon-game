alert('oi')

var imgEspaco = new Image();
imgEspaco.src = '/public/assets/images/fundo-espaco.png';

var carregadas = 0;
var total = 1;
imgEspaco.onload = carregando;
imgEstrelas.onload = carregando;
imgNuvens.onload = carregando;

carregando => {
   console.log('dsadas')

   carregadas++;
   if (carregadas == total) iniciar
}
console.log('dsadas')

iniciar => {

   const canvas = document.getElementById('canvas-sin-dragon');
   const context = canvas.getContext('2d');

   const teclado = new Teclado(document);
   const animacao = new Animacao(context);

   // Passo o context e a imagem para os objetos Fundo
   var fundoEspaco = new Fundo(context, imgEspaco);
   var fundoEstrelas = new Fundo(context, imgEstrelas);
   var fundoNuvens = new Fundo(context, imgNuvens);

   // Cada um a uma velocidade diferente
   fundoEspaco.velocidade = 3;
   fundoEstrelas.velocidade = 7;
   fundoNuvens.velocidade = 10;

   const sinDragon = new SinDragon(context, teclado);
   sinDragon.x = 0;
   sinDragon.y = 200;

   // animacao.novoSprite(sinDragon);
   animacao.novoSprite(fundoEspaco);
   animacao.ligar();

}
