// api/helpers/todo/update.js

module.exports = {
  friendlyName: 'Update todo',
  inputs: {

    id: {
      type: 'string',
      isUUID: true,
      required: true
    },
    name: {
      type: 'string',
    },
    bucket: {
      type: 'string',
      isUUID: true,
    },
    status: {
      type: 'string',
      isIn: ['COMPLETE', 'INCOMPLETE']
    }
  },
  exits: {
    success: {
      description: 'Updated todo'
    },
    invalid: {
      description: 'Invalid parameters provided'
    },
    error: {
      description: 'Couldnt update todo'
    },
    notFound: {
      description: 'No Todo with the specified ID was found.'
    }
  },
  fn: async function (inputs, exits) {
    const { id, name, bucket, status } = inputs;
    try {
      let updateQuery = {
        id, name, bucket, status
      };
      updateQuery = _.omitBy(updateQuery, _.isUndefined);
      const updatedTodo = await sails.helpers.todo.update.with(updateQuery);
      return exits.success(updatedTodo);
    } catch (err) {
      sails.log.error(err);
      throw err;
    }

  }
};
