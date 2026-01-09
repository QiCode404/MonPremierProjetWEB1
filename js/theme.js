export function applyTheme() {
    const theme = localStorage.getItem("theme") || "clair";
    if (theme === "sombre") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}
