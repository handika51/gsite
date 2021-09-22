const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const path = require('path');

//upload 
const _import = require('./api/import');
const ImportService = require('./service/ImportService');
const gsite = require('./api/gsite')
const PuppeteerService = require('./service/puppeteer/PuppeteerService')

const init = async () => {
  const importService = new ImportService(path.resolve(__dirname, 'filefolder'), path.resolve(__dirname,'folderexport'));
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
     routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: Vision,
    },
    {
      plugin: _import,
      options: {
        service: importService,
      }
    },
    {
      plugin: gsite,
      options: {
        service: importService,
      }
    },
  ]);
  
  server.views({
    engines: {
      html: require('handlebars'),
    },
    relativeTo: __dirname,
    path: './views',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return h.view('index');
    }
  });

  await server.start();
  console.log(`Server running om ${server.info.uri}`)
};

init();
