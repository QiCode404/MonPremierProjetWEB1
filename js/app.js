// La fonction fetch permet de récupérer un fichier JSON
fetch("data/promo.json")
// Une fois le fichier récupéré, on le convertit en objet JavaScript
    .then(res => res.json())
    .then(data => {
        afficherListe(data.apprenants);
    });
// Fonction pour afficher la liste des apprenants dans le HTML
function afficherListe(apprenants) {
    const container = document.getElementById("listeApprenants");
// Construction du tableau HTML
    let html = `
        <table>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Ville</th>
                <th></th>
            </tr>
    `;
    // Boucle pour chaque apprenant
    apprenants.forEach(a => {
        html += `
            <tr>
                <td>${a.nom}</td>
                <td>${a.prenom}</td>
                <td>${a.ville}</td>
                <td><button onclick="afficherDetail(${a.id})">Détail</button></td>
            </tr>
        `;
    });
    // Fin du tableau HTML
    html += "</table>";
    container.innerHTML = html;
}
// Fonction pour afficher le détail d'un apprenant
function afficherDetail(id) {
    alert("Détail apprenant ID : " + id);
}
