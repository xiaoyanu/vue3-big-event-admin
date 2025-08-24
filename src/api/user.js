import request from '@/utils/request'

// 注册接口啊
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}
