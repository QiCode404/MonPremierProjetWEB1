// On importe les modules nécessaires pour l'application
import { applyTheme } from "./theme.js";
import { loadData, apprenants } from "./data.js";
import { initDisplay } from "./display.js";

(async function start() {
    applyTheme();
    await loadData(); // les données sont maintenant prêtes

    initDisplay(apprenants); // ✔ on passe les apprenants !
})();

