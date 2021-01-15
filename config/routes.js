module.exports.routes = {
  
  'GET /bucket':                       { action: 'bucket/list' },
  'POST /bucket':                      { action: 'bucket/create' },

  'GET /todo':                         { action: 'todo/list' },
  'POST /todo':                        { action: 'todo/create' },
  'PUT /todo':                         { action: 'todo/update' },
  'DELETE /todo/:id':                  { action: 'todo/remove' },
};
