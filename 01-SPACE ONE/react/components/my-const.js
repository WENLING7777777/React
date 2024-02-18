export const API_SERVER = 'http://localhost:3005'

export const M_LIST = API_SERVER + '/member/api'
export const M_ADD = API_SERVER + '/member/add'
export const M_GET_ONE = API_SERVER + '/member/api/edit'
export const M_EDIT_ONE = API_SERVER + '/member/api/edit'
export const M_DEL_ONE = API_SERVER + '/member'

export const CITY_LIST = API_SERVER + '/city/api'
export const AREA_LIST = API_SERVER + '/city/area/api'

export const LOGIN = API_SERVER + '/login-jwt'
export const PROFILE = API_SERVER + '/member/profile'
//會員的收藏列表
export const COLLECTION = API_SERVER + '/member/collection'

export const EX_LIST = API_SERVER + '/exhibition/api'
export const EX_FALL = API_SERVER + '/exhibition/api/fall'
export const EX_ADD = API_SERVER + '/exhibition/cf/api/post'
export const EX_GET_ONE = API_SERVER + '/exhibition/cf/api'
//加入收藏
export const BLOG_FAV_ADD = API_SERVER + '/cfCollect/api/add-blog-fav' // post
//移除收藏
export const BLOG_FAV_REMOVE = API_SERVER + '/cfCollect/api/delete-blog-fav' // delete
//收藏列表
export const BLOG_FAV = API_SERVER + '/cfCollect/api/get-blog-fav' // get
