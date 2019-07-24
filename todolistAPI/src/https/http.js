import axios from 'axios';
let cancel ,promiseArr = {};

const service = axios.create({
  baseURL: '/api',
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  timeout: 5000
});

//请求拦截器
axios.interceptors.request.use(config => {
  if (promiseArr[config.url]) {
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  return config
}, error => {
  return Promise.reject(error)
});


//http response 拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

