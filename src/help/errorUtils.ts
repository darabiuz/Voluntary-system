// errorHandle.js
import { message } from "antd"

/**
 * 使用友好的错误消息替换技术性的错误消息,使得用户更好理解
 * 根据错误类型采取不同的操作
 */
export const errorHandle = (error: any, msg?: string) => {
  console.error(error)
  if (error.response) {
    // 服务器返回了一个错误状态码
    switch (error.response.status) {
      case 400:
        message.error("请求无效，请检查您的输入。")
        break
      case 401:
        message.error("未经授权，请登录。")
        break
      case 403:
        message.error("您没有权限执行此操作。")
        break
      case 404:
        message.error("请求的资源未找到。")
        break
      case 500:
        message.error("服务器内部错误。")
        break
      default:
        message.error("发生错误，请稍后重试。")
    }
  } else if (error.request) {
    // 请求已发出，但未收到响应
    message.error("网络错误，请检查您的网络连接。")
  } else {
    // 发生其他错误
    message.error(msg || "发生错误，请稍后重试。")
  }
}
