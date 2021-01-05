/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/


  // Bypass the `is-authorized` policy for:
  'appinstall/create': true,
  'appinstall/update': true,
  'app/versioncheck': true,
  // 'auth/*': true,
  'auth/signup': true,
  'auth/token': true,
  'auth/login': true,
  'auth/logout': true,
  'auth/otp/generate': true,

  // TODO: photo/show needs to have a diff policy where bboth unauth/auth need to be applied
  // unauth - for public images
  // auth - for rest
  // 'photo/show': true,
  // 'auth/logout': 'is-authorized',
  'resetpassword/create': true,
  'resetpassword/fetch': true,
  'resetpassword/complete': true,

  // 'health/*': true,
  'health/check': true,
  'health/servertime': true,

  'email/receive': true,
  'auth/validate-email': true,

  'plugin/twilio/voice': true,
};
