// 1. Charger les préférences existantes
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
    // 2. Sauvegarder au clic sur Enregistrer
    btnSave.addEventListener("click", () => {
        const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
        const selectedAffichage = document.querySelector('input[name="affichage"]:checked').value;

        localStorage.setItem("theme", selectedTheme);
        localStorage.setItem("affichage", selectedAffichage);

        alert("Préférences enregistrées. Recharge la page pour voir le thème.");
    });
});

