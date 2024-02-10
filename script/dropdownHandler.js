


const selections = document.getElementsByClassName("selection")[0]
const selectionData = document.getElementsByClassName("selection_items")[0]

const Premade = {
    "Lear": {
        "Act 1": {
            "Scene 1": "WyIiXQ==",
            "Scene 2": "WyJUaG91LCBuYXR1cmUsIGFydCBteSBnb2RkZXNzIiwgIlRoZSBjdXJpb3NpdHkgb2YgbmF0aW9ucyB0byBkZXByaXZlIG1lLCBmb3IgdGhhdCBJIGFtIHNvbWUgdHdlbHZlIG9yIGZvdXJ0ZWVuIG1vb25zaGluZXMgbGFnIG9mIGEgYnJvdGhlcj8iLCAiV2hvIGluIHRoZSBsdXN0eSBzdGVhbHRoIG9mIG5hdHVyZSB0YWtlIG1vcmUgY29tcG9zaXRpb24gYW5kIGZpZXJjZSBxdWFsaXR5IHRoYW4gZG90aCwgd2l0aGluIGEgZHVsbCwgc3RhbGUsIHRpcmVkIGJlZCBnbyB0byB0aGUgY3JlYXRpbmcgYSB3aG9sZSB0cmliZSBvZiBmb3BzIGdvdCAndHdlZW4gYXNsZWVwIGFuZCB3YWtlPyIsICJOYXR1cmUgZmluZHMgaXRzZWxmIHNjb3VyZ2VkIGJ5IHRoZSBzZXF1ZW50IGVmZmVjdHM6Li4uYnJvdGhlcnMgZGl2aWRlOy4uLnRoZSBib25kIGNyYWNrZWQgJ3R3aXh0IHNvbiBhbmQgZmF0aGVyIiwgIlRoZSBraW5nIGZhbGxzIGZyb20gYmlhcyBvZiBuYXR1cmU7IHRoZXJlJ3MgZmF0aGVyIGFnYWluc3QgY2hpbGQiLCAiQSBicm90aGVyIG5vYmxlLCB3aG9zZSBuYXR1cmUgaXMgc28gZmFyIGZyb20gZG9pbmcgaGFybXMgdGhhdCBoZSBzdXNwZWN0cyBub25lIl0=",
            "Scene 3": "WyIiXQ==",
            "Scene 4": "WyIiXQ==",
            "Scene 5": "WyIiXQ=="
        },
        "Act 2": {
            "Scene 1": "WyIiXQ=="
        }
    }
}

selections.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    // selectionData.innerHTML = "";

    if (selectedOption === "default") {
        selectionData.style.minHeight = `0px`;
        selectionData.style.maxHeight = `0px`;
    }

    if (selectedOption === "More") {
        selectionData.style.minHeight = `60px`;
        selectionData.style.maxHeight = `60px`;
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
        // let estimatedHeight = ;
        // Create estimatedHeight based on newlines
        let estimatedHeight = html.split("\n").length * 22;
        selectionData.style.minHeight = `${estimatedHeight}px`;
        selectionData.style.maxHeight = `${estimatedHeight}px`;
    }

});

selectionData.addEventListener("click", (event) => {
    const element = event.target;

    if (element.classList.contains("grid_item")) {
        const scene = element.innerText;
        const act = event.target.parentElement.parentElement.previousElementSibling.innerText;
        // Sample : ["Test\nfe\nf\nef\ne\nfe\n","testqw2","Come not between the dragon and his wrath","ttewtjweoitjoweijtoiewjt ewjtiowejtioejwiotjweio eoiwtjoiwejtiowejoitjiowetijew weijtoiwejtiowjeiotjwe weoitjeowijtioewj","rqwrwrqwr qwr wqr qw rwq\nwq rwq rwqrj wqrwqrqw\nwq re qwr wqr wq r\nqwr wqrwqrwqrwq \nwqrqwrwqrwqr","I told him the revenging gods\n\n‘Gainst barricades did all their thunders bend\nWith his prepared sword he charges home\nMy unprepared body"]
        const modal = document.getElementsByClassName("modal")[0];
        const modalContent = document.getElementsByClassName("modal-content")[0];
        const topic = selections[selections.selectedIndex].innerText;
        modal.style.display = "block";
        modalContent.innerHTML = "";

        let html = `
        <span class="close">&times;</span>
        <div class="modal_header">
            <h1>${topic} | ${act} ${scene} Quotes</h1>
            <ul>
        `
        JSON.parse(decodeURIComponent(atob(Premade.Lear[act][scene]))).forEach((quote, index) => {
            html += `
                <li id="quote-${index}">${quote}</li>
            `
        });

        html += `
            </ul>
        </div>
        Do you want to use these quotes? <span style="color:red;">This will overwrite the current quotes.</span>

        <div class="useQuotesButton">Use Template Quotes</div>
        <div class="addQuotesButton">Add to Existing Quotes</div>
        `
        modalContent.innerHTML = html;

        const modal_close = document.getElementsByClassName("close")[0]
        modal_close.addEventListener("click", () => {
            const modal = document.getElementsByClassName("modal")[0];
            // Play fade in animation in reverse then hide the modal
            modal.style.animation = "fadeOut 0.5s";
            // When animation ends, hide the modal
            modal.addEventListener("animationend", (event) => {
                if (event.animationName === "fadeOut") {
                    modal.style.display = "none";
                    modal.style.animation = "";
                }
            });
        });

        const useQuotesButton = document.getElementsByClassName("useQuotesButton")[0];
        useQuotesButton.addEventListener("click", () => {
            const quotes = Premade.Lear[act][scene];
            localStorage.setItem("quotes", quotes);
            window.location.href = "index.html";
        });

        const addQuotesButton = document.getElementsByClassName("addQuotesButton")[0];
        addQuotesButton.addEventListener("click", () => {
            const quotes = Premade.Lear[act][scene];
            const currentQuotes = localStorage.getItem("quotes");
            const newQuotes = JSON.parse(decodeURIComponent(atob(quotes)));
            const currentQuotesArray = JSON.parse(decodeURIComponent(atob(currentQuotes)));
            const combinedQuotes = [...currentQuotesArray, ...newQuotes];
            localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(combinedQuotes))));
            window.location.href = "index.html";
        });
    }
});