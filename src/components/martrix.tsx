import React, { FC } from "react"
import { Descriptions, DescriptionsProps } from "antd"
import { isValidReactNode } from "@help/typeUtils"
/**
 * 描述列表
 * 传入columns与dataSource即可使用
 * 支持采用transform自定义某一栏key的值（拥有错误元素处理兜底）
 */
export const MatrixTable: FC<MatrixTableProps<Column[]>> = ({
  columns,
  dataSource,
  transform = (_, data) => {
    if (!isValidReactNode(data)) return null
    return data
  },
  ...rest
}) => {
  return (
    <>
      <Descriptions column={1} {...rest}>
        {columns?.map((item) => {
          return (
            <Descriptions.Item label={item.label} key={item.key}>
              {transform(item, dataSource[item.key])}
            </Descriptions.Item>
          )
        })}
      </Descriptions>
    </>
  )
}

type ReactNode = React.ReactNode

interface Column {
  label: React.ReactNode
  key: string
}

type MatrixTableProps<T extends Column[]> = {
  columns: T
  dataSource: { [K in T[number]["key"]]: any }
  transform?: (column: Column, data: any) => ReactNode
} & DescriptionsProps
