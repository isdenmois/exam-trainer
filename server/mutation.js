const { Exam } = require('./schema/exam')

exports.addExam = async (_, params) => {
  const exam = new Exam(params)

  await exam.save()

  return exam
}
