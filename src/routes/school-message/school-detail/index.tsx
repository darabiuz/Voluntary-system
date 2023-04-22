import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
import { Form, Link, useParams } from "react-router-dom"
import { fetchMajorDetails } from "@safeApi/majors"
import { Button, Descriptions, List, Select, Space, Table } from "antd"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
import { MatrixTable } from "@components/martrix"
import Title from "antd/es/typography/Title"
import { majorColumns, majorData, schoolColumns, schoolData } from "./constant"
import { FilterForm } from "./components/filter-form"

const initFilter = {
  subject: "理科",
  year: new Date().getFullYear() - 1
}

export const SchoolDetails: React.FC = () => {
  const param = useParams()
  const [filterSchool, setFilterSchool] = useState<FilterType>(initFilter)
  const [filterMajor, setFilterMajor] = useState<FilterType>(initFilter)

  useEffect(() => {
    const schoolId = param?.schoolId
    //   todo:发送请求查询
    // fetchMajorDetails({ majorId })
  }, [])

  /** todo:
   * 获取学校历年收分线和各专业收分线
   */
  const getSchoolAdmissionScores = () => {}
  const getMajorAdmissionScores = () => {}

  useEffect(() => {
    getMajorAdmissionScores()
  }, [filterMajor])

  useEffect(() => {
    getSchoolAdmissionScores()
  }, [filterSchool])

  return (
    <EasyWrapper>
      <BlockTitle content={param.schoolName}></BlockTitle>
      {/* todo:简介里面的数据，院校特色之类的，通过record参数从上面一级取 */}
      <Descriptions title="院校简介">
        <Descriptions.Item label="院校特色">国家重点实验室</Descriptions.Item>
        <Descriptions.Item label="院校类型">双一流</Descriptions.Item>
        <Descriptions.Item label="是否为985/211">是</Descriptions.Item>
      </Descriptions>
      <Title level={5}>历年收分线</Title>
      <FilterForm
        onYearsChange={(v) => {
          setFilterSchool((prev) => ({ ...prev, year: Number(v) }))
        }}
        onSubjectChange={(v) => {
          setFilterSchool((prev) => ({ ...prev, subject: v }))
        }}
      />
      {/* todo: 抽取一个easyWrapper，获取数据，展示数据混为一体，不需要单独定义状态 */}
      <Table
        dataSource={schoolData}
        columns={schoolColumns}
        pagination={{ pageSize: 5 }}
      />
      <Title level={5}>各专业收分线</Title>
      <FilterForm
        onYearsChange={(v) => {
          setFilterMajor((prev) => ({ ...prev, year: Number(v) }))
        }}
        onSubjectChange={(v) => {
          setFilterMajor((prev) => ({ ...prev, subject: v }))
        }}
      />
      <Table
        dataSource={majorData}
        columns={majorColumns}
        pagination={{ pageSize: 5 }}
      />
    </EasyWrapper>
  )
}

interface FilterType {
  subject: string
  year: number
}

{
  /*  现在需要一个界面，用于展示院校的详细信息，请帮我用代码实现，界面内容为
      1. 顶部标题：表示当前学校名称 
      2. 院校简介：包含院校特色，院校类型，是否为985/211等基础信息，这一块布局稍微美观一点
      3. 学校历年收分线，标题为历年收分线
        3.1  以表格形式展示，表头分别为：学校名称，年份，录取批次，文理科，招生类型，最低分/排名，省控线
        3.2  表格上方带有fiter筛选项，筛选内容为年份（2020,2011,2022）和 科目（文科，理科），这两个都是必选项，所以表格中的内容只可能出现同一个年份的
        3.3  表格数据通过接口获得，接口名称为getSchoolDetails
        3.4  该部分占据一面的一部分而已，做分页，最多显示5条
      4. 学院开设的专业详情，标题为各专业收分线
        4.1 以表格形式展示，表头分别为：专业名称，年份，平均分，最高分，最低分，最低位次，录取批次，文理科
        4.2 表格上方带有fiter筛选项，筛选内容为年份（2020,2011,2022）和 科目（文科，理科），这两个都是必选项，所以表格中的内容只可能出现同一个年份的
        4.3  该部分占据一面的一部分而已，做分页，最多显示5条 */
}
