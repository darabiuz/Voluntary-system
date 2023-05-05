import React, { useState, useEffect } from "react"
import { Table, Select, Space, Form } from "antd"
import { columns } from "../constant"
import {
  data,
  provincesOptions,
  typesOptions
} from "@routes/school-message/constant"
import FormItem from "antd/es/form/FormItem"

export const MajorRank: React.FC<{}> = () => {
  const [form] = Form.useForm()
  const [filteredData, setFilteredData] = useState(data)
  useEffect(() => {}, [])

  return (
    <>
      <Form form={form}>
        <Space>
          <FormItem name="region" label="地区">
            <Select placeholder="请选择地区" options={provincesOptions} />
          </FormItem>
          <FormItem name="schoolType" label="学校所属类型">
            <Select placeholder="请选择学校所属类型" options={typesOptions} />
          </FormItem>
        </Space>
      </Form>
      <Table
        dataSource={filteredData}
        columns={columns}
        scroll={{ x: "max-content" }}
        pagination={{ pageSize: 20 }}
        rowKey="id"
      />
    </>
  )
}
