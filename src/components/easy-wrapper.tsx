import React, { Children } from "react"
import { Typography } from "antd"
const { Title } = Typography

const EasyWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "0 50px" }}>{children}</div>
)
export default EasyWrapper
