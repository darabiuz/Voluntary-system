import BlockTitle from "@components/block-title"
import EasyWrapper from "@components/easy-wrapper"
import React, { useEffect, useState } from "react"
import { Space, List, Button, Divider, Form, AutoComplete, Input } from "antd"
import styles from "./index.module.scss"
import { SearchOutlined } from "@ant-design/icons"
import { getMajorList, getRelatedMajorsList } from "@safeApi/majors"
import { debounce } from "lodash-es"
import { useForm } from "antd/es/form/Form"
import { errorHandle } from "@help/errorUtils"
import { filterEmptyValues } from "@help/formatUtils"
import { initPageInfo } from "@routes/constant"

const MajorsSearch: React.FC = () => {
  /** 院校信息 */
  const [ds, setDs] = useState<any>([])
  const [total, setTotal] = useState<any>(0)
  const [options, setOptions] = useState<{ value: string }[]>([])

  const [formApi] = useForm()
  /** 页面信息 */
  const [pageInfo, setPageInfo] = useState<PageInfoType>(initPageInfo)

  /** 查看专业开设院校详情 */
  const handleRelatedSchools = (majorId: string, majorName: string) => {
    window.open(`majorsSearch/${majorId}/${majorName}`)
  }

  // 获取专业列表数据
  const getMajorListData = async (value?: string) => {
    const param = new URLSearchParams(
      filterEmptyValues({
        ...pageInfo,
        majorName: value
      })
    )
    const res = await getMajorList(param)
    setDs(res?.data?.list)
    setTotal(res?.data?.total)
  }

  // 触发表单选择
  const onSelect = async (value: string) => {
    getMajorListData(value)
  }

  /** 获取模糊匹配专业列表 */
  const handleSearch = debounce(async (value: string) => {
    if (value) {
      const majorList = await getRelatedMajorsList(
        new URLSearchParams({ content: value })
      )
      setOptions(majorList?.data.map((major: string) => ({ value: major })))
    } else {
      setOptions([])
    }
  }, 500)

  // 页码信息更新
  const handlePageChange = (page: number, pageSize: number) => {
    setPageInfo({
      pageCurrent: page,
      pageSize: pageSize
    })
  }

  useEffect(() => {
    getMajorListData()
  }, [pageInfo])
  return (
    <EasyWrapper>
      <BlockTitle content={"查专业"} />
      <Divider orientation="left">专业列表</Divider>
      <Form form={formApi}>
        <Form.Item label="查询专业" name="major" style={{ width: "300px" }}>
          <Space.Compact block>
            <AutoComplete
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
              filterOption={false}
              placeholder="请输入专业"
            />
          </Space.Compact>
        </Form.Item>
      </Form>
      <List
        itemLayout="horizontal"
        dataSource={ds}
        pagination={{
          position: "bottom",
          align: "end",
          pageSize: pageInfo.pageSize,
          total,
          onChange: handlePageChange, // 当页面改变时触发这个函数
          pageSizeOptions: ["5", "10", "20", "50"]
        }}
        renderItem={(item: any) => (
          <List.Item
            key={item.id}
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  handleRelatedSchools(item.majorId, item.majorName)
                }}
              >
                开设院校详情
              </Button>
            ]}
          >
            <List.Item.Meta
              className={styles.listItem}
              title={
                <Space>
                  <span className={styles.title}>{item.majorName}</span>
                  <span className={styles.title}>{item.majorCode}</span>
                </Space>
              }
              description={
                <Space>
                  <span>{item.degree}</span>
                  <span>男女比例：{`${item.boyRate}/${item.girlRate}`}</span>
                  <span>学制：{item.limitYear}</span>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </EasyWrapper>
  )
}

export default MajorsSearch

interface PageInfoType {
  pageSize: number
  pageCurrent: number
}
