//Grab the buttons
let toggleNormal = document.getElementById("toggler-normal");

toggleNormal.addEventListener("click", function () {
    this.classList.toggle("normal-toggle");
    document.getElementById("nav-menu").classList.toggle("show");
});


// Project Search Functionality
const searchInput = document.getElementById('project-search');
const cards = document.querySelectorAll('.card-container .card');
const noResults = document.getElementById('no-results');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.querySelector('figcaption').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tech-tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
        const searchableText = title + ' ' + tags;

        if (searchableText.includes(searchTerm)) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
});