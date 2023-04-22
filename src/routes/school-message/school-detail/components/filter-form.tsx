import React, { useEffect, useState } from "react"
import { Form } from "react-router-dom"
import { Select, Space } from "antd"
import FormItem from "antd/es/form/FormItem"
import { subjectOptions, yearsOptions } from "../constant"

interface FilterFormType {
  onYearsChange: (value: number) => void
  onSubjectChange: (value: string) => void
}
export const FilterForm: React.FC<FilterFormType> = ({
  onYearsChange,
  onSubjectChange
}) => {
  return (
    <Form>
      <Space>
        <FormItem>
          <Select
            defaultValue={new Date().getFullYear() - 1}
            onChange={(value) => onYearsChange(value)}
            options={yearsOptions}
          />
        </FormItem>
        <FormItem>
          <Select
            defaultValue="文科"
            onChange={(value) => onSubjectChange(value)}
            options={subjectOptions}
          />
        </FormItem>
      </Space>
    </Form>
  )
}
