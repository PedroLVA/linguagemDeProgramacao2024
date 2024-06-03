

let cardsContainer = document.querySelector('#cardsContainer');

let urlServer = "https://663c040017145c4d8c34f840.mockapi.io/Cliente/";
function buscaDados() {
    cardsContainer.innerHTML = '';
    fetch(urlServer)
        .then(response => response.json())
        .then(data => {
            data.forEach(client => {

                const newCard = document.createElement('div');

                newCard.innerHTML = ` 
            <div class="card" style="width: 18rem; min-height: 196px;">
            
                <div class="card-body d-flex flex-column justify-content-between">
                <div>
                <h5 class="card-title">Nome: ${client.nome} </h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Id: ${client.id} </h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Email: ${client.email} </h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Idade: ${client.idade} </h6>
                </div>
                    <div class="d-flex justify-content-between">
                        <a href="Cadastrar.html?id=${client.id}"><button class="btn btn-success">Editar</button></a>
                    
                        <button class="btn btn-danger" onclick="deleteCliente(${client.id})">Excluir</button>
                    </div>
                </div>
            </div>
            `;
                cardsContainer.appendChild(newCard);
            }
            )
        })
}

function deleteCliente(id){
        fetch(`${urlServer}${id}`, {
            method: "DELETE"
        })
        .then(() => buscaDados());
    }   
buscaDados();