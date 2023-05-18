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

/** 院校详情：获取基本信息 */
export const getSchoolDetailBaseInfo = (body: any) => {
  return post("api/school/details/descriptions ", body)
}
/** 院校详情：获取历年收分线 */
export const getSchoolDetailLines = (body: any) => {
  return post("api/school/details/admissionLines ", body)
}
/** 院校详情：获取历年各专业收分线 */
export const getSchoolDetailMajorLines = (body: any) => {
  return post("api/school/details/majorLines", body, {
    body: body.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}
