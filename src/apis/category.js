import request from '@/utils/http'

export function getCategoryAPI(id) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}

// 获取二级分类列表数据
export function getCategoryFilterAPI(id) {
  return request('/category/sub/filter', { params: { id } });
}

// 获取导航数据
export function getSubCategoryAPI(data) {
  return request('/category/goods/temporary', { method: 'POST', data });
}