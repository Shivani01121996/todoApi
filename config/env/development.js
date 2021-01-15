module.exports = {
  datastores: {
    default: {
      url: 'postgresql://chakradbuser:chakradbpassword@127.0.0.1:5432/shivani'
    },
  },

  models: {
    migrate: 'safe'
  },

  security: {
    cors: {
      allRoutes: true,
    }
  },

  sockets: Object.assign({}, PRODUCTION_CONFIG.sockets, {
    onlyAllowOrigins: [
      'http://localhost:1337'
      // 'https://example-staging.herokuapp.com',
      // 'http://example-staging.herokuapp.com',
      // 'https://staging.example.com',
      // 'http://staging.example.com',
    ]
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

  custom: {},

};
