// Ici on gère l'affichage des apprenants en liste ou en cartes
import { afficherListe } from "./list.js";
import { afficherCartes } from "./cards.js";

export function initDisplay(apprenants) {
    const radList = document.getElementById("rad-list");
    const radGrid = document.getElementById("rad-grid");

    const affichage = localStorage.getItem("affichage") || "liste";
    radList.checked = (affichage === "liste");
    radGrid.checked = (affichage === "cartes");

    if (affichage === "cartes") afficherCartes(apprenants);
    else afficherListe(apprenants);

    radList.addEventListener("change", () => {
        localStorage.setItem("affichage", "liste");
        afficherListe(apprenants);
    });

    radGrid.addEventListener("change", () => {
        localStorage.setItem("affichage", "cartes");
        afficherCartes(apprenants);
    });
}
