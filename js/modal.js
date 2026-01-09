export function showModal(apprenant) {
    const modalContent = document.getElementById("modalContent");
    modalContent.textContent = "";

    modalContent.innerHTML = `
        <img src="${apprenant.avatar}" alt="Avatar">
        <h3>${apprenant.prenom} ${apprenant.nom}</h3>
        <p><strong>Ville :</strong> ${apprenant.ville}</p>
        <p><strong>Anecdote :</strong><br>${apprenant.anecdotes}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById("modalDetail"));
    modal.show();
}
