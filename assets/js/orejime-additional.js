window.rennes = window.rennes || {};

window.rennes.OrejimeContextualConsent = function () {
  const iframes = document.querySelectorAll('iframe');

  iframes.forEach((iframeElement) => {
    const orejimePurposes = window.orejimeConfig.purposes;
    const parentIframeElement = iframeElement.parentNode;

    const wrapper = document.createElement('template');

    // Add data-attributes to wrapper for Orejime Contextual consent
    orejimePurposes.forEach((purpose) => {
      if (iframeElement.src.includes(purpose.id) || (iframeElement.dataset.unloadedSrc && iframeElement.dataset.unloadedSrc.includes(purpose.id))) {
        wrapper.dataset.purpose = purpose.id;
        wrapper.dataset.contextual = 'true';
      }

      // For grouped purpose
      purpose.purposes.forEach((childPurpose) => {
        if (iframeElement.src.includes(childPurpose.id) || (iframeElement.dataset.unloadedSrc && iframeElement.dataset.unloadedSrc.includes(childPurpose.id))) {
          wrapper.dataset.purpose = childPurpose.id;
          wrapper.dataset.contextual = 'true';
        }
      })
    })

    // IF iframe should be blocked by orejime, add wrapper template around iframe
    if (wrapper.dataset.purpose) {
      if (parentIframeElement.classList.contains('video-container')) {
        var parent = parentIframeElement.closest('.block-content');
        var content = parentIframeElement.closest('.video');
        parent.insertBefore(wrapper, content);
        wrapper.content.appendChild(content);
      } else {
        parentIframeElement.insertBefore(wrapper, iframeElement);
        wrapper.content.appendChild(iframeElement);
      }
    }
  })
}

window.rennes.OrejimeUpdateVideo = function () {
  new window.osuny.VideoPlayerFactory();

  window.orejime.manager.on('update', function (updatedConsents, allConsents) {
    new window.osuny.VideoPlayerFactory();
  });
}

window.rennes.OrejimeConsentModalLink = function () {
  var orejimeConsentModalLinks = document.querySelectorAll('[href*="#orejime-consent-modal"]');

  orejimeConsentModalLinks.forEach((link) => {
    link.addEventListener('click', () => {
      window.orejime.prompt();
    });

    // Simulate button
    link.setAttribute('role', 'button');
    link.addEventListener('keydown', function (event) {
      if (event.keyCode === 32) {
        window.orejime.prompt();
      }
    });
  });
}

new window.rennes.OrejimeContextualConsent();
