// src/components/VolunteerForm.tsx
import React from "react"
import SchoolList from "./components/school-list"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"

const Wishlist: React.FC = () => {
  return (
    <EasyWrapper>
      <BlockTitle content="我的志愿簿" />
      <SchoolList />
    </EasyWrapper>
  )
}

export default Wishlist
