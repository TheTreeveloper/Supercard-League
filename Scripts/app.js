

// Load NavBar element
document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));
});

// Toggle Nav Menu
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger')
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}