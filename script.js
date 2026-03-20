// Aqui guarda el codi secret i el nombre d'intents
let secret = generar();

// Aqui genera un array de 4 números aleatoris entre 0 i 9
function generar() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
}

// Aqui pistes les marca amb una x, perque esta incorrecta, amb un 1 perque esta en la posicio correcta i amb un Ø perque esta pero en la posicio incorrecta. usatsecret marca les posicions que s'han utlitazat.
function validateAttempt(intent) {
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

function isWinningAttempt(pistes) {
  return pistes.every(p => p === '1');
}

function getSecretCode() {
  return secret;
}