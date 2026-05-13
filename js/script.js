// Toggle hamburger
const navbarMenu = document.querySelector('.bar-nav');
// hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarMenu.classList.toggle('active');
    e.preventDefault();
}

// Togle pencarian
const searchFrom = document.querySelector('.search-from');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-bttn').onclick = (e) => {
    searchFrom.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// klik di luar sidebar untuk menghilangkan nav
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-bttn');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
    
    if(!sb.contains(e.target) && !searchFrom.contains(e.target)) {
        searchFrom.classList.remove('active');
    }
});

// modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.bttn-mata');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});


// klik tombol close

document.querySelector('.modal .tutup-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};