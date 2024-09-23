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
    
    function afficherCartes(categorie, containerId) {      //  La fonction crée car pour afficher les carte div a partir de l'array Produit si le container inner HTML est vide. //
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        produits[categorie].forEach((_, index) => {
            container.innerHTML += creerCarte(categorie, index);
        });
    }
    }
    
    const arbresNextButton = document.getElementById('arbres-next');   // Fonction pour afficher les frames Arbres, Fleurs et Materiel grace a la barre section-bas Verte //
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
    
    
    
    // Afficher les cartes pour chaque catégorie       // Fonction pour afficher les frames Arbres, Fleurs et Materiel grace barre en haut avec les boutons //
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
    