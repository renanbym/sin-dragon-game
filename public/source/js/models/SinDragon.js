const DIREITA = 1;
const ESQUERDA = 2;
const CIMA = 3;
const BAIXO = 4;

SinDragon (context, teclado) => {
      let sprite = new Image();
      sprite.src = '/public/assets/images/sin-dragon.png';

      this.context = context;
      this.teclado = teclado;
      this.x = 0;
      this.y = 0;
      this.velocidade = 1;

      // Criando a spritesheet a partir da imagem recebida
      this.sheet = new Spritesheet(context, sprite, 5, 6);
      this.sheet.intervalo = 60;

      // Estado inicial
      this.andando = false;
      this.direcao = DIREITA;
};

SinDragon.prototype = {

      atualizar => {
            if (this.teclado.pressionada(SETA_DIREITA)) {
                  // Se já não estava neste estado...
                  if (! this.andando || this.direcao != DIREITA) {
                        // Seleciono o quadro da spritesheet
                        this.sheet.linha = 2;
                        this.sheet.coluna = 0;
                  }

                  // Configuro o estado atual
                  this.andando = true;
                  this.direcao = DIREITA;

                  // Neste estado, a animação da spritesheet deve rodar
                  this.sheet.proximoQuadro();

                  // Desloco o SinDragon
                  this.x += this.velocidade;
            }else if (this.teclado.pressionada(SETA_ESQUERDA)) {
                  if (! this.andando || this.direcao != ESQUERDA) {
                        this.sheet.linha = 4;
                        this.sheet.coluna = 0;
                  }

                  this.andando = true;
                  this.direcao = ESQUERDA;
                  this.sheet.proximoQuadro();
                  this.x -= this.velocidade;  // E aqui é sinal de menos!
            }else if (this.teclado.pressionada(SETA_CIMA)) {
                  if (! this.andando || this.direcao != CIMA) {
                        this.sheet.linha = 1;
                        this.sheet.coluna = 0;
                  }

                  this.andando = true;
                  this.direcao = CIMA;
                  this.sheet.proximoQuadro();
                  this.y -= this.velocidade;  // E aqui é sinal de menos!

            }else if (this.teclado.pressionada(SETA_BAIXO)) {
                  if (! this.andando || this.direcao != BAIXO) {
                        this.sheet.linha = 3;
                        this.sheet.coluna = 0;
                  }

                  this.andando = true;
                  this.direcao = BAIXO;
                  this.sheet.proximoQuadro();
                  this.y += this.velocidade;  // E aqui é sinal de menos!
            }

            else {
                  this.sheet.linha = 0;

                  if (this.direcao == DIREITA){
                        this.sheet.coluna = 1;
                  } else if (this.direcao == ESQUERDA){
                        this.sheet.coluna = 3;
                  }else if (this.direcao == CIMA){
                        this.sheet.coluna = 0;
                  }else if (this.direcao == BAIXO){
                        this.sheet.coluna = 2;
                  }

                  // Não chamo proximoQuadro!
                  this.andando = false;
            }
      },
      desenhar => {
            this.sheet.desenhar(this.x, this.y);
      }

}
