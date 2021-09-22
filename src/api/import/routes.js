const routes = (handler) => [
  {
    method: 'POST',
    path: '/import',
    handler: handler.postImportFileHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        parse: true,
        output: 'stream',
      }
    }
  },
  {
    method: 'GET',
    path: '/export',
    handler: handler.getExportFileHandler,
  },
];

module.exports = routes;