const mongoose = require('mongoose')

exports.Topic = mongoose.model('Topic', {
  examId: String,
  title: String,
  content: String,
  questions: [String],
})
