import ddosQuestions from './questions-ddos.json'
import sqlInjection from './questions-sql-injection.json'
import crossSiteScripting from './questions-cross-site.json'
import bufferQuestions from './questions-buffer.json'

interface QuestionInterface {
    title: string;
    questions: object;
}

const questions: QuestionInterface[] = [
    sqlInjection as unknown as QuestionInterface,
    crossSiteScripting as unknown as QuestionInterface,
    bufferQuestions as unknown as QuestionInterface,
    ddosQuestions as unknown as QuestionInterface
    ]

export default questions
