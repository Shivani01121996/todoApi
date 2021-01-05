const _ = require('lodash');
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  
  'GET /bucket':                       { action: 'bucket/list' },
  'POST /bucket':                      { action: 'bucket/create' },

  'GET /todo':                         { action: 'todo/list' },
  'POST /todo':                        { action: 'todo/create' },
  'PUT /todo':                         { action: 'todo/update' },
  'DELETE /todo/:id':                  { action: 'todo/remove' },
};
