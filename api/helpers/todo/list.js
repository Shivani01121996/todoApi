// api/controllers/todo/list.js

module.exports = {

  friendlyName: 'List of all todos.',

  description: '',

  extendedDescription: '',

  inputs: {},

  exits: {
    success: {
      description: 'Returning list of all todos.'
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
      const bucketList = await Todo.find(query);
      return exits.success(bucketList);
    }
    catch (err) {
      sails.log.error(err);
      throw err;
    }
  }
}
