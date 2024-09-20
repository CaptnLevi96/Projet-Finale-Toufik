const produits = {
    arbres: [
        { 
            id: "arbres-1",
            nom: "Bonsai 'Money Tree'", 
            description: "Cet arbre ne peut pas donner d'argent", 
            prix: "Prix: 15$", 
            image: "Images/43ziiq0lww471.jpg",
            image2: "Images/bonsai2.jpg",
            image3: "Images/bonsai3.jpg", 
            wikiLink: "https://en.wikipedia.org/wiki/Crassula_ovata",
            itemsRestants: 3
        },
        { 
            id: "arbres-2",
            nom: "Ficus lyrata arbustif", 
            description: "Un arbre d'intérieur populaire avec de grandes feuilles en forme de violon.", 
            prix: "Prix: 50$", 
            image: "Images/c356ca1a-36b7-5a42-8ee9-f6cb3b85af14.jpg", 
            image2: "Images/ficus2.jpg",
            image3: "Images/ficus3.jpg", 
            wikiLink: "https://en.wikipedia.org/wiki/Ficus_lyrata",
            itemsRestants: 5
        },
        { 
            id: "arbres-3",
            nom: "Marronnier glabre", 
            description: "Un arbre majestueux à feuilles composées et à fleurs blanches.", 
            prix: "Prix: 10$", 
            image: "Images/MARONNIER-GLABRE.jpg",
            image2: "Images/maron2.jpg",
            image3: "Images/maron3.jpg",  
            wikiLink: "https://fr.wikipedia.org/wiki/Marronnier_glabre",
            itemsRestants: 15
        },
        { 
            id: "arbres-4",
            nom: "Pin parasol", 
            description: "Un pin méditerranéen à la silhouette caractéristique en forme de parasol.", 
            prix: "Prix: 150$", 
            image: "Images/Pinus-pinea-5-scaled-1.jpg",
            image2: "Images/Pin2.jpg",
            image3: "Images/Pin3.jpg",  
            wikiLink: "https://fr.wikipedia.org/wiki/Pin_parasol",
            itemsRestants: 3
        },
        { 
            id: "arbres-5",
            nom: "Bouleau à papier", 
            description: "Un arbre à l'écorce blanche qui se pèle en fines couches.", 
            prix: "Prix: 7$", 
            image: "Images/Bouleau-a-Papier.jpg",
            image2: "Images/Bouleau2.jpg",
            image3: "Images/Bouleau3.jpg",  
            wikiLink: "https://fr.wikipedia.org/wiki/Bouleau_%C3%A0_papier",
            itemsRestants: 20
        },
        { 
            id: "arbres-6",
            nom: "Magnolia", 
            description: "Un arbre aux grandes fleurs parfumées et au feuillage persistant.", 
            prix: "Prix: 110$",
            image: "Images/magnolia-grandiflora-maroc-clorofila-2-1.jpg", 
            image2: "Images/Magnolia2.jpg",
            image3: "Images/Magnolia3.jpg",  
            wikiLink: "https://fr.wikipedia.org/wiki/Magnolia",
            itemsRestants: 7
        }
    ],
    fleurs: [
        { 
            id: "fleurs-1",
            nom: "Haworthia", 
            description: "Une petite plante succulente aux feuilles charnues et pointues.", 
            prix: "Prix: 25$", 
            image: "Images/Haworthia.jpg",
            image2: "Images/Haworthia2.jpg",
            image3: "Images/Haworthia3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Haworthia",
            itemsRestants: 30
        },
        { 
            id: "fleurs-2",
            nom: "Adenium obesum", 
            description: "Une plante succulente aux fleurs spectaculaires et au tronc épais.", 
            prix: "Prix: 30$", 
            image: "Images/Adenium.jpg",
            image2: "Images/Adenium2.jpg",
            image3: "Images/Adenium3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Adenium",
            itemsRestants: 12
        },
        { 
            id: "fleurs-3",
            nom: "Hoya australis 'Lisa'", 
            description: "Une plante grimpante aux feuilles panachées et aux fleurs en étoile.", 
            prix: "Prix: 15$", 
            image: "Images/HoyaAustralisLisa1_1024x1024.jpg",
            image2: "Images/Hoya2.jpg",
            image3: "Images/Hoya3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Hoya_australis",
            itemsRestants: 25
        },
        { 
            id: "fleurs-4",
            nom: "Echinocereus", 
            description: "Un petit cactus aux fleurs roses vif.", 
            prix: "Prix: 20$", 
            image: "Images/Echinocereus.jpg",
            image2: "Images/Echinocereus2.jpg",
            image3: "Images/Echinocereus3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Echinocereus",
            itemsRestants: 18
        },
        { 
            id: "fleurs-5",
            nom: "Xerosicyos", 
            description: "Une plante succulente grimpante aux feuilles rondes.", 
            prix: "Prix: 10$", 
            image: "Images/Xerosicyos.jpg",
            image2: "Images/Xerosicyos2.jpg",
            image3: "Images/Xerosicyos3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Xerosicyos",
            itemsRestants: 8
        },
        { 
            id: "fleurs-6",
            nom: "Jasmine", 
            description: "Une plante grimpante aux fleurs blanches très parfumées.", 
            prix: "Prix: 45$", 
            image: "Images/Jasmine.jpg",
            image2: "Images/Jasmine2.jpg",
            image3: "Images/Jasmine3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Jasmine",
            itemsRestants: 15
        }
    ],
    materiel: [
        { 
            id: "materiel-1",
            nom: "Pots de pépinière", 
            description: "Pots flexibles et durables pour la culture de plantes.", 
            prix: "Prix: 15$", 
            image: "Images/716H+Id3mTL._AC_UF1000,1000_QL80_.jpg",
            image2: "Images/Pot2.jpg",
            image3: "Images/Pot3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Plant_pot",
            itemsRestants: 100
        },
        { 
            id: "materiel-2",
            nom: "Ruban végétal", 
            description: "Ruban biodégradable pour l'attache des plantes.", 
            prix: "Prix: 20$", 
            image: "Images/Ruban.jpg",
            image2: "Images/Ruban2.jpg",
            image3: "Images/Ruban3.jpg",  
            wikiLink: "https://fr.wikipedia.org/wiki/Ruban_adh%C3%A9sif",
            itemsRestants: 50
        },
        { 
            id: "materiel-3",
            nom: "Cisaille à haies", 
            description: "Outil pour tailler et façonner les haies.", 
            prix: "Prix: 40$", 
            image: "Images/99W9152-hedge-shears-u-0006.jpg",
            image2: "Images/cisaille2.jpg",
            image3: "Images/cisaille3.jpg",  
            wikiLink: "https://fr.wikipedia.org/wiki/Cisaille",
            itemsRestants: 20
        },
        { 
            id: "materiel-4",
            nom: "Démarreurs à racines", 
            description: "Plateaux pour faire germer et démarrer vos semis.", 
            prix: "Prix: 40$", 
            image: "Images/AA650-32-cell-starters-set-of-3-f-31.jpg",
            image2: "Images/Haie2.jpg",
            image3: "Images/Haie3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Seed_starting",
            itemsRestants: 40
        },
        { 
            id: "materiel-5",
            nom: "Nettoyeur haute-pression", 
            description: "Appareil pour nettoyer efficacement les surfaces extérieures.", 
            prix: "Prix: 400$", 
            image: "Images/hnhp2470-nettoyeur-haute-pression-electrique-2400-w-170-bar-480-l-h.jpg", 
            image2: "Images/nettoyeur2.jpg",
            image3: "Images/nettoyeur3.jpg",
            wikiLink: "https://en.wikipedia.org/wiki/Pressure_washer",
            itemsRestants: 5
        },
        { 
            id: "materiel-6",
            nom: "Gants de jardinage", 
            description: "Gants protecteurs pour le travail de jardinage.", 
            prix: "Prix: 5$", 
            image: "Images/1698915165dc3a270eeec5476d9a487c228fc13e1d_thumbnail_720x.jpg",
            image2: "Images/Gants2.jpg",
            image3: "Images/Gants3.jpg",  
            wikiLink: "https://en.wikipedia.org/wiki/Gardening_glove",
            itemsRestants: 200
        }
    ]
};



// ProductID va aller le produit a partir de son identifiant (ID) //
// const product = produits[category][index]; accède au produit correspondant en utilisant category et index. //
// Les éléments correspondants commencant avec le nom "modal" sont mis à jour avec les images du produit //

function openModal(productId) {
const modal = document.getElementById("product-modal");
const [category, indexStr] = productId.split('-');
const index = parseInt(indexStr, 10);
const product = produits[category][index];

if (product) {
    document.getElementById('modal-image-1').src = product.image;
    document.getElementById('modal-image-2').src = product.image2 || product.image;
    document.getElementById('modal-image-3').src = product.image3 || product.image;
    document.getElementById('modal-name').textContent = product.nom;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-price').textContent = product.prix;
    document.getElementById('modal-items-restants').textContent = product.itemsRestants;

    
    // Mise à jour de l'input de quantité
    const quantityInput = document.getElementById('modal-quantity');
    quantityInput.max = product.itemsRestants;    // Empeche l'utilisateur de selectionné une quantité supérieur a la quantité d'item restant //
    quantityInput.value = 1; // Réinitialiser à la quantité a 1 à chaque ouverture du modal //



    
    modal.style.display = "flex";  // Loseque le modale est afficher sur la page, il devient alors impossible de "scroll" sur la page.
    disableScroll();
    setupImageNavigator();
    
    // Ajouter un écouteur d'événements pour la quantité
    quantityInput.addEventListener('input', function() {
        limitQuantity(this, product.itemsRestants);
    });
} else {
    console.error("Product information is missing for ID:", productId); // Si les informations du produit sont manquantes, un message d'erreur est affiché dans la console. //
}
}


function limitQuantity(input, max) {
if (input.value > max) {          // Cette condition vérifie si la valeur actuelle dans l'input dépasse le maximum autorisé //
    input.value = max;
}
if (input.value < 1) {            // Cette condition vérifie que "1" reste la valeur inférieur pour tour les modal //
    input.value = 1;
}
}


function closeModalFunction() {                 
const modal = document.getElementById("product-modal");     // Loseque le modale est fermer "product-modal" sur la page, il devient alors possible encore de "scroll" sur la page.
if (modal) {
    modal.style.display = "none";
    enableScroll();
}
}

function ajouterAuPanier(productId, quantite = 1) {  // Cette fonction ajoute un produit au panier ou met à jour sa quantité s'il est déjà présent. //

const [category, index] = productId.split('-');
const product = produits[category][parseInt(index)];

if (product && product.itemsRestants >= quantite) {
    const itemExistant = panier.find(item => item.id === productId);
    if (itemExistant) {
        itemExistant.quantite += quantite;  // Si le produit est déjà dans le panier, elle augmente sa quantité. //
    } else {
        panier.push({
            id: productId,
            nom: product.nom,
            prix: parseFloat(product.prix.replace('Prix: ', '').replace('$', '')), // Sinon, elle ajoute un nouvel élément au panier avec les détails du produit. //
            quantite: quantite
        });
    }
    
    // Mettre à jour le nombre d'items restants
    product.itemsRestants -= quantite;
    
    console.log('Produit ajouté au panier:', product.nom, 'Quantité:', quantite, 'Restants:', product.itemsRestants);
    mettreAJourBadgePanier();
    
    // Si le modal est ouvert, mettre à jour l'affichage
    const modal = document.getElementById("product-modal");
    if (modal.style.display === "flex") {
        document.getElementById('modal-items-restants').textContent = product.itemsRestants;  //Cette ligne assure que les informtions sur le stock restant aussi mis a jour sur les modal pour la quantité //
        document.getElementById('modal-quantity').max = product.itemsRestants;
    } 
    
    // Mettre à jour l'affichage dans la grille de produits
    const productElement = document.getElementById(productId);
    if (productElement) {
        const itemsRestantsElement = productElement.querySelector('.items-restants');
        if (itemsRestantsElement) {
            itemsRestantsElement.textContent = `Items restants: ${product.itemsRestants}`;  // Si il reste encore du stock elle met à jour le nombre d'articles restants, affichage du panier.
        }
    }
} else {
    console.error("Produit non trouvé ou quantité insuffisante:", productId);       // Si le stock est insuffisant, elle affiche une alerte et un message dans la console. //
    alert("Désolé, ce produit n'est plus disponible en quantité suffisante.");
}
}

function mettreAJourBadgePanier() {                                                 // Elle calcule le nombre total d'articles dans le panier (). //            
const badgePanier = document.getElementById('badge-panier');
const totalItems = panier.reduce((total, item) => total + item.quantite, 0);

if (badgePanier) {
    badgePanier.textContent = totalItems;
    badgePanier.style.display = totalItems > 0 ? 'block' : 'none';  // Si le badge a coté du bouton affiche zero, ca visibilité est "none". //
} else {
    const panierBtn = document.getElementById('panier');        // Le badge est stylisé pour apparaître comme un petit cercle avec le nombre d'articles.
    const nouveauBadge = document.createElement('span');
    nouveauBadge.id = 'badge-panier';                           // Style pour le badge quantité // 
    nouveauBadge.textContent = totalItems;
    nouveauBadge.style.cssText = `                                  
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: #283617;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
    `;
    panierBtn.style.position = 'relative';
    panierBtn.appendChild(nouveauBadge);
}
}


function setupImageNavigator() {
const container = document.getElementById('modal-image-container'); // gère la navigation entre les images dans un modal, c'est l'élément qui contient les images du modal. //
const prevButton = document.getElementById('prev-image');            // La fonction sélectionne les éléments DOM nécessaires : le conteneur d'images, les boutons précédent et suivant, et les indicateurs d'image. //
const nextButton = document.getElementById('next-image');
const indicators = document.querySelectorAll('.image-indicator span');
let currentIndex = 0;

function showImage(index) {
    const images = container.querySelectorAll('.modal-image');      // ShowImage active l'image et l'indicateur correspondant à l'index donné. //
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 3) % 3;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 3;
    showImage(currentIndex);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showImage(index);
    });
});
}

function getCategoryFromId(id) {
return id.split('-')[0];
}


function disableScroll() {                                  // Fonction pour désctivé le scroll officiellement définit //                          
    // Enregistrer la position de défilement actuelle
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Empêcher le défilement
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
    
    // Ajouter une classe au body pour des styles supplémentaires si nécessaire
    document.body.classList.add('modal-open');
}

// Fonction pour réactiver le défilement
function enableScroll() {
window.onscroll = null;
document.body.classList.remove('modal-open');
}


document.addEventListener('DOMContentLoaded', () => {           // La fonction crée car pour recrée les carte div a partir de l'array Produit //
 
function creerCarte(categorie, index) {
const produit = produits[categorie][index];
return `
    <div class="carte-item" id="${categorie}-${index}" data-wikilink="${produit.wikiLink}">
        <img src="${produit.image}" alt="${produit.nom}">
        <h3>${produit.nom}</h3>
        <p class="prix">${produit.prix}</p>
    </div>
`;
}

function afficherCartes(categorie, containerId) {                //  La fonction crée car pour afficher les carte div a partir de l'array Produit si le container inner HTML est vide. //
const container = document.getElementById(containerId);
if (container) {
    container.innerHTML = '';
    produits[categorie].forEach((_, index) => {
        container.innerHTML += creerCarte(categorie, index);
    });
}
}

const arbresNextButton = document.getElementById('arbres-next');            // Fonction pour afficher les frames Arbres, Fleurs et Materiel grace a la barre section-bas Verte //
const fleurPreviousButton = document.getElementById('fleur-previous');
const fleurNextButton = document.getElementById('fleur-next');
const materielPreviousButton = document.getElementById('materiel-previous');

if (arbresNextButton) {
    arbresNextButton.addEventListener('click', () => {
        currentFrame('fleurs');
    });
}

if (fleurPreviousButton) {
    fleurPreviousButton.addEventListener('click', () => {
        currentFrame('arbres');
    });
}

if (fleurNextButton) {
    fleurNextButton.addEventListener('click', () => {
        currentFrame('materiel');
    });
}

if (materielPreviousButton) {
    materielPreviousButton.addEventListener('click', () => {
        currentFrame('fleurs');
    });
}



// Afficher les cartes pour chaque catégorie                                // Fonction pour afficher les frames Arbres, Fleurs et Materiel grace barre en haut avec les boutons //
afficherCartes('arbres', 'arbres-grid');
afficherCartes('fleurs', 'fleurs-grid');
afficherCartes('materiel', 'materiel-grid');

function gererBarreRecherche(frame) {
    const barreRecherche = document.querySelector('.bar-de-recherche input'); // Const pour la barre recherche //
    const boutonRecherche = document.getElementById('bouton-rechercher');      // Const pour le bouton rechecher //

    if (frame === 'accueil') {                     // Mettre la barre recherche et le rechercher en disebled au frame "Accueil" //                     
        barreRecherche.disabled = true;
        boutonRecherche.disabled = true;
        barreRecherche.style.opacity = '0.5';
        boutonRecherche.style.opacity = '0.5';
    } else {
        barreRecherche.disabled = false;
        boutonRecherche.disabled = false;
        barreRecherche.style.opacity = '1';
        boutonRecherche.style.opacity = '1';
    }
}

function currentFrame(frame) {                   // La fonction prend un paramètre frame qui représente la section à afficher. //                  
// Masquer toutes les sections
document.getElementById('Accueil').style.display = 'none';          // Elle commence par masquer toutes les sections de la page en mettant leur propriété display à 'none'. //
document.getElementById('accueil-bottom').style.display = 'none';
document.getElementById('Arbres').style.display = 'none';
document.getElementById('Fleurs').style.display = 'none';
document.getElementById('Materiel').style.display = 'none';

// Réinitialiser tous les boutons
const allButtons = document.querySelectorAll('.nav-button');        // Ensuite, elle réinitialise tous les boutons de navigation en les activant et en retirant la classe 'disabled'. //
allButtons.forEach(button => {
    button.disabled = false;
    button.classList.remove('disabled');
});

const panierBtn = document.getElementById('panier');        // Mettre le bouton Panier en disebled au frame "Accueil" // 
if (frame === 'accueil') {
    panierBtn.disabled = true;
    panierBtn.style.opacity = '0.5';
    panierBtn.style.cursor = 'not-allowed';
} else {
    panierBtn.disabled = false;
    panierBtn.style.opacity = '1';
    panierBtn.style.cursor = 'pointer';
}

// Afficher la section sélectionnée et gérer les boutons            // Pour 'arbres', elle affiche la section Arbres et désactive le bouton "précédent". //
if (frame === 'arbres') {
    document.getElementById('Arbres').style.display = 'block';
    document.querySelector('#Arbres .prev-button').disabled = true;
    document.querySelector('#Arbres .prev-button').classList.add('disabled');
} else if (frame === 'fleurs') {
    document.getElementById('Fleurs').style.display = 'block';                      // Pour 'fleur, elle affiche simplement la section 'Arbre' et pour materiel, elle active la section materiel et desactive le bouton "suivant". //
} else if (frame === 'materiel') {
    document.getElementById('Materiel').style.display = 'block';                       
    document.querySelector('#Materiel .next-button').disabled = true;
    document.querySelector('#Materiel .next-button').classList.add('disabled');  // Pour la section accueil, elle affiche la section accueil et sont contenue au complet. //
} else {
    document.getElementById('Accueil').style.display = 'block';
    document.getElementById('accueil-bottom').style.display = 'flex';
}

// Mettre à jour la classe active du menu
const menuLinks = document.querySelectorAll('#MenuPrincipal a');  // La bouton de la section en question est selectionné, la section va s'afficher.
menuLinks.forEach(link => {
    if (link.getAttribute('onclick').includes(frame)) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

gererBarreRecherche(frame);
}

// Initialiser la page d'accueil
currentFrame('accueil');

// Ajouter les event listeners pour les liens du menu
const menuLinks = document.querySelectorAll('#MenuPrincipal a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const frame = e.target.getAttribute('onclick').split("'")[1];
        currentFrame(frame);
    });
});

// Gérer le bouton Contact
const contactButtons = document.querySelectorAll('.bouton-bas1');
const contactPage = document.getElementById('contact-page');
const closeButton = document.getElementById('close-contact');

contactButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        contactPage.style.display = 'flex';
    });
});

if (closeButton) {
    closeButton.addEventListener('click', () => {
        contactPage.style.display = 'none';
    });
}

contactPage.addEventListener('click', (e) => {
    if (e.target === contactPage) {
        contactPage.style.display = 'none';
    }
});

// Gérer le bouton Garantie
const garantieButtons = document.querySelectorAll('.bouton-bas2');      // Const pour le bouton garanti et son style //

function creerPopupGarantie() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    `;
    document.body.appendChild(overlay);

    const popup = document.createElement('div');        // Const pour le bouton garanti et son style en hover //
    popup.id = 'garantie-popup';
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        z-index: 1000;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
    `;
    
    const contenu = document.createElement('div');  // Contenu du modal du bouton garanti, contenu + style //
    contenu.innerHTML = `
        <h2 style="color: #2f5735; text-align: center;">Voici les garanties de la semaine</h2>
        <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px; color: #589e62;">&#8226; Garantie de croissance de 30 jours sur tous les arbres et arbustes</li>
            <li style="margin-bottom: 10px; color: #589e62;">&#8226; Garantie de floraison sur les plantes à fleurs pendant la première saison</li>
            <li style="margin-bottom: 10px; color: #589e62;">&#8226; Garantie de 1 an sur tous les outils de jardinage</li>
            <li style="margin-bottom: 10px; color: #589e62;">&#8226; Remplacement gratuit des plantes endommagées pendant le transport</li>
            <li style="margin-bottom: 10px; color: #589e62;">&#8226; Conseils d'experts gratuits pour l'entretien de vos plantes</li>
        </ul>
        <button id="fermer-garantie" style="
            background-color: #9df2a9;
            color: #2f5735;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
            display: block;
            margin: 20px auto 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">Fermer</button>
    `;
    
    popup.appendChild(contenu);
    document.body.appendChild(popup);
    
    const fermerButton = document.getElementById('fermer-garantie'); // Style pour le bouton du modal garanti, avec le hover et le mouseout (La couleur et aspect) //
    fermerButton.addEventListener('click', () => {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    });
    fermerButton.addEventListener('mouseover', () => {
        fermerButton.style.backgroundColor = '#55c466';
        fermerButton.style.color = 'white';
        fermerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    });
    fermerButton.addEventListener('mouseout', () => {
        fermerButton.style.backgroundColor = '#9df2a9';
        fermerButton.style.color = '#2f5735';
        fermerButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    });

    overlay.addEventListener('click', () => {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    });
}

garantieButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        creerPopupGarantie();
    });
});
});


// Gérer le menu contextuel    // Gérer le menu contextuel    // Gérer le menu contextuel    // Gérer le menu contextuel  // Gérer le menu contextuel // Gérer le menu contextuel  // Gérer le menu contextuel


document.addEventListener("contextmenu", function(event) {
const menu = document.querySelector(".menu-contextuel");
const carteItem = event.target.closest(".carte-item");

// Cacher le menu contextuel personnalisé s'il est déjà visible
menu.style.display = "none";

if (carteItem) {                // Si le clic droit est sur un élément carte-item, empêcher le menu contextuel par défaut
    
    event.preventDefault();

    const rect = carteItem.getBoundingClientRect();
    const xPos = `${event.clientX}px`;
    const yPos = `${event.clientY}px`;

    menu.style.left = xPos;
    menu.style.top = yPos;
    menu.style.display = "block";

    // Stocker l'ID de la carte pour une utilisation ultérieure 
    menu.dataset.carteId = carteItem.id;
}
// Si le clic droit est en dehors d'un carte-item, le menu contextuel par défaut s'affichera
});

document.addEventListener("click", function() {                 // Masquer le menu contextuel personnalisé lors d'un clic gauche //
const menu = document.querySelector(".menu-contextuel");
menu.style.display = "none";
});

// Gestion des actions du menu contextuel
document.querySelector(".menu-contextuel").addEventListener("click", function(event) {
const selectedOption = event.target.textContent;
const carteId = this.dataset.carteId;

if (selectedOption === "Ajouter au panier") {               // Selon les option selectioné dans le menu contextuel //
    ajouterAuPanier(carteId);
} else if (selectedOption === "Voir détail") {
    openModal(carteId);
} else if (selectedOption === "Wikipedia") {
    const carteElement = document.getElementById(carteId);
    const wikiLink = carteElement.getAttribute('data-wikilink');
    if (wikiLink) {
        window.open(wikiLink, "_blank");
    }
}

this.style.display = "none";     // Le style du menu contexutel est none initiale //
});

document.getElementById('modal-add-to-cart').addEventListener('click', function() {
const modalName = document.getElementById('modal-name').textContent;
const quantite = parseInt(document.getElementById('modal-quantity').value, 10);
let productId = null;

// Recherche du produit dans toutes les catégories
for (let categorie in produits) {
    const produitTrouve = produits[categorie].find(p => p.nom === modalName);
    if (produitTrouve) {
        productId = produitTrouve.id;                           // Le code vérifie ensuite si la quantité demandée (quantite) est inférieure ou égale à la quantité disponible (produitTrouve.itemsRestants). //
        // Vérifier si la quantité demandée est disponible
        if (quantite <= produitTrouve.itemsRestants) {
            ajouterAuPanier(productId, quantite);
            produitTrouve.itemsRestants -= quantite; // Mettre à jour le stock, La quantité restante (itemsRestants) du produit est mise à jour en soustrayant la quantité ajoutée au panier. //
            closeModalFunction(); // Fermer le modal après avoir ajouté au panier
        } else {
            alert("Désolé, la quantité demandée n'est pas disponible.");  //Alerte dans la console si il y a une erreur.
        }
        break;
    }
}

if (!productId) {
    console.error("Produit non trouvé dans le modal");  //Cette ligne affiche un message d'erreur dans la console du navigateur, indiquant que le produit spécifié dans la fenêtre modale //
}
});


document.addEventListener('DOMContentLoaded', setupImageNavigator);
// Fonction pour fermer le modal
function closeModalFunction() {
const modal = document.getElementById("product-modal");
if (modal) {
    modal.style.display = "none";  // Le scroll esr réactivé si le modal est modal //
    enableScroll();
}
}
// Écouteurs d'événements
document.addEventListener("DOMContentLoaded", function() {
// Initialisation du navigateur d'images
setupImageNavigator();

// Gestion des clics sur les cartes de produits
document.addEventListener("click", function(event) {
    const carteItem = event.target.closest(".carte-item");
    if (carteItem) {
        const productId = carteItem.id;
        openModal(productId);
    }
});

// Gestion de la fermeture du modal
document.querySelector(".modal .close").addEventListener("click", closeModalFunction);

window.addEventListener("click", function(event) {              // Fermeture du modal en cliquant si on clique dehors de celui-ci pour chacune des pages, ce addEventListener est la 3 fois dans le code //
    if (event.target == modal) {    
        closeModalFunction();
    }
});

// Gestion du menu contextuel
const contextMenu = document.querySelector(".menu-contextuel");
document.addEventListener("contextmenu", function(event) {
    const carteItem = event.target.closest(".carte-item");
    if (carteItem) {
        event.preventDefault();                                 // addEventListener pour que le meny contextuel s'ouvre au lieu du menu traditonnel.//
        const productId = carteItem.id;
        contextMenu.style.display = "block";
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.dataset.carteId = productId;
    }
});

// Cacher le menu contextuel lors d'un clic gauche  
document.addEventListener("click", function() {
    contextMenu.style.display = "none";
});

// Gestion des actions du menu contextuel
contextMenu.addEventListener("click", function(event) {
    if (event.target.textContent === "Voir détail") {
        const productId = this.dataset.carteId;
        if (productId) {
            openModal(productId);
        } else {
            console.error("No product ID found in dataset");
        }
    }
    this.style.display = "none";
});
});

function gererBarreRecherche() {
}

function currentFrame(frame) {
}

document.addEventListener("DOMContentLoaded", function() {
const modal = document.getElementById("product-modal");
const closeModalBtn = modal.querySelector(".close");

if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModalFunction);
}

window.addEventListener("click", function(event) {
    if (event.target == modal) {                        // Fermeture du modal en cliquant si on clique dehors de celui-ci pour chacune des pages, ce addEventListener est la 3 fois dans le code //
        closeModalFunction();
    }
});


document.addEventListener("click", function(event) {        // Ouverture du modal si on click avec la fleche gauche de la souris //
    const carteItem = event.target.closest(".carte-item");
    if (carteItem) {
        const productId = carteItem.id;
        openModal(productId);
    }
});

if (closeModalBtn) {
closeModalBtn.addEventListener("click", closeModalFunction);    // Le bouton closeModalBtn permet de fermer de le modal //
}


window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModalFunction();
    }
});


const contextMenu = document.querySelector(".menu-contextuel");
document.addEventListener("contextmenu", function(event) {
    const carteItem = event.target.closest(".carte-item");
    if (carteItem) {
        event.preventDefault();
        const productId = carteItem.id;
        contextMenu.style.display = "block";
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.dataset.carteId = productId;
    }
});

document.addEventListener("click", function() {
    contextMenu.style.display = "none";
});

contextMenu.addEventListener("click", function(event) {
    if (event.target.textContent === "Voir détail") {
        const productId = this.dataset.carteId;
        if (productId) {
            openModal(productId);
        } else {
            console.error("No product ID found in dataset");
        }
    }
    this.style.display = "none";
});
});



// Gestion du modal      // Gestion du modal      // Gestion du modal  // Gestion du modal      // Gestion du modal      // Gestion du modal



function currentFrame(frame) {
// Masquer toutes les sections
document.getElementById('Accueil').style.display = 'none';
document.getElementById('accueil-bottom').style.display = 'none';
document.getElementById('Arbres').style.display = 'none';
document.getElementById('Fleurs').style.display = 'none';
document.getElementById('Materiel').style.display = 'none';

// Réinitialiser tous les boutons
const allButtons = document.querySelectorAll('.nav-button');
allButtons.forEach(button => {
    button.disabled = false;
    button.classList.remove('disabled');
});

// Afficher la section sélectionnée et gérer les boutons (Affichage et fermeture des div dependant bouton appuyé en bas)
if (frame === 'arbres') {
    document.getElementById('Arbres').style.display = 'block';
    document.querySelector('#Arbres .prev-button').disabled = true;
    document.querySelector('#Arbres .prev-button').classList.add('disabled');
} else if (frame === 'fleurs') {
    document.getElementById('Fleurs').style.display = 'block';
} else if (frame === 'materiel') {
    document.getElementById('Materiel').style.display = 'block';
    document.querySelector('#Materiel .next-button').disabled = true;
    document.querySelector('#Materiel .next-button').classList.add('disabled');
} else {
    document.getElementById('Accueil').style.display = 'block';
    document.getElementById('accueil-bottom').style.display = 'flex';
}

// Mettre à jour la classe active du menu
const menuLinks = document.querySelectorAll('#MenuPrincipal a');
menuLinks.forEach(link => {
    if (link.getAttribute('onclick').includes(frame)) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

gererBarreRecherche(frame);
}

// Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier // // Panier //

// Cette fonction  gére le processus de checkout
function processCheckout() {
document.getElementById('panier-page').style.display = 'none';
panier = [];
mettreAJourBadgePanier();
currentFrame('accueil');
setTimeout(afficherMessageRemerciement, 100);

// Vider le panier
panier = [];
mettreAJourBadgePanier();

// Rediriger vers la page d'accueil
currentFrame('accueil');

// Afficher un message de confirmation
alert("Merci pour votre achat ! Vous allez être redirigé vers la page d'accueil.");
}

document.addEventListener('DOMContentLoaded', () => {
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', processCheckout);
}
});


// Fonction pour afficher le panier
function afficherPanier() {
const panierPage = document.getElementById('panier-page');
const panierItems = document.getElementById('panier-items');
const panierTotal = document.getElementById('panier-total');
const panierTPS = document.getElementById('panier-tps');
const panierTVQ = document.getElementById('panier-tvq');
const panierAPayer = document.getElementById('panier-a-payer');

const checkoutBtn = document.getElementById('checkout-btn');

if (panier.length === 0) {
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = '0.5';
    checkoutBtn.style.cursor = 'not-allowed';
} else {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = '1';
    checkoutBtn.style.cursor = 'pointer';
}


// Vider le contenu actuel du panier
panierItems.innerHTML = '';

// Calculer le total
let total = 0;
panier.forEach(item => {
    const sousTotal = item.quantite * item.prix;
    total += sousTotal;

    // Ajouter l'article au panier
    const tr = document.createElement('tr');
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
panierPage.style.display = 'flex';
}

// Ajouter les écouteurs d'événements une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
const panierBtn = document.getElementById('panier');
const panierPage = document.getElementById('panier-page');
const closePanierBtn = document.getElementById('close-panier');

// Ouvrir le panier
panierBtn.addEventListener('click', (e) => {
    e.preventDefault();
    afficherPanier();
});

// Fermer le panier
closePanierBtn.addEventListener('click', () => {
    panierPage.style.display = 'none';
});

// Fermer le panier en cliquant en dehors
panierPage.addEventListener('click', (e) => {
    if (e.target === panierPage) {
        panierPage.style.display = 'none';
    }
});
});

// Fonction pour gérer le processus de checkout
// Fonction pour gérer le processus de checkout
function processCheckout() {
// Fermer la page du panier
document.getElementById('panier-page').style.display = 'none';

// Vider le panier
panier = [];
mettreAJourBadgePanier();

// Rediriger vers la page d'accueil
currentFrame('accueil');

// Afficher le message de remerciement sur la page d'accueil
afficherMessageRemerciement();
}

// Fonction pour afficher le message de remerciement sur la page d'accueil
function afficherMessageRemerciement() {
const message = document.createElement('div');
message.id = 'checkout-message';
message.innerHTML = `
    <div class="message-content">
        <button id="close-message" style="float: right; background: none; border: none; font-size: 20px; cursor: pointer;">&times;</button>
        <h2>Merci pour vos achats !</h2>
        <p>Votre commande a été traitée avec succès.</p>
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
document.getElementById('close-message').addEventListener('click', () => {
    document.body.removeChild(message);
});

// Supprimer le message après 5 secondes si l'utilisateur ne l'a pas fermé
setTimeout(() => {
    if (document.body.contains(message)) {
        document.body.removeChild(message);
    }
}, 5000);

console.log("Affichage du message de remerciement");

}

// Ajouter l'écouteur d'événements pour le bouton de checkout
document.addEventListener('DOMContentLoaded', () => {
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', processCheckout);
}
});


let panier = [];




function creerCarte(categorie, index) {
const produit = produits[categorie][index];
return `
    <div class="carte-item" id="${categorie}-${index}" data-wikilink="${produit.wikiLink}">
        <img src="${produit.image}" alt="${produit.nom}">
        <h3>${produit.nom}</h3>
        <p class="prix">${produit.prix}</p>
    </div>
`;
}

// Fonction pour filtrer les produits
function filtrerProduits(recherche) {
const toutesCategories = ['arbres', 'fleurs', 'materiel'];
const resultats = [];

toutesCategories.forEach(categorie => {
    const produitsFiltre = produits[categorie].filter(produit => 
        produit.nom.toLowerCase().includes(recherche.toLowerCase())
    );
    resultats.push(...produitsFiltre);
});

return resultats;
}

// Fonction pour afficher les suggestions
function afficherSuggestions(suggestions) {
const suggestionsList = document.getElementById('suggestions-list');
suggestionsList.innerHTML = '';
suggestions.forEach(suggestion => {
    const li = document.createElement('li');
    li.textContent = suggestion.nom;
    li.addEventListener('click', () => {
        document.querySelector('.bar-de-recherche input').value = suggestion.nom;
        suggestionsList.innerHTML = '';
        rechercherProduits();
    });
    suggestionsList.appendChild(li);
});
}

// Fonction pour rechercher et afficher les produits
function rechercherProduits() {
const recherche = document.querySelector('.bar-de-recherche input').value;
const resultats = filtrerProduits(recherche);

// Afficher les résultats dans les grilles appropriées
const toutesCategories = ['arbres', 'fleurs', 'materiel'];
toutesCategories.forEach(categorie => {
    const grid = document.getElementById(`${categorie}-grid`);
    if (grid) {
        grid.innerHTML = '';
        resultats.forEach(produit => {
            if (produits[categorie].includes(produit)) {
                const carteHTML = creerCarte(categorie, produits[categorie].indexOf(produit));
                grid.innerHTML += carteHTML;
            }
        });
    }
});

// Si aucun résultat, afficher un message
if (resultats.length === 0) {
    toutesCategories.forEach(categorie => {
        const grid = document.getElementById(`${categorie}-grid`);
        if (grid) {
            grid.innerHTML = '<p>Aucun produit trouvé</p>';
        }
    });
}
}

// Fonction pour afficher tous les produits
function afficherTousProduits() {
const toutesCategories = ['arbres', 'fleurs', 'materiel'];
toutesCategories.forEach(categorie => {
    const grid = document.getElementById(`${categorie}-grid`);
    if (grid) {
        grid.innerHTML = '';
        produits[categorie].forEach((_, index) => {
            const carteHTML = creerCarte(categorie, index);
            grid.innerHTML += carteHTML;
        });
    }
});
}

// Fonction pour fermer le modal (si nécessaire)
function closeModal() {
const modal = document.getElementById("product-modal");
if (modal) {
    modal.style.display = "none";
}
}

// Ajoute les écouteurs d'événements
document.addEventListener('DOMContentLoaded', () => {
const searchInput = document.querySelector('.bar-de-recherche input');
const searchButton = document.getElementById('bouton-rechercher');
const suggestionsList = document.createElement('ul');
suggestionsList.id = 'suggestions-list';
searchInput.parentNode.insertBefore(suggestionsList, searchInput.nextSibling);

searchInput.addEventListener('keyup', (e) => {                                      // Filtre keyup //
    if (e.key === 'Enter') {
        rechercherProduits();
        suggestionsList.innerHTML = '';
    } else {
        const suggestions = filtrerProduits(e.target.value);
        afficherSuggestions(suggestions.slice(0, 5)); // Limiter à 5 suggestions
    }
});

// Ajoute un gestionnaire d'événements pour le clic sur le bouton de recherche
searchButton.addEventListener('click', () => {
    rechercherProduits();
    suggestionsList.innerHTML = '';
});

// Gestionnaire d'événements pour les clics en dehors de la zone de recherche
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchButton.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.innerHTML = '';
        if (searchInput.value === '') {
            afficherTousProduits();
        }
    }
});

// Initialiser l'affichage de tous les produits au chargement de la page
afficherTousProduits();
});

// Ajoute du CSS pour les suggestions
const style = document.createElement('style');
style.textContent = `
#suggestions-list {
    position: absolute;
    top: 100%; /* Place la liste juste en dessous de la barre de recherche */
    left: 75%; /* Aligne avec le bord gauche de la barre de recherche */
    background-color: white;
    border-top: none;
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 1000;
}
#suggestions-list li {
    padding: 10px;
    cursor: pointer;
}
#suggestions-list li:hover {
    background-color: #f0f0f0;
}
`;
document.head.appendChild(style);


// Filtrage // // Filtrage //  // Filtrage //  // Filtrage //  // Filtrage //  // Filtrage //  // Filtrage //  // Filtrage //  // Filtrage //  // Filtrage //   // Filtrage //  // Filtrage // // Filtrage //  // Filtrage // 
// ComboBox // // ComboBox //  // ComboBox //  // ComboBox // ComboBox // // ComboBox //  // ComboBox //  // ComboBox //  ComboBox // // ComboBox //  // ComboBox //  // ComboBox //  ComboBox // // ComboBox //  // ComboBox //


// Fonction pour remplir le combobox des pays
function remplirComboboxPays() {
    const paysSelect = document.getElementById('pays-select');

    fetch('https://freetestapi.com/api/v1/countries')
        .then(response => response.json())
        .then(countries => {
            countries.sort((a, b) => a.name.localeCompare(b.name));

            countries.forEach(country => {
                if (country.code !== 'CA') { // Évite de dupliquer le Canada
                    const option = document.createElement('option');
                    option.value = country.code;
                    option.textContent = country.name;
                    paysSelect.appendChild(option);
                }
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des pays:', error));
}

// Fonction pour remplir le combobox des monnaies
function remplirComboboxMonnaies() {
    const monnaieSelect = document.getElementById('monnaie-select');

    fetch('https://freetestapi.com/api/v1/currencies')
        .then(response => response.json())
        .then(currencies => {
            currencies.sort((a, b) => a.name.localeCompare(b.name));

            currencies.forEach(currency => {
                if (currency.code !== 'CAD') { // Évite de dupliquer le Canadian $
                    const option = document.createElement('option');
                    option.value = currency.code;
                    option.textContent = `${currency.name} (${currency.symbol})`;
                    monnaieSelect.appendChild(option);
                }
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des monnaies:', error));
}
// Appeler les fonctions lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    remplirComboboxPays();
    remplirComboboxMonnaies();
});


// ComboBox // // ComboBox //  // ComboBox //  // ComboBox // ComboBox // // ComboBox //  // ComboBox //  // ComboBox //  ComboBox // // ComboBox //  // ComboBox //  // ComboBox //  ComboBox // // ComboBox //  // ComboBox //
