'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'car-sale',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      }
      ,
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebaseConfig: {
      apiKey: "AIzaSyBwThZCCa-nsTbX0YrAZUic3nSBXLuRMrw",
      authDomain: "car-data-e6872.firebaseapp.com",
      databaseURL: "https://car-data-e6872.firebaseio.com",
      projectId: "car-data-e6872",
      storageBucket: "car-data-e6872.appspot.com",
      messagingSenderId: "802110786936",
      appId: "1:802110786936:web:2cb98b60abeab82c11cc8d"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  }
    ;

  if (environment === 'development'
  ) {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV.MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYWhyaXN0aWFuIiwiYSI6ImNraHA2em1xZjBhbXoyc21zb2h6aG5jMWwifQ.TUTafDjrLDZ2X79fuoEVXg'

  return ENV;
}
  ;
