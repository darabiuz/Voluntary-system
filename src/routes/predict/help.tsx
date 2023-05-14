import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { dialog } from "@components/dialog"
import { FormItem } from "@components/help"
import { errorHandle } from "@help/errorUtils"
import { getMajorListForSchool } from "@safeApi/majors"
import { addWishList } from "@safeApi/wish-list"
import { Button, Form, Select, Space, message } from "antd"

export function arrayToObject(array: string[]) {
  const keys = ["dual_class", "985", "211"]
  let obj: any = {}

  keys.forEach((key) => {
    if (array?.includes(key)) {
      obj[key] = 1
    }
  })

  return obj
}

export const getInitProvinceLine = (batch: string, category: string) => {
  switch (batch) {
    case "batch1":
      return 535
    case "batch2":
      return category === "文科" ? 470 : 440
    case "batch3":
      return category === "文科" ? 570 : 530
    case "batch4":
      return 150
    case "batch5":
      return 0
    default:
      return 0
  }
}
export const handleAddWishList = async (school: string, batch: string) => {
  // 1. 获取options
  try {
    const res = await getMajorListForSchool({
      school,
      batch
    })
    const majorOptions = res?.list?.map((item: any) => {
      return {
        label: item,
        value: item
      }
    })
    dialog.form({
      title: `志愿簿添加: ${school}`,
      form: (
        <>
          {batch !== "batch3" && (
            <Form.List name="wishiMajorsList">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }, index) => {
                    if (index > 3) {
                      message.warning("超出专业数量添加范围")
                      return null
                    }
                    return (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <FormItem
                          {...restField}
                          name={[name, "wish"]}
                          label={`第 ${index + 1} 专业`}
                          style={{ width: "280px" }}
                          rules={[{ required: true, message: "请选择专业" }]}
                        >
                          <Select
                            placeholder="请选择"
                            options={majorOptions}
                          ></Select>
                        </FormItem>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    )
                  })}
                  <FormItem>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      添加志愿专业
                    </Button>
                  </FormItem>
                </>
              )}
            </Form.List>
          )}
        </>
      ),
      onOk: async (values, destroy) => {
        const majorWishList = values?.wishiMajorsList?.map(
          (item: any) => item?.wish
        )
        if (new Set(majorWishList).size !== majorWishList?.length) {
          // 说明有重复项
          message.warning("各志愿项不可重复")
          return
        }
        // 调用api添加到后台
        await addWishList({
          school,
          batch,
          majorWishList: majorWishList
        })
        // 关闭弹窗
        message.success("志愿添加成功")
        destroy && destroy()
      }
    })
  } catch (error) {
    errorHandle(error)
  }
}
