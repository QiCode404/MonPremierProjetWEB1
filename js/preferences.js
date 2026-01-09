import { applyTheme } from "./theme.js";

applyTheme(); // applique le thème dès l’ouverture de la page

// Initialisation de la page Préférences
function initPreferences() {

    // Récupération des valeurs stockées
    const theme = localStorage.getItem("theme") || "clair";
    const affichage = localStorage.getItem("affichage") || "liste";

    // Sélection des radios
    const themeRadio = document.querySelector(`input[name="theme"][value="${theme}"]`);
    const affichageRadio = document.querySelector(`input[name="affichage"][value="${affichage}"]`);

    if (themeRadio) themeRadio.checked = true;
    if (affichageRadio) affichageRadio.checked = true;

    // Bouton Enregistrer
    document.getElementById("btnSave").addEventListener("click", () => {

        const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
        const selectedAffichage = document.querySelector('input[name="affichage"]:checked').value;

        // Sauvegarde
        localStorage.setItem("theme", selectedTheme);
        localStorage.setItem("affichage", selectedAffichage);

        // Application immédiate du thème
        applyTheme();
    });
}

initPreferences();
