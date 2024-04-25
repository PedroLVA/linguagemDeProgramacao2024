
let buttons = document.querySelectorAll('.btn');


let visor = document.querySelector('.visor');


buttons.forEach(button => {
  button.addEventListener('click', function() {
    let buttonValue = this.textContent;
    visor.textContent = buttonValue;
  });
});