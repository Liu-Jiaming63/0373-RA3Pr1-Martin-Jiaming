const terminal = document.getElementById("terminal");
const roundsLeft = document.getElementById("roundsLeft");
const button = document.getElementById("checkButton");
const selects = document.querySelectorAll(".digit-select");
//amb aquesta comanda busquem els 4 espais de digits

const MAX_INTENTS = 5;
let rondes = MAX_INTENTS;

function logTerminal(misatge) {
  terminal.innerHTML += "> " + misatge + "<br>";
}

function actualizarRondes() {
  roundsLeft.textContent = rondes;
}

selects.forEach(select => {
  for (let i = 0; i <= 9; i++) {
    //aixo crea els numeros que utilitzarem en el desplegable
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }
});

button.addEventListener("click", () => {

  //aquesta funcio es per a que el contador no passi per sota del 0 ya que es posa negatiu en les proves
  if (rondes <= 0) {
    logTerminal("No queden més intents");
    return;
  }

  const intento = Array.from(selects).map(select => Number(select.value));
  // guardem els valors  en la array, per a mes endevant fer que si els valor guardats no coincideixin es restin intents

  logTerminal("Intent: " + intento.join(", "));
  // mostrem l'intent a la terminal

  rondes--;
  actualizarRondes();

  if (typeof validateAttempt === "function") {
    const pistes = validateAttempt(intento);
    logTerminal("Pistes: " + pistes.join(", "));

    if (typeof isWinningAttempt === "function" && isWinningAttempt(pistes)) {
      logTerminal("Has guanyat!");
      button.disabled = true;
      return;
    }
  }

  if (rondes === 0 && typeof getSecretCode === "function") {
    logTerminal("Has perdut! El codi era: " + getSecretCode().join(""));
    button.disabled = true;
  }
});

// missatges inicials
logTerminal("joc iniciat");
logTerminal("Introdueix un codi de 4 dígits");
actualizarRondes();