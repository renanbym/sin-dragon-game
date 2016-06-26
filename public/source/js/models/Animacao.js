Animacao (context) => {
   this.context = context;
   this.sprites = [];
   this.ligado = false;

   novoSprite (sprite) => {
      this.sprites.push(sprite);
   },
   ligar => {
      this.ligado = true;
      this.proximoFrame();
   },
   desligar => {
      this.ligado = false;
   },
   proximoFrame => {
      // Posso continuar?
      if ( ! this.ligado ) return;

      // A cada ciclo, limpamos a tela ou desenhamos um fundo
      this.limparTela();
      
      // Atualizamos o estado dos sprites
      for (let i in this.sprites)
      this.sprites[i].atualizar();

      // Desenhamos os sprites
      for (let i in this.sprites)
      this.sprites[i].desenhar();

      // Chamamos o próximo ciclo
      let animacao = this;
      requestAnimationFram => {
         animacao.proximoFrame();
      });
   },
   limparTela => {
      let ctx = this.context;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   }
}
