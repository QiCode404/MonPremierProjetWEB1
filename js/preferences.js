/*document.addEventListener("DOMContentLoaded", () => {
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    const affichageRadios = document.querySelectorAll('input[name="affichage"]');
    const btnSave = document.getElementById("btnSave");

    // 1. Charger les préférences existantes
    const theme = localStorage.getItem("theme") || "clair";
    const affichage = localStorage.getItem("affichage") || "liste";

    // Cocher le bon bouton thème
    themeRadios.forEach(r => {
        r.checked = (r.value === theme);
    });

    // Cocher le bon bouton affichage
    affichageRadios.forEach(r => {
        r.checked = (r.value === affichage);
    });

    // 2. Sauvegarder au clic sur Enregistrer
    btnSave.addEventListener("click", () => {
        const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
        const selectedAffichage = document.querySelector('input[name="affichage"]:checked').value;

        localStorage.setItem("theme", selectedTheme);
        localStorage.setItem("affichage", selectedAffichage);

        // Optionnel : feedback simple
        alert("Préférences enregistrées.");
    });
});
*/
document.addEventListener("DOMContentLoaded", () => {
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    const affichageRadios = document.querySelectorAll('input[name="affichage"]');
    const btnSave = document.getElementById("btnSave");

    const theme = localStorage.getItem("theme") || "clair";
    const affichage = localStorage.getItem("affichage") || "liste";

    themeRadios.forEach(r => {
        r.checked = (r.value === theme);
    });

    affichageRadios.forEach(r => {
        r.checked = (r.value === affichage);
    });

    btnSave.addEventListener("click", () => {
        const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
        const selectedAffichage = document.querySelector('input[name="affichage"]:checked').value;

        localStorage.setItem("theme", selectedTheme);
        localStorage.setItem("affichage", selectedAffichage);

        alert("Préférences enregistrées. Recharge la page pour voir le thème.");
    });
});

