import { EasySearch } from "@components/easy-search/easy-search"
import { Button, Card, Space, Table, Tabs, message } from "antd"
import { FC, useEffect, useRef, useState } from "react"
import {
  TabItemEnum,
  searchColumns,
  tabItemOptions,
  tableColumns
} from "../constant"
import styles from "../index.module.scss"
import { useForm } from "antd/es/form/Form"
import { filterEmptyValues } from "@help/formatUtils"
import { arrayToObject, getInitProvinceLine } from "../help"
import { getSchoolRecommendResult } from "@safeApi/predict"
import { errorHandle } from "@help/errorUtils"

const SchoolRecommendCard: FC = () => {
  const [formApi] = useForm()
  const [tabItem, setTabItem] = useState<string>("稳妥")
  const [hasMajor, setHasMajor] = useState<boolean>(false)
  const [batch, setBatch] = useState<string>("batch1")
  const [dataSource, setDataSource] = useState()
  const recommendResult = useRef()

  const handleSubmit = async () => {
    try {
      await formApi.validateFields()
    } catch (errorInfo) {
      message.warning("请检查表单输入")
      return
    }

    const params = filterEmptyValues(formApi.getFieldsValue())
    if (Object.keys(params).length === 0) {
      message.warning("请输入预测信息")
      return
    }
    const {
      score,
      rank,
      category,
      batch,
      feature,
      type,
      province,
      majorFavor
    } = params
    setHasMajor(majorFavor !== undefined)
    setBatch(batch)

    const description = arrayToObject(params?.["feature"])
    const filterConfig = filterEmptyValues({
      description,
      province,
      type
    })

    await getSchoolRecommendResult({
      score: Number(score),
      category,
      batch,
      prov_control_line: getInitProvinceLine(batch, category),
      filterConfig
    }).then(
      (res) => {
        setDataSource(res?.[tabItem])
        recommendResult.current = res
      },
      (e) => errorHandle(e)
    )
  }

  useEffect(() => {
    setDataSource(recommendResult.current?.[tabItem])
  }, [tabItem])

  return (
    <Space align={"start"} className={styles.bottomSpace} size={30}>
      <Card title="预测信息收集" bordered={false} style={{ width: 350 }}>
        <EasySearch columns={searchColumns} formApi={formApi} />
        <Button
          type="primary"
          onClick={handleSubmit}
          style={{ float: "right" }}
        >
          一键推荐
        </Button>
      </Card>
      <div className={styles.list}>
        <Tabs
          defaultActiveKey={TabItemEnum.Moderate}
          items={tabItemOptions}
          onChange={(value) => {
            setTabItem(value)
          }}
        />
        <Table
          dataSource={dataSource}
          columns={tableColumns(hasMajor, batch)}
          scroll={{ x: "max-content" }}
          pagination={{ pageSize: 3 }}
          rowKey="schoolId"
          bordered
          locale={{
            emptyText: (
              <div className={styles.emptyText}>
                {`这个分数暂无可${tabItem}的学校哦`}
              </div>
            )
          }}
        />
      </div>
    </Space>
  )
}
export default SchoolRecommendCard
