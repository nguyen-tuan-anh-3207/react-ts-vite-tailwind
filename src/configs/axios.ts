import axios from 'axios'

import { API_URL } from '@/constants/environment'

import { getLocalStorage } from '@/hooks/localStorage'

type TParams = Record<string, unknown>

const initHeadersRequest = (paramsHeader: TParams = {}) => {
  const configHeader: Record<string, unknown> = {
    'Content-Type': 'application/json',
    ...paramsHeader,
  }

  const token = getLocalStorage('@token')

  if (token) {
    configHeader.Authorization = `Bearer ${token}`
  }

  return configHeader
}

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: initHeadersRequest(),
  timeout: 9999,
})

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export const axiosProvider = (params: TParams) => {
  return axios.create({
    baseURL: API_URL,
    headers: initHeadersRequest(params),
    timeout: 9999,
  })
}

export default axiosClient
