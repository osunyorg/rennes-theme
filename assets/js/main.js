import './theme/';
import './icon-nav/';
import './canteen-menu/';
import './custom-iframe-map';

document.addEventListener('DOMContentLoaded', function () {
    new window.rennes.MenuCanteen();
    new window.rennes.IconNav();
    new window.rennes.CustomIframeMap();
});
