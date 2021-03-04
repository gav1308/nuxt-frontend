import axios from 'axios';
// import router from '../router';

const Service = axios.create({
  // baseURL: 'http://base.laraveldev.com/',
  // baseURL: 'http://172.31.9.88/test-api/public/api',
  timeout: 5000, // 請求超時設置
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
})

// request攔截器
Service.interceptors.request.use(config => {
  // 如果有token每一個請求都加上token;
  let token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
}, error => {
  return Promise.reject(error);
})

// response攔截器
Service.interceptors.response.use(response => {
    return response;
}, error => {
  const {
    response
  } = error;

  if (response) {
    errorHandle(response.status, response.data.error);
    return Promise.reject(error);
  } else {
    return Promise.reject(error);
  }
})

// const errorHandle = (status, msg) => {
//   switch (status) {
//     case 400:
//       // 如果接回來是400就清除token跟登出
//       localStorage.removeItem('token');
//       router.replace({
//         path: '/auth/login',
//       })

//       break;
//     case 401:
//       console.log(msg);
//       break;
//     default:
//   }
// }

export default Service;
