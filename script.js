
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Search and Category Filter
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cards = document.querySelectorAll(".destination-card");
const noResults = document.getElementById("noResults");

function filterDestinations() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const categoryValue = categoryFilter.value;

    let visibleCount = 0;

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = name.includes(searchValue);
        const matchesCategory =
            categoryValue === "all" || category === categoryValue;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display =
        visibleCount === 0 ? "block" : "none";
}

searchInput.addEventListener("input", filterDestinations);
categoryFilter.addEventListener("change", filterDestinations);

// Booking Button
document.querySelectorAll(".book-btn").forEach(button => {
    button.addEventListener("click", () => {
        const place = button.dataset.place;

        alert(
            `Thank you for choosing ExploreWorld!\n\n` +
            `Your selected destination is ${place}.\n` +
            `Our booking team will help you plan your journey.`
        );
    });
});
