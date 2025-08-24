import request from '@/utils/request'

<<<<<<< HEAD
// 注册接口啊的
=======
// 注册接口
>>>>>>> be36e2ac08318405f26c3e7047ece02e51fbfe82
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}
