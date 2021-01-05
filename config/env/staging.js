/**
 * Staging environment settings
 * (sails.config.*)
 *
 * This is mostly a carbon copy of the production environment settings
 * in config/env/production.js, but with the overrides listed below.
 * For more detailed information and links about what these settings do
 * see the production config file.
 *
 * > This file takes effect when `sails.config.environment` is "staging".
 * > But note that NODE_ENV should still be "production" when lifting
 * > your app in the staging environment.  In other words:
 * > ```
 * >     NODE_ENV=staging sails_environment=staging node app
 * > ```
 *
 * If you're unsure or want advice, stop by:
 * https://sailsjs.com/support
 */

var PRODUCTION_CONFIG = require('./production');
//--------------------------------------------------------------------------
// /\  Start with your production config, even if it's just a guess for now,
// ||  then configure your staging environment afterwards.
//     (That way, all you need to do in this file is set overrides.)
//--------------------------------------------------------------------------

module.exports = Object.assign({}, PRODUCTION_CONFIG, {
  datastores: Object.assign({}, PRODUCTION_CONFIG.datastores, {
    default: Object.assign({}, PRODUCTION_CONFIG.datastores.default, {
      url:
        process.env.CHQ_DEV_MYSQL_URI ||
        'postgresql://chakradbuser:chakradbpassword@staging-postgres-1.postgres.mumbai.internal.staging.chakrahq:5432/chakra'
      // url: process.env.CHQ_DEV_MYSQL_URI || 'postgresql://chakradbuser:chakradbpassword@127.0.0.1/chakra_prod',
      //--------------------------------------------------------------------------
      // /\  Hard-code your staging db `url`.
      // ||  (or use system env var: `sails_datastores__default__url`)
      //--------------------------------------------------------------------------
    }),
    auditlogs: Object.assign({}, PRODUCTION_CONFIG.datastores.auditlogs, {
      url:
        process.env.CHQ_DEV_MYSQL_URI_2 ||
        'postgresql://chakradbuser:chakradbpassword@staging-postgres-1.postgres.mumbai.internal.staging.chakrahq:5432/chakra_auditlogs'
    }),
    readReplica: Object.assign({}, PRODUCTION_CONFIG.datastores.readReplica, {
      url:
        process.env.CHQ_DEV_MYSQL_URI_2 ||
        'postgresql://chakradbuser:chakradbpassword@staging-postgres-1.postgres.mumbai.internal.staging.chakrahq:5432/chakra'
    }),
  }),

  models: Object.assign({}, PRODUCTION_CONFIG.models, {
    migrate: 'safe'
  }),

  security: Object.assign({}, PRODUCTION_CONFIG.security, {
    cors: Object.assign({}, PRODUCTION_CONFIG.security.cors, {
      allRoutes: true,
      allowOrigins: [
        'https://app.staging.chakrahq.com',
        'https://beta.staging.chakrahq.com'
      ],
      allowCredentials: true
    })
  }),

  sockets: Object.assign({}, PRODUCTION_CONFIG.sockets, {
    // onlyAllowOrigins: [
    //   'https://staging.example.com',
    //   'http://staging.example.com',
    // ]
    //--------------------------------------------------------------------------
    // /\  Hard-code a staging-only override for allowed origins.
    // ||  (or set this array via JSON-encoded system env var)
    //     ```
    //     sails_sockets__onlyAllowOrigins='["http://localhost:1337", "…"]'
    //     ```
    //--------------------------------------------------------------------------

    // url: 'redis://shared:some_password_everyone_knows@bigsquid.redistogo.com:9562/',
    //--------------------------------------------------------------------------
    // /\  Hard-code your staging Redis server's `url`.
    // ||  (or use system env var: `sails_sockets__url`)
    //--------------------------------------------------------------------------
  }),

  session: Object.assign({}, PRODUCTION_CONFIG.session, {
    // url: 'redis://shared:some_password_everyone_knows@bigsquid.redistogo.com:9562/staging-sessions',
    //--------------------------------------------------------------------------
    // /\  Hard-code your staging Redis server's `url` again here.
    // ||  (or use system env var: `sails_session__url`)
    //--------------------------------------------------------------------------
  }),

  uploads: Object.assign({}, PRODUCTION_CONFIG.uploads, {
    adapter: require('skipper-disk')
    //--------------------------------------------------------------------------
    // /\  This just uploads files to the local server disk in staging.
    // ||  Leave this commented out if you want to use the same solution in
    // ||  staging as you are using in production.
    // ||  (You should prbly also add an override for the S3 bucket in use, etc.)
    //--------------------------------------------------------------------------
  }),

  custom: Object.assign({}, PRODUCTION_CONFIG.custom, {
    baseUrl: 'http://localhost:1337',
    //--------------------------------------------------------------------------
    // /\  Hard-code the base URL where your staging environment is hosted.
    // ||  (or use system env var: `sails_custom__baseUrl`)
    //--------------------------------------------------------------------------

    internalEmailAddress: 'support+development@chakrahq.com',
    //--------------------------------------------------------------------------
    // /\  Hard-code the email address that should receive support/contact form
    // ||  messages in staging (or use `sails_custom__internalEmailAddress`)
    //--------------------------------------------------------------------------

    googleClientId:
      '933973728044-9b8dkhgh55h03a172kif8q671vcbb21n.apps.googleusercontent.com',
    googleClientSecret: 'S93dQlTAcJV1YctwktzOq55O',
    googleRedirectURL: 'https://developers.google.com/oauthplayground'
    //--------------------------------------------------------------------------
    // /\  Hard-code credentials to use in staging for other 3rd party APIs, etc.
    // ||  (or use system environment variables prefixed with "sails_custom__")
    //--------------------------------------------------------------------------
  }),

  log: Object.assign({}, PRODUCTION_CONFIG.log, {
    level: 'verbose'
  }),

  firebase: Object.assign({}, PRODUCTION_CONFIG.firebase, {
    databaseURL: 'https://chakra-hq-dev.firebaseio.com',
    credentialsFilename:
      'chakra-hq-dev-firebase-adminsdk-v9fmd-96dd7fd78f.json',
    gcmSenderId: '709525581252',
    gcmAPIKey:
      'AAAApTMFLcQ:APA91bEP_ewZ3vx203qlJDbmRCPE2-w3eAmSDXUSk5Ypm4cLRdZcaM4P0kBXxTdMaqUpQm3U8MA1_aMy0PU_VwVmTA1Mlw7wcX0no0tPisyfKUtTGSW_F4x8IjR1M_2tauLSzNNPHXqJ'
  }),

  kafka: Object.assign({}, PRODUCTION_CONFIG.kafka, {
    brokerList: 'localhost:9092',
    groupId: 'test'
  }),

  elasticsearch: Object.assign({}, PRODUCTION_CONFIG.elasticsearch, {
    node: 'http://staging-reports-1.reports.mumbai.internal.staging.chakrahq:9200',
    username: 'elastic',
    password: 'e0npjJT5fHfw8ccE',
  }),

  s3: Object.assign({}, PRODUCTION_CONFIG.s3, {
    //override here
  }),

  redis: Object.assign({}, PRODUCTION_CONFIG.redis, {
    connectionUrl: 'redis://staging-postgres-1.postgres.mumbai.internal.staging.chakrahq:6379'
  }),

});
