// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    console.log('hamburger mmenu is clicked');
};

// click outside sidebar to remove nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
