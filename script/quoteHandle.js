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
        var quoteResults = document.getElementById("quoteResults");
        quoteResults.innerHTML = "Score: " + score + "/" + length;
        quoteResults.style.animation = "fadeIn 4s";
        // Scroll to top slowly
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

    function containsSpecialCharacters(word) {
        var specialCharacters = /([.,\/#!$%\^&\*;:{}=\-_`~()?'"]+)/g;
        return specialCharacters.test(word);

    }



    if (quotes === null) {
        var intensity = document.getElementById("intensityRange")
        var intensityOutput = document.getElementById("intensityValue")
        intensityOutput.innerHTML = intensity.value;

        intensity.oninput = function () {
            intensityOutput.innerHTML = this.value;

            console.log(this.value);

        }
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
                addQuoteElement(quoteList, quotes[i]);
            }
        }

        document.getElementById("addQuote").addEventListener("click", function () {
            var quoteList = document.getElementById("quoteList");
            // var template = '<textarea class="quote" rows="4" cols="50" placeholder="Quote"></textarea>'
            addQuoteElement(quoteList, "");
        });

        document.getElementById("submitQuotes").addEventListener("click", function () {
            var quotes = document.getElementsByClassName("quote");
            var quoteArray = [];
            for (var i = 0; i < quotes.length; i++) {
                quoteArray.push(quotes[i].value);
            }

            localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(quoteArray))));
            localStorage.setItem("intensity", intensity.value)

            window.location.href = "quoteTest.html?quotes=true";
        });

        document.getElementsByClassName("optionText")[0].addEventListener("click", function (element) {
            console.log("Click")
            if (element.target.innerHTML.includes("▼")){
                element.target.innerHTML = "⚙️ Options ▲";
                document.getElementsByClassName("optionsField")[0].style.display = "block";
                document.getElementsByClassName("optionText")[0].classList.remove("optionsClosed");
                document.getElementsByClassName("optionText")[0].classList.add("optionsOpened");

            }
            else {
                element.target.innerHTML = "⚙️ Options ▼";
                document.getElementsByClassName("optionsField")[0].style.display = "none";
                document.getElementsByClassName("optionText")[0].classList.remove("optionsOpened");
                document.getElementsByClassName("optionText")[0].classList.add("optionsClosed");

            }
        });
    } else {
        var data = decodeURIComponent(atob(localStorage.getItem("quotes")));
        var intensity = localStorage.getItem("intensity")
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

            // Check if all inputs are filled
            var quotes = document.getElementsByClassName("quoteCheck");
            for (var i = 0; i < quotes.length; i++) {
                if (quotes[i].value === "") {
                    alert("Please fill in all the words to see your score.");
                    return;
                }
            }

            for (var j = 0; j < quotes.length; j++) {
                var quote = quotes[j];
                console.log(quote.id.split("-"))
                var index = quote.id.split("-")[2];
                var i = quote.id.split("-")[1];

                if (results[i] === undefined) {
                    results[i] = {};
                }

                console.log(inputdata)
                console.log("Quote: " + quote.value + " Input: " + inputdata[i][index]);
                quote.value = quote.value.replaceAll(" ", "");
                if (quote.value.toLowerCase() !== inputdata[i][index].toLowerCase()) {
                    results[i][index] = false;
                    quote.style.backgroundColor = "red";
                }
                else {
                    quote.style.backgroundColor = "green";
                    results[i][index] = true;
                }
            }

            var score = 0;
            for (var j = 0; j < quotes.length; j++) {
                console.log("E")
                var quote = quotes[j];
                var index = quote.id.split("-")[2];
                var i = quote.id.split("-")[1];
                if (results[i][index] === true) {
                    score++;
                }
            }
            handleResults(score, quotes.length);

        });

        document.getElementsByClassName("backButton")[0].addEventListener("click", function () {
            window.location.href = "index.html";
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

            // Split special characters from words and add them to the array but dont seperate each individual character
            elementQuote.forEach((word, index) => {
                if (containsSpecialCharacters(word)) {
                    var splitWord = word.split(/([.,\/#!$%\^&\*;:{}=\-_`~()?'"]+)/g);
                    console.log("-> " + splitWord)
                    elementQuote.splice(index, 1, ...splitWord.filter(Boolean));
                }
            });

            console.log("---- elementQuote1 ----")
            console.log(elementQuote)
            // Randomly remove 1 word from the quote


            var wordsRemoved = Math.floor(elementQuote.length * (intensity / 100))
            function removeWords(randomInput, index, quoteIndex) {
                var random = randomInput;

                while (elementQuote[random] === "" || 
                        elementQuote[random] === " " || 
                        elementQuote[random] === "<br>" || 
                        elementQuote[random] === "##BR##" || 
                        containsSpecialCharacters(elementQuote[random]) ||
                        elementQuote[random].includes("<input")) {
                    random = Math.floor(Math.random() * elementQuote.length);
                }
                var removedWord = elementQuote[random];
                var inputLength = elementQuote[random].length;
                console.log("aaaa: " + elementQuote[random])

                if (inputLength < 5) {
                    inputLength = 5;
                }

                console.log("---- elementQuote2 ----")
                console.log(elementQuote)

                if (elementQuote[random].endsWith("<br>"))
                    elementQuote[random] = "<input style='width:" + (inputLength) + "em;' class='quoteCheck' placeholder='...' id=quoteCheck-" + quoteIndex + "-" + index + " ><br>";
                else
                    elementQuote[random] = "<input style='width:" + (inputLength) + "em;' class='quoteCheck' placeholder='...' id=quoteCheck-" + quoteIndex + "-" + index +  " >";

                console.log(removedWord)
                
                // console.log(elementQuote)

                console.log("Includes input?? " + removedWord.includes("<input"))

                console.log(quoteIndex, index)
                inputdata[quoteIndex][index] = removedWord.replaceAll("<br>", "").replaceAll("##BR##", "");
                var quote = elementQuote.join(" ").replace(/##BR##/g, "<br>");
                template.innerHTML = (quoteIndex + 1) + ". " + quote;
                quoteList.appendChild(template);
            }
            for (var j = 0; j < wordsRemoved; j++) {
                var random = Math.floor(Math.random() * elementQuote.length);
                // Initialise array
                if (inputdata[i] === undefined) {
                    inputdata[i] = {};
                }

                removeWords(random, j, i);
            }


        }
        console.log("---- Quotes ----")
        console.log(quotes)
    }

})();