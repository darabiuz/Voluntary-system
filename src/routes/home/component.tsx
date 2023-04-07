import React from "react"
import { Col, Typography, Button, Row } from "antd"
const { Title } = Typography

interface GuideItemType {
  title: string
  description: string
  buttonText: string
}

/** 首页用户提示card */
export const GuideCard: React.FC<{
  guideList: GuideItemType[]
}> = (props) => {
  const { guideList } = props
  return (
    <Row gutter={16}>
      {guideList?.map((item) => {
        return (
          <Col span={6} key={item.title}>
            <Title level={4}>{item?.title}</Title>
            <p>{item?.description}</p>
            <Button type="primary">{item?.buttonText}</Button>
          </Col>
        )
      })}
    </Row>
  )
}
