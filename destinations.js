const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');
const cards = document.querySelectorAll('.card');

function filterDestinations() {
  const searchText = searchInput.value.toLowerCase();
  const selectedRegion = regionFilter.value;

  cards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    const region = card.getAttribute('data-region');

    const matchesSearch = title.includes(searchText);
    const matchesRegion = selectedRegion === '' || selectedRegion === region;

    card.style.display = (matchesSearch && matchesRegion) ? 'block' : 'none';
  });
}

searchInput.addEventListener('input', filterDestinations);
regionFilter.addEventListener('change', filterDestinations);