import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
import { useParams } from "react-router-dom"
import { Table } from "antd"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
import { MatrixTable } from "@components/martrix"
import Title from "antd/es/typography/Title"
import {
  majorColumns,
  majorData,
  schoolColumns,
  schoolData,
  schoolInfoColumns
} from "./constant"
import { FilterForm } from "./components/filter-form"
import {
  getSchoolDetailBaseInfo,
  getSchoolDetailLines,
  getSchoolDetailMajorLines
} from "@safeApi/school"
import { errorHandle } from "@help/errorUtils"
import { filterEmptyValues } from "@help/formatUtils"
import { initPageInfo } from "@routes/constant"

const initFilter = {
  subject: "理科",
  year: new Date().getFullYear() - 1
}

export const SchoolDetails: React.FC = () => {
  const param = useParams()
  const [pageInfo, setPageInfo] = useState<PageInfoType>(initPageInfo)
  const [schoolInfoDs, setSchoolInfoDs] = useState<any>([])
  const [schoolLineDs, setSchoolLineDs] = useState<any>([])
  const [schoolMajorLineDs, setSchoolMajorLineDs] = useState<any>([])
  const [filterSchool, setFilterSchool] = useState<FilterType>(initFilter)
  const [filterMajor, setFilterMajor] = useState<FilterType>(initFilter)
  const [total, setTotal] = useState<any>(0)

  const handlePageChange = (page: number, pageSize: number) => {
    setPageInfo({
      pageCurrent: page,
      pageSize: pageSize
    })
  }
  const getSchoolBaseInfo = async () => {
    try {
      const res = await getSchoolDetailBaseInfo({ schoolId: param?.schoolId })
      setSchoolInfoDs(res?.data?.school)
    } catch (e) {
      errorHandle(e)
    }
  }

  const getSchoolAdmissionLineScores = async () => {
    try {
      const res = await getSchoolDetailLines({
        schoolId: param?.schoolId,
        ...filterSchool
      })
      setSchoolLineDs(res?.data)
    } catch (e) {
      errorHandle(e)
    }
  }

  const getMajorAdmissionLineScores = async () => {
    try {
      const res = await getSchoolDetailMajorLines(
        new URLSearchParams(
          filterEmptyValues({
            schoolId: param?.schoolId,
            ...filterMajor,
            ...pageInfo
          })
        )
      )
      setSchoolMajorLineDs(res?.data?.list)
      setTotal(res?.data.total)
    } catch (e) {
      errorHandle(e)
    }
  }

  useEffect(() => {
    getSchoolBaseInfo()
  }, [])

  useEffect(() => {
    getSchoolAdmissionLineScores()
  }, [filterSchool])

  useEffect(() => {
    getMajorAdmissionLineScores()
  }, [filterMajor, pageInfo])

  return (
    <EasyWrapper>
      <BlockTitle content={param.schoolName}></BlockTitle>
      <Title level={5}>院校简介</Title>
      <MatrixTable
        columns={schoolInfoColumns}
        dataSource={schoolInfoDs}
        column={3}
      />
      <Title level={5}>历年收分线</Title>
      <FilterForm
        onYearsChange={(v) => {
          setFilterSchool((prev) => ({ ...prev, year: Number(v) }))
        }}
        onSubjectChange={(v) => {
          setFilterSchool((prev) => ({ ...prev, subject: v }))
        }}
      />
      {/* todo: 抽取一个easyTable，获取数据，展示数据混为一体，不需要单独定义状态 */}
      <Table
        dataSource={schoolLineDs}
        columns={schoolColumns}
        pagination={false}
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
        dataSource={schoolMajorLineDs}
        columns={majorColumns}
        pagination={{
          pageSize: pageInfo.pageSize,
          total,
          onChange: handlePageChange, // 当页面改变时触发这个函数
          pageSizeOptions: ["5", "10", "20", "50"]
        }}
      />
    </EasyWrapper>
  )
}

interface FilterType {
  subject: string
  year: number
}
interface PageInfoType {
  pageSize: number
  pageCurrent: number
}
