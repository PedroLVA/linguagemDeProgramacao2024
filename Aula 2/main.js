let soma = function(a,b){
    return a + b;
};

console.log(soma(1,2)); 

let subtracao = (a,b) => a + b;

console.log(subtracao(10,10));

let myArray = [1,2,3,4, 8, 7, 10, 6];
let myArray2 = ["Fabio", 50, true];

console.log(myArray[2]);

let matriz = [["Fabio", 50, true], 
            ["joao", 24, false]];

console.log(matriz[1][2]);

let frutas = ["banana", "maca", "tomate"];

frutas.unshift("caqui");
frutas.push("cacau");
frutas.pop();
frutas.shift();

console.log(frutas);

let things = ["carro", "pneu", "motor", "bicicleta", "garfp"]
let slicedThings = things.slice(0, 3);
console.log(slicedThings);

const person = {firstName:"John", lastName:"Silva", shlongSize:20};

person.firstName = "Fabian";
console.log(person.firstName);

console.log(person["firstName"]);

for(let prop in person){
    console.log(prop + ": " + person[prop]);
}

let carro = {nome: "Fusca", 
    marca: "Volkswagen", 
    ano: 1970, 
    cor: "Vermelho", 
    ligado: false, 

    ligar: function(){
        this.ligado = true;
    }
}