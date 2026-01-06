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
                    <button class="btn btn-primary btn-sm" onclick="afficherDetail(${a.id})">
                        Détail
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div>`;

    container.innerHTML = html;
}
