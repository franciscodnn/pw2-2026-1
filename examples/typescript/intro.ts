let nome: string = "Francisco";
nome = "dantas";

let valor: any = 50.089;
console.log(typeof valor.toFixed(2));

let valorUnknown: unknown = 50.089;
// if(typeof valorUnknown === 'number')
console.log((valorUnknown as number).toFixed(2));

function logMensagem(msg: string): void {
  console.log(msg);
  
  return;
}
/*
type Shape = 'circle' | 'square' | 'triangle' | 0;

const forma: Shape = 0;

function getArea(shape: Shape): number {
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
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
*/
interface Usuario {
    nome: string,
    idade : number,
    nomeCompleto?: string
}

let usuario: Usuario = {
  nome: "Maria",
  idade: 25,
  nomeCompleto: "Maria Silva"
};

const user: unknown = {
  nome: "Maria",
  idade: 25,
  nomeCompleto: "Maria Silva",
  email: "teste@gmail.com"
};

usuario = (user as Usuario);

function soma(x: number, y: number) {
    return x + y;
}

type Pessoa = { nome: string; idade: number };
type Funcionario = { cargo: string; id: number };

type FuncionarioCompleto = Pessoa | Funcionario;

const joao: FuncionarioCompleto = {
  nome: "João",
  idade: 30,
  cargo: "Desenvolvedor",
  
};

class Animal {
  public nome: string;          // Acessível em qualquer lugar
  private dnaId: string;        // Acessível apenas dentro desta classe
  protected especie: string;    // Acessível nesta classe e em subclasses
  readonly dataNascimento: Date; // Não pode ser modificado após inicialização
  
  constructor(nome: string, dnaId: string, especie: string, dataNascimento: Date) {
    this.nome = nome;
    this.dnaId = dnaId;
    this.especie = especie;
    this.dataNascimento = dataNascimento;
  }
  
  public fazerBarulho(): string {
    return "Som genérico de animal";
  }
  
  private obterIdentificacaoUnica(): string {
    return `${this.dnaId}-${this.especie}`;
  }
  
  protected obterDetalhes(): string {
    return `Animal: ${this.nome}, Espécie: ${this.especie}, ID: ${this.dnaId}`;
  }
}

interface Formatavel {
  formato(): string;
}

interface Salvar {
    salvar(): void;
}

class Documento implements Formatavel, Salvar {
  constructor(private conteudo: string) {}
  
  formato(): string {
    return this.conteudo.toUpperCase();
  }

  salvar() {

  }
}

const d: Documento = new Documento("teste");
const s: Salvar = d;