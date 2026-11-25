let outputText = document.getElementById("leeftijd");
let geboortejaar = prompt("In welk jaar ben je geboren?");
let leeftijd = 2026 - geboortejaar;
outputText.innerHTML = "Hallo, je bent ongeveer " + leeftijd + " jaar oud!";