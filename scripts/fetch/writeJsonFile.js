const fs = require('fs')

module.exports = function writeJsonFile (file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(data, null, 2), error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}
