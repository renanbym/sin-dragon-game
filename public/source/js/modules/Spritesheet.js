function Spritesheet(context, imagem, linhas, colunas){
   this.context = context;
   this.imagem = imagem;
   this.numLinhas = linhas;
   this.numColunas = colunas;
   this.intervalo = 0;
   this.linha = 0;
   this.coluna = 0;
}
Spritesheet.prototype.proximoQuadro = function() {
   let agora = new Date().getTime();

   // Se ainda não tem último tempo medido
   if (! this.ultimoTempo) this.ultimoTempo = agora;

   // Já é hora de mudar de coluna?
   if (agora - this.ultimoTempo < this.intervalo) return;

   if (this.coluna < this.numColunas - 1)
   this.coluna++;
   else
   this.coluna = 0;

   // Guardar hora da última mudança
   this.ultimoTempo = agora;
}

Spritesheet.prototype.desenhar = function (x, y)  {
   let largura = 47;
   let altura = 55;

   this.context.drawImage(
      this.imagem,
      largura * this.coluna,
      altura * this.linha,
      largura,
      altura,
      x,
      y,
      largura,
      altura
   );
}
