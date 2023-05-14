import { post } from ".."

/** +志愿簿 */
export const addWishList = (body: any) => {
  return post("api/wishlist/add", body)
}

/** 获取志愿簿列表 */
export const getWishListDetails = (body: any) => {
  return post("api/wishlist/details", body)
}
