window.rennes = window.rennes || {};

/**
 * Used for Logements pages
 * Depends on custom config "active_custom_map" in config.yaml
 */
window.rennes.CustomIframeMap = function () {
    var mapElement = document.getElementById('map');
    if (mapElement) {
        var customIcon = L.icon({
            iconUrl: '/assets/images/map-marker.svg',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        var latitude = parseFloat(mapElement.getAttribute('data-latitude')) || 48.1099921;
        var longitude = parseFloat(mapElement.getAttribute('data-longitude')) || -1.6844761;
        var map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
    }
}
