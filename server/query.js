const { Exam } = require('./schema/exam')

exports.exam = (_, { id }) => Exam.findById(id)

exports.exams = () => Exam.find()
