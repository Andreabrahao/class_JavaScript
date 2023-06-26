const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log('Posicao atual', atual)
    console.log('Livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('Livro menor preco', livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)