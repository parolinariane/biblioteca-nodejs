// ==========================================
// 1. CONFIGURAÇÃO INICIAL (Variáveis)
// ==========================================
const nomeAluno = "Ariane Parolin Calarga";
const meuRA = "2253188"; 
let diasAtraso = 0; 

let valorMulta = 0;

// Extração do último dígito do RA para definição da quantidade de livros
let quantidadeLivros = parseInt(meuRA.slice(-1));

if (quantidadeLivros === 0) {
  quantidadeLivros = 3;
}

console.log("=== Sistema da Biblioteca Universitária ===");
console.log("Aluno: " + nomeAluno);
console.log("RA: " + meuRA);
console.log("Dias de Atraso: " + diasAtraso);
console.log("-----------------------------------------");

// ==========================================
// 2. ESTRUTURA CONDICIONAL (if/else)
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
// 3. LAÇO DE REPETIÇÃO (for)
// ==========================================

for (let i = 1; i <= quantidadeLivros; i++) {
  console.log("Livro " + i + " devolvido com sucesso.");
}