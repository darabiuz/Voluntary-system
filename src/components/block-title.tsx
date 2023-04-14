import React from "react"
import { Typography } from "antd"
const { Title } = Typography

const BlockTitle = ({ content }: { content: React.ReactNode }) => (
  <Title
    level={2}
    style={{
      marginTop: "10px"
    }}
  >
    {content}
  </Title>
)
export default BlockTitle
