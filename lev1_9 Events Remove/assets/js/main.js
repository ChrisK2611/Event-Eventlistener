const listButton = document.getElementById("button");
let select = document.getElementById("farbeAuswahlen");

listButton.addEventListener("click", () => {
    event.preventDefault();
    select.remove(select.selectedIndex);
});
