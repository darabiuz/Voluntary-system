// src/components/VolunteerForm.tsx
import { EnvironmentOutlined } from "@ant-design/icons"
import { MatrixTable } from "@components/martrix"
import MajorList from "./major-list"
import { Typography, Col, Collapse, Descriptions, Space, Table } from "antd"
import React from "react"
import { matrixColumns } from "./constants"
const { Panel } = Collapse
const { Title } = Typography

/** 志愿簿 */
const SchoolList: React.FC = () => {
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
  return (
    <Col span={16}>
      <Title level={5}>我的志愿簿</Title>
      <Collapse>
        {schools.map((school, index) => {
          console.log(school, 1111111)

          return (
            <Panel header={school.name} key={index}>
              <MatrixTable
                transform={(column, data) => {
                  if (column.key === "majors") return <MajorList />
                  return data
                }}
                columns={matrixColumns}
                dataSource={{ ...school }}
                column={1}
              />
            </Panel>
          )
        })}
      </Collapse>
    </Col>
  )
}

export default SchoolList
