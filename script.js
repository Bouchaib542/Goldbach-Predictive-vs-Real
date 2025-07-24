function estPremier(n) {
  if (n < 2n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  const sqrtN = BigInt(Math.floor(Math.sqrt(Number(n))));
  for (let i = 3n; i <= sqrtN; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function calculer() {
  const input = document.getElementById("inputE");
  const resultPred = document.getElementById("resultatPred");
  const resultVerif = document.getElementById("resultatVerif");
  const valeur = input.value.trim();

  resultPred.innerHTML = "";
  resultVerif.innerHTML = "";

  if (!valeur || isNaN(valeur)) {
    resultPred.innerText = "Veuillez entrer un nombre pair valide.";
    return;
  }

  const E = BigInt(valeur);
  if (E < 4n || E % 2n !== 0n) {
    resultPred.innerText = "E doit être un nombre pair supérieur ou égal à 4.";
    return;
  }

  // Formule prédictive
  const ln = x => Math.log(Number(x));
  const sqrtE = Math.sqrt(Number(E));
  const logE = Math.log(Number(E));
  const loglogE = Math.log(logE);
  const delta = Math.round(sqrtE * (loglogE / logE));

  const p = E / 2n - BigInt(delta);
  const q = E / 2n + BigInt(delta);

  resultPred.innerHTML = `
    <h3>Résultat prédictif :</h3>
    <p>E = ${E.toString()}</p>
    <p>p = ${p.toString()}</p>
    <p>q = ${q.toString()}</p>
    <p>p + q = ${(p + q === E) ? "✓" : "✗"} (${(p + q).toString()})</p>
    <p><em>Note : Ces valeurs sont issues de la formule prédictive.</em></p>
  `;

  // Vérification de la primalité
  const estP = estPremier(p);
  const estQ = estPremier(q);

  resultVerif.innerHTML = `
    <h3>Vérification des nombres premiers :</h3>
    <p>p est ${estP ? "<strong>premier</strong>" : "<strong>non premier</strong>"}</p>
    <p>q est ${estQ ? "<strong>premier</strong>" : "<strong>non premier</strong>"}</p>
  `;
}
