import { Form } from "antd"
import { FC } from "react"
import { createRoot } from "react-dom/client"

/** props需要包含destroy时 */
export interface ComponentT {
  destroy: () => void
}
export interface FuncType {
  Component: FC<any>
  props?: any
}
/** 手动挂载销毁组件 */
export const showComponents = function ({ Component, props }: FuncType) {
  // 创建元素+挂载组件
  const div = document.createElement("div")
  document.body.appendChild(div)
  const root = createRoot(div)
  function render() {
    root.render(<Component {...props} destroy={destroy} />)
  }
  // 卸载组件+销毁元素
  function destroy() {
    root.unmount()
    if (div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
  render()
  return destroy
}

export const FormItem = Form.Item
