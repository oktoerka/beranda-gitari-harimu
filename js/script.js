// Toggle
const navbarMenu = document.querySelector('.bar-nav');
// hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarMenu.classList.toggle('active');
}

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
});