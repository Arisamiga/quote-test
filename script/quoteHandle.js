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
var url = new URL(window.location.href);
var quotes = url.searchParams.get("quotes");

if (quotes === null) {
    // Check if LocalStorage has any quotes
    var data = localStorage.getItem('quotes') ?? null;
    if (data !== null) {
        // Quotes Exist show them
        // First empty the quoteList
        var quoteList = document.getElementById("quoteList");
        quoteList.innerHTML = "";

        var quotes = JSON.parse(atob(data));
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

    submitQuotes.addEventListener("click", function () {
        var quotes = document.getElementsByClassName("quote");
        var quoteArray = [];
        for (var i = 0; i < quotes.length; i++) {
            quoteArray.push(quotes[i].value);
        }

        localStorage.setItem("quotes", btoa(JSON.stringify(quoteArray)));
        window.location.href = "quoteTest.html?quotes=true";
    });
} else {
    var data = atob(localStorage.getItem("quotes"));
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

        // Randomly remove 1 word from the quote
        var random = Math.floor(Math.random() * elementQuote.length);
        var removedWord = elementQuote[random];
        elementQuote[random] = "<input class='quoteCheck' id=quoteCheck"+ i + " >";
        var quote = elementQuote.join(" ");
        template.innerHTML = (i + 1) + ". " + quote;
        quoteList.appendChild(template);
    }
}