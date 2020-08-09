const config = require('config')
const mongoose = require('mongoose');

module.exports = function() {
  const db = config.get('db')

  const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }

  mongoose.connect(db, options)
    .then(() => (`Connected to ${db}...`))
    .catch(err => console.error('Could not connect to database: ', err))
}
