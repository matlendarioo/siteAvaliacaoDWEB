const hamburgerBtn = document.getElementById('hamburgerBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburgerBtn.addEventListener('click', function () {
    hamburgerBtn.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});


function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    const allSubmenus = document.querySelectorAll('.submenu');

    allSubmenus.forEach(menu => {
        if (menu !== submenu) {
            menu.classList.remove('active');
        }
    });

    submenu.classList.toggle('active');
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.hamburger-btn') && !event.target.closest('.dropdown-menu')) {
        hamburgerBtn.classList.remove('active');
        dropdownMenu.classList.remove('active');

        const allSubmenus = document.querySelectorAll('.submenu');
        allSubmenus.forEach(menu => {
            menu.classList.remove('active');
        });
    }
});

dropdownMenu.addEventListener('click', function (event) {
    event.stopPropagation();
});