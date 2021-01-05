// Todo.js

module.exports = {

  attributes: {

    id: {
      type: 'string',
      required: true,
      unique: true,
      isUUID: true,
      // maxLength: 36,
      columnType: 'uuid'
    },

    name: {
      type: 'string',
      required: true,
    },

    bucket: {
      model: 'Bucket',
      required: true
    },

    status: {
      type: 'string',
      isIn: ['COMPLETE', 'INCOMPLETE'],
      defaultsTo: 'INCOMPLETE'
    }

  },

};
