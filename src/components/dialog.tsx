/** 设计一个弹窗面板
 * 专门设置给表单模式的
 * 1. 点击右上角可以关闭
 * 2. 点击确认/取消，执行onsuccess，onCancle回调，
 * 3. 点击
 * 4. 自动loading
 */
import React, { useState } from "react"
import { Form, FormInstance, Modal, ModalFuncProps, message } from "antd"
import { ComponentT, showComponents } from "./help"
import { errorHandle } from "@help/errorUtils"
import { useForm } from "antd/es/form/Form"

const form = function ({
  title = "弹窗",
  okText = "确认",
  cancelText = "取消",
  onOk,
  onCancel,
  form,
  formApi,
  initialValues = {},
  width
}: FormConfigProps) {
  const FormModal = ({ destroy }: ComponentT) => {
    const [formRef] = useForm()
    const [loading, setLoading] = useState<boolean>(false)
    const handleOk = async (destroy: () => void) => {
      try {
        setLoading(true)
        const values = await (formApi || formRef).getFieldsValue()
        await (formApi || formRef).validateFields()
        await onOk?.(values, destroy)
      } catch (e) {
        // errorHandle(e)
      } finally {
        setLoading(false)
      }
    }

    const handleCancel = (destroy: () => void) => {
      if (onCancel) {
        onCancel(destroy)
      }
      destroy()
    }

    return (
      <Modal
        title={title}
        open={true}
        onOk={() => handleOk(destroy)}
        onCancel={() => {
          handleCancel(destroy)
        }}
        okText={okText}
        cancelText={cancelText}
        confirmLoading={loading}
        width={width}
      >
        <Form form={formApi || formRef} initialValues={initialValues}>
          {/* 根据您的需求添加表单项，或根据 config 中的参数动态生成表单项 */}
          {form}
        </Form>
      </Modal>
    )
  }

  return showComponents({ Component: FormModal })
}

const confirm = function ({ ...props }: ModalFuncProps) {
  Modal.confirm({
    ...props
  })
}
const warn = function ({ ...props }: ModalFuncProps) {
  Modal.warn({
    ...props
  })
}
const success = function ({ ...props }: ModalFuncProps) {
  Modal.success({
    ...props
  })
}

export const dialog = {
  form,
  confirm,
  warn,
  success
}

interface FormConfigProps {
  title?: string
  okText?: string
  cancelText?: string
  onOk?: (values: any, destroy: () => void) => void
  onCancel?: (destroy: () => void) => void
  form?: React.ReactNode
  initialValues?: { [key in string]: any }
  formApi?: FormInstance
  width?: number
}
