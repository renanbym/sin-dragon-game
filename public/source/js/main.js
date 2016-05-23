var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var teclado = new Teclado(document);
var animacao = new Animacao(context);

var imgSonic = new Image();
imgSonic.src = '/public/assets/images/spritesheet.png';


// var sonic = new Sonic(context, teclado, imgSonic);
// sonic.x = 0;
// sonic.y = 200;
// animacao.novoSprite(sonic);


var sinDragon = new SinDragon(context, teclado);
sinDragon.x = 0;
sinDragon.y = 200;
animacao.novoSprite(sinDragon);

imgSonic.onload = function() {
   animacao.ligar();
}
