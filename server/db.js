const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })

exports.db = mongoose.connection
