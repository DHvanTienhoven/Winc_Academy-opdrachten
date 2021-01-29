const button = document.getElementById('mybutton')

button.addEventListener("click", function(){alert('button clicked')})

const colorButton = document.getElementById('colorbutton');
const background = document.getElementById('background');

colorButton.addEventListener("click", function(){
    background.classList.toggle('red-background')
})