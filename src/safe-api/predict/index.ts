import { post } from ".."

/** 获取mbti专业详情api */
export const getMajorResultForMbti = (body: any) => {
  return post("api/mbti/matchMajors", body, undefined, true)
}

/** 获取院校推荐详情 */
export const getSchoolRecommendResult = (body: any) => {
  return post("recommend", body, undefined, true)
}
