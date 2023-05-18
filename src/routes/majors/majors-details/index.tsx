import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
import { Link, useParams } from "react-router-dom"
import { fetchMajorDetails, fetchRelatedSchoolForMajor } from "@safeApi/majors"
import { Button, List, Space } from "antd"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"

export const MajorsDetails: React.FC = () => {
  const param = useParams()
  const [total, setTotal] = useState<any>(0)
  const [dataSource, setDataSource] = useState([])

  const getSchoolList = async () => {
    const res = await fetchRelatedSchoolForMajor({
      majorId: param?.majorId
    })
    setDataSource(res?.data.list)
    setTotal(res?.data.total)
  }
  useEffect(() => {
    const majorId = param?.majorId
    console.log(majorId)
    getSchoolList()
  }, [])

  const handleClickForDetails = (schoolId: string, schoolName: string) => {
    window.open(`/schoolSearch/${schoolId}/${schoolName}`)
  }

  return (
    <EasyWrapper>
      <BlockTitle content={param.majorName} />
      <List
        itemLayout="horizontal"
        dataSource={dataSource}
        renderItem={(item: any) => {
          const data = item.school
          const { isNine, isTwo, dualName } = data
          const is985 = isNine === 1 ? "985" : ""
          const is211 = isTwo === 1 ? "211" : ""
          const isDualClass = dualName === "双一流" ? "双一流" : ""
          const featureObj = [is985, is211, isDualClass].filter((item) => item)
          const descriptionText = featureObj.join(" | ")

          return (
            <List.Item
              key={item.school.id}
              actions={[
                <Button
                  type="primary"
                  onClick={() => {
                    handleClickForDetails(data.schoolId, data.name)
                  }}
                >
                  查看详情
                </Button>
              ]}
            >
              <List.Item.Meta
                className={styles.listItem}
                title={
                  <Space>
                    <Link to="#" target="_blank" className={styles.title}>
                      {data.name}
                    </Link>
                    <span
                      className={styles.locationSpan}
                    >{`${data.cityName}${data.countryName}`}</span>
                  </Space>
                }
                description={descriptionText}
              />
            </List.Item>
          )
        }}
      />
    </EasyWrapper>
  )
}
