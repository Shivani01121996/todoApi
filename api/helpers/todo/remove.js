// api/helpers/todo/remove.js

module.exports = {


  friendlyName: '',


  description: '',


  inputs: {

    id: {
      type: 'string',
      isUUID: true,
      description: 'Todo with be deleted by this id.'
    }

  },


  exits: {

    success: {
      outputFriendlyName: '',
      outputDescription: '',
    },

    error: {
      description: 'Error occurred while trying to delete the todo.'
    },

  },


  fn: async function (inputs, exits) {

    const { id } = inputs;

    try {
      const todoObj = await Todo.destroy({
        id,
      }).fetch();

      return exits.success(todoObj);

    } catch (err) {
      sails.log.error(err);
      throw err;
    }

  },

};
