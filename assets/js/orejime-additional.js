window.rennes = window.rennes || {};

function blockIframe(site, content) {
  for (let i = 0; i < content.length; i++) {
    const iframeElement = content[i];
    const parentIframeElement = iframeElement.parentNode;

    // If Iframe is a vidéo, remove lazy video player (hiding content)
    if (parentIframeElement.classList.contains('video-container')) {
      parentIframeElement.parentNode.querySelector('.lazy-video-player').remove();
    }

    // If the iframe is not visible, don't display the content replacing it.
    if (iframeElement.offsetParent !== null) {
      let info = '';
      if (site === 'all' || site === 'others') {
        info += '<p>' + 'This content is hosted by an external site' + '</p>';
      } else {
        info += '<p>' + 'This content is hosted by' + site + '</p>';
      }
      info += '<p>' + 'By displaying it you accept the possible cookies from this site' + '</p>';
      info += '<a class="cookie-link" href="#">' + 'Manage your cookies' + '</a>';

      const wrapper = document.createElement('div');

      wrapper.className = 'orejime-blocked';
      wrapper.innerHTML = info;

      parentIframeElement.insertBefore(wrapper, iframeElement);
    }

    iframeElement.remove();

    // let wrapper = document.createElement("template");
    // wrapper.dataset.purpose = "embeds";
    // wrapper.dataset.contextual = '';
    //
    // console.log('wrapper')
    // console.log(wrapper)
    // console.log(iframeElement)
    // wrapper.append(iframeElement);
    // return '<template data-purpose="embeds" data-contextual>' . iframeElement . '</template>';

  }
}

function handleCookieLink(e) {
  const scrollPosition = window.scrollY;

  e.preventDefault();

  // Position fixed is used by Orejime to block page scroll when consent modal is visible
  // Define top position, prevent scroll effect, when modal appear
  document.body.style.top = `-${scrollPosition}px`;

  window.orejime.show();
}

function reloadPage() {
  document.location.reload();
}

window.rennes.orejimeAdditional = function () {
  const iframes = document.querySelectorAll('iframe');
  const iframeCookies = {};
  const cookies = document.cookie.split('; ');

  let orejimeCookie = cookies.find(row => row.startsWith('orejime='));

  if (orejimeCookie !== undefined) {
    console.log("orejimeCookie !== undefined");
    orejimeCookie = orejimeCookie.split('=')[1];
    const data = JSON.parse(orejimeCookie);

    // Get social network from orejime list.
    Object.keys(data).forEach((cookie) => {
      if (cookie.match(/iframe_/)) {
        iframeCookies[cookie.split('_')[1]] = {
          'iframes': [],
        };
      }
    });

    // Get all iframes for social networks listed in orejime.
    iframes.forEach((iframe) => {
      const src = iframe.src;
      Object.keys(iframeCookies).forEach((site) => {
        if (src.match(new RegExp(site, 'i')) || src.match(/youtu.be/i)) {
          iframeCookies[site].iframes.push(iframe);
        }
      });
    });

    // Get others iframes that are not listed in orejime services list.
    iframeCookies.others = {iframes: []};
    iframes.forEach((iframe) => {
      if (!Object.values(iframeCookies).some(obj => obj.iframes.includes(iframe))) {
        iframeCookies.others.iframes.push(iframe);
      }
    });

    // Block iframe if no consent.
    Object.keys(iframeCookies).forEach((site) => {
      if (data['iframe_' + site] === false || data['iframe_' + site] === 0) {
        blockIframe(site, iframeCookies[site].iframes);
      }
    });
  } else {
    // If it's the first visit on the site and/or no orejime cookie is set, block all iframes.
    blockIframe('all', iframes);
  }

  const cookieLinks = document.querySelectorAll('.cookie-link');

  cookieLinks.forEach(link => {
    link.addEventListener('click', handleCookieLink);
  });

  document.addEventListener('DOMContentLoaded', () => {
    if (oneTimeCookie === undefined) {
      const saveButton = document.querySelector('.orejime-Button--save');
      const declineButton = document.querySelector('.orejime-Button--decline');

      if (saveButton) {
        saveButton.addEventListener('click', reloadPage);
      }
      if (declineButton) {
        declineButton.addEventListener('click', reloadPage);
      }
    }
  });

  /// Remove tabindex attribute from disabled input's label for accessibility.
  // Callback for mutation observer.
  const callback = (mutationList, observer) => {
    mutationList.forEach((mutation) => {
      /** @type {HTMLElement} orejimeModal */
      const orejimeModal = document.querySelector('div.orejime-ModalPortal');
      // We observe mutations on the body's subtree.
      // We only need to intervene if the target of the mutation is
      // the orejime's modal.
      if (mutation.type === 'childList' && mutation.target === orejimeModal) {
        /** @type {HTMLLabelElement[]} labels */
        const labels = [...orejimeModal.querySelectorAll('label.orejime-AppItem-label')];

        labels.forEach(function (label) {
          /** @type {HTMLInputElement} input */
          const input = document.querySelector(`input#${label.getAttribute('for')}`);

          // Orejime disables required input (and does not flag them as required), so we remove the "tabindex"
          // of the label only if its related input is disabled.
          if (input.disabled) {
            label.removeAttribute('tabindex');
          }
        });

        // Reload page on consents save.
        const orejimeSaveButton = document.querySelector('button.orejime-Button--save');
        if (orejimeSaveButton !== null) {
          orejimeSaveButton.addEventListener('click', function (e) {
            window.location.reload();
          });
        }

      }
    });
  };

  // Instantiate & trigger observer.
  const observer = new MutationObserver(callback);
  observer.observe(document.querySelector('body'), {
    childList: true,
    subtree: true
  });
}

document.addEventListener('DOMContentLoaded', function () {
  new window.rennes.orejimeAdditional();
});