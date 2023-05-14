import { post } from ".."

/** 获取专业详情api */
export const fetchMajorDetails = (body: any) => {
  return post("api/wishlist/details", body)
}

/** 获取院校专业列表 */
export const getMajorListForSchool = (body: any) => {
  return post("api/majorList", body)
}
