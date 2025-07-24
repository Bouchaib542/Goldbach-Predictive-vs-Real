function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n || n === 3n) return true;
  if (n % 2n === 0n || n % 3n === 0n) return false;
  const sqrtN = BigInt(Math.floor(Math.sqrt(Number(n))));
  for (let i = 5n; i <= sqrtN; i += 6n) {
    if (n % i === 0n || n % (i + 2n) === 0n) return false;
  }
  return true;
}

function calculer() {
  const input = document.getElementById("inputE");
  const resPred = document.getElementById("resultatPred");
  const resVerif = document.getElementById("resultatVerif");
  const valeur = input.value.trim();

  if (!valeur || isNaN(valeur)) {
    resPred.innerText = "Veuillez entrer un nombre pair valide.";
    resVerif.innerText = "";
    return;
  }

  const E = BigInt(valeur);
  if (E < 4n || E % 2n !== 0n) {
    resPred.innerText = "E doit être un nombre pair supérieur ou égal à 4.";
    resVerif.innerText = "";
    return;
  }

  // Formule prédictive : δ(E) = sqrt(E) * (log log E) / log E
  const ln = x => Math.log(Number(x));
  const sqrtE = BigInt(Math.floor(Math.sqrt(Number(E))));
  const logE = ln(E);
  const loglogE = Math.log(logE);
  const delta = BigInt(Math.round(Number(sqrtE) * (loglogE / logE)));

  const p = E / 2n - delta;
  const q = E / 2n + delta;

  const estPPrime = isPrime(p);
  const estQPrime = isPrime(q);

  resPred.innerHTML = `
    <h3>Formule Prédictive</h3>
    <p>E = ${E.toString()}</p>
    <p>p = ${p.toString()} (${estPPrime ? "✔️ premier" : "❌"})</p>
    <p>q = ${q.toString()} (${estQPrime ? "✔️ premier" : "❌"})</p>
    <p>p + q = ${p + q === E ? "✓" : "✗"} (${(p + q).toString()})</p>
  `;

  // Si déjà premiers, pas besoin de chercher
  if (estPPrime && estQPrime) {
    resVerif.innerHTML = `
      <h3>Premiers proches</h3>
      <p>Déjà exacts : p et q sont premiers.</p>
    `;
    return;
  }

  // Recherche des vraies paires (p′, q′) proches
  const maxOffset = 1000n;
  let found = false;
  for (let offset = 0n; offset <= maxOffset; offset++) {
    let p1 = p - offset;
    let q1 = E - p1;
    if (isPrime(p1) && isPrime(q1)) {
      resVerif.innerHTML = `
        <h3>Premiers proches (p′, q′)</h3>
        <p>p′ = ${p1.toString()}</p>
        <p>q′ = ${q1.toString()}</p>
        <p>p′ + q′ = ${p1 + q1 === E ? "✓" : "✗"} (${(p1 + q1).toString()})</p>
      `;
      found = true;
      break;
    }

    let p2 = p + offset;
    let q2 = E - p2;
    if (isPrime(p2) && isPrime(q2)) {
      resVerif.innerHTML = `
        <h3>Premiers proches (p′, q′)</h3>
        <p>p′ = ${p2.toString()}</p>
        <p>q′ = ${q2.toString()}</p>
        <p>p′ + q′ = ${p2 + q2 === E ? "✓" : "✗"} (${(p2 + q2).toString()})</p>
      `;
      found = true;
      break;
    }
  }

  if (!found) {
    resVerif.innerHTML = `<p><em>Aucune paire première trouvée à proximité immédiate.</em></p>`;
  }
}
