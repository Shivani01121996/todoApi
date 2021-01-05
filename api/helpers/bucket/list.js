// api/controllers/bucket/list.js

module.exports = {

  friendlyName: 'List of all buckets.',

  description: '',

  extendedDescription: '',

  inputs: {},

  exits: {
    success: {
      description: 'Returning list of all buckets.'
    }
  },

  fn: async function (inputs, exits) {
    try {
      let query = {};
      const bucketList = await Bucket.find(query);
      return exits.success(bucketList);
    } catch (err) {
      sails.log.error(err);
      throw err;
    }
  }
};
