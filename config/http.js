const apm = require('elastic-apm-node');

/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/

  middleware: {

    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/

    order: [
      // 'cookieParser',
      // 'authCookieParser',
      // 'session',
      'bodyParser',
      // 'compress',
      // 'poweredBy',
      // 'router',
      // 'www',
      // 'favicon',
      // 'logResponseTime',
      'elasticApm'
    ],


    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests.       *
     *                                                                          *
     * https://sailsjs.com/config/http#?customizing-the-body-parser             *
     *                                                                          *
     ***************************************************************************/

    bodyParser: (function _configureBodyParser(){
      var skipper = require('skipper');
      var middlewareFn = skipper({
        strict: true,
        limit: '50mb',
        maxTimeToBuffer: 200000
      });
      return middlewareFn;
    })(),

    // logResponseTime: function(req, res, next) {
    //   const startHrTime = process.hrtime();

    //   res.on('finish', () => {
    //     const elapsedHrTime = process.hrtime(startHrTime);
    //     const elapsedTimeInMs =
    //       elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    //     console.log('%s : %fms', req.path, elapsedTimeInMs);
    //   });

    //   next();
    // },

    // This middleware enables api access via cookies
    // it simply checks if the authroiation header is present or not
    // if not present, it checks for accessToken cookie.
    // if so, it sets the authorization header
    // authCookieParser: function(req, res, next) {
    //   const authHeader = req.get('Authorization') || req.get('authorization');
    //   const accessTokenCookie = req.cookies && req.cookies.accessToken ? req.cookies.accessToken: null;

    //   if(!authHeader && accessTokenCookie) {
    //     if(!req.headers) req.headers = {};
    //     req.headers['authorization'] = `Bearer ${accessTokenCookie}`;
    //   }
    //   next();
    // },

    // set apm context
    // team_id
    // user_id
    // username
    elasticApm: function(req, res, next) {
      // try {
      //   // if(req.user) {
      //   //   const { team, id, username } = req.user;
      //   //   apm.setLabel('team_id', team);
      //   //   apm.setLabel('user_id', id);
      //   //   apm.setLabel('username', username);
      //   // }
      // } catch(err) {
      //   console.log('elasticApm middleware error', err);
      // }
      next();
    },
  },

};
