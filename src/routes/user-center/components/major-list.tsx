import { Table } from "antd"
import React from "react"
import { tableColumns } from "./constants"

/** 志愿专业列表 */
const MajorList: React.FC = () => {
  return (
    <Table
      pagination={{
        pageSize: 4,
        total: 20
      }}
      columns={tableColumns}
      dataSource={[
        {
          key: 0,
          project: "计算机科学",
          minScore: "633",
          minRank: 1289
        }
      ]}
    />
  )
}

export default MajorList
