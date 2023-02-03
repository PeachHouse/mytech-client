import Axios from 'axios'

import { API_URL } from '@/config'

export const axios = Axios.create({
  baseURL: API_URL,
})

axios.defaults.withCredentials = true

axios.interceptors.request.use((config) => {
  config.headers = config.headers ?? {}
  config.headers.Accept = 'application/json'
  return config
})

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // const message = error.response?.data?.message || error.message
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // }

    return Promise.reject(error)
  }
)
