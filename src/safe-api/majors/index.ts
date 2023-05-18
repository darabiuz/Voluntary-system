import { post } from ".."

/** 获取专业详情api */
export const fetchMajorDetails = (body: any) => {
  return post("api/wishlist/details", body)
}

/** 获取专业开设院校列表 */
export const fetchRelatedSchoolForMajor = (body: any) => {
  return post("api/major/relatedSchools", body)
}

/** 获取专业模糊搜索 */
export const getRelatedMajorsList = (body: any) => {
  return post("api/major/matchMajors", body, {
    body: body.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}

/** 获取专业列表 */
export const getMajorList = (body: any) => {
  return post("api/major/majorsList", body, {
    body: body.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}

/** 用于+志愿簿：获取院校所开设的专业列表 */
export const getMajorListForSchool = (body: any) => {
  return post("api/majorList", body, undefined, true)
}
