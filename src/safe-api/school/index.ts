import { post } from ".."

/** 查学校：获取院校列表 */
export const getSchoolDataList = (body: any) => {
  return post("api/school/schoolList ", body, {
    body: body.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}
