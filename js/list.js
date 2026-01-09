import { showModal } from "./modal.js";

export function afficherListe(apprenants) {
    const listContainer = document.getElementById("listContainer");
    const grid = document.getElementById("gridApprenants");
    const tbody = document.getElementById("tbodyApprenants");

    listContainer.style.display = "block";
    grid.style.display = "none";
    tbody.textContent = "";

    apprenants.forEach(a => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${a.nom}</td>
            <td>${a.prenom}</td>
            <td>${a.ville}</td>
            <td><button class="btn btn-primary btn-sm" data-id="${a.id}">Détail</button></td>
        `;

        tr.querySelector("button").addEventListener("click", () => showModal(a));

        tbody.appendChild(tr);
    });
}
