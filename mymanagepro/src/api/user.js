import request from '@/utils/request.js'

// 获取图片验证码
export const getImgCode = ()=>{
    return request({
        url:'/api/getcode',
        method:'get'
    })
}

// 获取人员信息
export const getUserlist = () =>{
    return request('/role/list')
}