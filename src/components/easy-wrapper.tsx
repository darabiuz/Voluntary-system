import React, { Children } from "react"
import { Typography } from "antd"
const { Title } = Typography

const EasyWrapper = ({ children }: { children: React.ReactNode }) => (
  //todo:反正每个页面都要包裹easywrapper
  // 这里可以在useEffect，加一个统一的localstorage判断，判断用户是否登录，否则不准进入。
  <div style={{ padding: "0 50px" }}>{children}</div>
)
export default EasyWrapper
