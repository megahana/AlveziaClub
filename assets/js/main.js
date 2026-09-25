/* ALVEZIA — Women's Club Annecy · script du site */

/* ——— À RENSEIGNER : identifiant du formulaire Tally (ex. "w8Ab3D") ———
   Tant qu'il est vide, la page affiche l'aperçu "Le questionnaire ouvre très bientôt". */
const TALLY_ID = "GxWbEo";

/* ——— Liens des réseaux ———
   Mettre l'adresse complète quand le compte existe.
   Laisser "" : le lien est grisé avec la mention « bientôt ». */
const LIENS = {
  instagram: "",   // ex. "https://www.instagram.com/alvezia.club/"
  tiktok: "",      // ex. "https://www.tiktok.com/@alvezia.club"
  facebook: ""     // ex. "https://www.facebook.com/alvezia.club"
};
document.querySelectorAll("[data-reseau]").forEach(function (a) {
  const url = LIENS[a.dataset.reseau];
  if (url) { a.href = url; return; }
  if (a.classList.contains("btn")) { a.remove(); return; }
  const s = document.createElement("span");
  s.className = "bientot"; s.textContent = a.textContent;
  a.replaceWith(s);
});
/* MODE "embed" = questionnaire intégré dans la page (site en ligne).
   MODE "lien"  = bouton qui ouvre le questionnaire dans un nouvel onglet. */
const MODE = "embed";

(function () {
  if (TALLY_ID && MODE === "lien") {
    const source = new URLSearchParams(location.search).get("source") || "site";
    const lien = "https://tally.so/r/" + TALLY_ID + "?source=" + encodeURIComponent(source);
    document.querySelector("#attente h3").textContent = "Le questionnaire est ouvert.";
    const b = document.querySelector("#attente .btn");
    b.href = lien; b.innerHTML = 'Répondre au questionnaire <span aria-hidden="true">↗</span>';
  } else if (TALLY_ID) {
    const params = new URLSearchParams(location.search);
    const source = params.get("source") || "site";
    const box = document.getElementById("formulaire");
    const url = "https://tally.so/embed/" + TALLY_ID +
      "?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&source=" + encodeURIComponent(source);
    /* src + data-tally-src : le formulaire s'affiche même si le script Tally (hauteur auto) ne charge pas */
    box.innerHTML = '<iframe src="' + url + '" data-tally-src="' + url +
      '" width="100%" height="600" title="Questionnaire ALVEZIA"></iframe>' +
      '<p class="mention" style="margin-top:14px">Le questionnaire ne s’affiche pas ? <a href="https://tally.so/r/' + TALLY_ID +
      '?source=' + encodeURIComponent(source) + '" target="_blank" rel="noopener">Ouvrir le questionnaire</a></p>';
    const s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.onload = function () { if (window.Tally) window.Tally.loadEmbeds(); };
    document.body.appendChild(s);
  }
  const btn = document.getElementById("copier");
  btn.addEventListener("click", function () {
    const email = document.getElementById("email").textContent;
    const fini = function () { btn.textContent = "Copié"; setTimeout(function () { btn.textContent = "Copier"; }, 1800); };
    try {
      navigator.clipboard.writeText(email).then(fini, function () { selectionner(); });
    } catch (e) { selectionner(); }
    function selectionner() {
      const r = document.createRange(); r.selectNodeContents(document.getElementById("email"));
      const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
    }
  });
})();
