(function () {

function createPopup(buttons, type, content) {
    return new Promise((resolve) => {
        const popup = document.getElementById("popup")
        const button1 = document.getElementById("button1")
        const button2 = document.getElementById("button2")
        const button3 = document.getElementById("button3")
        const title = document.getElementById("popupTitle")
        const text = document.getElementById("popupText")
        const popupContent = document.getElementById("popupContent")
        popup.style.overflow = "auto"
        document.body.style.overflow = "hidden"
        if (buttons === "yn") {
            button1.style.display = "block"
            button2.style.display = "block"
            button1.innerHTML = "Yes"
            button2.innerHTML = "No"
            button1.addEventListener("click", () => {
                resolve(true);
                closePopup()
            });
            button2.addEventListener("click", () => {
                resolve(false);
                closePopup()
            });
        }
        else if (buttons === "ok") {
            button1.style.display = "block"
            button1.innerHTML = "OK"
            button1.addEventListener("click", () => {
                resolve(true);
                closePopup()
            })
        }
        else if (buttons === "blank") {
        }
        else if (buttons === "force") {
            button1.style.display = "block";
            button2.style.display = "block";
            button1.innerHTML = "OK";
            button2.innerHTML = "Complete Anyway";
            button1.addEventListener("click", () => {
                resolve(false)
                closePopup();
            })
            button2.addEventListener("click", () => {
                resolve(true);
                closePopup();
            })
        }
        else {
            button1.style.display = "block"
            button1.innerHTML = "debug: Invalid Button Type!!"
        }

        if (type === "info") {
            title.innerHTML = "ℹ️ Information"
            title.style.color = "#67f5ff"
        }
        else if (type === "caution") {
            title.innerHTML = "⚠️Caution";
            title.style.color = "#ffdf77";
        }
        else if (type === "warning") {
            title.innerHTML = "❗ Warning";
            title.style.color = "#cd1000"
        }
        else if (type === "error") {
            title.innerHTML = "❗ Error";
            title.style.color = "#cd1000";
        }
        else {
            title.innerHTML = type;
        }
        text.innerHTML = content;
        popup.style.display = "block"
        window.addEventListener("click", (event) => {
            if (event.target == popup) {
                closePopup();
            }
        }
        )
        const closeBtn = document.getElementById("closePopup")
        function closePopup() {
            popup.style.overflow = "hidden";
            popupContent.style.animation = "contentOut 0.6s";
            popup.style.animation = "bgOut 0.6s";
            popup.addEventListener("animationend", (event) => {
                if (event.animationName === "bgOut") {
                    popup.style.display = "none"
                    button1.style.display = "none";
                    button2.style.display = "none";
                    button3.style.display = "none";
                    popup.style.animation = "";
                    popupContent.style.animation = "";
                    document.body.style.overflow = "auto";
                }
            })
        }
        closeBtn.addEventListener("click", () => {
            closePopup()
        })
    });
}

function addQuoteElement(quoteList, quotes) {
    var container = document.createElement("div");
    container.setAttribute("class", "quoteContainer");
    quoteList.appendChild(container);


    var template = document.createElement("textarea");
    template.setAttribute("class", "quote");
    template.setAttribute("rows", "4");
    template.setAttribute("cols", "50");
    template.setAttribute("placeholder", "Quote");
    template.value = quotes;
    container.appendChild(template);


    // Add a button to also be able to delete the quote
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.innerHTML = "🗑️";
    deleteButton.addEventListener("click", function () {
        var container = this.parentNode;
        container.removeChild(this.previousSibling);
        container.removeChild(this);
    });
    container.appendChild(deleteButton);
}

// Check if LocalStorage has any quotes
var data = localStorage.getItem('quotes') ?? null;

if (data !== null && data.length > 0) {
    // Quotes Exist show them
    // First empty the quoteList
    var quoteList = document.getElementById("quoteList");
    quoteList.innerHTML = "";
    var quotes = JSON.parse(decodeURIComponent(atob(data)));

    for (var i = 0; i < quotes.length; i++) {
        addQuoteElement(quoteList, quotes[i]);
    }
}

document.getElementById("addQuote").addEventListener("click", function () {
    var quoteList = document.getElementById("quoteList");
    // var template = '<textarea class="quote" rows="4" cols="50" placeholder="Quote"></textarea>'
    addQuoteElement(quoteList, "");
});

document.getElementById("submitQuotes").addEventListener("click", function () {
    var intensitySetting = JSON.parse(localStorage.getItem("options")).intensity ?? 50;
    var quotes = document.getElementsByClassName("quote");
    var quoteArray = [];
    for (var i = 0; i < quotes.length; i++) {
        quoteArray.push(quotes[i].value);
    }

    // If quotes are empty
    if (quoteArray.join("").trim().replaceAll(" ", "") === "") {
        createPopup("ok", "caution", "Please make sure you submit some quotes!")
        return;
    }

    localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(quoteArray))));


    let newOptions = JSON.parse(localStorage.getItem("options")) ?? {};

    newOptions.intensity = intensitySetting;

    localStorage.setItem("options", JSON.stringify(newOptions));

    window.location.href = "quoteTest.html?quotes=true";
});


})();