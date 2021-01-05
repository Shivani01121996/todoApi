// api/helpers/todo/remove.js

module.exports = {


  friendlyName: '',


  description: '',


  inputs: {

    id: {
      type: 'ref',
      description: 'Todo with be deleted by this id.',
      required: true
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
      const todo = await sails.helpers.todo.remove.with({ id });
      return exits.success(todo);
    } catch (err) {
      sails.log.error(err);
      exits.error(err);
    }

  },

};
