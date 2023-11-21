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
}

const BackendService = new BackendServiceClass()

// module.exports = BackendService;
export default BackendService
