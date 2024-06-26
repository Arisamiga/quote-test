// Check if LocalStorage has any quotes

// Check if url has quotes
(function () {

    Object.assign(HTMLCollection.prototype, {
        forEach(event) {
            Array.prototype.forEach.call(this, (element) => event(element));
        },
    });

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    function createElement(type, properties, ...children) {
        const element = document.createElement(type);
        Object.assign(element, properties);
        element.append(...children);
        return element;
    }
    

    var url = new URL(window.location.href);
    var quotes = url.searchParams.get("quotes");
    var currentPage = url.pathname.split("/").pop().split(".")[0];

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
                button1.style.display = "flex"
                button2.style.display = "flex"
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
                button1.style.display = "flex"
                button1.innerHTML = "OK"
                button1.addEventListener("click", () => {
                    resolve(true);
                    closePopup()
                })
            }
            else if (buttons === "blank") {
            }
            else if (buttons === "force") {
                button1.style.display = "flex";
                button2.style.display = "flex";
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
                button1.style.display = "flex"
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
                        if (document.getElementById("checkboxdiv") !== null)
                            document.getElementById("checkboxdiv").style.display = "none";
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



    // console.log(quotes)
    function handleResults(score, length) {
        var quoteResults = document.getElementById("quoteResults");
        quoteResults.innerHTML = "Score: " + score + "/" + length;
        quoteResults.style.animation = "fadeIn 4s";
        // Scroll to top slowly
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
            elementQuote[random] = "<input style='width:" + (inputLength) + "em;' class='quoteCheck' placeholder='...' id=quoteCheck-" + quoteIndex + "-" + index + " autocomplete='off'><br>";
        else
            elementQuote[random] = "<input style='width:" + (inputLength) + "em;' class='quoteCheck' placeholder='...' id=quoteCheck-" + quoteIndex + "-" + index + " autocomplete='off'>";

        // console.log(removedWord)

        // console.log(elementQuote)

        // console.log("Includes input?? " + removedWord.includes("<input"))

        // console.log(quoteIndex, index)
        inputdata[quoteIndex][index] = removedWord.replaceAll("<br>", "").replaceAll("##BR##", "");
        var quote = elementQuote.join(" ").replace(/##BR##/g, "<br>");
        template.innerHTML = (quoteIndex + 1) + ". " + quote;
        quoteList.appendChild(template);
    }

    if (currentPage === "quoteTest" && quotes !== null) {
        // Is the quoteTest page
        var data = decodeURIComponent(atob(localStorage.getItem("quotes")));
        var intensity = JSON.parse(localStorage.getItem("options")).intensity
        var inputdata = {};
        var submitted = false;

        if (data === null) {
            // No Quotes
            return;
        }
        // Quotes Exist

        // Setup Listeners
        var submitButton = document.getElementsByClassName("submitButton")[0];
        var forcedSubmit = false;

        // Submit Button Listener
        submitButton.addEventListener("click", async function () {
            // console.log("Click")
            var results = {};

            // Check if all inputs are filled
            var quotes = document.getElementsByClassName("quoteCheck");
            for (var i = 0; i < quotes.length; i++) {
                if (quotes[i].value === "" && !forcedSubmit) {
                    var result = await createPopup("force", "caution", "Please fill in all the words to see your score.")

                    var options = JSON.parse(localStorage.getItem("options")) ?? {};
                    var skipModal = options.dontShow ?? false;

                    if (skipModal == true) {
                        break;
                    }
    
                    // console.log(result)
                    await delay(700);
                    if (result == true) {
                        // Add checkbox to not show again
                        let checkboxdiv = document.getElementById("checkboxdiv");
                        if (!checkboxdiv) {
                            checkboxdiv = createElement("div", { id: "checkboxdiv", style: "display: flex" });
                            popupContent.appendChild(checkboxdiv);

                            const checkbox = createElement("input", { type: "checkbox", id: "dontShowAgain" });
                            const label = createElement("span", {}, "Don't show this again");

                            checkboxdiv.append(checkbox, label);
                        } else {
                            checkboxdiv.style.display = "flex";
                        }

                        var confirmation = await createPopup("yn", "warning", "Are you sure?");
                        var dontShow = document.getElementById("dontShowAgain").checked;
                        if (confirmation == true) {
                            // Update options for dont show again
                            var options = JSON.parse(localStorage.getItem("options")) ?? {};
                            options.dontShow = dontShow;
                            localStorage.setItem("options", JSON.stringify(options));
                            break;
                        }
                        else {
                            return;
                        }
                    }
                    else {
                        return;
                    }

                };

            }

            // Reset the flag to false after handling the click
            skipModal = false;

            submitted = true;

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
                // console.log("quote: " + quote.value)
                if (!quote.value) {
                    quote.value = ""
                }

                if (quote.value.toLowerCase() !== inputdata[i][index].toLowerCase()) {
                    results[i][index] = false;
                    quote.style.backgroundColor = "red";
                    // Add tooltype to show the correct word
                    quote.setAttribute("title", 'Correct Word: "' + inputdata[i][index] + '"');

                    // Append child with button to show the correct word inside the input
                    var button = createElement("span", { className: "showCorrectWord", innerHTML: " ? " });

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
                        createPopup("ok", "info", 'Correct Word: "' + inputdata[i][index] + '"');

                    });


                }
                else {
                    quote.style.backgroundColor = "green";
                    results[i][index] = true;
                }
            }

            // Calculate Score and show it
            var score = 0;
            
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
            var template = createElement("div", { className: "quoteShow" });

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
                    let tempWord = word.replace(/##BR##/g, '\x00');
                    let splitWord = tempWord.split(/([.,\/#!$%\^&\*;:{}=\-_`~()?'"]+)/g);
                    let semifinalWords = splitWord.map(word => {return word.replaceAll('\x00', '##BR##')});
                    let finalWords = [];
                    semifinalWords.forEach((word) => {
                        if (word.includes('##BR##')) {
                            let splitParts = word.split('##BR##');
                            for (let i = 0; i < splitParts.length - 1; i++) {
                                finalWords.push(splitParts[i]);
                                finalWords.push('##BR##');
                            }
                            finalWords.push(splitParts[splitParts.length - 1]);
                        } else {
                            finalWords.push(word);
                        }
                    });

                    newElementQuote.push(...finalWords.filter(Boolean));
                } else {
                    newElementQuote.push(word);
                }
            });

            elementQuote = newElementQuote;

            // console.log("---- elementQuote1 ----")
            // console.log(elementQuote)


            // Filter out elements that are not words and map to their indices in elementQuote
            var wordIndices = elementQuote
                .map(function (element, index) { return { element: element, index: index }; })
                .filter(function (item) {
                    return typeof item.element === 'string' && item.element.trim() !== '' && !containsSpecialCharacters(item.element);
                })
                .map(function (item) { return item.index; });

            // Calculate the number of words to remove based on the number of words
            let wordsRemoved = Math.round(wordIndices.length * (intensity / 100));

            if (intensity < 10) {
                wordsRemoved = Math.ceil(wordIndices.length * (intensity / 100));
            } else if (intensity < 100) {
                wordsRemoved = Math.floor(wordIndices.length * (intensity / 100));
            }
            
            if (wordsRemoved === 0) {
                wordsRemoved = 1;
            }

            // console.log("Removing: " + wordsRemoved + " words" + " from " + wordIndices.length + " words");
            for (var j = 0; j < wordsRemoved; j++) {
                var randomIndex = Math.floor(Math.random() * wordIndices.length);
                var random = wordIndices[randomIndex];
                removeWords(random, j, i);
                wordIndices.splice(randomIndex, 1); // Remove the index from wordIndices so it's not selected again
            }


        }
        // console.log("---- Quotes ----")
        // console.log(quotes)


        // Check If Timer is enabled
        if (localStorage.getItem("options") !== null && JSON.parse(localStorage.getItem("options")).timer) {
            // console.log("Timer Enabled")
            var timer = JSON.parse(localStorage.getItem("options")).timer;
            var timerElement = document.getElementById("timer");

            timerElement.classList.add("timerStyle");

            timerElement.textContent = "⏲️ Timer: " + timer + "s";
            var interval = setInterval(() => {
                if (submitted) {
                    clearInterval(interval);
                    return;
                }

                timer--;
                timerElement.textContent = "⏲️ Timer: " + timer + "s";
                if (timer === 0) {
                    clearInterval(interval);
                    forcedSubmit = true;
                    submitButton.click();
                    timerElement.textContent = "⏲️ Timer: Expired";

                }
            }, 1000);
        }
    }
    else {
        var box = document.getElementsByClassName("border-box")[0]
        box.innerHTML = "<a href='./index.html' class='backButton'>&#8592; Go Back</a> <h1 style='padding-top:20px'>Something Went Wrong...</h1><p>Please go back and make sure you submit your quotes.</p>"
    }

})();