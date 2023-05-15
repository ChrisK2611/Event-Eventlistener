const button = document.getElementById("clickMe");

let Anzahl = 0;

let increaseCounter = () => {
  Anzahl += 1;
  button.innerHTML = "Click me: " + Anzahl;
}

button.addEventListener("click", increaseCounter);





