(function () {

var intensity = document.getElementById("intensityRange")
var intensityOutput = document.getElementById("intensityValue")
intensityOutput.innerHTML = intensity.value;

intensity.oninput = function () {
    intensityOutput.innerHTML = this.value;
    localStorage.setItem("intensity", this.value);
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