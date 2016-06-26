const canvas = document.getElementById('canvas-sin-dragon');
const context = canvas.getContext('2d');

const teclado = new Teclado(document);
const animacao = new Animacao(context);

const sinDragon = new SinDragon(context, teclado);
sinDragon.x = 0;
sinDragon.y = 200;
animacao.novoSprite(sinDragon);

imgSonic.onload => {
   animacao.ligar();
};
