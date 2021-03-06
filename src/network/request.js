import axios from 'axios'

export function request(config) {
  const instance=axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  instance.interceptors.request.use(
    aaa => {
      return aaa
    },
    err => {
      return err
    }
  )
  instance.interceptors.response.use(
    bbb => {
      return bbb.data
    },
    err => {
      return err
    }
  )
  return instance(config)
}
