document.querySelector('#myForm').addEventListener('submit',
    function (event) {
        event.preventDefault();
       
    }
)

let usuario = localStorage.getItem('usuario');
let senha= localStorage.getItem('senha');

if(usuario && senha){
    document.querySelector('#usuario').value = usuario;
    document.querySelector('#senha').value = senha;
    console.log("funciooasa");
    
}

function checkLogin(){
    console.log("funciooasa1");
    let usuario = document.querySelector('#usuario').value
    let senha = document.querySelector('#senha').value

    if(usuario == 'admin' && senha == 'admin'){
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('senha', senha);
        document.querySelector('#errorMessage').innerHTML = 'worked as fuck';
    }
    else{
        document.querySelector('#errorMessage').innerHTML = 'usuario ou senha inválidos';
    }
}