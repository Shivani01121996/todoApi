// api/controllers/bucket/list.js

module.exports = {

  friendlyName: 'List of all buckets.',

  description: '',

  extendedDescription: '',

  inputs: {},

  exits: {
    success: {
      description: 'Returning list of all buckets.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided details are invalid.',
      extendedDescription: ''
    }
  },

  fn: async function (inputs, exits) {
    try {
      let query = {};
      const bucketList = await sails.helpers.bucket.list.with(query);
      return exits.success(bucketList);
    } catch (err) {
      sails.log.error(err);
      exits.invalid(err);
    }
  }
};
