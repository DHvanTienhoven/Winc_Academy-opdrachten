const animalButtons = document.querySelectorAll(".big-five-list-item");
const animalList = document.getElementById("spotted-animals-list");

const buttonText = animalButtons.forEach(button=> {button.addEventListener("click",()=>{
    const clickedAnimal = button.textContent;
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(clickedAnimal));
    animalList.appendChild(listItem);
    console.log(`yes! nog n ${clickedAnimal} gezien!`)
})});

const removeFirstButton = document.querySelector("#remove-first-item-button")

const removeFirstAnimal = removeFirstButton.addEventListener("click",()=>{
    animalList.removeChild(animalList.firstElementChild);
    console.log(`oh nee! toch niet!`)
})

const removeAllButton = document.querySelector("#remove-all-button")

const removeAllAnimals = removeAllButton.addEventListener("click", ()=>{
    while(animalList.hasChildNodes){
        animalList.removeChild(animalList.firstChild)
    };
    console.log(`rotsafari. Niks gezien`)
})