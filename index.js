// const Livro = {
//     nome: "React Native",
//     editora: "Casa do Codigo",
//     paginas: 185,
//     anunciar: function(){
//         console.log("A Alura indica o livro" + this.nome + "!")
//     }
// }

// Livro.anunciar()


// const book = function(nome, editora, paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function(){
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
// }

// const GraphQL = new book("GraphQL", "Casa do Codigo", 143);

// console.log(GraphQL.getNome());
// console.log(GraphQL.getEditora());
// console.log(GraphQL.getPaginas());


class Book2 {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} e um livro da editora ${this.editora} e tem ${this.paginas} paginas`)
    }

}

const NodeJS = new Book2("Primeiros passos com NodeJS", "Casa do Codigo", 195)

NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

class LivroColecao extends Book2 {
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da colecao ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Logica de programacao", "comece a programar")
LogicaDeProgramacao.descreverColecao()