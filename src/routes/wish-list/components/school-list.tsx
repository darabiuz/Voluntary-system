// src/components/VolunteerForm.tsx
import { MatrixTable } from "@components/martrix"
import MajorList from "./major-list"
import { Collapse, Space } from "antd"
import React from "react"
import { matrixColumns } from "../constants"
const { Panel } = Collapse
const schools = [
  {
    name: "北京大学",
    type: "985, 双一流",
    location: "北京市",
    majors: [
      {
        name: "计算机科学与技术",
        score: 650,
        rank: 10
      }
    ],
    admissionProbability: "60%"
  },
  {
    name: "清华大学",
    type: "985, 双一流",
    location: "北京市",
    majors: [
      {
        name: "软件工程",
        score: 640,
        rank: 20
      }
    ],
    admissionProbability: "50%"
  }
]
/** 志愿簿 */
const SchoolList: React.FC = () => {
  return (
    <Space>
      <Collapse style={{ width: "600px" }}>
        {schools.map((school, index) => {
          return (
            <Panel header={school.name} key={index}>
              <MatrixTable
                transform={(column, data) => {
                  if (column.key === "majors") return <MajorList />
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
