
const fs = require('fs');
const csv = require('csv-parser')
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

class ImportService {
  constructor(folder, exportfolder) {
    this._folder = folder
    this._exportfolder = exportfolder
    this._content = []
    this._writeData = []

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true })
    }
    if (!fs.existsSync(exportfolder)) {
      fs.mkdirSync(exportfolder, { recursive: true })
    }
  }

  async importFile (file, meta) {
    const filename = +new Date() + meta.filename
    const path = `${this._folder}/${filename}`

    const fileStream = await fs.createWriteStream(path)

    return await new Promise((resolve, reject) => {
      fileStream.on('error', (error) => reject(error))
      file.pipe(fileStream)
      file.on('end', () => resolve(filename))
    })
  }

  async exportFile () {
    const filename = +new Date() + ".csv"
    const path1 = `${this._exportfolder}/${filename}`
    
    const csvWriter = createCsvWriter({
      path: path1,
      header: [
      {id: 'link', title: 'Link'},]
    });
    
    const data = this._writeData[0];
    csvWriter.writeRecords(data).then(()=> console.log('Export Success'))
  }

  async readFile (file) {
    await this._content.unshift();
    const folder = await path.resolve(__dirname, `../filefolder/${file}`);
    
    
    await fs.createReadStream(folder)
      .pipe(csv({}))
      .on('data', row => {
        this._content.push(row);
      })
      .on('end', () => {
        console.log("success");
      })
  }
  async postData (data) {
    this._writeData.unshift();
    this._writeData.push(data);
    console.log(this._writeData);
  }

  async getFile (){
    
      if(this._content!== []) {
        return await this._content
      }else{
        throw error;
      }
    
  }
}

module.exports = ImportService;
