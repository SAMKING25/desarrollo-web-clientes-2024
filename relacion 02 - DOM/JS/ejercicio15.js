function showSubMenu(subMenuId) {
    const subMenus = document.querySelectorAll('.submenu');
    subMenus.forEach(subMenu => {
        if (subMenu.id === subMenuId) {
            subMenu.style.display = 'block';
        } else {
            subMenu.style.display = 'none';
        }
    });
}

function hideSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    subMenu.style.display = 'none';
}