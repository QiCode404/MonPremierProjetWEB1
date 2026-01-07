// Variable globale pour garder les apprenants en mémoire
let apprenantsGlobal = [];

// Chargement des données + prise en compte de la préférence d'affichage
fetch("data/promo.json")
    .then(res => res.json())
    .then(data => {
        apprenantsGlobal = data.apprenants;

        // Lire la préférence d'affichage
        const affichage = localStorage.getItem("affichage") || "liste";

        // Mettre à jour les radios
        document.getElementById("rad-list").checked = (affichage === "liste");
        document.getElementById("rad-grid").checked = (affichage === "cartes");

        // Afficher en fonction de la préférence
        if (affichage === "cartes") {
            afficherCartes(apprenantsGlobal);
        } else {
            afficherListe(apprenantsGlobal);
        }
    });


// ------------------------------
// AFFICHAGE LISTE (TABLEAU)
// ------------------------------
function afficherListe(apprenants) {
    const container = document.getElementById("listeApprenants");

    let htmlTable = `
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Ville</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
    `;

    apprenants.forEach(a => {
        htmlTable += `
            <tr>
                <td>${a.nom}</td>
                <td>${a.prenom}</td>
                <td>${a.ville}</td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="afficherDetail(${a.id})">Détail</button>
                </td>
            </tr>
        `;
    });

    htmlTable += "</tbody></table>";

    container.innerHTML = `
        <div class="table-wrapper">
            <div class="table-scroll">
                ${htmlTable}
            </div>
        </div>
    `;
}



// ------------------------------
// AFFICHAGE CARTES (GRID)
// ------------------------------
function afficherCartes(apprenants) {
    const container = document.getElementById("listeApprenants");

    let html = `<div class="row">`;

    apprenants.forEach(a => {
        html += `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card-apprenant">
                    <img src="${a.avatar}" alt="Avatar">
                    <h4>${a.prenom} ${a.nom}</h4>
                    <p>${a.ville}</p>
                    <button class="btn btn-primary btn-sm" onclick="afficherDetail(${a.id})">Détail</button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}


// ------------------------------
// RADIOS : changement d'affichage
// ------------------------------
document.getElementById("rad-list").addEventListener("change", () => {
    localStorage.setItem("affichage", "liste");
    afficherListe(apprenantsGlobal);
});

document.getElementById("rad-grid").addEventListener("change", () => {
    localStorage.setItem("affichage", "cartes");
    afficherCartes(apprenantsGlobal);
});


// ------------------------------
// MODAL DETAIL
// ------------------------------
function afficherDetail(id) {
    const apprenant = apprenantsGlobal.find(a => a.id === id);
    if (!apprenant) return;

    document.getElementById("modalContent").innerHTML = `
        <img src="${apprenant.avatar}" alt="Avatar">
        <h3>${apprenant.prenom} ${apprenant.nom}</h3>
        <p><strong>Ville :</strong> ${apprenant.ville}</p>
        <p><strong>Anecdote :</strong><br>${apprenant.anecdotes}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById("modalDetail"));
    modal.show();
}
