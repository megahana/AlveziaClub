/* ALVEZIA — Women's Club Annecy · script du site */

/* Questionnaire : transmet la provenance de la visite à Tally.
   Ex. alvezia-club.fr/?source=insta-bio  →  tally.so/r/GxWbEo?source=insta-bio
   Sans paramètre, la source envoyée est « site ». */
(function () {
  const source = new URLSearchParams(location.search).get("source");
  const lien = document.getElementById("lien-questionnaire");
  if (lien && source) {
    const url = new URL(lien.href);
    url.searchParams.set("source", source);
    lien.href = url.toString();
  }
})();

/* Bouton « Copier » de l'adresse e-mail */
(function () {
  const btn = document.getElementById("copier");
  const email = document.getElementById("email");
  if (!btn || !email) return;
  function selectionner() {
    const r = document.createRange();
    r.selectNodeContents(email);
    const sel = getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
  }
  btn.addEventListener("click", function () {
    const fini = function () {
      btn.textContent = "Copié";
      setTimeout(function () { btn.textContent = "Copier"; }, 1800);
    };
    try {
      navigator.clipboard.writeText(email.textContent).then(fini, selectionner);
    } catch (e) {
      selectionner();
    }
  });
})();
