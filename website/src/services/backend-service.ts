import { BACKEND_IP } from '../config/constants'
import axios from 'axios'

class BackendServiceClass {
  getHealth = async () => {
    await axios
      .get(`${BACKEND_IP}/health`)
      .then((x) => {
        console.log(x.status)
      })
      .catch((x) => {
        console.log('error', x.status)
      })
  }

  getLogin = async (username: string, password: string) => {
    return await axios
      .get(`${BACKEND_IP}/login?username=${username}&password=${password}`)
      .then((r) => {
        return r
      })
      .catch((e) => {
        console.log(e)
      })
  }

  getDatabaseConnectivity = async () => {
    return await axios
      .get(`${BACKEND_IP}/database`)
      .then((r) => {
        return r
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

const BackendService = new BackendServiceClass()

// module.exports = BackendService;
export default BackendService
