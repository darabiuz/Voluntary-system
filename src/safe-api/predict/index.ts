import { post } from ".."

/** 获取专业详情api */
export const getMajorResultForMbti = (body: any) => {
  return post("/api/predict/mbti", body)
}

/** 获取院校推荐详情 */
export const getSchoolRecommendResult = (body: any) => {
  return post("recommend", body)
}
