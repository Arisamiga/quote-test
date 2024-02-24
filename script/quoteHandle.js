// Check if LocalStorage has any quotes

// Check if url has quotes
(function () {

    Object.assign(HTMLCollection.prototype, {
        forEach(event) {
            Array.prototype.forEach.call(this, (element) => event(element));
        },
    });

    var url = new URL(window.location.href);
    var quotes = url.searchParams.get("quotes");
    var currentPage = url.pathname.split("/").pop().split(".")[0];

    // console.log(quotes)
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

    function removeWords(randomInput, index, quoteIndex) {
        // Initialise array
        if (inputdata[quoteIndex] === undefined) {
            inputdata[quoteIndex] = {};
        }

        var random = randomInput;
        var attempts = 0;

        while ((elementQuote[random] === "" ||
            elementQuote[random] === " " ||
            elementQuote[random] === "<br>" ||
            elementQuote[random] === "##BR##" ||
            containsSpecialCharacters(elementQuote[random]) ||
            elementQuote[random].includes("<input")) && attempts < elementQuote.length) {
            random = Math.floor(Math.random() * elementQuote.length);
            attempts++;
        }

        if (attempts === elementQuote.length) {
            // console.log(elementQuote)
            console.error('Could not find a valid word to remove');
            return;
        }
        var removedWord = elementQuote[random];
        var inputLength = elementQuote[random].length;
        // console.log("aaaa: " + elementQuote[random])

        if (inputLength < 5) {
            inputLength = 5;
        }

        // console.log("---- elementQuote2 ----")
        // console.log(elementQuote)

        if (elementQuote[random].endsWith("<br>"))
            elementQuote[random] = "<input style='width:" + (inputLength) + "em;' class='quoteCheck' placeholder='...' id=quoteCheck-" + quoteIndex + "-" + index + " ><br>";
        else
            elementQuote[random] = "<input style='width:" + (inputLength) + "em;' class='quoteCheck' placeholder='...' id=quoteCheck-" + quoteIndex + "-" + index + " >";

        // console.log(removedWord)

        // // console.log(elementQuote)

        // console.log("Includes input?? " + removedWord.includes("<input"))

        // console.log(quoteIndex, index)
        inputdata[quoteIndex][index] = removedWord.replaceAll("<br>", "").replaceAll("##BR##", "");
        var quote = elementQuote.join(" ").replace(/##BR##/g, "<br>");
        template.innerHTML = (quoteIndex + 1) + ". " + quote;
        quoteList.appendChild(template);
    }



    if (quotes === null && (currentPage === "index" || currentPage === "")) {
        var intensity = document.getElementById("intensityRange")
        var intensityOutput = document.getElementById("intensityValue")
        intensityOutput.innerHTML = intensity.value;

        intensity.oninput = function () {
            intensityOutput.innerHTML = this.value;

            // console.log(this.value);

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

        var intensitySetting = localStorage.getItem("intensity") ?? 50;
        intensity.value = intensitySetting;
        intensityOutput.innerHTML = intensitySetting;

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

            // If quotes are empty
            if (quoteArray.join("").trim().replaceAll(" ", "") === "") {
                alert("Please make sure you submit some quotes.");
                return;
            }

            localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(quoteArray))));
            localStorage.setItem("intensity", intensity.value)

            window.location.href = "quoteTest.html?quotes=true";
        });

        var optionText = document.getElementsByClassName("optionText")[0]
        var optionField = document.getElementsByClassName("optionsField")[0]

        optionText.addEventListener("click", function (element) {
            // console.log("Click")
            if (element.target.innerHTML.includes("▼")) {
                element.target.innerHTML = "⚙️ Options ▲";
                optionField.style.maxHeight = "200px";
                optionField.style.padding = "10px";
                optionText.classList.remove("optionsClosed");
                optionText.classList.add("optionsOpened");

            }
            else {
                element.target.innerHTML = "⚙️ Options ▼";
                optionField.style.maxHeight = "0";
                optionField.style.padding = "0";
                optionField.style.margin = "0";
                // Wait for the transition to finish
                optionField.addEventListener("transitionend", function (event) {

                    if (event.propertyName === "max-height" && event.target.style.maxHeight === "0px") {
                        optionText.classList.remove("optionsOpened");
                        optionText.classList.add("optionsClosed");
                    }
                });
            }
        });
    } else if (currentPage === "quoteTest" && quotes !== null) {
        // Is the quoteTest page
        var data = decodeURIComponent(atob(localStorage.getItem("quotes")));
        var intensity = localStorage.getItem("intensity")
        var inputdata = {};

        if (data === null) {
            // No Quotes
            return;
        }
        // Quotes Exist

        // Setup Listeners
        var submitButton = document.getElementsByClassName("submitButton")[0];

        // Submit Button Listener
        submitButton.addEventListener("click", function () {
            // console.log("Click")
            var results = {};

            // Check if all inputs are filled
            var quotes = document.getElementsByClassName("quoteCheck");
            for (var i = 0; i < quotes.length; i++) {
                if (quotes[i].value === "") {
                    alert("Please fill in all the words to see your score.");
                    return;
                }
            }

            // Check if all inputs are correct
            for (var j = 0; j < quotes.length; j++) {
                var quote = quotes[j];
                // console.log(quote.id.split("-"))
                var index = quote.id.split("-")[2];
                var i = quote.id.split("-")[1];

                if (results[i] === undefined) {
                    results[i] = {};
                }

                // console.log(inputdata)
                // console.log("Quote: " + quote.value + " Input: " + inputdata[i][index]);
                quote.value = quote.value.replaceAll(" ", "");

                if (quote.value.toLowerCase() !== inputdata[i][index].toLowerCase()) {
                    results[i][index] = false;
                    quote.style.backgroundColor = "red";
                    // Add tooltype to show the correct word
                    quote.setAttribute("title", 'Correct Word: "' + inputdata[i][index] + '"');

                    // Append child with button to show the correct word inside the input
                    var button = document.createElement("span");
                    button.setAttribute("class", "showCorrectWord");
                    button.innerHTML = " ? ";

                    // Check if button is already there
                    if (quote.nextSibling !== null && quote.nextSibling.className === "showCorrectWord") {
                        quote.nextSibling.remove();
                    }

                    // Add button next to the input
                    quote.insertAdjacentElement('afterend', button);

                    // Add event listener to the button
                    button.addEventListener("click", function () {
                        var input = this.previousSibling;

                        var index = input.id.split("-")[2];
                        var i = input.id.split("-")[1];

                        // Alert the correct word
                        alert('Correct Word: "' + inputdata[i][index] + '"');

                    });


                }
                else {
                    quote.style.backgroundColor = "green";
                    results[i][index] = true;
                }
            }

            // Calculate Score and show it
            var score = 0;
            // console.log("Lenght: " + Object.keys(results).length)
            // for (var j = 0; j < quotes.length; j++) {
            //     var quote = quotes[j];
            //     var index = quote.id.split("-")[2];
            //     var i = quote.id.split("-")[1];
            //     if (results[i][index] === true) {
            //         score++;
            //     }
            // }
            for (var key in results) {
                var allTrue = true;
                for (var key2 in results[key]) {
                    if (results[key][key2] === false) {
                        allTrue = false;
                    }
                }
                if (allTrue === true) {
                    score++;
                }
            }

            handleResults(score, Object.keys(results).length);

        });

        // Back Button Listener
        document.getElementsByClassName("backButton")[0].addEventListener("click", function () {
            window.location.href = "index.html";
        });

        // Quote Setup Sequence
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
            // console.log("---- elementQuote ----")
            // console.log(elementQuote)

            // If word includes <br> split it and use ##BR## to replace it later
            elementQuote.forEach((word, index) => {
                if (word.includes("<br>")) {
                    // console.log(index)
                    var splitWord = word.split("<br>");
                    // Add ##BR## to the place of <br> so it can be replaced later
                    splitWord = splitWord.map(word => word + "##BR##");
                    elementQuote.splice(index, 1, ...splitWord);
                }
            });

            // Add special character to <br> so it can be replaced later
            elementQuote = elementQuote.map(word => word.replace("<br>", "##BR##"));

            // Split special characters from words and add them to the array but dont seperate each individual character
            let newElementQuote = [];

            elementQuote.forEach((word) => {
                if (containsSpecialCharacters(word)) {
                    let splitWord = word.split(/([.,\/#!$%\^&\*;:{}=\-_`~()?'"]+)/g);
                    newElementQuote.push(...splitWord.filter(Boolean));
                } else {
                    newElementQuote.push(word);
                }
            });

            elementQuote = newElementQuote;

            // console.log("---- elementQuote1 ----")
            // console.log(elementQuote)


            // Randomly remove certain amount of words from the quote
            if (intensity < 10) {
                var wordsRemoved = Math.ceil(elementQuote.length * (intensity / 100));
            }
            else {
                var wordsRemoved = Math.floor(elementQuote.length * (intensity / 100));
            }


            // console.log("Removing: " + wordsRemoved + " words" + " from " + elementQuote.length + " words")


            for (var j = 0; j < wordsRemoved; j++) {
                var random = Math.floor(Math.random() * elementQuote.length);
                removeWords(random, j, i);
            }


        }
        // console.log("---- Quotes ----")
        // console.log(quotes)
    }
    else {
        var box = document.getElementsByClassName("border-box")[0]
        box.innerHTML = "<a href='./index.html' class='backButton'>&#8592; Go Back</a> <h1 style='padding-top:20px'>Something Went Wrong...</h1><p>Please go back and make sure you submit your quotes.</p>"
    }

})();