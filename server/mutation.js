const { Exam } = require('./schema/exam')
const { Topic } = require('./schema/topic')

exports.addExam = async (_, params) => {
  const exam = new Exam(params)

  await exam.save()

  return exam
}

exports.addTopic = async (_, params) => {
  const topic = new Topic(params)

  await topic.save()

  return topic
}

exports.updateTopic = async (_, { id, ...params }) => {
  const topic = await Topic.findById(id)

  Object.assign(topic, params)

  await topic.save()

  return topic
}
