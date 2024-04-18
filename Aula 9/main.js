let buttons = document.querySelectorAll('a', '.btn');
let url = window.location.href;
console.log(buttons);

for(let button of buttons){
    if(button.href == url){
        button.classList.add('active');
    }
}