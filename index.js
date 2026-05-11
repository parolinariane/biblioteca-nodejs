const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMulta(diasAtraso) {
  if (diasAtraso === 0) {
    return 0;
  } else {
    return 10;
  }
}

function calcularQuantidadeLivros(meuRA) {
  let quantidadeLivros = parseInt(meuRA.slice(-1));

  if (quantidadeLivros === 0) {
    quantidadeLivros = 3;
  }

  return quantidadeLivros;
}

function mostrarCabecalho(nomeAluno, meuRA, diasAtraso) {
  console.log("\n=== Sistema da Biblioteca Universitária ===");
  console.log("Aluno: " + nomeAluno);
  console.log("RA: " + meuRA);
  console.log("Dias de Atraso: " + diasAtraso);
  console.log("-----------------------------------------");
}

function processarLivros(quantidadeLivros) {
  console.log("Processando devolução de " + quantidadeLivros + " livro(s)...\n");

  for (let i = 1; i <= quantidadeLivros; i++) {
    console.log("Livro " + i + " devolvido com sucesso.");
  }
}


rl.question("Digite o nome do aluno: ", function(nomeAluno) {

  rl.question("Digite o RA: ", function(meuRA) {

    rl.question("Digite os dias de atraso: ", function(diasAtraso) {

      diasAtraso = parseInt(diasAtraso);

      const valorMulta = calcularMulta(diasAtraso);
      const quantidadeLivros = calcularQuantidadeLivros(meuRA);

      mostrarCabecalho(nomeAluno, meuRA, diasAtraso);

      console.log("Valor da Multa: R$ " + valorMulta);
      console.log("-----------------------------------------");

      processarLivros(quantidadeLivros);

      rl.close();

    });

  });

});