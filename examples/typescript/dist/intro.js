let nome = "Francisco";
nome = "dantas";
let valor = 50.089;
console.log(typeof valor.toFixed(2));
let valorUnknown = 50.089;
// if(typeof valorUnknown === 'number')
console.log(valorUnknown.toFixed(2));
function logMensagem(msg) {
    console.log(msg);
    return;
}
const forma = 0;
function getArea(shape) {
    switch (shape) {
        case 'circle':
            return Math.PI * 2;
        case 'square':
            return 10 * 2;
        case 'triangle':
            return 10 * 5;
        case 'rectangle':
            return 50 * 50;
        default:
            // TypeScript knows this should never happen
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
let usuario = {
    nome: "Maria",
    idade: 25,
    nomeCompleto: "Maria Silva"
};
const user = {
    nome: "Maria",
    idade: 25,
    nomeCompleto: "Maria Silva",
    email: "teste@gmail.com"
};
usuario = user;
function soma(x, y) {
    return x + y;
}
const joao = {
    nome: "João",
    idade: 30,
    cargo: "Desenvolvedor",
};
class Animal {
    constructor(nome, dnaId, especie, dataNascimento) {
        this.nome = nome;
        this.dnaId = dnaId;
        this.especie = especie;
        this.dataNascimento = dataNascimento;
    }
    fazerBarulho() {
        return "Som genérico de animal";
    }
    obterIdentificacaoUnica() {
        return `${this.dnaId}-${this.especie}`;
    }
    obterDetalhes() {
        return `Animal: ${this.nome}, Espécie: ${this.especie}, ID: ${this.dnaId}`;
    }
}
export {};
//# sourceMappingURL=intro.js.map