import { loadData, apprenants } from "./data.js";

async function initMap() {

    // Charger les données
    await loadData();

    // Initialiser la carte 
    const map = L.map('map');
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Pour calculer les limites
    const bounds = L.latLngBounds([]);

    // Ajouter les marqueurs
    apprenants.forEach(a => {

        if (a.coordonnees && a.coordonnees.latitude && a.coordonnees.longitude) {

            const lat = parseFloat(a.coordonnees.latitude);
            const lng = parseFloat(a.coordonnees.longitude);

            const marker = L.marker([lat, lng])
                .addTo(map)
                .bindPopup(`
                    <strong>${a.prenom} ${a.nom}</strong><br>
                    ${a.ville}
                `);

            // Ajouter la position aux limites
            bounds.extend([lat, lng]);
        }
    });

    // Adapter la carte à tous les marqueurs
    map.fitBounds(bounds, { padding: [50, 50] });
}

initMap();
