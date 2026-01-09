import { applyTheme } from "./theme.js";

// Applique le thème dès le chargement
applyTheme();

// Initialise la page Préférences
function initPreferences() {

    const themeSelect = document.getElementById("themeSelect");
    const affichageRadios = document.querySelectorAll('input[name="affichage"]');

    // Récupération des préférences
    const theme = localStorage.getItem("theme") || "clair";
    const affichage = localStorage.getItem("affichage") || "liste";

    // Mise à jour des sélections
    themeSelect.value = theme;
    document.querySelector(`input[name="affichage"][value="${affichage}"]`).checked = true;

    // Sauvegarde des préférences
    document.getElementById("btnSave").addEventListener("click", () => {

        localStorage.setItem("theme", themeSelect.value);
        localStorage.setItem("affichage", document.querySelector('input[name="affichage"]:checked').value);

        applyTheme();
    });
}

initPreferences();
