// Année automatique dans le footer

document.getElementById("year").textContent =
    new Date().getFullYear();


// Sélection des boutons et des cartes

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

const emptyMessage = document.getElementById("empty-message");


// Filtrer les projets par catégorie

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Retirer la classe active des boutons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activer le bouton sélectionné
        button.classList.add("active");

        // Récupérer la catégorie
        const category = button.dataset.filter;

        let visibleProjects = 0;

        // Afficher ou masquer les projets
        projectCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.classList.remove("hidden");
                visibleProjects++;
            } else {
                card.classList.add("hidden");
            }

        });

        // Afficher un message si aucun projet n'est disponible
        emptyMessage.style.display =
            visibleProjects === 0 ? "block" : "none";

    });

});


// Animation des cartes au défilement

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(20px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 600,
                    easing: "ease-out",
                    fill: "both"
                }
            );

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.1
});


// Appliquer l'animation à chaque projet

projectCards.forEach(card => {
    observer.observe(card);
});