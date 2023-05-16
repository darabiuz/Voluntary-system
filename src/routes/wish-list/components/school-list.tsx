// src/components/VolunteerForm.tsx
import { MatrixTable } from "@components/martrix"
import MajorList from "./major-list"
import { Collapse, Space } from "antd"
import React, { useEffect, useState } from "react"
import { matrixColumns } from "../constants"
import { fetchMajorDetails } from "@safeApi/majors"
import { errorHandle } from "@help/errorUtils"
import { getWishListDetails } from "@safeApi/wish-list"
const { Panel } = Collapse

/** 志愿簿 */
const SchoolList: React.FC = () => {
  const [dataSource, setDataSource] = useState([])

  const getDataSource = async () => {
    try {
      const res = await getWishListDetails({})
      setDataSource(res?.list)
    } catch (error) {
      errorHandle(error)
    }
  }
  useEffect(() => {
    // 根据用户的id获取志愿簿
    getDataSource()
  }, [])
  return (
    <Space>
      <Collapse style={{ width: "600px" }}>
        {dataSource?.map((school: any, index: number) => {
          return (
            <Panel header={school.school} key={index}>
              <MatrixTable
                transform={(column, data) => {
                  if (column.key === "wishMajorList")
                    return <MajorList data={data} />
                  return data ? data.toString() : ""
                }}
                columns={matrixColumns}
                dataSource={{ ...school }}
                column={1}
              />
            </Panel>
          )
        })}
      </Collapse>
      <div style={{ width: "300px", background: "red" }}>111</div>
    </Space>
  )
}

export default SchoolList
