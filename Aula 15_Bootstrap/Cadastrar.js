document.querySelector('#myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    cadastrar();
});

let urlServer = "https://663c040017145c4d8c34f840.mockapi.io/Cliente";

function cadastrar() {
    var form = document.querySelector('#myForm');
    
    // Check if form is valid
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    var nome = document.querySelector('#nome').value;
    var email = document.querySelector('#email').value;
    var idade = document.querySelector('#idade').value;

    var cliente = {
        "nome": nome,
        "idade": idade,
        "email": email
    };

    fetch(`${urlServer}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        alert('Adicionado com sucesso!');
        form.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('O envio do formulário falhou!');
    });
}
