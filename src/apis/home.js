import httpInstance from '@/utils/http.js'

export function getBannerAPI() {
    return httpInstance({
        url:'/home/banner'
    })
}
//获取新鲜好物
export function getNewApi() {
  return httpInstance({ url: '/home/new' });
}

//获取人气推荐
export function getHotApi() {
  return httpInstance({ url: '/home/hot' });
}