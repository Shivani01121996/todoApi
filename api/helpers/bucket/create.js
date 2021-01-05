// api/helpers/bucket/create.js

module.exports = {
  friendlyName: 'Create New bucket',
  description: 'Create a new bucket',
  inputs: {
    id: {
      isUUID: true,
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'Created a new bucket'
    }
  },

  fn: async function (inputs, exits) {
    const { id, name } = inputs;

    try {
      const bucketQuery = {
        id,
        name,
      };
      const bucket = await Bucket.create(bucketQuery).fetch();
      exits.success(bucket);
    } catch (err) {
      sails.log.error(err);
      throw err;
    }
  },

};


