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
const countryCurrencyMap = {};

function remplirComboboxPays() {
    const paysSelect = document.getElementById('pays-select');              // Fonction pour remplir le combobox des pays


    return fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => {
            countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.cca2;
                option.textContent = country.name.common;
                paysSelect.appendChild(option);

                if (country.currencies) {                                                           // Stocker la correspondance pays-devise
                    const currencyCode = Object.keys(country.currencies)[0];
                    countryCurrencyMap[country.cca2] = currencyCode;
                }
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des pays:', error));
}

function remplirComboboxMonnaies() {                                        // Fonction pour remplir le combobox des monnaies
    const monnaieSelect = document.getElementById('monnaie-select');

    return fetch('https://openexchangerates.org/api/currencies.json')
        .then(response => response.json())
        .then(currencies => {
            Object.entries(currencies).forEach(([code, name]) => {
                const option = document.createElement('option');
                option.value = code;
                option.textContent = `${name} (${code})`;
                monnaieSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des monnaies:', error));
}

function updateCurrency() {                                                 // Fonction pour mettre à jour la devise en fonction du pays sélectionné
    const paysSelect = document.getElementById('pays-select');
    const monnaieSelect = document.getElementById('monnaie-select');
    const selectedCountry = paysSelect.value;

    if (countryCurrencyMap[selectedCountry]) {
        monnaieSelect.value = countryCurrencyMap[selectedCountry];
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    Promise.all([remplirComboboxPays(), remplirComboboxMonnaies()])
        .then(() => {
            // Ajouter un écouteur d'événements pour le changement de pays
            const paysSelect = document.getElementById('pays-select');
            paysSelect.addEventListener('change', updateCurrency);

            // Initialiser la devise pour le pays par défaut
            updateCurrency();
        });
});


// ComboBox // // ComboBox //  // ComboBox //  // ComboBox // ComboBox // // ComboBox //  // ComboBox //  // ComboBox //  ComboBox // // ComboBox //  // ComboBox //  // ComboBox //  ComboBox // // ComboBox //  // ComboBox //

// Adresse ID // // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID // // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID // 

function getIpAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log('Votre adresse IP est:', data.ip);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de l\'adresse IP:', error);
        });
}

// Appel de la fonction
getIpAddress();

// Fonction pour obtenir les informations de localisation et de devise
function getUserLocationAndCurrency() {
    fetch('http://ip-api.com/json/')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                const country = data.country;
                const countryCode = data.countryCode;
                console.log(`Pays de l'utilisateur: ${country}`);

        return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)      // J'ai utiliser un autre API pour obtenir la devise du pays
                    .then(response => response.json())
                    .then(countryData => {
                        const currencies = Object.keys(countryData[0].currencies);
                        console.log(`Code de devise du pays: ${currencies[0]}`);
                    });
            } else {
                console.log('Impossible d\'obtenir les informations de localisation.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des informations:', error);
        });
}
// Appel de la fonction
getUserLocationAndCurrency();
// Adresse ID // // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID // // Adresse ID //  // Adresse ID //  // Adresse ID //  // Adresse ID // 
