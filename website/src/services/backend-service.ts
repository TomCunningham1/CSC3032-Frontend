import { BACKEND_IP } from '../config/constants'
import axios from 'axios'
import scenarioName from '../config/scenarioName'

const headers = {
  'x-api-key':
    process.env.API_KEY || 'QJoaYqImX42W68e9eHBSD47Uw3Pcw7644f2sPQVA',
}

const api_key =
  process.env.API_KEY || 'QJoaYqImX42W68e9eHBSD47Uw3Pcw7644f2sPQVA'

class BackendServiceClass {
  getHealth = async () => {
    return await axios.get(`${BACKEND_IP}/health`)
  }

  emailResults = async (
    target: string,
    score: number,
    numberOfQuestions: number,
    numberOfAnsweredQuestions: number,
    correctAnswers: number,
    wrongAnswers: number,
    hintsUsed: number,
    fiftyFiftyUsed: number
  ) => {
    return await axios.post(`${BACKEND_IP}/results/send-email`, {
      target: target,
      score: score,
      numberOfQuestions: numberOfQuestions,
      numberOfAnsweredQuestions: numberOfAnsweredQuestions,
      correctAnswers: correctAnswers,
      wrongAnswers: wrongAnswers,
      hintsUsed: hintsUsed,
      fiftyFiftyUsed: fiftyFiftyUsed,
      headers: {
        ...headers,
      },
    })
  }

  saveResults = async (
    username: string,
    scenarioName: string,
    score: number,
    numberOfQuestions: number,
    numberOfAnsweredQuestions: number,
    correctAnswers: number,
    wrongAnswers: number,
    hintsUsed: number,
    fiftyFiftyUsed: number,
    time: number
  ) => {
    return await axios.post(
      `${BACKEND_IP}/results/save-results`,
      {
        username: username,
        scenarioName: scenarioName,
        score: score,
        numberOfQuestions: numberOfQuestions,
        numberOfAnsweredQuestions: numberOfAnsweredQuestions,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
        hintsUsed: hintsUsed,
        fiftyFiftyUsed: fiftyFiftyUsed,
        time: time,
      },
      {
        headers: {
          ...headers,
        },
      }
    )
  }

  getResults = async (scenarioName: string) => {
    return await axios.post(
      `${BACKEND_IP}/results/get-results?scenarioName=${scenarioName}`,
      {},
      {
        headers: {
          'x-api-key': api_key,
        },
      }
    )
  }

  writeScenario = async (scenarioName: string, scenarioQuestions: string) => {
    console.info(scenarioQuestions)
    return await axios.post(
      `${BACKEND_IP}/admin/write?scenarioName=${scenarioName}`,
      { questions: scenarioQuestions },
      {
        headers: {
          'x-api-key': api_key,
        },
      }
    )
  }

  readScenario = async (scenarioName: string) => {
    return await axios.get(
      `${BACKEND_IP}/admin/read?scenarioName=${scenarioName}`,
      {
        headers: {
          'x-api-key': api_key,
        },
      }
    )
  }

  deleteScenario = async (scenarioName: string) => {
    return await axios.get(
      `${BACKEND_IP}/admin/delete?scenarioName=${scenarioName}`,
      {
        headers: {
          'x-api-key': api_key,
        },
      }
    )
  }

  resetLeaderboard = async () => {
    return await axios.get(`${BACKEND_IP}/admin/reset-leaderboard`, {
      headers: {
        'x-api-key': api_key,
      },
    })
  }

  getAllScenarios = async () => {
    return await axios.get(`${BACKEND_IP}/admin/get-all`, {
      headers: {
        'x-api-key': api_key,
      },
    })
  }
}

const BackendService = new BackendServiceClass()

export default BackendService
