// Bucket.js

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
      unique: true
    },

    todo: {
      collection: 'Todo',
      via: 'bucket'
    },

  },

};
