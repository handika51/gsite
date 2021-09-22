const fs = require('fs');

class ImportHandler {
  constructor(service) {
    this.service = service;
    
    this.postImportFileHandler = this.postImportFileHandler.bind(this);
    this.getExportFileHandler = this.getExportFileHandler.bind(this);
  }

  async postImportFileHandler(request, h) {
    const { fileUpload } = request.payload;
    const filename = await this.service.importFile(fileUpload, fileUpload.hapi);
    await this.service.readFile(filename);

    const response = h.response({
      status: 'success',
      message: 'File berhasil diunggah',
    });
    response.code(201);

    return response;
  }

  async getExportFileHandler(request, h){
    await this.service.exportFile()
    const response = h.response({
      status: 'success',
      message: 'File berhasil diexport',
    });
    response.code(201);

    return response;
  }
}

module.exports = ImportHandler;
