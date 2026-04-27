const formules = {
  starter: { nom: "Starter", prix: 2900, plafond: "45 000 FCFA / an" },
  plus: { nom: "Plus", prix: 5900, plafond: "120 000 FCFA / an" },
  elite: { nom: "Elite", prix: 9900, plafond: "250 000 FCFA / an" }
};

function formatPrix(nombre) {
  return `${nombre.toLocaleString("fr-FR")} FCFA`;
}

function preloadFormule() {
  const cible = document.querySelector("[data-formule]");
  if (!cible) return;

  const params = new URLSearchParams(window.location.search);
  const formule = params.get("formule") || "plus";
  const details = formules[formule] || formules.plus;

  cible.textContent = `${details.nom} — ${formatPrix(details.prix)} / mois`;

  const montant = document.querySelector("[data-montant]");
  if (montant) montant.textContent = formatPrix(details.prix);
}

function bindInscriptionForm() {
  const form = document.querySelector("#form-inscription");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const formule = data.get("formule") || "plus";
    window.location.href = `paiement.html?formule=${encodeURIComponent(formule)}`;
  });
}

function bindPaiementForm() {
  const form = document.querySelector("#form-paiement");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "confirmation.html";
  });
}

function bindConnexion() {
  const form = document.querySelector("#form-connexion");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "dashboard-client.html";
  });
}

preloadFormule();
bindInscriptionForm();
bindPaiementForm();
bindConnexion();
