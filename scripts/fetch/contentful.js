require('dotenv').load()

const { createClient } = require('contentful')

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID
} = process.env

if (typeof CONTENTFUL_ACCESS_TOKEN === 'undefined') {
  throw new Error('process.env.CONTENTFUL_ACCESS_TOKEN is undefined')
}
if (typeof CONTENTFUL_SPACE_ID === 'undefined') {
  throw new Error('process.env.CONTENTFUL_SPACE_ID is undefined')
}

module.exports = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE_ID
})
