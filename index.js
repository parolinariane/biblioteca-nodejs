const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o nome do aluno: ", function(nomeAluno) {

  rl.question("Digite o RA: ", function(meuRA) {

    rl.question("Digite os dias de atraso: ", function(diasAtraso) {

      diasAtraso = parseInt(diasAtraso);

      let valorMulta = 0;

      // Extração do último dígito do RA
      let quantidadeLivros = parseInt(meuRA.slice(-1));

      // Se terminar em 0 → processa 3 livros
      if (quantidadeLivros === 0) {
        quantidadeLivros = 3;
      }

      console.log("\n=== Sistema da Biblioteca Universitária ===");
      console.log("Aluno: " + nomeAluno);
      console.log("RA: " + meuRA);
      console.log("Dias de Atraso: " + diasAtraso);
      console.log("-----------------------------------------");

      // ==========================================
      // ESTRUTURA CONDICIONAL
      // ==========================================

      if (diasAtraso === 0) {
        valorMulta = 0;
      } else {
        valorMulta = 10;
      }

      console.log("Valor da Multa: R$ " + valorMulta);

      console.log("-----------------------------------------");
      console.log("Processando devolução de " + quantidadeLivros + " livro(s)...\n");

      // ==========================================
      // LAÇO DE REPETIÇÃO
      // ==========================================

      for (let i = 1; i <= quantidadeLivros; i++) {
        console.log("Livro " + i + " devolvido com sucesso.");
      }

      rl.close();

    });

  });

});