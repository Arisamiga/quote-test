(function () {

function createElement(type, properties, ...children) {
    const element = document.createElement(type);
    Object.assign(element, properties);
    element.append(...children);
    return element;
}

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
        else if (buttons === "timerSettings") {
            button1.style.display = "block";
            button1.innerHTML = "Enable";

            button1.addEventListener("click", () => {
                resolve(true);
                closePopup();
            })

            button2.style.display = "block";
            button2.innerHTML = "Disable";
            button2.addEventListener("click", () => {
                resolve(false);
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
        else if (type === "timer") {
            title.innerHTML = "⏲️ Timer";
            title.style.color = "#ffffff";
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

function prepareTimerText(seconds) {
    // Turn num to minutes if it's greater than 60
    var timeMinutes = Math.floor(seconds / 60);
    var timeSeconds = seconds % 60;

    var minutesText = timeMinutes === 1 ? "minute" : "minutes";
    var secondsText = timeSeconds === 1 ? "second" : "seconds";

    if (seconds >= 60) {
        return `⏲️ Timer Enabled: ${timeMinutes} ${minutesText} and ${timeSeconds} ${secondsText}`;
    }
    else {
        return `⏲️ Timer Enabled: ${timeSeconds} ${secondsText}`;
    }


}

var intensity = document.getElementById("intensityRange")
var intensityOutput = document.getElementById("intensityValue")
intensityOutput.textContent = intensity.value;

// Set the value of the range to the value stored in the local storage
if (localStorage.getItem("options") !== null) {
    if (JSON.parse(localStorage.getItem("options")).intensity === undefined) {
        let newOptions = JSON.parse(localStorage.getItem("options")) ?? {};
        newOptions.intensity = 50;
        localStorage.setItem("options", JSON.stringify(newOptions));
    }
    
    intensity.value = JSON.parse(localStorage.getItem("options")).intensity;
    intensityOutput.textContent = JSON.parse(localStorage.getItem("options")).intensity;

    if (JSON.parse(localStorage.getItem("options")).timer !== undefined) {
        const optionField = document.getElementsByClassName("optionsField")[0];

        const num = JSON.parse(localStorage.getItem("options")).timer

        const timerText = createElement("div", { innerHTML: prepareTimerText(num), classList: ["timerText"]})
        
        optionField.appendChild(timerText);

        document.getElementById("timerBtn1").innerHTML = "Edit Timer";
    }

    if (JSON.parse(localStorage.getItem("options")).dontShow !== undefined) {
        document.getElementById("status").checked = !JSON.parse(localStorage.getItem("options")).dontShow;
    }
}

intensity.oninput = function () {
    intensityOutput.textContent = this.value;
    let newOptions = JSON.parse(localStorage.getItem("options")) ?? {};

    newOptions.intensity = this.value;

    localStorage.setItem("options", JSON.stringify(newOptions));
    // console.log(this.value);
}

var optionText = document.getElementsByClassName("optionText")[0]
var optionField = document.getElementsByClassName("optionsField")[0]

optionText.addEventListener("click", function (element) {
    // console.log("Click")
    if (element.target.innerHTML.includes("▼")) {
        element.target.innerHTML = "⚙️ Options ▲";
        let estimatedHeight = optionField.scrollHeight;
        optionField.style.maxHeight = estimatedHeight + "px";
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

var status = document.getElementById("status");
status.addEventListener("change", function () {
    let newOptions = JSON.parse(localStorage.getItem("options")) ?? {};

    newOptions.dontShow = !status.checked;

    localStorage.setItem("options", JSON.stringify(newOptions));
});

const timerBtn1 = document.getElementById("timerBtn1")

timerBtn1.addEventListener("click", () => {
    createPopup("timerSettings", "timer", "Select your time (In seconds): <br>")

    var input = document.createElement("input");
    input.type = "number";
    input.id = "timerInput";
    input.min = "1"; // restrict input to positive numbers

    if (localStorage.getItem("options") !== null && JSON.parse(localStorage.getItem("options")).timer !== undefined){
        input.value = JSON.parse(localStorage.getItem("options")).timer;
        input.placeholder = JSON.parse(localStorage.getItem("options")).timer;
    }
    else {
        input.value = 1;
        input.placeholder = "1";
    }


    input.classList.add("timerInput");

    input.addEventListener("input", function (e) {
        if (parseInt(e.target.value) < 1) {
            input.value = 1;
        }
    });

    document.getElementById("popupText").appendChild(input);

    var buttonContainer = createElement("div", { classList: ["button-container"] });
    document.getElementById("popupText").appendChild(buttonContainer);

    var minus1 = createElement("button", { innerHTML: "-1", classList: ["minus1"] });
    buttonContainer.appendChild(minus1);

    // Add +1 -1 buttons
    var plus1 = createElement("button", { innerHTML: "+1", classList: ["plus1"] });
    buttonContainer.appendChild(plus1);

    // Add event listeners to the buttons
    plus1.addEventListener("click", () => {
        var num = parseInt(input.value)

        if (isNaN(num) || num < 1) {
            input.value = 1;
            num = 1;
        }

        input.value = num + 1;
    });

    minus1.addEventListener("click", () => {
        var num = parseInt(input.value)

        if (isNaN(num) || num < 2) {
            input.value = 2;
            num = 2;
        }

        input.value = num - 1;
    });

    // Wait till the user clicks OK
    var timerInput = document.getElementById("timerInput");
    var button1 = document.getElementById("button1");
    button1.addEventListener("click", () => {
        var num = parseInt(timerInput.value);

        const optionField = document.getElementsByClassName("optionsField")[0];

        if (document.getElementsByClassName("timerText").length > 0) {
            optionField.removeChild(document.getElementsByClassName("timerText")[0]);
        }

        const timerText = createElement("div", { innerHTML: prepareTimerText(num), classList: ["timerText"] });

        optionField.appendChild(timerText);

        let newOptions = JSON.parse(localStorage.getItem("options")) ?? {};
        newOptions.timer = num;

        localStorage.setItem("options", JSON.stringify(newOptions));
        document.getElementById("timerBtn1").innerHTML = "Edit Timer";

        // Recalcualte height
        optionField.style.maxHeight = optionField.scrollHeight + "px";
    });

    var button2 = document.getElementById("button2");

    button2.addEventListener("click", () => {
        const optionField = document.getElementsByClassName("optionsField")[0];

        if (document.getElementsByClassName("timerText").length > 0) {
            optionField.removeChild(document.getElementsByClassName("timerText")[0]);
        }

        // Remove timer from local storage options
        let newOptions = JSON.parse(localStorage.getItem("options")) ?? {};
        delete newOptions.timer;

        localStorage.setItem("options", JSON.stringify(newOptions));

        document.getElementById("timerBtn1").innerHTML = "Enable Timer";
    });

})

})();