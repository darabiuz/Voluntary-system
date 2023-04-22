import { post } from ".."

/** 获取专业详情api */
export const fetchMajorDetails = (body: any) => {
  return post("/api/major/details", body)
}
