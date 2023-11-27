// Check if LocalStorage has any quotes
// function quoteHandle() {
//     var data = localStorage.getItem('quotes') ?? null;
//     console.log(data)
//     if (data === null) {
//         // No Quotes
//         return;
//     }

//     // Quotes Exist

// }

// quoteHandle();

// Check if url has quotes
(function () {

var url = new URL(window.location.href);
var quotes = url.searchParams.get("quotes");

function handleResults(score, length) {
    alert("You got a score of " + score + "/" + length);
}

if (quotes === null) {
    // Check if LocalStorage has any quotes
    var data = localStorage.getItem('quotes') ?? null;
    if (data !== null) {
        // Quotes Exist show them
        // First empty the quoteList
        var quoteList = document.getElementById("quoteList");
        quoteList.innerHTML = "";
        var quotes = JSON.parse(decodeURIComponent(atob(data)));
        var quoteList = document.getElementById("quoteList");

        for (var i = 0; i < quotes.length; i++) {
            var template = document.createElement("textarea");
            template.setAttribute("class", "quote");
            template.setAttribute("rows", "4");
            template.setAttribute("cols", "50");
            template.setAttribute("placeholder", "Quote");
            template.value = quotes[i];
            quoteList.appendChild(template);
        }
    }

    document.getElementById("addQuote").addEventListener("click", function () {
        var quoteList = document.getElementById("quoteList");
        // var template = '<textarea class="quote" rows="4" cols="50" placeholder="Quote"></textarea>'
        var template = document.createElement("textarea");
        template.setAttribute("class", "quote");
        template.setAttribute("rows", "4");
        template.setAttribute("cols", "50");
        template.setAttribute("placeholder", "Quote");
        quoteList.appendChild(template);
    });

    document.getElementById("submitQuotes").addEventListener("click", function () {
        var quotes = document.getElementsByClassName("quote");
        var quoteArray = [];
        for (var i = 0; i < quotes.length; i++) {
            quoteArray.push(quotes[i].value);
        }

        localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(quoteArray))));
        window.location.href = "quoteTest.html?quotes=true";
    });
} else {
    var data = decodeURIComponent(atob(localStorage.getItem("quotes")));
    var inputdata = {};
    var results = {};

    if (data === null) {
        // No Quotes
        return;
    }
    // Quotes Exist

    // Setup Listeners
    var submitButton = document.getElementsByClassName("submitButton")[0];
    submitButton.addEventListener("click", function () {
        console.log("Click")
        results = {};
        for (var i = 0; i < quotes.length; i++) {
            var quote = document.getElementById("quoteCheck-" + i);
            if (quote.value === "") {
                alert("Please fill in all the words");
                return;
            }
            console.log(inputdata)
            console.log("Quote: " + quote.value + " Input: " + inputdata[i]);
            quote.value = quote.value.replaceAll(" ", "");
            if (quote.value.toLowerCase() !== inputdata[i].toLowerCase()) {
                results[i] = false;
                quote.style.backgroundColor = "red";
                continue;
            }
            quote.style.backgroundColor = "green";
            results[i] = true;
            continue;
        }
        var score = 0;
        for (var i = 0; i < quotes.length; i++) {
            if (results[i] === true) {
                score++;
            }
        }
        handleResults(score, quotes.length);

    });

    var quotes = JSON.parse(data);
    var quoteList = document.getElementById("quoteList");
    for (var i = 0; i < quotes.length; i++) {
        // Quote text show
        var template = document.createElement("div");
        template.setAttribute("class", "quoteShow");
        // Check if it has a enter character in it
        if (quotes[i].includes("\n")) {
            quotes[i] = quotes[i].replaceAll("\n", "<br>");
        }
        var elementQuote = quotes[i].split(" ");
        console.log("---- elementQuote ----")
        console.log(elementQuote)
        // If word includes <br> split 
        elementQuote.forEach((word, index) => {
            if (word.includes("<br>")) {
                console.log(index)
                var splitWord = word.split("<br>");
                // Add ##BR## to the place of <br> so it can be replaced later
                splitWord = splitWord.map(word => word + "##BR##");
                elementQuote.splice(index, 1, ...splitWord);
            }
        });

        // Add special character to <br> so it can be replaced later
        elementQuote = elementQuote.map(word => word.replace("<br>", "##BR##"));

        console.log("---- elementQuote1 ----")
        console.log(elementQuote)
        // Randomly remove 1 word from the quote
        var random = Math.floor(Math.random() * elementQuote.length);


        while (elementQuote[random] === "" || elementQuote[random] === " " || elementQuote[random] === "<br>" || elementQuote[random] === "##BR##") {
            random = Math.floor(Math.random() * elementQuote.length);
        }

        var removedWord = elementQuote[random];
        var inputLength = elementQuote[random].length;

        if (inputLength < 5) {
            inputLength = 5;
        }
        console.log("---- elementQuote2 ----")
        console.log(elementQuote)
        if (elementQuote[random].endsWith("<br>"))
            elementQuote[random] = "<input style='width:" + ( inputLength )+"em;' class='quoteCheck' placeholder='word' id=quoteCheck-"+ i + " ><br>";
        else
            elementQuote[random] = "<input style='width:" + ( inputLength )+"em;' class='quoteCheck' placeholder='word' id=quoteCheck-"+ i + " >";
        console.log(removedWord)
        // console.log(elementQuote)
        inputdata[i] = removedWord.replaceAll("<br>", "").replaceAll("##BR##", "");
        // TODO: learn more js and make this proportional to the length of the original word
        var quote = elementQuote.join(" ").replace(/##BR##/g, "<br>");
        template.innerHTML = (i + 1) + ". " + quote;
        quoteList.appendChild(template);
    }
    console.log("---- Quotes ----")
    console.log(quotes)
}
    
})();