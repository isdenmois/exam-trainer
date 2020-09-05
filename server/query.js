const { Exam } = require('./schema/exam')
const { Topic } = require('./schema/topic')

exports.exam = (_, { id }) => Exam.findById(id)
exports.exams = () => Exam.find()

exports.topic = (_, { id }) => Topic.findById(id)
exports.topics = (_, { examId }) => Topic.find({ examId })
