import request from '@/utils/request.js'

// 获取菜单列表
export const getMenuList=()=>{
    return request('/menu/getlist')
}