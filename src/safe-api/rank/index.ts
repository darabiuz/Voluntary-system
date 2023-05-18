import { post } from ".."

/** 获取院校排名列表 */
export const getSchoolRankList = (body: any) => {
  return post("api/rank/school", body, {
    body: body.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}
