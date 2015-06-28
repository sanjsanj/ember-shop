/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-shop',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.woff2 https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.ttf https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/fonts/glyphicons-halflings-regular.woff",
      'connect-src': "'self'",
      'img-src': "'self' http://www.y555y.com/vb/imgcache/2/39233alsh3er.jpg",
      'report-uri':"'localhost'",
      'style-src': "'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
      'frame-src': "'none'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
