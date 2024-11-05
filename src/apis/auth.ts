import { ILogin, IRegister } from '@/utils/interface'
import axios from 'axios'
const API_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:8081'

const PATH = `${API_URL}/auth`

const Login = async (data: ILogin) => {
  return axios.post(`${PATH}/login`, data)
}

const Register = async (data: IRegister) => {
  return axios.post(`${PATH}/register`, data)
}

export { Login, Register }
