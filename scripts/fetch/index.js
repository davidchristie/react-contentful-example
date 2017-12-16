const path = require('path')

const contentful = require('./contentful')
const writeJsonFile = require('./writeJsonFile')

contentful.getEntries()
  .then(content => {
    writeJsonFile(path.resolve('content.json'), content)
  })
