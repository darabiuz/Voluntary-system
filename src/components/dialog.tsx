/** 设计一个弹窗面板
 * 专门设置给表单模式的
 * 1. 点击右上角可以关闭
 * 2. 点击确认/取消，执行onsuccess，onCancle回调，
 * 3. 点击
 */
import React, { useEffect, useState } from "react"
import { Modal } from "antd"
import { ExclamationCircleFilled } from "@ant-design/icons"

const form = function () {
  //   const [isModalOpen, setIsModalOpen] = useState(false)
  //   const showModal = () => {
  //     setIsModalOpen(true)
  //   }
  //   const handleOk = () => {
  //     setIsModalOpen(false)
  //   }

  //   const handleCancel = () => {
  //     setIsModalOpen(false)
  //   }

  Modal.info({
    title: "Are you sure delete this task?",
    // icon: <ExclamationCircleFilled />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK")
    },
    onCancel() {
      console.log("Cancel")
    }
  })

  //   const ModalLog = function () {
  //     return (
  //       <Modal
  //         title="Basic Modal"
  //         open={isModalOpen}
  //         onOk={handleOk}
  //         onCancel={handleCancel}
  //       >
  //         <p>Some contents...</p>
  //         <p>Some contents...</p>
  //         <p>Some contents...</p>
  //       </Modal>
  //     )
  //   }
  //   useEffect(() => {}, [])
  //   return ModalLog
}

export const dialog = {
  form: form
}
