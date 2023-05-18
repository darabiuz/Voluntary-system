import BlockTitle from "@components/block-title"
import EasyWrapper from "@components/easy-wrapper"
import React, { useEffect, useState } from "react"
import EasyFilter from "./components/easy-filter"
import { filterData } from "./constant"
import { Space, List, Button, Divider } from "antd"
import styles from "./index.module.scss"
import { errorHandle } from "@help/errorUtils"
import { getSchoolDataList } from "@safeApi/school"
import { filterEmptyValues } from "@help/formatUtils"
import { handleAddWishList } from "@routes/predict/help"
import { initPageInfo } from "@routes/constant"

const SchoolSearch: React.FC = () => {
  /** 院校信息 */
  const [ds, setDs] = useState<any>([])
  const [total, setTotal] = useState<any>(0)
  /** 筛选对象，默认为全部 */
  const [filters, setFilters] = useState<Filters>({
    province: "全部",
    feature: 0,
    type: "全部"
  })
  /** 页面信息 */
  const [pageInfo, setPageInfo] = useState<PageInfoType>(initPageInfo)

  const handleFilterChange = (value: string, key: string) => {
    setPageInfo((prev) => ({ ...prev, pageCurrent: 1 }))
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handlePageChange = (page: number, pageSize: number) => {
    setPageInfo({
      pageCurrent: page,
      pageSize: pageSize
    })
  }

  const handleClickForDetails = (schoolId: string, schoolName: string) => {
    window.open(`schoolSearch/${schoolId}/${schoolName}`)
  }

  const getSchoolList = async () => {
    try {
      const param = filterEmptyValues(
        {
          ...filters,
          ...pageInfo
        },
        { filterNumber: true }
      )
      console.log({ ...param, feature: filters.feature })

      const res = await getSchoolDataList(new URLSearchParams(param))
      setDs(res?.data?.list)
      setTotal(res?.data.total)
    } catch (error) {
      errorHandle(error)
    }
  }

  useEffect(() => {
    getSchoolList()
  }, [filters, pageInfo])

  return (
    <EasyWrapper>
      <BlockTitle content={"查学校"} />
      <Space direction="vertical">
        {filterData?.map((filter) => (
          <EasyFilter
            options={filter.options}
            value={filters[filter.key]}
            handleChange={handleFilterChange}
            title={filter.title}
            key={filter.key}
            filterKey={filter.key}
          />
        ))}
      </Space>
      <Divider orientation="left">院校列表</Divider>
      <List
        itemLayout="horizontal"
        dataSource={ds}
        pagination={{
          position: "bottom",
          align: "end",
          pageSize: pageInfo.pageSize,
          current: pageInfo.pageCurrent,
          total,
          onChange: handlePageChange, // 当页面改变时触发这个函数
          pageSizeOptions: ["5", "10", "20", "50"]
        }}
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
              key={data.name}
              actions={[
                <Button
                  type="primary"
                  onClick={() => {
                    handleAddWishList(data.name)
                  }}
                >
                  +志愿簿
                </Button>,
                <Button
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
                    <span className={styles.title}>{data.name}</span>
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

export default SchoolSearch

interface Filters {
  [key: string]: string | undefined | number
}
interface PageInfoType {
  pageSize: number
  pageCurrent: number
}
