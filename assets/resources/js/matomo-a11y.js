/**
 * TRACKING D'ACCESSIBILITÉ GLOBAL - MATOMO
 * Mesure : Lecteur d'écran, Zoom, Contraste, Clavier et Focus Trap.
 */
(function () {
    window.addEventListener('load', function () {
        // Sécurité : vérifie que Matomo est bien chargé
        if (!window._paq) return;

        // --- 1. DÉTECTION PROBABLE LECTEUR D'ÉCRAN ---
        const srTracker = document.getElementById('auditive-tracker');
        if (srTracker) {
            srTracker.addEventListener('focus', function () {
                _paq.push(['trackEvent', 'Accessibility', 'Assistive Tech', 'Screen Reader Likely']);
            }, {once: true});
        }

        // --- 2. PRÉFÉRENCES SYSTÈME (Contraste et Mouvement) ---
        const highContrast = window.matchMedia('(forced-colors: active)').matches ||
            window.matchMedia('(prefers-contrast: more)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (highContrast) _paq.push(['trackEvent', 'Accessibility', 'Preference', 'High Contrast Mode']);
        if (reducedMotion) _paq.push(['trackEvent', 'Accessibility', 'Preference', 'Reduced Motion']);

        // --- 3. MESURE DU ZOOM (> 150%) ---
        let zoomTracked = false;

        function checkZoom() {
            const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
            if (zoomLevel >= 150 && !zoomTracked) {
                _paq.push(['trackEvent', 'Accessibility', 'Usage', 'High Zoom: ' + zoomLevel + '%']);
                zoomTracked = true;
            }
        }

        checkZoom(); // Vérification au chargement

        // On écoute le redimensionnement avec un petit délai (debounce)
        window.addEventListener('resize', function () {
            clearTimeout(window.zoomTimeout);
            window.zoomTimeout = setTimeout(checkZoom, 1000);
        });

        // --- 4. NAVIGATION CLAVIER (Utilisation de la touche Tab) ---
        window.addEventListener('keydown', function (e) {
            if (e.key === 'Tab') {
                _paq.push(['trackEvent', 'Accessibility', 'Input Method', 'Keyboard Navigation']);
            }
        }, {once: true});

        // --- 5. DÉTECTION DU FOCUS TRAP (Blocage de navigation) ---
        let lastActiveElement = null;
        let repeatFocusCount = 0;
        window.addEventListener('keyup', function (e) {
            if (e.key === 'Tab') {
                if (document.activeElement === lastActiveElement && document.activeElement !== document.body) {
                    repeatFocusCount++;
                    if (repeatFocusCount >= 3) {
                        _paq.push(['trackEvent', 'Accessibility', 'Issue', 'Focus Trap on: ' + document.activeElement.tagName]);
                        repeatFocusCount = 0;
                    }
                } else {
                    repeatFocusCount = 0;
                    lastActiveElement = document.activeElement;
                }
            }
        });
    });
})();
