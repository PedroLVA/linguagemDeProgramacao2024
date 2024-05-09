function displayResult(result){
    console.log(result);
}

function displayMobile(result){
    console.log("mobile" + result);
}

function calcula(num1, num2, callback){
    soma = num1 + num2;

    callback(soma);
}


calcula(1, 4, displayMobile);

function timeOut(){
    console.log("timeout");
}

setInterval(setClock, 1000);

function setClock(){

}
 






async function getData(file) {
    let meuObjetoFile = await fetch(file);
    let meuJson = await meuObjetoFile.json();
}

fetch('https://663c040017145c4d8c34f832.mockapi.io/cliente')
    .then(response => response.json()).then(data => trataData(data));

    
    

    function trataData(data){
        document.querySelector('#cliente').innerHTML = "Nome: " + data.nome + "idade: " + data.idade;
    }

    






