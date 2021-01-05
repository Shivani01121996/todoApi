// api/controllers/bucket/create.js

module.exports = {
  friendlyName: 'Create New bucket',
  description: 'Create a new bucket',
  inputs: {
    name: {
      type: 'string',
      required: true
    },
  },
  exits: {
    success: {
      description: 'Created a new bucket'
    },
    invalid: {
      responseType: 'badRequest',
      description: 'The provided details are invalid.',
      extendedDescription: ''
    }
  },

  fn: async function (inputs, exits) {
    const { name } = inputs;

    try {
      const bucketId = sails.helpers.strings.uuid();
      const bucketQuery = {
        id: bucketId,
        name,
      };
      const bucket = await sails.helpers.bucket.create.with(bucketQuery);
      exits.success(bucket);
    } catch (err) {
      sails.log.error(err);
      exits.invalid(err);
    }
  },

};


