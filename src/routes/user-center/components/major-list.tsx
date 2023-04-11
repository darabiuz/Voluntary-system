import { Table } from "antd"
import React from "react"

/** 志愿专业列表 */
const MajorList: React.FC = () => {
  return (
    <Table
      pagination={{
        pageSize: 4,
        total: 20
      }}
      columns={[
        {
          title: "志愿专业",
          key: "project"
        },
        {
          title: "去年最低收分线",
          key: "minScore"
        },
        {
          title: "去年最低排名",
          key: "minRank"
        }
      ]}
      dataSource={[
        {
          project: "计算机科学",
          minScore: "633",
          minRank: 1289
        }
      ]}
    ></Table>
  )
}

export default MajorList
