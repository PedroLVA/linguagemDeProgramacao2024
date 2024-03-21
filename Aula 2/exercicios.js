  //1 exercicio
 let concatenaNome = function(nome, sobrenome){
     return nome + " " + sobrenome;
 }

 console.log(concatenaNome("Fabio", "Colombine"))


//2 exercicio
console.log("------------");
 let calculaAreaRetangulo = (area, altura) => area*altura;
 console.log(calculaAreaRetangulo(5,20));

 //3 exercicio
 console.log("------------");
 let numeros = [10,20,30,40,50];

 function somaElementosArray(array){
     let soma = 0;
     for(let num of array){
         soma += num;
         
     }
     return soma;
 }

 console.log(somaElementosArray(numeros));

 //4 exercicio
 console.log("------------");
 let numeros2 = [1,2,3,4,5,6,7,8,9,10];
 
 function retornaArrayImpar(arr){
     for(let i = 0; i < arr.length; i++){
         if(arr[i] % 2 == 0){
             arr.splice(i, 1)
         }
     }
     return arr;
 }
 console.log(retornaArrayImpar(numeros2));

 //5 exercicio
 console.log("------------");
 let cidades = ["sorocaba", "piedade", "votorantim"];
 cidades.unshift("Campinas");
 cidades.pop();
 console.log(cidades);

  //6 exercicio
  console.log("------------");
  const Aluno = {
    nome: "Pedro",
    idade: 20,
    curso: "ADS",
    matricula: 21233,

    

    mostraInformacao: function(){
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
        console.log("Curso: " + this.curso);
        console.log("Matricula: " + this.matricula);
    }
}

    Aluno.mostraInformacao();
const Aluno1 = {
    nome: "Andre",
    idade: 17,
    curso: "Engenharia",
    matricula: 22334,
}
const Aluno2 = {
    nome: "Tales",
    idade: 21,
    curso: "Biologia",
    matricula: 55442,
}
const Aluno3 = {
    nome: "Fabiano",
    idade: 20,
    curso: "Engenharia",
    matricula: 22864,
}

//7 exercicio
console.log("------------");
function encontraMaiorNumero(arr){
    let min = -15000000;
    let max = 0;

    for(let num of arr){
        min = num;
        if(min > max){
            max = min
        }
    }
    return max;
}
let numeroMaior = [1,2,3,4,55,111,6,7,10,11,22];

console.log(encontraMaiorNumero(numeroMaior));

//8 exercicio
console.log("------------");
const Produto = {
    nome: "Faca",
    preco: 50,
    quantidade: 10,

    calcularTotal: function(){
        console.log("O preco total é: " + this.preco * this.quantidade);
    }
}

Produto.calcularTotal();

//9 exercicio
console.log("------------");
const endereco = {
    rua: "Rua das Flores",
    numero: 123,
    bairro: "Centro",
    cidade: "Cidade Nova"
};

for(let prop in endereco){
    console.log(prop + ": " + endereco[prop]);
}

//10 exercicio



console.log("------------");
let arrayAlunos = [Aluno1, Aluno2, Aluno3];

function alunosMaior(arr){
    for(let i = 0; i < arr.length; i++){
        let aluno = arr[i];
        if(aluno.idade < 18){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
    }

    alunosMaior(arrayAlunos);
    console.log(alunosMaior(arrayAlunos));

  


