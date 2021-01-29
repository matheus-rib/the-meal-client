import errors from '@/lib/errors'
import axios from 'axios'
import qs from 'qs'
import interceptors from './interceptors'

const baseURL = process.env.VUE_APP_API_URL

const api = axios.create({
  baseURL,
  paramsSerializer: qs.stringify,
})

api.interceptors.response.use(
  interceptors.responseInterceptor.onSuccessInterceptor,
  interceptors.responseInterceptor.onErrorInterceptor(errors),
)

export default api
