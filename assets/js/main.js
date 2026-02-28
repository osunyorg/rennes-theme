// Fichiers du thème Osuny nécessaire à son bon fonctionnement
import './theme/';

// Customisation
import './orejime-config/';
import './orejime-additional/';
import './canteen-menu/';
import './custom-iframe-map';

document.addEventListener('DOMContentLoaded', function () {
    new window.rennes.MenuCanteen();
    new window.rennes.CustomIframeMap();
    new window.rennes.OrejimeUpdateVideo();
    new window.rennes.OrejimeConsentModalLink();
});
