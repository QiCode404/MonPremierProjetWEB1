import { showModal } from "./modal.js";

export function afficherCartes(apprenants) {
    const listContainer = document.getElementById("listContainer");
    const grid = document.getElementById("gridApprenants");

    listContainer.style.display = "none";
    grid.style.display = "flex";
    grid.textContent = "";

    apprenants.forEach(a => {
        const col = document.createElement("div");
        col.className = "col-md-3 col-sm-6 mb-4";

        col.innerHTML = `
            <div class="card-apprenant">
                <img src="${a.avatar}" alt="Avatar">
                <h4>${a.prenom} ${a.nom}</h4>
                <p>${a.ville}</p>
                <button class="btn btn-primary btn-sm" data-id="${a.id}">Détail</button>
            </div>
        `;

        col.querySelector("button").addEventListener("click", () => showModal(a));

        grid.appendChild(col);
    });
}
