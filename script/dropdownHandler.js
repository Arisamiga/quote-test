const menu = document.querySelector(".menu");
const button = document.querySelectorAll('.button');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');

    button.forEach(button => {
        button.classList.toggle('active');
    })
    console.log("button clicked")
})

const buttonArray = Array.from(button);

buttonArray.forEach(button => {
    button.addEventListener('click', () => {
        console.log("button clicked1")
    })
}) // this errors because i have not finished it yet, i think