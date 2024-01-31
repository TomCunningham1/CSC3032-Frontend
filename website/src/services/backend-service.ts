import { BACKEND_IP } from '../config/constants'
import axios from 'axios'

class BackendServiceClass {
  getHealth = async () => {
    return await axios.get(`${BACKEND_IP}/health`)
  }

  loginUser = async (email: string, password: string) => {
    const data = {
      email: email,
      password: password,
    }
    return await axios.post(`${BACKEND_IP}/login`, data, {
      withCredentials: false,
    })
  }

  registerUser = async (
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
  ) => {
    return await axios.post(`${BACKEND_IP}/register`, {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
    })
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
    return await axios.post(`${BACKEND_IP}/send-email`, {
      target: target,
      score: score,
      numberOfQuestions: numberOfQuestions,
      numberOfAnsweredQuestions: numberOfAnsweredQuestions,
      correctAnswers: correctAnswers,
      wrongAnswers: wrongAnswers,
      hintsUsed: hintsUsed,
      fiftyFiftyUsed: fiftyFiftyUsed,
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
    fiftyFiftyUsed: number
  ) => {
    return await axios.post(`${BACKEND_IP}/save-results`, {
      username: username,
      scenarioName: scenarioName,
      score: score,
      numberOfQuestions: numberOfQuestions,
      numberOfAnsweredQuestions: numberOfAnsweredQuestions,
      correctAnswers: correctAnswers,
      wrongAnswers: wrongAnswers,
      hintsUsed: hintsUsed,
      fiftyFiftyUsed: fiftyFiftyUsed,
    })
  }

  getResults = async (
    scenarioName: string,  
  ) => {
    return await axios.post(`${BACKEND_IP}/get-results?scenarioName=${scenarioName}`, )
  }
}

const BackendService = new BackendServiceClass()

export default BackendService
