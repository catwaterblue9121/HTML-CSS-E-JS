document.addEventListener('DOMContentLoaded', () => {
    const categoriasLink = document.querySelector('nav ul li > a[href="#"]');
    const submenu = categoriasLink.nextElementSibling;

    submenu.style.display = 'none';

    categoriasLink.addEventListener('click', function (e) {
        e.preventDefault();
        submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function (e) {
        if (!categoriasLink.contains(e.target) && !submenu.contains(e.target)) {
            submenu.style.display = 'none';
        }
    });
});