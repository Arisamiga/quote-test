(function () {

var intensity = document.getElementById("intensityRange")
var intensityOutput = document.getElementById("intensityValue")
intensityOutput.innerHTML = intensity.value;

// Set the value of the range to the value stored in the local storage
if (localStorage.getItem("options") !== null) {
    intensity.value = JSON.parse(localStorage.getItem("options")).intensity;
    intensityOutput.innerHTML = JSON.parse(localStorage.getItem("options")).intensity;
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
})();