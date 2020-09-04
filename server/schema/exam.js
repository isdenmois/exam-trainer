const mongoose = require('mongoose')

exports.Exam = mongoose.model('Exam', {
  title: String,
  image: String,
  description: String,
})
