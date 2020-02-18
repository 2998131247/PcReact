import axios from 'axios'
Object.defineProperties(axios, {
  $context: {
    get() {
      return process.env.NODE_ENV==='development'?'/api':'https://jsonplaceholder.typicode.com'
    }
  }
})

const http = axios.create({
  baseURL: axios.$context
});

// request拦截器
http.interceptors.request.use(config => {
  // 让每个请求携带token--['token']为自定义key
  console.log(window.store.getState())
  // Object.assign(config.headers, {
  //   'Authorization': token
  // })
  return config
}, error => {
  Promise.reject(error)
})

export default http;