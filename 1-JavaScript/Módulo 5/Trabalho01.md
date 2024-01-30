# Atividade

Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três
atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas
características e ações.

## Resposta

### Objetos Materiais

-  **Carro**

**Atributos:**

Marca

Modelo

Ano de Fabricação

**Métodos:**

Ligação (liga o carro)

Desligação (desliga o carro)

Acelerar (aumenta a velocidade)

``` javascript

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
    this.velocidade = 0;
  }

  ligar() {
    this.ligado = true;
    console.log("O carro está ligado.");
  }

  desligar() {
    this.ligado = false;
    console.log("O carro está desligado.");
  }

  acelerar() {
    if (this.ligado) {
      this.velocidade += 10;
      console.log(`Acelerando. Velocidade atual: ${this.velocidade} km/h`);
    } else {
      console.log("Você precisa ligar o carro antes de acelerar.");
    }
  }
}

  desacelerar() {
    if (this.ligado && this.velocidade > 0) {
      this.velocidade -= 10;
      console.log(`Desacelerando. Velocidade atual: ${this.velocidade} km/h`);
    } else if (this.ligado) {
      console.log("O carro já está parado.");
    } else {
      console.log("Você precisa ligar o carro antes de desacelerar.");
    }
  }

const meuCarro = new Carro("Toyota", "Corolla", 2023);
meuCarro.ligar();
meuCarro.acelerar();
meuCarro.desacelerar();
meuCarro.desligar();
``` 


- **Livro**

Atributos:

Título

Autor

Número de Páginas

**Métodos:**

Abrir (abre o livro em uma página específica)

Fechar (fecha o livro)

Ler (lê o conteúdo de uma página)

``` javascript

class Livro {
  constructor(titulo, autor, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
    this.paginaAtual = 1;
    this.aberto = false;
  }

  abrir() {
    this.aberto = true;
    console.log("Livro aberto na página 1.");
  }

  fechar() {
    this.aberto = false;
    console.log("Livro fechado.");
  }

  ler() {
    if (this.aberto) {
      console.log(`Lendo a página ${this.paginaAtual}...`);
    } else {
      console.log("Você precisa abrir o livro antes de ler.");
    }
  }
}

virarPagina() {
    if (this.aberto) {
      if (this.paginaAtual < this.numPaginas) {
        this.paginaAtual++;
        console.log(`Virando para a página ${this.paginaAtual}.`);
      } else {
        console.log("Você já está na última página.");
      }
    } else {
      console.log("Você precisa abrir o livro antes de virar a página.");
    }
  }


const meuLivro = new Livro("Aventuras de Sherlock Holmes", "Arthur Conan Doyle", 300);
meuLivro.abrir();
meuLivro.ler();
meuLivro.virarPagina();
meuLivro.fechar();
``` 
### Objetos abstrados

- **Conta Bancária**

**Atributos:**

Número da Conta

Saldo

Titular da Conta

**Métodos:**

Depositar (adiciona dinheiro à conta)

Sacar (retira dinheiro da conta)

ConsultarSaldo (verifica o saldo atual)

``` javascript

class ContaBancaria {
  constructor(numero, titular) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Saldo atual: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para o saque.");
    }
  }

  consultarSaldo() {
    console.log(`Saldo atual: ${this.saldo}`);
  }
}

const minhaConta = new ContaBancaria("12345", "João");
minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.consultarSaldo();
``` 

- Calendário

**Atributos:**

Data Atual

Mês Atual

Ano Atual

**Métodos:**

AvançarDia (avança para o próximo dia)

VoltarDia (retorna para o dia anterior)

ConsultarData (mostra a data atual)

``` javascript
// Objeto Abstrato 2: Calendário
class Calendario {
  constructor() {
    const dataAtual = new Date();
    this.data = dataAtual.getDate();
    this.mes = dataAtual.getMonth() + 1;
    this.ano = dataAtual.getFullYear();
  }

  avancarDia() {
    this.data++;
    console.log(`Avançando para o próximo dia: ${this.data}/${this.mes}/${this.ano}`);
  }

  voltarDia() {
    this.data--;
    console.log(`Voltando para o dia anterior: ${this.data}/${this.mes}/${this.ano}`);
  }

  consultarData() {
    console.log(`Data atual: ${this.data}/${this.mes}/${this.ano}`);
  }
}

// Demonstração dos objetos
const meuCalendario = new Calendario();
meuCalendario.avancarDia();
meuCalendario.consultarData();
``` 
