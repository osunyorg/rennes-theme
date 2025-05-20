window.orejimeConfig = {
  // You must provide a link to your privacy policy page for GDPR compliance.
  privacyPolicyUrl: 'https://metropole.rennes.fr/politique-de-confidentialite',

  // The list of third-party purposes that Orejime will manage for you.
  // The purposes will appear in the modal in the same order as defined here.
  purposes: [
    {
      // The id of the purpose, used internally by Orejime.
      id: 'youtube',

      // The title of the purpose as shown in the banner and modal.
      title: 'Youtube',

      // [optional]
      // The description of you purpose as listed in the modal.
      // description: 'This is used for analytics.',

      // A list of regex expressions, strings, or arrays, giving the names of
      // cookies set by this purpose. If the user withdraws consent for a
      // given purpose, Orejime will then automatically delete all matching
      // cookies.
      //
      // See a different example below with the inline-tracker purpose
      // to see how to define cookies set on different path or domains.
      cookies: [
        'YSC',
        'VISITOR_INFO1_LIVE',
        'PREF',
        'GPS',
        'DEVICE_INFO',
        'CONSENT',
        'SID',
        'HSID',
        'SSID',
        'APISID',
        'SAPISID',
        'SIDCC'
      ],

      // [optional]
      // If "isMandatory" is set to true, Orejime will not allow this purpose to
      // be disabled by the user.
      // See "Special cases" below for more information.
      // (defaults to false)
      isMandatory: false,

      // [optional]
      // If `isExempt` is set to true, Orejime will load this purpose
      // even before the user gave explicit consent.
      // We recommend always leaving this "false".
      // See "Special cases" below for more information.
      // (defaults to false)
      isExempt: false,

      // [optional]
      // If "default" is set to true, the purpose will be enabled by default
      // (defaults to false)
      default: false,

      // [optional]
      // If "runsOnce" is set to true, the purpose will only be executed
      // once regardless how often the user toggles it on and off.
      // (defaults to false)
      runsOnce: false
    },
    {
      id: 'vimeo',
      title: 'Vimeo',
      cookies: [
        'vide',
        'Player',
        'Drapeaux',
        '[clip_id]_mot de passe',
        '[webinar_uuid]_inscrit_au_webinaire',
        'lc_[hachage]',
        'autorisation_du_joueur',
        '_cf_bm',
        '_cfuvid',
        'cf_clearance'
      ],
    },
    {
      id: 'umap',
      title: 'uMap',
      cookies: [
        'sessionid',
      ],
    },
    {
      id: 'mviewer',
      title: 'Mviewer',
      cookies: [
        'pk_id.1.fe48',
        'GS_FLOW_CONTROL',
        'JSESSIONID'
      ],
    },
  ],

  // [optional]
  // If `forceModal` is set to true, Orejime will directly display
  // the consent modal and not allow the user to close it before having actively
  // consented or declined the use of third-party purposes.
  // (defaults to false)
  forceModal: false,

  // [optional]
  // If `forceBanner` is set to true, Orejime will display the consent
  // notice and not allow the user to close it before having actively consented
  // or declined the use of third-party purposes.
  // Has no effect if `forceModal` is set to true.
  // (defaults to false)
  forceBanner: false,

  // [optional]
  // You can overwrite existing translations and add translations for your
  // purpose descriptions and purposes. See `src/translations` for a full
  // list of translations that can be overwritten.
  // translations: {
  //   modal: {
  //     description:
  //       'This is an example of how to override an existing translation already used by Orejime'
  //   }
  // },

  // [optional]
  // You can pass an image url to show in the notice.
  // If the image is not exclusively decorative, you can pass an object
  // with the image `src` and `alt` attributes: `logo: {src: '...', alt: '...'}`
  logo: false,

  // [optional]
  // You can customize the element that will contain Orejime (either
  // a selector or a DOM element).
  // It no element matches, an element will be created and inserted at the
  // beginning of the <body>.
  orejimeElement: false,

  // [optional]
  cookie: {
    // [optional]
    // You can customize the name of the cookie that Orejime uses for storing
    // user consent decisions.
    // (defaults to 'orejime')
    name: 'orejime',

    // [optional]
    // You can set a custom expiration time for the Orejime cookie, in days.
    // (defaults to 365.)
    duration: 365,

    // [optional]
    // You can provide a custom domain for the Orejime cookie, for example to make it available on every associated subdomains.
    domain: 'rennes.fr',

    // [optional]
    // Whether the cookie should be shared via cross-site requests.
    // @see https://web.dev/articles/samesite-cookies-explained
    sameSite: 'strict',

    // [optional]
    // You can provide a custom function to serialize the cookie contents.
    stringify: (contents) => JSON.stringify(contents),

    // [optional]
    // You can provide a custom function to unserialize the cookie contents.
    parse: (cookie) => JSON.parse(cookie)
  }
};
