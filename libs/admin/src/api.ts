import axios, { AxiosResponse } from 'axios'
import { camelizeKeys } from 'humps'

const api = axios.create({ baseURL: 'https://msmtestdata.s3.amazonaws.com/' })

// Axios middleware to convert all api responses to camelCase
api.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers['content-type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data)
  }
  return response
})

// Axios middleware to convert all api requests to snake_case
// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   const newConfig = { ...config }
//   newConfig.url = `api/${config.url}`
//   if (newConfig?.headers?['Content-Type'] === 'multipart/form-data')
//     return newConfig
//   if (config.params) {
//     newConfig.params = decamelizeKeys(config.params)
//   }
//   if (config.data) {
//     newConfig.data = decamelizeKeys(config.data)
//   }
//   return newConfig
// })
export default api
