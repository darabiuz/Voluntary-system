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
  // 创建一个新的 div 元素并将其添加到页面中
  const div = document.createElement("div")
  document.body.appendChild(div)
  // 使用 createRoot 和render函数挂载组件 A 到新创建的 div 元素上
  const root = createRoot(div)
  render()
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
  return { destroy }
}
