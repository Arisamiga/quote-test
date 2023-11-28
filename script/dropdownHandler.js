const menu = document.querySelector("menu");
const button = document.querySelectorAll('button');

button.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const buttonArray = Array.from(button);

buttonArray.forEach(button => {
    button.addEventListener('click', () => {

    })
}) // this errors because i have not finished it yet, i think