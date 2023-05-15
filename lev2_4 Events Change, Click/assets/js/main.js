const chooseColor = document.getElementById("farbeAuswahlen");
const changeButton = document.getElementById("button");
const body = document.querySelector("body");

changeButton.addEventListener("click", () => {
    event.preventDefault();
    let color = chooseColor.value;
    let colorChange = chooseColor.options[chooseColor.selectedIndex];
    body.style.backgroundColor = color.replace(" ", "");
    colorChange.style.backgroundColor = color.replace(" ", "");
});

   


  