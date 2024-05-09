const animalList = document.getElementById("animal-list");


fetch('https://663c040017145c4d8c34f840.mockapi.io/Animal')
    .then(response => response.json())
    .then(data => {
        data.forEach((animal, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${animal.id} - ${animal.Nome} (${animal.Idade}) - ${animal.Raca}`;

            animalList.appendChild(listItem);
        });
    })


const buttonAdd = document.getElementById("addButton");



function postData() {
    fetch('https://663c040017145c4d8c34f840.mockapi.io/Animal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nome": 'Totó',
            "Idade": 12,
            "Raca": 'Cachorro'
        })
    })
        .then(response => response.json()).then(data => {
            console.log(data);
            if (confirm('Animal cadastrado com sucesso, deseja reiniciar a página?')) {
                location.reload();
            }
        })
        .catch(error => console.error('Erro:', error));

}
