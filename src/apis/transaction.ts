import axios from 'axios'

const API_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:8081'

const PATH = `${API_URL}/transaction`

const SendTransaction = async (data: unknown) => {
  return axios.post(`${PATH}/send`, data)
}

const GetTransactions = async () => {
  return axios.get(`${PATH}`)
}

export { SendTransaction, GetTransactions }
