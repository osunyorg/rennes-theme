window.orejimeConfig = {
  // You must provide a link to your privacy policy page for GDPR compliance.
  privacyPolicyUrl: 'https://metropole.rennes.fr/protection-donnees-personnelles/',

  // The list of third-party purposes that Orejime will manage for you.
  // The purposes will appear in the modal in the same order as defined here.
  purposes: [
    {
      id: 'map',
      title: 'Vidéos',
      // description: '…',
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
            'vuid',
            'player',
            'flags',
            'player_clearance',
            '_cf_bm',
            '_cfuvid',
            'cf_clearance'
          ],
        },
      ]
    },
    {
      id: 'map',
      title: 'Intégrations HTML',
      // description: '…',
      purposes: [
        {
          id: 'umap',
          title: 'Solutions de cartographie uMap',
          cookies: [
            'sessionid',
          ],
        },
        {
          id: 'mviewer',
          title: 'Solutions de cartographie Mviewer',
          cookies: [
            'pk_id.1.fe48',
            'GS_FLOW_CONTROL',
            'JSESSIONID'
          ],
        },
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
  translations: {
    banner: {
      title: 'Nous utilisons des cookies pour vous garantir la meilleure expérience de navigation.',
      description:
        'En poursuivant votre navigation sur le site, vous acceptez l\'utilisation de cookies, en accord avec notre {privacyPolicy}.'

    },
    modal: {
      title: 'Gestion de vos préférences sur les cookies et autres traceurs',
      description:
        'Lors de votre navigation, des données peuvent être stockées dans votre ordinateur ou récupérées à partir de celui-ci, généralement sous la forme de cookies. Parce que nous respectons votre droit à la vie privée, nous vous donnons la possibilité de ne pas autoriser certains types de cookies. Cette page vous permet donc de donner ou de retirer votre consentement, soit globalement soit finalité par finalité. Pour en savoir plus, merci de consulter notre {privacyPolicy}.'
    }
  },

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
