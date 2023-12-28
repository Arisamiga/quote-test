// const menu = document.querySelector(".menu");
// const button = document.querySelectorAll('.button');

// menu.addEventListener('click', () => {
//     menu.classList.toggle('active');

//     button.forEach(button => {
//         button.classList.toggle('active');
//     })
//     console.log("button clicked")
// })

// const buttonArray = Array.from(button);

// buttonArray.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log("button clicked1")
//     })
// }) // this errors because i have not finished it yet, i think

const selections = document.getElementsByClassName("selection")[0]
const selectionData = document.getElementsByClassName("selection_items")[0]

selections.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    selectionData.innerHTML = "";

    if (selectedOption === "More") {
        selectionData.innerText = "More Options are coming soon...";
    }

    if (selectedOption === "Lear") {
        const html = `
        <div class='headline'>
            <h1>Act 1</h1>
        </div>
        <div class='content'>
            <div class='grid'>
                <div class='grid_item'>Scene 1</div>
                <div class='grid_item'>Scene 2</div>
                <div class='grid_item'>Scene 3</div>
                <div class='grid_item'>Scene 4</div>
                <div class='grid_item'>Scene 5</div>
            </div>
        </div>

        <div class='headline'>
            <h1>Act 2</h1>
        </div>
        <div class='content'>
            <div class='grid'>
                <div class='grid_item'>Scene 1</div>
                <div class='grid_item'>Scene 2</div>
                <div class='grid_item'>Scene 3</div>
                <div class='grid_item'>Scene 4</div>
            </div>
        </div>
        `
        selectionData.innerHTML = html;
    }
});

selectionData.addEventListener("click", (event) => {
    const element = event.target;

    if (element.classList.contains("grid_item")) {
        const scene = element.innerText;
        const act = event.target.parentElement.parentElement.previousElementSibling.innerText;
        // Sample : ["Test\nfe\nf\nef\ne\nfe\n","testqw2","Come not between the dragon and his wrath","ttewtjweoitjoweijtoiewjt ewjtiowejtioejwiotjweio eoiwtjoiwejtiowejoitjiowetijew weijtoiwejtiowjeiotjwe weoitjeowijtioewj","rqwrwrqwr qwr wqr qw rwq\nwq rwq rwqrj wqrwqrqw\nwq re qwr wqr wq r\nqwr wqrwqrwqrwq \nwqrqwrwqrwqr","I told him the revenging gods\n\n‘Gainst barricades did all their thunders bend\nWith his prepared sword he charges home\nMy unprepared body"]

    }
});