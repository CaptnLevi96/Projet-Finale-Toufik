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