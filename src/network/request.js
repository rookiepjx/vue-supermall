import axios from 'axios'

// version 1.0
// export function request(config,success,failure){
//   const instance1 = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   instance1(config)
//       .then(res =>{
//         console.log(res);
//         success(res)
//       })
//       .catch(err =>{
//         console.log(err);
//         failure(err)
//       })
// }

// version 2.0
// export function request(config) {
//   return new Promise((resolve,reject) =>{
//     //创建axios实例
//     const instance1 = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     //真正的发送网络请求
//     instance1(config)
//         .then(res =>{
//           resolve(res)
//         })
//         .catch(err =>{
//           reject(err)
//         })
//   })
// }

// version 3.0
export function request(config) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/hy',
    //备用接口
    // baseURL:'http://106.54.54.237:8000/api/w1',
      timeout:5000
  })

  // 2、axios拦截器(请求拦截和响应拦截)

  //请求拦截
  instance.interceptors.request.use(config =>{

    //请求拦截的作用：a.对请求信息中不符合要求的信息进行修改
    //              b.请求时加入loading动画
    //              c.某些网络请求需要携带特殊信息如登录的token令牌
    console.log('请求拦截成功')
    //请求拦截成功后放行
    return config
  },err =>{
    console.log('请求拦截失败')
    return err
  })

  //响应拦截
  instance.interceptors.response.use(response =>{
    console.log('响应拦截成功');
    return response.data
  },err =>{
    console.log('响应拦截失败');
    return err
  })

  //因为axios本身返回的就是promise
  //3、真正的发送网络请求
  return instance(config)
}
