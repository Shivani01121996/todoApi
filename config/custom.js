/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /**************************************************************************
  *                                                                         *
  * The base URL to use during development.                                 *
  *                                                                         *
  * • No trailing slash at the end                                          *
  * • `http://` or `https://` at the beginning.                             *
  *                                                                         *
  * > This is for use in custom logic that builds URLs.                     *
  * > It is particularly handy for building dynamic links in emails,        *
  * > but it can also be used for user-uploaded images, webhooks, etc.      *
  *                                                                         *
  **************************************************************************/
  baseUrl: 'http://localhost:1337',

  /**************************************************************************
  *                                                                         *
  * The TTL (time-to-live) for various sorts of tokens before they expire.  *
  *                                                                         *
  **************************************************************************/
  accessTokenTTL: 365 * 24 * 60 * 60 * 1000, // 1 year
  refreshTokenTTL: 365 * 24 * 60 * 60 * 1000, // 1 year
  passwordResetTokenTTL: 24 * 60 * 60 * 1000, // 24 hours
  emailProofTokenTTL: 30 * 24 * 60 * 60 * 1000, // 30 days
  otpTokenTTL: 15 * 60 * 1000, // 15 mins

  /**************************************************************************
  *                                                                         *
  * Email configurations                                                    *
  *                                                                         *
  **************************************************************************/
  // The sender that all outgoing emails will appear to come from.
  fromEmailAddress: 'noreply@chakrahq.com',
  fromName: 'ChakraHQ Team',

  // Email address for receiving support messages & other correspondences.
  internalEmailAddress: 'support+development@chakrahq.com',

  // Whether to require proof of email address ownership any time a new user
  // signs up, or when an existing user attempts to change their email address.
  verifyEmailAddresses: false,

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/

  googleClientId: 'google-developer-client-id',
  googleClientSecret: 'google-developer-client-secret',
  googleRedirectURL: '	http://localhost:1337',

  metabaseSiteUrl: 'https://metabase.chakrahq.com',
  metabaseSecretKey: '50c3cbe81468a779cde32ec60cd742157219ee8c5933d5e62ec578b46fabb9a8',

  // AWS IAM user: chakra-api-user
  awsAccessKeyId: 'AKIATQDZR74SZ34R5276',
  awsSecretAccessKey: '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',
  awsRegion: 'ap-south-1',

  //AWS SES Access keys
  sesAccessKeyId: 'AKIATQDZR74SSMPJWVFV',
  sesSecretAccessKey: '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',
  sesRegion: 'us-east-1',

  // Gupshup
  gsSiteUrl: 'https://enterprise.smsgupshup.com/GatewayAPI/rest',
  gsAccessKeyId: '2000189872',
  gsSecretAccessKey: 'qaHnaFYX55Ckwgv',

  // redis cache
  useRedisCache: true,

};
