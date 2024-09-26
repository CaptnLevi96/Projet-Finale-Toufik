// Cette fonction  gére le processus de checkout
function processCheckout() {
  document.getElementById("panier-page").style.display = "none";
  panier = [];
  mettreAJourBadgePanier();
  currentFrame("accueil");
  setTimeout(afficherMessageRemerciement, 100);

  // Vider le panier
  panier = [];
  mettreAJourBadgePanier();

  // Rediriger vers la page d'accueil
  currentFrame("accueil");

  // Afficher un message de confirmation
  alert(
    "Merci pour votre achat ! Vous allez être redirigé vers la page d'accueil."
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", processCheckout);
  }
});

// Fonction pour afficher le panier
function afficherPanier() {
  const panierPage = document.getElementById("panier-page");
  const panierItems = document.getElementById("panier-items");
  const panierTotal = document.getElementById("panier-total");
  const panierTPS = document.getElementById("panier-tps");
  const panierTVQ = document.getElementById("panier-tvq");
  const panierAPayer = document.getElementById("panier-a-payer");

  const checkoutBtn = document.getElementById("checkout-btn");

  if (panier.length === 0) {
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = "0.5";
    checkoutBtn.style.cursor = "not-allowed";
  } else {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = "1";
    checkoutBtn.style.cursor = "pointer";
  }

  // Vider le contenu actuel du panier
  panierItems.innerHTML = "";

  // Calculer le total
  let total = 0;
  panier.forEach((item) => {
    const sousTotal = item.quantite * item.prix;
    total += sousTotal;

    // Ajouter l'article au panier
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${item.nom}</td>
            <td>${item.quantite}</td>
            <td>$${item.prix.toFixed(2)}</td>
            <td>$${sousTotal.toFixed(2)}</td>
        `;
    panierItems.appendChild(tr);
  });

  // Calculer les taxes et le total à payer
  const tps = total * 0.05;
  const tvq = total * 0.09975;
  const aPayer = total + tps + tvq;

  // Mettre à jour les totaux
  panierTotal.textContent = `$${total.toFixed(2)}`;
  panierTPS.textContent = `$${tps.toFixed(2)}`;
  panierTVQ.textContent = `$${tvq.toFixed(2)}`;
  panierAPayer.textContent = `$${aPayer.toFixed(2)}`;

  // Afficher le panier
  panierPage.style.display = "flex";
}

// Ajouter les écouteurs d'événements une fois que le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  const panierBtn = document.getElementById("panier");
  const panierPage = document.getElementById("panier-page");
  const closePanierBtn = document.getElementById("close-panier");

  // Ouvrir le panier
  panierBtn.addEventListener("click", (e) => {
    e.preventDefault();
    afficherPanier();
  });

  // Fermer le panier
  closePanierBtn.addEventListener("click", () => {
    panierPage.style.display = "none";
  });

  // Fermer le panier en cliquant en dehors
  panierPage.addEventListener("click", (e) => {
    if (e.target === panierPage) {
      panierPage.style.display = "none";
    }
  });
});

// Fonction pour gérer le processus de checkout
// Fonction pour gérer le processus de checkout
function processCheckout() {
  // Fermer la page du panier
  document.getElementById("panier-page").style.display = "none";

  // Vider le panier
  panier = [];
  mettreAJourBadgePanier();

  // Rediriger vers la page d'accueil
  currentFrame("accueil");

  // Afficher le message de remerciement sur la page d'accueil
  afficherMessageRemerciement();
}

// Fonction pour afficher le message de remerciement sur la page d'accueil
function afficherMessageRemerciement() {
  const message = document.createElement("div");
  message.id = "checkout-message";
  message.innerHTML = /*html*/ `
        <div class="message-content">
            <button id="close-message" style="float: right; background: none; border: none; font-size: 20px; cursor: pointer;">&times;</button>
            <h2 data-i18n="modals.basket.thanks"></h2>
            <p data-i18n="modals.basket.thanks-message"></p>
        </div>
    `;
  message.style.cssText = `
        position: fixed;
        top: 180px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #4CAF50;
        color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        z-index: 9999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
  document.body.appendChild(message);

  // Ajouter un gestionnaire d'événements pour le bouton de fermeture
  document.getElementById("close-message").addEventListener("click", () => {
    document.body.removeChild(message);
  });

  // Supprimer le message après 5 secondes si l'utilisateur ne l'a pas fermé
  setTimeout(() => {
    if (document.body.contains(message)) {
      document.body.removeChild(message);
    }
  }, 5000);

  _i18N.hydrateHtml();
}

// Ajouter l'écouteur d'événements pour le bouton de checkout
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", processCheckout);
  }
});

let panier = [];
