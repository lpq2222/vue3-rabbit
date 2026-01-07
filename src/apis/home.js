import httpInstance from '@/utils/http.js'

export function getBannerAPI() {
    return httpInstance({
        url:'/home/banner'
    })
}

export function getNewApi() {
  return httpInstance({ url: '/home/new' });
}