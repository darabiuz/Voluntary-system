import React, { useState, useEffect } from "react"
import {
  Table,
  Select,
  Input,
  Button,
  Space,
  Form,
  Tabs,
  TableProps
} from "antd"
import { SorterResult } from "antd/lib/table/interface"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
import { columns } from "../constant"
import {
  data,
  provinces,
  provincesOptions,
  types,
  typesOptions
} from "@routes/school-message/constant"
import FormItem from "antd/es/form/FormItem"

export const SchoolRank: React.FC<{}> = () => {
  const [form] = Form.useForm()
  const [filteredData, setFilteredData] = useState(data)
  useEffect(() => {}, [])

  const handleSearch = (values: any) => {
    // 根据搜索条件筛选数据
    // const { region, schoolType } = values
    // setFilteredData(
    //   data.filter(
    //     (item) => item.region === region && item.schoolType === schoolType
    //   )
    // )
  }

  const handleTableChange = () =>
    // pagination,
    // filters,
    // sorter: SorterResult<any> | SorterResult<any>[]
    {
      // 处理表格排序
      // ...
    }

  return (
    <>
      <Form form={form} onFinish={handleSearch}>
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
        onChange={handleTableChange}
        rowKey="id"
      />
    </>
  )
}
