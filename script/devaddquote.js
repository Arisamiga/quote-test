
(function () {

    Object.assign(HTMLCollection.prototype, {
        forEach(event) {
            Array.prototype.forEach.call(this, (element) => event(element));
        },
    });

    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    function setparsedQuotes() {
        var quote = document.getElementsByClassName("quote");

        var quoteList = [];

        quote.forEach((element) => {
            if (element.value.trim().length > 0)
            {
                quoteList.push(element.value);
            }
        });

        quoteList.reverse();

        var parse = document.getElementById("quoteListParsed");
        var parse64 = document.getElementById("quoteListParsedb64");

        parse.innerHTML = JSON.stringify(quoteList);

        parse64.innerHTML = btoa(JSON.stringify(quoteList));

        autoResize.call(parse);
        autoResize.call(parse64);
    }

    function addQuoteElement(quoteList, quote) {
        var container = document.createElement("div");
        container.setAttribute("class", "quoteContainer");
        quoteList.appendChild(container);

        var template = document.createElement("textarea");
        template.setAttribute("class", "quote devquote");
        template.innerHTML = quote;
        container.appendChild(template);

        var removeButton = document.createElement("button");
        removeButton.setAttribute("class", "removeQuoteButton");
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener("click", function () {
            container.remove();
            setparsedQuotes();
        });
        
        container.appendChild(removeButton);


        template.addEventListener("input", function () {
            setparsedQuotes()
        });
    }

    document.getElementById("quoteInput").addEventListener("input", function (event) {
        setparsedQuotes()

    });

    document.getElementsByClassName("backButton")[0].addEventListener("click", function () {
        window.location.href = "index.html";
    });

    document.getElementById("addQuote").addEventListener("click", function () {
        var quoteList = document.getElementById("quoteList");
        var quoteInput = document.getElementById("quoteInput");
        var quote = quoteInput.value;
        if (quote.trim().length > 0) {
            addQuoteElement(quoteList, quote);
            quoteInput.value = "";
        }
    });

})();