// Fichiers du thème Osuny nécessaire à son bon fonctionnement
import './theme/';

// Customisation
import './icon-nav/';
import './canteen-menu/';
import './custom-iframe-map';
import './search-override';

document.addEventListener('DOMContentLoaded', function () {
    new window.rennes.MenuCanteen();
    new window.rennes.IconNav();
    new window.rennes.CustomIframeMap();
});
