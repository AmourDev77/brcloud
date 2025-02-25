document.addEventListener("DOMContentLoaded", function () {
    // Création du curseur personnalisé
    const cursor = document.createElement("div");
    cursor.id = "customCursor";
    document.body.appendChild(cursor);

    // Déplacement du curseur
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});
