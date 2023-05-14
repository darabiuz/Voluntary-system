import React from "react"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
import MbtiRecommendCard from "./components/mbti-recommend"
import SchoolRecommendCard from "./components/school-recommed"

const VolunteerPrediction: React.FC = () => {
  return (
    <EasyWrapper>
      <BlockTitle content="智能预测填报" />
      {/* <MbtiRecommendCard /> */}
      <SchoolRecommendCard />
    </EasyWrapper>
  )
}

export default VolunteerPrediction
