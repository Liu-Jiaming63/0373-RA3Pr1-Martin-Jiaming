// Aqui guarda el codi secret i el nombre d'intents
let secret = generar();
let intents = 0;
// Aqui genera un array de 4 números aleatoris entre 0 i 9
function generar() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
}
// Aqui pistes les marca amb una x, perque esta incorrecta, amb un 1 perque esta en la posicio correcta i amb un Ø perque esta pero en la posicio incorrecta. usatsecret marca les posicions que s'han utlitazat.
function validar(intent, secret) {
  let pistes = Array(4).fill('×');
  let usatSecret = Array(4).fill(false);

  // Aqui fariem la el primer intent i si coincideix algun numero i posicio, el marquem amb un 1 i el marquem com a usat. El intent es perque si el numero no coincideix, que ens marqui de que el numero ja estigui utilitzat i no repetir-nos.
  for (let i = 0; i < 4; i++) {
    if (intent[i] === secret[i]) {
      pistes[i] = '1';
      usatSecret[i] = true;
      intent[i] = null;
    }
  }

  // La segona pasada es perque si el numero esta pero en la posicio incorrecta, el marquem amb un Ø i el marquem com a usat. El intent es perque si el numero no coincideix, que ens marqui de que el numero ja estigui utilitzat i no repetir-nos.
  for (let i = 0; i < 4; i++) {
    if (intent[i] !== null) {
      let j = secret.findIndex((n, idx) => n === intent[i] && !usatSecret[idx]);
      if (j !== -1) {
        pistes[i] = 'Ø';
        usatSecret[j] = true;
      }
    }
  }

  return pistes;
}

// El primer let llegeix el valor de l'input. El primer if ens obliga de que sigui 4 numeros.
function provar() {
  let val = document.getElementById("input").value;

  if (val.length !== 4) return alert("4 números!");

  let intent = val.split('').map(Number);
  let pistes = validar([...intent], [...secret]);

  intents++;

  document.getElementById("out").innerHTML +=
    val + " → " + pistes.join(" ") + "<br>";

  // 🔹 Final
  if (pistes.every(p => p === '1')) {
    alert("Guanyat!");
    reiniciar();
  } else if (intents >= 5) {
    alert("Perdut! Era: " + secret.join(''));
    reiniciar();
  }
}

function reiniciar() {
  secret = generar();
  intents = 0;
  document.getElementById("out").innerHTML = "";
}