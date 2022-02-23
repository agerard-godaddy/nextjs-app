const path = require('path');
const Keyv = require('keyv');
const { KeyvFile } = require('keyv-file');

// More options with default value:
module.exports = new Keyv({
  store: new KeyvFile({
    filename: path.join(process.cwd(), 'db.json'), // the file path to store the data
    writeDelay: 100, // ms, batch write to disk in a specific duration, enhance write performance.
    encode: JSON.stringify, // serialize function
    decode: JSON.parse // deserialize function
  })
});
