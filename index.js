const readline = require("readline");
const chalk = require("chalk").default;

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

  console.log(
    chalk.blue.bold("\n=== Sistema da Biblioteca Universitária ===")
  );

  console.log(chalk.white("Aluno: ") + chalk.green(nomeAluno));

  console.log(chalk.white("RA: ") + chalk.yellow(meuRA));

  console.log(chalk.white("Dias de Atraso: ") + chalk.red(diasAtraso));

  console.log(chalk.gray("-----------------------------------------"));
}

function processarLivros(quantidadeLivros) {

  console.log(
    chalk.cyan(
      "\nProcessando devolução de " +
      quantidadeLivros +
      " livro(s)...\n"
    )
  );

  for (let i = 1; i <= quantidadeLivros; i++) {

    console.log(
      chalk.green("✔ Livro " + i + " devolvido com sucesso.")
    );

  }
}

function registrarDevolucao() {

  rl.question(
    chalk.magenta("\nDigite o nome do aluno: "),
    function(nomeAluno) {

      rl.question(
        chalk.magenta("Digite o RA: "),
        function(meuRA) {

          rl.question(
            chalk.magenta("Digite os dias de atraso: "),
            function(diasAtraso) {

              diasAtraso = parseInt(diasAtraso);

              const valorMulta = calcularMulta(diasAtraso);

              const quantidadeLivros =
                calcularQuantidadeLivros(meuRA);

              mostrarCabecalho(
                nomeAluno,
                meuRA,
                diasAtraso
              );

              if (valorMulta === 0) {

                console.log(
                  chalk.green.bold(
                    "Valor da Multa: R$ " + valorMulta
                  )
                );

              } else {

                console.log(
                  chalk.red.bold(
                    "Valor da Multa: R$ " + valorMulta
                  )
                );

              }

              console.log(
                chalk.gray("-----------------------------------------")
              );

              processarLivros(quantidadeLivros);

              menuPrincipal();

            }
          );

        }
      );

    }
  );

}

function menuPrincipal() {

  console.log(
    chalk.blue.bold("\n=================================")
  );

  console.log(
    chalk.blue.bold(" SISTEMA DA BIBLIOTECA ")
  );

  console.log(
    chalk.blue.bold("=================================")
  );

  console.log(
    chalk.yellow("1 - Registrar devolução")
  );

  console.log(
    chalk.red("2 - Sair")
  );

  console.log(
    chalk.blue.bold("=================================")
  );

  rl.question(
    chalk.white("Escolha uma opção: "),
    function(opcao) {

      switch(opcao) {

        case "1":
          registrarDevolucao();
          break;

        case "2":

          console.log(
            chalk.red.bold("\nSistema encerrado.")
          );

          rl.close();
          break;

        default:

          console.log(
            chalk.red("\nOpção inválida.")
          );

          menuPrincipal();
          break;
      }

    }
  );

}

menuPrincipal();