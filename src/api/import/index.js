const ImportHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'import',
  version: '1.0.0',
  register: async (server, { service }) => {
    const importHandler = new ImportHandler(service);
    server.route(routes(importHandler));
  },
};
