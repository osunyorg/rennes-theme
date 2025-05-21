window.rennes = window.rennes || {};

window.rennes.orejimeAdditional = function () {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframeElement) => {
    const orejimePurposes = window.orejimeConfig.purposes;
    const parentIframeElement = iframeElement.parentNode;

    // Add data-attributes to wrapper for Orejime Contextual consent
    const wrapper = document.createElement('template');
    orejimePurposes.forEach((purpose) => {
      if (iframeElement.src.includes(purpose.id)) {
        wrapper.dataset.purpose = purpose.id;
        wrapper.dataset.contextual = 'true';
      }
    })

    // insert wrapper before el in the DOM tree + move iframe into wrapper
    parentIframeElement.insertBefore(wrapper, iframeElement);
    wrapper.content.appendChild(iframeElement);
  })
}

new window.rennes.orejimeAdditional();
