export let apprenants = [];

export async function loadData() {
    const res = await fetch("data/promo.json");
    const data = await res.json();
    apprenants = data.apprenants;
}
