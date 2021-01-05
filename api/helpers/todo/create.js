// api/controllers/todo/create.js

module.exports = {
  friendlyName: 'Create New todo',
  description: 'Create a new todo',
  inputs: {
    id: {
      isUUID: true,
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    bucket: {
      type: 'string'
    },
    status: {
      type: 'string',
      isIn: ['COMPLETE', 'INCOMPLETE'],
      defaultValue: 'INCOMPLETE'
    }
  },
  exits: {
    success: {
      description: 'Created a new todo'
    }
  },

  fn: async function (inputs, exits) {
    const { id, name, bucket, status } = inputs;

    try {
      const todoQuery = {
        id,
        name, bucket, status
      };
      const todo = await Todo.create(todoQuery).fetch();
      exits.success(todo);
    } catch (err) {
      sails.log.error(err);
      throw err;
    }
  },

};


