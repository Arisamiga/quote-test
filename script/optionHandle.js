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
        return `Timer Enabled: ${timeMinutes} ${minutesText} and ${timeSeconds} ${secondsText}`;
    }
    else {
        return `Timer Enabled: ${timeSeconds} ${secondsText}`;
    }


}

var intensity = document.getElementById("intensityRange")
var intensityOutput = document.getElementById("intensityValue")
intensityOutput.innerHTML = intensity.value;

// Set the value of the range to the value stored in the local storage
if (localStorage.getItem("options") !== null) {
    intensity.value = JSON.parse(localStorage.getItem("options")).intensity;
    intensityOutput.innerHTML = JSON.parse(localStorage.getItem("options")).intensity;

    if (JSON.parse(localStorage.getItem("options")).timer !== undefined) {
        const optionField = document.getElementsByClassName("optionsField")[0];

        const timerText = document.createElement("div")
        timerText.classList.add("timerText");

        const num = JSON.parse(localStorage.getItem("options")).timer

        timerText.innerHTML = prepareTimerText(num);
        
        optionField.appendChild(timerText);

        document.getElementById("timerBtn1").innerHTML = "Edit Timer";
    }
}

intensity.oninput = function () {
    intensityOutput.innerHTML = this.value;
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

    document.getElementById("popupText").appendChild(input);

    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    document.getElementById("popupText").appendChild(buttonContainer);

    // Add +1 -1 buttons
    var plus1 = document.createElement("button");
    plus1.innerHTML = "+1";
    plus1.classList.add("plus1");
    buttonContainer.appendChild(plus1);

    var minus1 = document.createElement("button");
    minus1.innerHTML = "-1";
    minus1.classList.add("minus1");
    buttonContainer.appendChild(minus1);

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

        const timerText = document.createElement("div")
        timerText.classList.add("timerText");


        timerText.innerHTML = prepareTimerText(num);

        optionField.appendChild(timerText);

        let newOptions = JSON.parse(localStorage.getItem("options")) ?? {};
        newOptions.timer = num;

        localStorage.setItem("options", JSON.stringify(newOptions));
        document.getElementById("timerBtn1").innerHTML = "Edit Timer";
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

        document.getElementById("timerBtn1").innerHTML = "Add Timer";
    });

})

})();