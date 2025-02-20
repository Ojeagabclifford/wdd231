const hambutton = document.querySelector('#mybutton');
const mainnav = document.querySelector('#nav-id');
const smallMenu = document.querySelector('#small-menu');
const header = document.querySelector('.header-container');

function handleResize() {
    if (window.innerWidth >= 669) {
        // Move nav into header on large screens
        if (!header.contains(mainnav)) {
            header.appendChild(mainnav);
            mainnav.classList.remove('open');
            hambutton.classList.remove('open');
        }
    } else {
        // Move nav into small menu on small screens
        if (!smallMenu.contains(mainnav)) {
            smallMenu.appendChild(mainnav);
        }
    }
}

// Initial check
handleResize();

// Add event listener for window resize
window.addEventListener('resize', handleResize);

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
    const lazyElements = document.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]');

    lazyElements.forEach(element => {
        element.addEventListener('load', () => {
            element.classList.add('loaded');
        });
    });
});