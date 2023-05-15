const mySelect = document.getElementById("my-select");

let changeMe = () => {
    let letsChange = document.getElementById("my-select");
    let changedOption = letsChange.value;

    let resulText = document.getElementById("result"); 
    resulText.innerHTML = "Sie haben gewählt " + changedOption;
}

mySelect.addEventListener("change", changeMe);