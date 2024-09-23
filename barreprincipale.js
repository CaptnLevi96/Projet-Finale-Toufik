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