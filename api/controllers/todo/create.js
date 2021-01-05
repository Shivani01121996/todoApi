// api/controllers/todo/create.js

module.exports = {
  friendlyName: 'Create New todo.',
  description: 'Create a new todo.',
  inputs: {
    name: {
      type: 'string',
      required: true
    },
    bucket: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      isIn: ['COMPLETE', 'INCOMPLETE'],
      defaultsTo: 'INCOMPLETE'
    }
  },
  exits: {
    success: {
      description: 'Created a new todo.'
    },
    invalid: {
      responseType: 'badRequest',
      description: 'The provided details are invalid.',
      extendedDescription: ''
    }
  },

  fn: async function (inputs, exits) {
    const { name, data, bucket, status } = inputs;

    try {
      const todoId = sails.helpers.strings.uuid();
      const todoQuery = {
        id: todoId,
        name, bucket, status
      };
      const todo = await sails.helpers.todo.create.with(todoQuery);
      exits.success(todo);
    } catch (err) {
      sails.log.error(err);
      throw err;
    }
  },

};


